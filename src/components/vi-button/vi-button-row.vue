<template functional>
  <div class="vi-button-row" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vi-button-row',

    data () {
      return {
        alignCenter: false
      }
    },

    props: {
      // Deprecated: automatically detect one button and align center
      center: false
    },

    computed: {
      classes () {
        return {
          'vi-button-row--center': this.center || this.alignCenter
        }
      }
    },

    methods: {
      checkIsAlignCenter () {
        this.alignCenter = this.$children.length === 1
      }
    },

    mounted () {
      this.checkIsAlignCenter()
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'
  .vi-button-row
    display flex
    width 100%
    justify-content space-between

    .vi-button
      &:not(:first-child)
        margin-left 20px

    &--center
      justify-content center
</style>
