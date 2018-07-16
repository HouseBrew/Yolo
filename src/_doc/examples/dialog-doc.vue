<template>
  <div class="avatar-example">
    <h1>Dialog</h1>

    <h2>Default</h2>
    <vi-dialog v-model="visible">
      <div slot="activator">click me</div>

      <vi-page-title>Invite member to organization</vi-page-title>

      <label>Enter email address</label>

      fkdsjfkldsjf
    </vi-dialog>

    <h2>Programmatically control visibility</h2>
    <button @click="visible = !visible">toggle</button>

    <h2>Using input as activator</h2>
    <vi-dialog v-model="visible2" max-width="500">

      <!--<vi-input slot="activator" readonly darker suffix-icon="assessment" :value="selectedAssessment">-->
        <!--<vi-button slot="append" icon text>-->
          <!--<vi-icon name="clear"/>-->
        <!--</vi-button>-->
      <!--</vi-input>-->
      <vi-input slot="activator" clearable force-show-clear readonly darker suffix-icon="assessment" v-model="selectedAssessment" placeholder="Select Assessment"/>

      <vi-section-header>Select assessment</vi-section-header>
      <vi-input v-model="selectedAssessment" placeholder="type the selected assessment"/>
      <vi-button-row>
        <vi-button>Cancel</vi-button>
        <vi-button primary @click="close">Confirm</vi-button>
      </vi-button-row>
    </vi-dialog>
  </div>
</template>

<script>
  export default {
    name: 'dialog-example',
    data () {
      return {
        visible: false,
        visible2: false,
        selectedAssessment: ''
      }
    },
    methods: {
      close () {
        console.log('close')
        this.visible2 = false
      }
    }
  }
</script>
