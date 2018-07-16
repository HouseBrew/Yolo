<template>
  <div class="loading-dots-doc">
    <h1>Loading Dots Directive</h1>

    <h3>Period in binding is the value to control the time interval</h3>

    <h5>period: 500</h5>
    <div v-loading-dots="{period: 500}">Dots dot dot</div>

    <h5>period: 3000</h5>
    <div v-loading-dots="{period: 3000}">Dots dot dot</div>
  </div>
</template>

<script>
  export default {
    name: 'loading-dots-doc'
  }
</script>
