<template>
  <div class="switch-example">
    <h1>Switch</h1>

    <h3>Default</h3>
    <vi-switch v-model="toggle"/>
    <pre>{{toggle}}</pre>

    <h3>Disabled</h3>
    <vi-switch :disabled="true" v-model="toggle"/>

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
