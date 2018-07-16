<template>
  <div class="time-picker">

    <div class="select-list">

      <!-- hour -->
      <div class="select-list__col" ref="container">

        <div class="select-list__col__guide"></div>

        <ul ref="hourContainer" class="select-list__col__options option-list">
          <li ref="hour"></li>
          <li v-for="hr in hours" v-text="hr" class="non-empty-li" :class="{active: hour === hr}" @click.stop="select('hour', hr)"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <!-- the colon -->
      <div class="select-list__colon">:</div>

      <!-- minute -->
      <div class="select-list__col">

        <div class="select-list__col__guide"></div>

        <ul ref="minuteContainer" class="option-list">
          <li ref="minute"></li>
          <li v-for="m in minutes" :ref="m" v-text="m" class="non-empty-li" :class="{active: minute === m}" @click.stop="select('minute', m)"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <ul class="option-list seconds" v-if="secondType">
        <li v-for="s in seconds" v-text="s" :class="{active: second === s}" @click.stop="select('second', s)"></li>
      </ul>
      <ul class="option-list apms" v-if="apmType">
        <li v-for="a in apms" v-text="a" :class="{active: apm === a}" @click.stop="select('apm', a)"></li>
      </ul>
    </div>

    <vi-button v-if="!inline" class="confirm-button" @click.native="onConfirm" primary>ok</vi-button>
  </div>
</template>

<script>
const CONFIG = {
  HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
  MINUTE_TOKENS: ['mm', 'm'],
  SECOND_TOKENS: ['ss', 's'],
  APM_TOKENS: ['A', 'a']
}

export default {
  name: 'Timepicker',

  props: {
    value: {type: String},
    hideClearButton: {type: Boolean},
    format: {type: String},
    minuteInterval: {type: Number},
    secondInterval: {type: Number},
    id: {type: String},
    reset: {type: Boolean},
    inline: Boolean, // for inline timepicker, no triggering box
    isToggled: Boolean
  },

  data () {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      apms: [],
      showDropdown: false,
      muteWatch: false,
      hourType: 'HH',
      minuteType: 'mm',
      secondType: '',
      apmType: '',
      hour: '',
      minute: '',
      second: '',
      apm: '',
      fullValues: undefined,
      unitHeight: 44
    }
  },

  computed: {
    displayTime () {
      let formatString = String((this.format || 'HH:mm'))
      if (this.hour) {
        formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour)
      }
      if (this.minute) {
        formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute)
      }
      if (this.second && this.secondType) {
        formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second)
      }
      if (this.apm && this.apmType) {
        formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm)
      }
      return formatString
    },
    showClearBtn () {
      if ((this.hour && this.hour !== '') || (this.minute && this.minute !== '')) {
        return true
      }
      return false
    }
  },

  watch: {
    'format': 'renderFormat',
    minuteInterval (newInteval) {
      this.renderList('minute', newInteval)
    },
    secondInterval (newInteval) {
      this.renderList('second', newInteval)
    },
    'value': 'readValues',
    'displayTime': 'fillValues',
    reset (isReset) {
      if (isReset) {
        // it would be useful when inline as isToggled is not working inline
        setTimeout(() => {
          this.resetHourPosition(this.value)
          this.resetMinutePosition(this.value)
        }, 100)
        this.addScrollListeners()
      } else {
        this.removeScrollListeners()
      }
    },
    isToggled (v) {
      if (v && this.reset) {
        setTimeout(() => {
          let resetValue = '00:00'
          if (this.value) {
            resetValue = this.value
          }
          this.resetHourPosition(resetValue)
          this.resetMinutePosition(resetValue)
        }, 100)
      }
    }
  },

  methods: {
    onConfirm () {
      this.$emit('confirm', this.fullValues)
    },
    formatValue (type, i) {
      switch (type) {
        case 'H':
        case 'm':
        case 's':
          return String(i)
        case 'HH':
        case 'mm':
        case 'ss':
          return i < 10 ? `0${i}` : String(i)
        case 'h':
        case 'k':
          return String(i + 1)
        case 'hh':
        case 'kk':
          return (i + 1) < 10 ? `0${i + 1}` : String(i + 1)
        default:
          return ''
      }
    },

    checkAcceptingType (validValues, formatString, fallbackValue) {
      if (!validValues || !formatString || !formatString.length) { return '' }
      for (let i = 0; i < validValues.length; i++) {
        if (formatString.indexOf(validValues[i]) > -1) {
          return validValues[i]
        }
      }
      return fallbackValue || ''
    },

    renderFormat (newFormat) {
      newFormat = newFormat || this.format
      if (!newFormat || !newFormat.length) {
        newFormat = 'HH:mm'
      }

      this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH')
      this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm')
      this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat)
      this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat)

      this.renderHoursList()
      this.renderList('minute')

      if (this.secondType) {
        this.renderList('second')
      }

      if (this.apmType) {
        this.renderApmList()
      }

      const self = this
      this.$nextTick(() => {
        self.readValues()
      })
    },

    renderHoursList () {
      const hoursCount = (this.hourType === 'h' || this.hourType === 'hh') ? 12 : 24
      this.hours = []
      for (let i = 0; i < hoursCount; i++) {
        this.hours.push(this.formatValue(this.hourType, i))
      }
    },

    renderList (listType, interval) {
      if (listType === 'second') {
        interval = interval || this.secondInterval
      } else if (listType === 'minute') {
        interval = interval || this.minuteInterval
      } else {
        return
      }

      if (interval === 0) {
        interval = 60
      } else if (interval > 60) {
        window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval)
        interval = 1
      } else if (interval < 1) {
        window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval)
        interval = 1
      } else if (!interval) {
        interval = 1
      }

      if (listType === 'minute') {
        this.minutes = []
      } else {
        this.seconds = []
      }

      for (let i = 0; i < 60; i += interval) {
        if (listType === 'minute') {
          this.minutes.push(this.formatValue(this.minuteType, i))
        } else {
          this.seconds.push(this.formatValue(this.secondType, i))
        }
      }
    },

    renderApmList () {
      this.apms = []
      if (!this.apmType) { return }
      this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm']
    },

    readValues () {
      if (!this.value || this.muteWatch) { return }

      const timeValue = JSON.parse(JSON.stringify(this.value || {}))

      const values = Object.keys(timeValue)
      if (values.length === 0) { return }

      if (values.indexOf(this.hourType) > -1) {
        this.hour = timeValue[this.hourType]
      }

      if (values.indexOf(this.minuteType) > -1) {
        this.minute = timeValue[this.minuteType]
      }

      if (values.indexOf(this.secondType) > -1) {
        this.second = timeValue[this.secondType]
      } else {
        this.second = 0
      }

      if (values.indexOf(this.apmType) > -1) {
        this.apm = timeValue[this.apmType]
      }

      this.fillValues()
    },

    fillValues () {
      let fullValues = {}

      const baseHour = this.hour
      const baseHourType = this.hourType

      const hourValue = baseHour || baseHour === 0 ? Number(baseHour) : ''
      const baseOnTwelveHours = this.isTwelveHours(baseHourType)
      const apmValue = (baseOnTwelveHours && this.apm) ? String(this.apm).toLowerCase() : false

      CONFIG.HOUR_TOKENS.forEach((token) => {
        if (token === baseHourType) {
          fullValues[token] = baseHour
          return
        }

        let value
        let apm
        switch (token) {
          case 'H':
          case 'HH':
            if (!String(hourValue).length) {
              fullValues[token] = ''
              return
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue
              } else {
                value = hourValue % 12
              }
            } else {
              value = hourValue % 24
            }
            fullValues[token] = (token === 'HH' && value < 10) ? `0${value}` : String(value)
            break
          case 'k':
          case 'kk':
            if (!String(hourValue).length) {
              fullValues[token] = ''
              return
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue
              } else {
                value = hourValue === 12 ? 24 : hourValue
              }
            } else {
              value = hourValue === 0 ? 24 : hourValue
            }
            fullValues[token] = (token === 'kk' && value < 10) ? `0${value}` : String(value)
            break
          case 'h':
          case 'hh':
            if (apmValue) {
              value = hourValue
              apm = apmValue || 'am'
            } else {
              if (!String(hourValue).length) {
                fullValues[token] = ''
                fullValues.a = ''
                fullValues.A = ''
                return
              } else if (hourValue > 11) {
                apm = 'pm'
                value = hourValue === 12 ? 12 : hourValue % 12
              } else {
                if (baseOnTwelveHours) {
                  apm = ''
                } else {
                  apm = 'am'
                }
                value = hourValue % 12 === 0 ? 12 : hourValue
              }
            }
            fullValues[token] = (token === 'hh' && value < 10) ? `0${value}` : String(value)
            fullValues.a = apm
            fullValues.A = apm.toUpperCase()
            break
        }
      })

      if (this.minute || this.minute === 0) {
        const minuteValue = Number(this.minute)
        fullValues.m = String(minuteValue)
        fullValues.mm = minuteValue < 10 ? `0${minuteValue}` : String(minuteValue)
      } else {
        fullValues.m = ''
        fullValues.mm = ''
      }

      if (this.second || this.second === 0) {
        const secondValue = Number(this.second)
        fullValues.s = String(secondValue)
        fullValues.ss = secondValue < 10 ? `0${secondValue}` : String(secondValue)
      } else {
        fullValues.s = ''
        fullValues.ss = ''
      }

      this.fullValues = fullValues
      this.updateTimeValue(fullValues)
      this.$emit('change', this.fullValues)
    },

    updateTimeValue (fullValues) {
      this.muteWatch = true

      const self = this

      const baseTimeValue = JSON.parse(JSON.stringify(this.value || {}))
      let timeValue = {}

      Object.keys(baseTimeValue).forEach((key) => {
        timeValue[key] = fullValues[key]
      })

      this.$emit('input', timeValue)

      this.$nextTick(() => {
        self.muteWatch = false
      })
    },

    isTwelveHours (token) {
      return token === 'h' || token === 'hh'
    },

    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },

    select (type, value) {

      if (type === 'hour') {
        this.hour = value
      } else if (type === 'minute') {
        this.minute = value
      } else if (type === 'second') {
        this.second = value
      } else if (type === 'apm') {
        this.apm = value
      }

      this.$refs.hourContainer.scrollTop = parseInt(this.hour) * this.unitHeight
      this.$refs.minuteContainer.scrollTop = parseInt(this.minute) * this.unitHeight
    },

    clearTime () {
      this.hour = ''
      this.minute = ''
      this.second = ''
      this.apm = ''
    },

    hourOnScroll () {
      const diff = Math.floor((this.$refs.container.getBoundingClientRect().top - this.$refs.hour.getBoundingClientRect().top + this.unitHeight / 2) / this.unitHeight)
      this.hour = diff >= 10 ? '' + diff : '0' + diff
    },

    minuteOnScroll () {
      const diff = Math.floor((this.$refs.container.getBoundingClientRect().top - this.$refs.minute.getBoundingClientRect().top + this.unitHeight / 2) / this.unitHeight)
      this.minute = diff >= 10 ? '' + diff : '0' + diff
    },

    resetHourPosition (value) {
      this.$refs.hourContainer.scrollTop = parseInt(value.split(':')[0]) * this.unitHeight
      this.hour = value.split(':')[0]
    },

    resetMinutePosition (value) {
      this.$refs.minuteContainer.scrollTop = parseInt(value.split(':')[1]) * this.unitHeight
      this.minute = value.split(':')[1]
    },

    addScrollListeners () {
      const _this = this
      setTimeout(() => {
        _this.$refs.hourContainer.addEventListener('scroll', this.hourOnScroll)
        _this.$refs.minuteContainer.addEventListener('scroll', this.minuteOnScroll)
      }, 400)
    },

    removeScrollListeners () {
      this.$refs.hourContainer.removeEventListener('scroll', this.hourOnScroll)
      this.$refs.minuteContainer.removeEventListener('scroll', this.minuteOnScroll)
    }
  },

  mounted () {
    this.renderFormat()
    this.addScrollListeners()
    this.hourOnScroll() // to get the initial value
    this.minuteOnScroll() // to get the initial value
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'

  .timepicker-menu // non-scoped
    max-height unset !important
    padding-bottom 0 !important
    width 214px

  .time-picker
    display inline-block
    position relative
    font-size 20px
    width 10em
    vertical-align middle

    .select-list
      max-height 256px
    
    .confirm-button
      width 100%
      border-radius 0

  .time-picker * {
    box-sizing border-box
  }

  .time-picker input.display-time
    border 1px solid #d2d2d2
    width 10em
    height 2.2em
    padding 0.3em 0.5em
    font-size 1em
    display none

  .time-picker
    background #fff
    width 100%
    font-weight normal

  .time-picker .select-list
    width 100%
    height 280px
    overflow hidden
    display flex
    flex-flow row nowrap
    align-items stretch
    justify-content space-between
    position relative

    &__col
      position relative
      padding 0
      margin 0
      list-style none
      overflow-x hidden
      overflow-y hidden
      height 100%
      width 100px

      &__guide
        position absolute
        left 32px
        top 40px
        height 44px
        width 40px
        border-top 1px solid #ff6338
        border-bottom 1px solid #ff6338
        pointer-events none
        z-index 0

      &__options
        position relative
        z-index 10

    &__colon
      position absolute
      top 84px
      left 50%
      font-size 20px
      color #ff6338
      margin-top -1em
      margin-left -5px

  .time-picker .option-list
    padding 0
    margin 0
    list-style none
    overflow-x hidden
    overflow-y scroll
    height 100%
    flex 1

    li
      text-align center
      height 44px
      width 100px
      display flex
      align-items center
      justify-content center
      color #39312f
      cursor pointer
      font-size 14px
      &.non-empty-li:hover
        background-color $grey-2

      &:first-child
        height 40px

      &.active
        color #ff6338
        font-size 20px
        font-weight 600
</style>