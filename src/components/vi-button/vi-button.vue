<template>
  <button @click="onClick" class="vi-button" :style="computedStyle" :class="computedClasses">
    <span class="vi-button__content"><slot></slot></span>
  </button>
</template>

<script>
  import ViIcon from '../vi-icon'
  export default {
    name: 'vi-button',
    components: {
      ViIcon
    },
    props: {
      color: String,
      outline: Boolean,
      text: Boolean,
      icon: Boolean,
      round: Boolean,
      raise: Boolean,
      float: Boolean,
      disabled: Boolean,
      loading: Boolean,
      flat: Boolean,
      lowercase: Boolean,
      large: Boolean,
      small: Boolean,
      minWidth: String,
      size: [String, Number],
      primary: Boolean,
      active: Boolean
    },
    computed: {
      _color () {
        return this.primary ? 'brand-gradient' : this.color
      },
      _float () {
        return this.primary ? true : this.float
      },
      computedClasses () {
        return {
          'vi-button--outline': this.outline,
          'vi-button--text': this.text,
          'vi-button--fill': (!this.text && !this.outline && this.color && !this.flat) || this.primary,
          'vi-button--flat': this.flat,
          'vi-button--round': this.round,
          'vi-button--raise': this.raise,
          'vi-button--float': this._float,
          'vi-button--disabled': this.disabled,
          'vi-button--active': this.active,
          'vi-button--lowercase': this.lowercase,
          'vi-button--large': this.large,
          'vi-button--small': this.small,
          'vi-button--icon': this.icon,
          ['vi-button--' + this._color]: !!this._color,
        }
      },
      computedStyle () {
        const style = {
          'width': `${this.size}px`,
          'min-width': `${this.minWidth}px`
        }
        if (this.icon) style.height = `${this.size}px`
        return style
      }
    },
    methods: {
      onClick () {
        if (this.disabled) return
        this.$emit('click')
      }
    }
  }
</script>
