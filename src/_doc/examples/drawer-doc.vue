<template>
  <div class="drawer-example">

    <h1>Drawer</h1>

    <vi-button @click="drawer = !drawer">toggle</vi-button>
    <vi-drawer v-model="drawer" class="drawer">
      <div class="drawer">
        <vi-expansion-panel>
          <vi-item dark slot="header" slot-scope="slot">
            <vi-item-content>
              Subscriptions
            </vi-item-content>
            <vi-item-action>
              <vi-icon size="10" name="down" :rotate180="slot.isActive"></vi-icon>
            </vi-item-action>
          </vi-item>
          <vi-item dark>Cart</vi-item>
          <vi-item dark>Cart</vi-item>
          <vi-item dark>Cart</vi-item>
        </vi-expansion-panel>
        <vi-item dark>hi</vi-item>
        <vi-item dark>sdf</vi-item>
        <vi-item dark>fadsfsadf</vi-item>
      </div>
    </vi-drawer>
  </div>
</template>

<script>
  export default {
    name: 'drawer-example',
    data () {
      return {
        drawer: false,
        expand: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'
  .drawer
    // background $blue !important

    .vi-item
      font-size 16px
      height 60px

     .vi-expansion-panel__body .vi-item
        padding-left 30px

  .read-more-example
    .vi-expansion-panel__header
      text-align center

  .vi-toolbar__items
    >.vi-button
      &:hover
        background $blue
        color white
</style>
