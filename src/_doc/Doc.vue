<template>
  <vi-app class="doc">

    <ul class="sidebar">
      <router-link tag="li" to="/avatar"><vi-item selectable>Avatar</vi-item></router-link>
      <router-link tag="li" to="/button"><vi-item selectable>Button</vi-item></router-link>
      <router-link tag="li" to="/checkbox"><vi-item selectable>Checkbox</vi-item></router-link>
      <router-link tag="li" to="/chip"><vi-item selectable>Chip</vi-item></router-link>
      <router-link tag="li" to="/data-table"><vi-item selectable>Datatable</vi-item></router-link>
      <router-link tag="li" to="/date-picker"><vi-item selectable>Date Picker</vi-item></router-link>
      <router-link tag="li" to="/dialog"><vi-item selectable>Dialog</vi-item></router-link>
      <router-link tag="li" to="/drawer"><vi-item selectable>Drawer</vi-item></router-link>
      <router-link tag="li" to="/expansion-panel"><vi-item selectable>Expansion Panel</vi-item></router-link>
      <router-link tag="li" to="/grid"><vi-item selectable>Grid</vi-item></router-link>
      <router-link tag="li" to="/icon"><vi-item selectable>Icon</vi-item></router-link>
      <router-link tag="li" to="/input"><vi-item selectable>Input</vi-item></router-link>
      <router-link tag="li" to="/item"><vi-item selectable>Item</vi-item></router-link>
      <router-link tag="li" to="/menu"><vi-item selectable>Menu</vi-item></router-link>
      <router-link tag="li" to="/message"><vi-item selectable>Message</vi-item></router-link>
      <router-link tag="li" to="/message-box"><vi-item selectable>MessageBox</vi-item></router-link>
      <router-link tag="li" to="/no-data"><vi-item selectable>No Data</vi-item></router-link>
      <router-link tag="li" to="/tooltip"><vi-item selectable>Tooltip</vi-item></router-link>
      <router-link tag="li" to="/section-header"><vi-item selectable>Section header</vi-item></router-link>
      <router-link tag="li" to="/select"><vi-item selectable>Select</vi-item></router-link>
      <router-link tag="li" to="/sticky"><vi-item selectable>Sticky</vi-item></router-link>
      <router-link tag="li" to="/switch"><vi-item selectable>Switch</vi-item></router-link>
      <router-link tag="li" to="/sidebar"><vi-item selectable>Sidebar</vi-item></router-link>
      <router-link tag="li" to="/spinner"><vi-item selectable>Spinner</vi-item></router-link>
      <router-link tag="li" to="/tabs"><vi-item selectable>Tabs</vi-item></router-link>
      <router-link tag="li" to="/preview"><vi-item selectable>Preview</vi-item></router-link>
      <router-link tag="li" to="/loading-dots"><vi-item selectable>Loading Dots</vi-item></router-link>
    </ul>

    <div class="topbar">
      <vi-button @click="drawer = !drawer" icon text size="50">
        <vi-icon name="menu" size="20"/>
      </vi-button>
      <span>Yolo</span>

    </div>

    <div class="doc-view">
      <router-view></router-view>
    </div>

  </vi-app>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "app",
    data () {
      return {
        drawer: false
      }
    }
  });
</script>

<style lang="stylus">
  @import '../stylus/main.styl'
  .doc
    background #f9f9f9

  .doc-view
    margin-left 200px
    padding 80px 40px 40px

    h1, h2, h3, h4
      margin 30px 0 10px

      + p
        margin-top -10px
        margin-bottom 10px

  .topbar
    position fixed !important
    left 0
    top 0
    right 0
    color white

  .vi-drawer
    a
      text-decoration none
      color inherit

  .ex
    margin 20px 0
    padding 20px
    background white
    border 1px solid $border-color

  .sidebar
    position fixed
    left 0
    top 50px
    bottom 0
    width 200px
</style>
