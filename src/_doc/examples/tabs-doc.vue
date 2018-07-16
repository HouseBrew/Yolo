<template>
  <div class="switch-example">
    <h1>Tabs</h1>

    <h2>Default</h2>
    <div>
      <vi-tabs>
        <vi-tab name="Inactive Account (6)">
          This is the content of the first tab (6)
        </vi-tab>
        <vi-tab name="Active Accounts (210)">
          This is the content of the second tab (210)
        </vi-tab>
        <div slot="right">hi</div>
      </vi-tabs>
    </div>

    <h2>Icon</h2>
    <div>
      <vi-tabs button-tab>
        <vi-tab name="TEAMS" prefix-icon="team" icon-size="32">
          This is the content of the first tab (6)
        </vi-tab>
        <vi-tab name="CONTENT GROUP" prefix-icon="stack" icon-size="24">
          This is the content of the second tab (210)
        </vi-tab>
      </vi-tabs>
    </div>

    <h2>Vertical</h2>
    <div>
      <vi-tabs :vertical="200">
        <vi-tab name="Inactive Account (6)">
          This is the content of the first tab (6)
        </vi-tab>
        <vi-tab name="Active Accounts (210)">
          This is the content of the second tab (210)
        </vi-tab>
      </vi-tabs>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'switch-example',
    data () {
      return {
        toggle: false
      }
    }
  }
</script>
