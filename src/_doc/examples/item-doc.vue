<template>
  <div class="input-doc">
    <h1>Item</h1>

    <h3>Selectable</h3>
    <p>used in generic selection box</p>
    <div class="box">
      <vi-item :link="true">1987</vi-item>
      <vi-item :link="true">1988</vi-item>
      <vi-item :link="true">1989</vi-item>
      <vi-item :link="true">1990</vi-item>
    </div>

    <h3>Selectable - hover with brand color without background</h3>
    <p>used in nav menu</p>
    <div class="box">
      <vi-item link="menu">1987</vi-item>
      <vi-item link="menu">1988</vi-item>
      <vi-item link="menu">1989</vi-item>
      <vi-item link="menu">1990</vi-item>
    </div>

    <h3>Link - hover with shadow</h3>
    <div class="box">
      <vi-item link="float">1987</vi-item>
      <vi-item link="float">1988</vi-item>
      <vi-item link="float">1989</vi-item>
      <vi-item link="float">1990</vi-item>
    </div>

    <h3>with icon</h3>
    <div class="box">
      <vi-item menu-link>
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
      <vi-item menu-link>
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="logout"/>
        </vi-item-avatar>
        Logout
      </vi-item>
    </div>

    <h3>with avatar</h3>
    <div class="box">
      <vi-item avatar>
        <vi-item-avatar>
          <vi-avatar>J</vi-avatar>
        </vi-item-avatar>
        <vi-item-content>
          <div class="vi-item__title">Joyce</div>
          <div class="vi-item__sub-title">Kay2097</div>
        </vi-item-content>
      </vi-item>
      <vi-item avatar>
        <vi-item-avatar>
          <vi-avatar>K</vi-avatar>
        </vi-item-avatar>
        <vi-item-content>
          <div class="vi-item__title">Kay Wong</div>
          <div class="vi-item__sub-title">Kay2097</div>
        </vi-item-content>
      </vi-item>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'item-doc',
    data () {
      return {
        data01: '',
        data02: '',
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'
  .box
    border()
    padding 10px 0
    max-width 300px
</style>
