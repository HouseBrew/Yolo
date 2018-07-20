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
