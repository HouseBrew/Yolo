<template>
  <div class="icon-example">
    <h1>Icon</h1>
    <h4>Color</h4>
    <vi-icon color="brand" name="question-circular"/>
    <vi-icon color="orange" name="question-circular"/>
    <vi-icon color="blue" name="question-circular"/>
    <vi-icon color="green" name="question-circular"/>

    <section>
      <h4>Action</h4>
      <div v-for="icon in actionIconList">
        <vi-icon :name="icon"/>
        {{icon}}
      </div>
    </section>

    <section>
      <h4>Content</h4>
      <div v-for="icon in contentIconList">
        <vi-icon :name="icon"/>
        {{icon}}
      </div>
    </section>

    <section>
      <h4>Navigation</h4>
      <div v-for="icon in navigationIconList">
        <vi-icon :name="icon"/>
        {{icon}}
      </div>
    </section>

    <section>
      <h4>System</h4>
      <div v-for="icon in systemIconList">
        <vi-icon :name="icon"/>
        {{icon}}
      </div>
    </section>

    <section>
      <h4>Time space</h4>
      <div v-for="icon in timeSpaceIconList">
        <vi-icon :name="icon"/>
        {{icon}}
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'icon-example',
    data () {
      return {
        actionIconList: ['trash', 'bookmark', 'bookmark-outline', 'done', 'edit', 'email', 'refresh', 'forward', 'search', 'share', 'star', 'logout'],
        contentIconList: ['add-thick', 'add-circular', 'clear', 'clip', 'copy', 'content', 'dragger', 'link',  'remove', 'remove-circular', 'remove-circular-2', 'stack', 'stack-outline'],
        navigationIconList: ['caret', 'left', 'more', 'more-vertical', 'right', 'up', 'down', 'menu', 'apps', 'structure'],
        systemIconList: ['alert', 'alert-circular', 'config', 'flag', 'info-circular', 'question-circular', 'bell', 'bell-outline', 'bell-empty'],
        timeSpaceIconList: ['clock', 'routine', 'snooze', 'timer']
      }
    }
  }
</script>

<style scoped lang="stylus">
  .vi-icon
    width 40px
    height 40px
</style>
