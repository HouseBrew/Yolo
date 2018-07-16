import Timepicker from '../timepicker'
import timepickerGenerator from './timepicker-generator';

export default {
  name: 'vi-timepicker',
  mixins: [timepickerGenerator],
  components: {
    Timepicker
  },
  props: {
    value: {type: String},
    inline: Boolean, // for inline timepicker, no triggering box'
    placeholder: String,
    offsetX: {
      type: Boolean,
      default: false
    },
    offsetY: {
      type: Boolean,
      default: true
    },
    nudgeBottom: {
      type: [Number, String],
      default: 10
    },
    nudgeRight: {
      type: [Number, String],
      default: 0
    },
    error: Boolean,
    disabled: Boolean,
    darker: Boolean,
    reset: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      onChangeValue: null, // from timepicker to vi-timepicker (when user scroll around the values) mainly for inline use
      displayValue: null, // from timepicker to vi-timepicker
      isToggled: false // flag to flip the caret
    }
  },
  watch: {
    displayValue: function() {
      this.$emit('input', this.displayValue)
    },
    onChangeValue: function() {
      this.$emit('change', this.onChangeValue)
    }
  },
  render (h) {
    if (this.inline) {
      return h('div', {
        style: {
          width: '214px'
        }
      }, [this.genTimepicker(this.$props)])
    } else {
      const children = []
      let activator
      if (this.$scopedSlots.activator) {
        const scopedSlot = this.$scopedSlots.activator({
          time: this.value,
          placeholder: this.placeholder
        })
        activator = this.genSlot([scopedSlot])
      } else {
        activator = this.genActivator(this.value, this.placeholder)
      }
      children.push(activator)
      children.push(this.genTimepicker(this.$props))
      return h('vi-menu', {
        props: {
          nudgeRight: this.nudgeRight,
          nudgeBottom: this.nudgeBottom,
          offsetY: this.offsetY,
          offsetX: this.offsetX,
          contentClass: 'timepicker-menu',
          disabled: this.disabled
        },
        on: {
          input: () => {
            this.isToggled = !this.isToggled
            this.$props.isToggled = this.isToggled
          }
        }
      }, children)
    }
  }
}
