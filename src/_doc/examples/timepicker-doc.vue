<template>
  <div class="timepicker-example">

    <h1>Timepicker</h1>

    <h3>Timepicker Default (nudgeBottom: 10, nudgeRight: 0)</h3>
    <div style="margin: 40px 0">
      <vi-timepicker v-model="time1" placeholder="I am the placeholder 1"></vi-timepicker>
    </div>
    Output : {{time1}}

    <h3>Timepicker with costom nudge space and offset</h3>
    <div style="margin: 40px 0">
      <vi-timepicker v-model="time1b" placeholder="I am the placeholder 2" :nudgeRight="10" :nudgeBottom="0" :offsetX="true" :offsetY="false"></vi-timepicker>
    </div>

    <h3>Timepicker with disabling</h3>
    <div style="margin: 40px 0">
      <vi-timepicker disabled placeholder="I am the placeholder 3" :nudgeRight="10" :nudgeBottom="0" :offsetX="true" :offsetY="false"></vi-timepicker>
    </div>

    <h3>Timepicker with time in custom scoped-slot (must be scoped slot)</h3>
    <div style="margin: 40px 0">
      <vi-timepicker v-model="time2">
        <vi-button slot="activator" slot-scope="data" primary>{{data.time ? data.time : 'placeholder'}}</vi-button>
      </vi-timepicker>
    </div>
    Output : {{time2}}

    <h3>Timepicker Inline</h3>
    <div style="margin: 40px 0">
      <vi-timepicker inline @change="(e) => time3 = e"></vi-timepicker>
    </div>
    onChange: {{time3}} 

  </div>
</template>

<script>

export default {
  name: 'timepicker-example',
  data () {
    return {
      time1: '11:11',
      time1b: '',
      time2: '',
      time3: ''
    }
  }
}
</script>
