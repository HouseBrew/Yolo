<template>
  <div class="date-picker-doc">

    <h1>Date Picker</h1>

    <h2>Default</h2>
    <vi-date-picker v-model="date"/>
    <pre>date: {{date}}</pre>

    <h2>Full Width</h2>
    <p>Make the input box fluid by <b>width="100%"</b></p>
    <vi-row>
      <vi-col xs4>
        <vi-date-picker v-model="date" width="100%"/>
      </vi-col>
    </vi-row>

    <h2>Offset, Nudge, Dark..</h2>
    <p>The menu can open at right side. And applied with a fix width of 150px</p>
    <vi-date-picker
      width="150px"
      :nudgeRight="10"
      :nudgeBottom="0"
      :offsetX="true"
      :offsetY="false"
      v-model="date"/>

    <h2>Output Format & Display Format</h2>
    <p>You can alter the display format and output format (please ref moment.js for the format)</p>
  </div>
</template>

<script>
export default {
  name: 'date-picker-doc',

  data () {
    return {
      date: ''
    }
  }
}
</script>
