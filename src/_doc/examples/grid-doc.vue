<template>
  <div>
    <h1>grid</h1>
    <vi-row row wrap>
      <vi-col xs12>
        <vi-card dark color="primary">
          <vi-card-content>12</vi-card-content>
        </vi-card>
      </vi-col>
      <vi-col v-for="i in 2" :key="`6${i}`" xs6>
        <vi-card dark color="secondary">
          <vi-card-content>6</vi-card-content>
        </vi-card>
      </vi-col>
      <vi-col v-for="i in 3" :key="`4${i}`" xs4>
        <vi-card dark color="primary">
          <vi-card-content>4</vi-card-content>
        </vi-card>
      </vi-col>
      <vi-col v-for="i in 4" :key="`3${i}`" xs3>
        <vi-card dark color="secondary">
          <vi-card-content>3</vi-card-content>
        </vi-card>
      </vi-col>
      <vi-col v-for="i in 6" :key="`2${i}`" xs2>
        <vi-card dark color="primary">
          <vi-card-content>2</vi-card-content>
        </vi-card>
      </vi-col>
      <vi-col v-for="i in 12" :key="`1${i}`" xs1>
        <vi-card dark color="secondary">
          <vi-card-content>1</vi-card-content>
        </vi-card>
      </vi-col>
    </vi-row>
  </div>
</template>

<script>
  export default {
    name: 'grid-example'
  }
</script>
