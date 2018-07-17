<template>
  <div class="vi-avatar"
       :style="styles">
    <div class="vi-avatar__img"
         v-if="src"
         :style="innerImageStyle"></div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vi-avatar',

    props: {
      size: {
        default: 50
      },
      border: {
        default: true
      },
      src: ''
    },

    computed: {

      styles () {
        return {
          'width': `${this.size}px`,
          'height': `${this.size}px`
        }
      },

      innerImageStyle () {
        if (!this.src) return
        const styles = {
          'background-image': `url(${this.src})`
        }
        if (this.border) {
          const borderWidth = typeof this.border === 'number' ? this.border : 1
          styles.border = `${borderWidth}px solid #adadad`
        }
        return styles
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'
  .vi-avatar
    align-items: center
    border-radius: 50%
    display: inline-flex
    justify-content: center
    position: relative
    text-align: center
    vertical-align: middle

    img,
    .vi-avatar__img,
    .vi-icon
      border-radius: 50%
      height: inherit
      width: inherit
      background-size cover

</style>
