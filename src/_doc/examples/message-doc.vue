<template>
  <div class="message-doc">
    <h2>Message</h2>
    <vi-button @click="success">Show Message</vi-button>
    <vi-message message="Attached Card has been removed." type="warning"></vi-message>

    <h2>Delete Prompt</h2>
    <vi-button @click="messageBox">Show Delete Prompt</vi-button>

  </div>
</template>

<script>
export default {
  name: 'message-doc',
  methods: {
    success () {
      this.$message('success')
    },
    messageBox () {
      const message = '<div>Are you sure you want to remove <b>@flora</b> from the organization? This action cannot be undone.</div>'
      this.$deletePrompt(message).then(res => {
        console.log('res', res)
      }).catch(res => {
        console.log('catch', res)
      })
    }
  }
}
</script>
