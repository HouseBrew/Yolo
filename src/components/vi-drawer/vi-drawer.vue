<template>
  <transition name="slide-x-transition">
    <div v-show="isActive" class="vi-drawer">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Overlayable from '../../mixins/overlayable'
  export default {
    name: 'vi-drawer',

    mixins: [Overlayable],

    data () {
      return {
        isActive: this.value
      }
    },

    props: {
      value: {
        required: false
      }
    },

    watch: {
      isActive (val) {
        this.$emit('input', val)
        val ? this.genOverlay() : this.removeOverlay()
        this.$el.scrollTop = 0
      },
      value (val) {
        if (val !== this.isActive) this.isActive = val
      },
      $route () {
        this.isActive = false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'

  .vi-drawer
    max-width: 100%
    overflow-y: auto
    overflow-x: hidden
    -webkit-overflow-scrolling: touch
    padding: 0 0 100px
    pointer-events: auto
    position: fixed
    transition: .3s $transition
    width: 300px
    top: 0
    left: 0
    bottom 0
    will-change: transform
    z-index: 5
    background white
</style>
