<template>
  <div class="drawer-example">

    <h1>Tooltip</h1>

    <h2>Directions</h2>
    <vi-tooltip bottom>
      <vi-button slot="activator">bottom</vi-button>
      <span>bottom</span>
    </vi-tooltip>
    <vi-tooltip top>
      <vi-button slot="activator">top</vi-button>
      <span>top</span>
    </vi-tooltip>
    <vi-tooltip right>
      <vi-button slot="activator">right</vi-button>
      <span>right</span>
    </vi-tooltip>
    <vi-tooltip left>
      <vi-button slot="activator">left</vi-button>
      <span>left</span>
    </vi-tooltip>

    <h2>Control visibility</h2>
    <vi-tooltip v-model="visible" top>
      <vi-button slot="activator" lowercase>I have a tooltip that could be toggle</vi-button>
      <span>Control me!</span>
    </vi-tooltip>
    <button @click="visible = !visible">toggle</button>

  </div>
</template>

<script>
  export default {
    name: 'tooltip-doc',
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'

</style>
