<template>
  <div class="avatar-example">
    <h1>Avatar</h1>

    <h2>Size</h2>
    <p>Default is 50px</p>
    <vi-avatar size="40" :src='src'/>
    <vi-avatar size="50" :src='src'/>
    <vi-avatar size="60" :src='src'/>

    <h2>Border</h2>
    <p>Default have 1px border, set default to disable border.You can also given a number as value - this will explicity set the border width</p>
    <vi-avatar :border="false" :src='src'/>
    <vi-avatar :border="true" :src='src'/>
    <vi-avatar :border="2" :src='src'/>
  </div>
</template>

<script>
  export default {
    name: 'icon-example',
    data () {
      return {
        src: 'https://api.adorable.io/avatars/285/me'
      }
    }
  }
</script>
