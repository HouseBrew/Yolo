// import '../../stylus/components/_dialog.styl'

// Mixins
// import Dependent from '../../mixins/dependent'
import Detachable from '../../mixins/detachable'
import Overlayable from '../../mixins/overlayable'
// import Returnable from '../../mixins/returnable'
// import Stackable from '../../mixins/stackable'
import Toggleable from '../../mixins/toggleable'

// Directives
import ClickOutside from '../../directives/click-outside'

// Helpers
// import { getZIndex } from '../../util/helpers'

export default {
  name: 'vi-dialog',

  mixins: [
    Detachable,
    Overlayable,
    Toggleable
  ],

  directives: {
    ClickOutside
  },

  data () {
    return {
      isDependent: false,
      stackClass: 'v-dialog__content__active',
      stackMinZIndex: 200,
      activeZIndex: 200 // TODO hardcoded value
    }
  },

  props: {
    zIndex: [String, Number],
    zIndexOverlay: [String, Number],
    disabled: Boolean,
    persistent: Boolean,
    fullscreen: Boolean,
    fullWidth: Boolean,
    maxWidth: {
      type: [String, Number],
      default: 'none'
    },
    origin: {
      type: String,
      default: 'center center'
    },
    width: {
      type: [String, Number],
      default: 'auto'
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    }
  },

  computed: {
    classes () {
      return {
        [(`v-dialog ${this.contentClass}`).trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable
      }
    },
    contentClasses () {
      return {
        'v-dialog__content': true,
        'v-dialog__content__active': this.isActive
      }
    }
  },

  watch: {
    isActive (val) {
      if (val) {
        this.show()
      } else {
        this.removeOverlay()
        this.unbind()
      }
    }
  },

  mounted () {
    // TODO lazy content
    // this.isBooted = this.isActive
    this.isActive && this.show()
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') this.unbind()
  },

  methods: {
    closeConditional (e) {
      // close dialog if !persistent, clicked outside and we're the topmost dialog.
      // Since this should only be called in a capture event (bottom up), we shouldn't need to stop propagation
      return this.isActive && !this.persistent && !this.$refs.content.contains(e.target)
      // TODO z-index
      // return this.isActive && !this.persistent &&
      //   getZIndex(this.$refs.content) >= this.getMaxZIndex() &&
      //   !this.$refs.content.contains(e.target)
    },
    show () {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(this.zIndexOverlay)
      this.fullscreen && this.hideScroll()
      this.$refs.content.focus()
      this.$listeners.keydown && this.bind()
    },
    bind () {
      window.addEventListener('keydown', this.onKeydown)
    },
    unbind () {
      window.removeEventListener('keydown', this.onKeydown)
    },
    onKeydown (e) {
      this.$emit('keydown', e)
    }
  },

  render (h) {
    const children = []
    const data = {
      'class': this.classes,
      ref: 'dialog',
      directives: [
        {
          name: 'click-outside',
          value: () => {
            // TODO is this needed? turn this on will instancely close the dialog
            // this.isActive = false
          },
          args: {
            closeConditional: this.closeConditional
          }
        },
        { name: 'show', value: this.isActive }
      ],
      on: {
        click: e => { e.stopPropagation() }
      }
    }

    if (!this.fullscreen) {
      data.style = {
        maxWidth: this.maxWidth === 'none' ? undefined : (isNaN(this.maxWidth) ? this.maxWidth : `${this.maxWidth}px`),
        width: this.width === 'auto' ? undefined : (isNaN(this.width) ? this.width : `${this.width}px`)
      }
    }

    if (this.$slots.activator) {
      children.push(h('div', {
        'class': 'v-dialog__activator',
        on: {
          click: e => {
            e.stopPropagation()
            if (!this.disabled) this.isActive = !this.isActive
          }
        }
      }, [this.$slots.activator]))
    }

    const dialog = h('transition', {
      props: {
        name: this.transition || '', // If false, show nothing
        origin: this.origin
      }
    }, [h('div', data,
      // this.showLazyContent(this.$slots.default) // TODO still dont understand this
      this.$slots.default
    )])

    children.push(h('div', {
      'class': this.contentClasses,
      domProps: { tabIndex: -1 },
      style: { zIndex: this.zIndex || this.activeZIndex },
      ref: 'content'
    }, [dialog]))

    return h('div', {
      staticClass: 'v-dialog__container',
      style: {
        display: (!this.$slots.activator || this.fullWidth) ? 'block' : 'inline-block'
      }
    }, children)
  }
}
