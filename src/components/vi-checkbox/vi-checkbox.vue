<template>
  <div class="vi-checkbox" :class="containerClass">
    <div @click="toggleCheck" class="vi-checkbox__iconContainer">
      <vi-icon class="vi-checkbox__icon" :class="classes" :name="iconName" :size="size"/>
    </div>
    <div @click="toggleCheck" class="vi-checkbox__label" :class="textClasses">
      <slot>
        {{label}}
      </slot>
    </div>
  </div>
</template>

<script>
  import {consoleWarn} from '../../util/console'
  export default {
    name: 'vi-checkbox',
    model: {
      event: 'input',
      prop: 'inputValue'
    },
    props: {
      size: {
        type: Number | String,
        default: '22'
      },
      swapIcon: Boolean, // for radio checkbox when it accepts a boolean v-model
      label: String,
      optionValue: Object | String,
      inputValue: Array | String | Boolean,
      maxSelected: Number,
      brandLabel: Boolean,
      orderList: Array,
      inlineFlex: Boolean // property for changing the vi-checkbox display: inline-flex
    },
    computed: {
      isMultipleMode () {
        return this.inputValue instanceof Array
      },
      classes() {
        if (typeof(this.inputValue) == 'boolean') { // when v-model is boolean, option value is not needed.
          return {
            "vi-checkbox--checked": this.inputValue,
            "vi-checkbox--empty": !this.inputValue
          }
        } else if (typeof(this.optionValue) == 'string') {
          return {
            "vi-checkbox--disabled": ((this.inputValue.length >= this.maxSelected) && !this.inputValue.includes(this.optionValue) && this.isMultipleMode),
            "vi-checkbox-swap--disabled": ((this.inputValue.length >= this.maxSelected) && !this.inputValue != this.optionValue && !(this.isMultipleMode)),
            "vi-checkbox--checked": this.inputValue.includes(this.optionValue),
            "vi-checkbox--empty": !this.inputValue.includes(this.optionValue),
          }
        } else { // when option is an object, it should have an unique key

          return {
            "vi-checkbox--disabled": ((this.inputValue.length >= this.maxSelected) && (this.inputValue.filter((e) => e.key === this.optionValue.key).length == 0) && this.isMultipleMode),
            "vi-checkbox-swap--disabled": ((this.inputValue.length >= this.maxSelected) && !(this.inputValue.key != this.optionValue.key) && !(this.isMultipleMode)),
            "vi-checkbox--checked": this.inputValue.filter((e) => e.key === this.optionValue.key).length > 0,
            "vi-checkbox--empty": this.inputValue.filter((e) => e.key === this.optionValue.key).length == 0,
          }

        }
      },
      containerClass () {
        return {
          "vi-checkbox__inlineflex": this.inlineFlex,
          "vi-checkbox--disabled": this.inputValue.length >= this.maxSelected && !this.inputValue.includes(this.optionValue) && this.isMultipleMode,
        }
      },
      iconName() {
        if (typeof(this.inputValue) == 'boolean') { // when v-model is boolean, option value is not needed.
          if (this.inputValue) {
            return "checkbox-checked"
          } else if (this.swapIcon) {
            return "checkbox-swap"
          } else {
            return "checkbox-empty"
          }
        } else if (typeof(this.optionValue) == 'string') {
          if (this.inputValue.includes(this.optionValue)) {
            return "checkbox-checked"
          }
          if (this.inputValue != this.optionValue && this.inputValue.length > 0 && !(this.isMultipleMode)) {
            return "checkbox-swap"
          }
          if (!this.inputValue.includes(this.optionValue)) {
            return "checkbox-empty"
          }
        } else { // when option is an object, it should have an unique key
          if (this.inputValue.filter((e) => e.key === this.optionValue.key).length > 0) {
            return "checkbox-checked"
          }
          if (this.inputValue.key != this.optionValue.key && (this.inputValue.length != {}) && !(this.isMultipleMode)) {
            return "checkbox-swap"
          }
          if (this.inputValue.filter((e) => e.key === this.optionValue.key).length == 0) {
            return "checkbox-empty"
          }
        }
      },
      textClasses() {
        if (typeof(this.inputValue) == 'boolean') { // when v-model is boolean, option value is not needed.
          return {
            "vi-checkbox__text--brandLabel": this.inputValue && this.brandLabel,
          }
        } else if (typeof(this.optionValue) == 'string') {
          return {
            "vi-checkbox__text--brandLabel": this.inputValue.includes(this.optionValue) && this.brandLabel,
          }
        } else { // when option is an object, it should have an unique key
          return {
            "vi-checkbox__text--brandLabel": this.inputValue.filter((e) => e.key === this.optionValue.key).length > 0 && this.brandLabel,
          }
        }
      }
    },
    created() {
      if (this.swapIcon && typeof(this.inputValue) !== 'boolean') {
        consoleWarn("Property 'swapIcon' should be used together with boolean-type v-model", this)
      }
    },
    methods: {
      toggleCheck() {
        if (!(this.isMultipleMode)) {

          if (typeof(this.inputValue) == 'boolean') { // when v-model is boolean, option value is not needed.
            this.$emit('input', !this.inputValue)
          } else if (typeof(this.optionValue) == 'string') {
            let input = [].concat(this.inputValue) // no mutation
            if (input.includes(this.optionValue)) {
              input = ""
            } else {
              input = this.optionValue
            }
            this.$emit('input', input)

          } else { // when option is an object, it should have an unique key

            let input = [].concat(this.inputValue) // no mutation
            if (input.filter((e) => e.key === this.optionValue.key).length > 0) {
              input = {}
            } else {
              input = this.optionValue
            }
              this.$emit('input', input)
          }
        }

        if (this.isMultipleMode) {

          if (typeof(this.optionValue) == 'string') {

            let input = [].concat(this.inputValue) // no mutation
            if (input.includes(this.optionValue)) {
              input.splice(input.indexOf(this.optionValue), 1)
            } else {
              input.push(this.optionValue)
            }
            if (this.orderList) {
              input.sort((a,b) => {return this.orderList.map((e) => { return e.uuid ? e.uuid:''}).indexOf(a) - this.orderList.map((e) => { return e.uuid ? e.uuid:'' }).indexOf(b);})
            }
            this.$emit('input', input)

          } else { // when option is an object, it should have an unique key

            let input = [].concat(this.inputValue) // no mutation
            if (input.filter((e) => e.key === this.optionValue.key).length > 0) {
              const index = input.findIndex((e) => e.key == this.optionValue.key)
              input.splice(index, 1)
            } else {
              input.push(this.optionValue)
            }
            if (this.orderList) {
              input.sort((a,b) => {return this.orderList.map((e) => { return e.key ? e.key:''}).indexOf(a) - this.orderList.map((e) => { return e.key ? e.key:'' }).indexOf(b);})
            }
            this.$emit('input', input)

          }
        }

      }
    }
  }
  </script>

<style lang="stylus">
@import '../../stylus/main.styl'

.vi-checkbox
  display flex
  align-items center

  &__inlineflex
    display inline-flex
    margin-right 10px

.vi-checkbox__icon
  display block !important
  margin auto

.vi-checkbox__icon.vi-checkbox--empty
  color $light-grey

.vi-checkbox__icon.vi-checkbox--checked
  color $brand

.vi-checkbox__iconContainer
  display inline
  cursor pointer

.vi-checkbox__label
  display inline
  margin-left 10px
  cursor pointer

.vi-checkbox--disabled
  pointer-events none
  color #e5e5e5 !important

.vi-checkbox-swap--disabled
  color $light-grey

.vi-checkbox__text--brandLabel
  color $brand
</style>
