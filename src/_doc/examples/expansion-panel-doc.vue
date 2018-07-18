<template>
  <div class="drawer-example">

    <h1>Expansion panel</h1>

    <div class="ex">
      <vi-expansion-panel>
        <div slot="header">Panel header</div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, minus.
      </vi-expansion-panel>
      <vi-expansion-panel>
        <div slot="header">Panel header</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus deleniti eaque eum facere, iusto laborum molestiae nisi numquam omnis quaerat quam quo rem repellat similique suscipit tempore! Iure, laudantium?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus deleniti eaque eum facere, iusto laborum molestiae nisi numquam omnis quaerat quam quo rem repellat similique suscipit tempore! Iure, laudantium?</p>
      </vi-expansion-panel>
    </div>

    <h2>Usage in Drawer</h2>
    <div class="drawer">
      <vi-expansion-panel :minimal="true">
        <vi-item :link="true" dark slot="header" slot-scope="slot">
          <vi-item-content>
            Subscriptions
          </vi-item-content>
          <vi-item-action>
            <vi-icon size="10" name="down" :rotate180="slot.isActive"></vi-icon>
          </vi-item-action>
        </vi-item>
        <vi-item :link="true" dark>Cart</vi-item>
        <vi-item :link="true" dark>Cart</vi-item>
        <vi-item :link="true" dark>Cart</vi-item>
      </vi-expansion-panel>
      <vi-item :link="true" dark>hi</vi-item>
      <vi-item :link="true" dark>sdf</vi-item>
      <vi-item :link="true" dark>fadsfsadf</vi-item>
    </div>

    <h2>Example with button</h2>
    <vi-expansion-panel :minimal="true" class="read-more-example">
      <vi-button slot="header" slot-scope="slot" text>
        Read more <vi-icon size="10" right name="right" :rotate90="slot.isActive"></vi-icon>
      </vi-button>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur delectus dignissimos earum, enim esse ipsum labore laborum minus mollitia obcaecati, optio possimus quaerat quas qui, quis sapiente tempore veritatis!
    </vi-expansion-panel>
  </div>
</template>

<script>
  export default {
    name: 'expansion-panel-doc',
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
