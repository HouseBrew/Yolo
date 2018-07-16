export default {
  methods: {
    genTimepicker (props) {
      return this.$createElement('timepicker', {
        props: props,
        on: {
          confirm: (e) => {
            this.displayValue = e.HH + ':' + e.mm
          },
          change: (e) => {
            this.onChangeValue = e.HH + ':' + e.mm
          }
        }
      })
    },
    genActivator (time, placeholder) {
      const children = []
      const input = this.$createElement('input', {
        ref: 'input',
        staticClass: 'vi-input__inner',
        domProps: {
          value: time,
          placeholder: placeholder,
        },
        attrs: {
          readonly: true
        }
      })
      children.push(input)
      const suffixIcon = this.$createElement('vi-icon', {
        props: {
          name: 'down',
          size: '10',
          flipY: this.isToggled
        }
      })
      children.push(suffixIcon)

      return this.$createElement('div', {
          staticClass: 'vi-input', // get the same font-size, width abd height from vi-input
          class: {
            'vi-input--disabled': this.disabled,
            'vi-input--error': this.error,
            'vi-input--darker': this.darker
          },
          slot: 'activator',
        }, children
      )
    },
    genSlot (slot) {
      return this.$createElement('div', {
          slot: 'activator'
        }, slot
      )
    }
  }
}
