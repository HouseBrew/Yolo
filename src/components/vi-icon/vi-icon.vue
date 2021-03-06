<!--
  The component is copied from: https://github.com/Justineo/vue-awesome
  and we change all fa- prefix to vi- prefix
-->
<template>
  <svg version="1.1"
       :class="klass"
       :role="label ? 'img' : 'presentation'"
       :aria-label="label"
       :x="x"
       :y="y"
       :width="width"
       :height="height"
       :viewBox="box"
       :style="style">
    <slot>
      <template v-if="icon && icon.paths">
        <path v-for="(path, i) in icon.paths" :key="`path-${i}`" v-bind="path"/>
      </template>
      <template v-if="icon && icon.polygons">
        <polygon v-for="(polygon, i) in icon.polygons" :key="`polygon-${i}`" v-bind="polygon"/>
      </template>
      <template v-if="icon && icon.raw"><g v-html="raw"></g></template>
    </slot>
  </svg>
</template>

<script>
  let icons = {}

  export default {
    name: 'vi-icon',
    props: {
      name: {
        type: String,
        validator (val) {
          if (val) {
            if (!(val in icons)) {
              console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
                `\nPlesase make sure you have imported this icon before using it.`)
              return false
            }
            return true
          }
          console.warn(`Invalid prop: prop "name" is required.`)
          return false
        }
      },
      scale: [Number, String],
      spin: Boolean,
      inverse: Boolean,
      pulse: Boolean,
      flipX: Boolean,
      flipY: Boolean,
      rotate180: Boolean,
      rotate90: Boolean,
      label: String,
      left: Boolean,
      right: Boolean,
      color: String,
      size: {
        type: [String, Number],
        default: 22
      }
    },
    data () {
      return {
        x: false,
        y: false,
        childrenWidth: 0,
        childrenHeight: 0,
        outerScale: 1
      }
    },
    computed: {
      normalizedScale () {
        let scale = this.scale
        scale = typeof scale === 'undefined' ? 1 : Number(scale)
        if (isNaN(scale) || scale <= 0) {
          console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this)
          return this.outerScale
        }
        return scale * this.outerScale
      },
      klass () {
        return {
          'vi-icon': true,
          'vi-icon--spin': this.spin,
          'vi-icon--flip-horizontal': this.flipX,
          'vi-icon--flip-vertical': this.flipY,
          'vi-icon--rotate-180': this.rotate180,
          'vi-icon--rotate-90': this.rotate90,
          'vi-icon--inverse': this.inverse,
          'vi-icon--pulse': this.pulse,
          'vi-icon--left': this.left,
          'vi-icon--right': this.right,
          ['vi-icon--' + this.color]: this.color
        }
      },
      icon () {
        if (this.name) {
          return icons[this.name]
        }
        return null
      },
      box () {
        if (this.icon) {
          return `0 0 ${this.icon.width} ${this.icon.height}`
        }
        return `0 0 ${this.width} ${this.height}`
      },
      ratio () {
        if (!this.icon) {
          return 1
        }
        let { width, height } = this.icon
        return Math.max(width, height) / 22
      },
      width () {
        return this.size || this.childrenWidth || this.icon && this.icon.width / this.ratio * this.normalizedScale || 0
      },
      height () {
        return this.size || this.childrenHeight || this.icon && this.icon.height / this.ratio * this.normalizedScale || 0
      },
      style () {
        if (this.size === 22) return false
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        }
      },
      raw () {
        // generate unique id for each icon's SVG element with ID
        if (!this.icon || !this.icon.raw) {
          return null
        }
        let raw = this.icon.raw
        let ids = {}
        raw = raw.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
          let uniqueId = getId()
          ids[id] = uniqueId
          return ` id="${uniqueId}"`
        })
        raw = raw.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
          let id = rawId || pointerId
          if (!id || !ids[id]) {
          return match
        }

        return `#${ids[id]}`
      })

        return raw
      }
    },
    mounted () {
      if (this.icon) {
        return
      }
      this.$children.forEach(child => {
        child.outerScale = this.normalizedScale
    })
      let width = 0
      let height = 0
      this.$children.forEach(child => {
        width = Math.max(width, child.width)
        height = Math.max(height, child.height)
      })
      this.childrenWidth = width
      this.childrenHeight = height
      this.$children.forEach(child => {
        child.x = (width - child.width) / 2
      child.y = (height - child.height) / 2
    })
    },
    register (data) {
      for (let name in data) {
        let icon = data[name]

        if (!icon.paths) {
          icon.paths = []
        }
        if (icon.d) {
          icon.paths.push({ d: icon.d })
        }

        if (!icon.polygons) {
          icon.polygons = []
        }
        if (icon.points) {
          icon.polygons.push({ points: icon.points })
        }

        icons[name] = icon
      }
    },
    icons
  }

  let cursor = 0xd4937
  function getId () {
    return `vi-${(cursor++).toString(16)}`
  }
</script>
