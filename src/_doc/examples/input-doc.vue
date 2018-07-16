<template>
  <div class="input-doc">
    <h1>Input</h1>
    <vi-button @click="line = !line">toggle line/box</vi-button>

    <h3>Default</h3>
    <vi-input :line="line" placeholder="Enter some text here"/>
    <vi-input-error>Email invalid</vi-input-error>

    <h3>Darker</h3>
    <vi-input darker placeholder="Enter some text here"/>

    <h4>Line</h4>
    <vi-input line suffix-icon="question-circular" placeholder="Enter some text here"/>

    <h4>Disabled</h4>
    <vi-input :line="line" :disabled="true" value="This is disabled" prefix-icon="question-circular"/>
    <vi-input-error :requirements="requirements"/>

    <h4>Readonly</h4>
    <vi-input :line="line" readonly value="This is read only"/>

    <h4>Clickable</h4>
    <vi-input :line="line" clickable placeholder="Enter some text here"/>

    <h4>Error</h4>
    <vi-input :line="line" :error="true" placeholder="Enter some text here"/>

    <h3>Input with icons</h3>

    <h4>Prepend icon</h4>
    <vi-input :line="line" prefix-icon="question-circular" placeholder="Enter some text here"/>

    <h4>Append icon</h4>
    <vi-input :line="line" suffix-icon="question-circular" placeholder="Enter some text here"/>

    <h3>Clear</h3>
    <vi-input :line="line" v-model="data01" suffix-icon="assessment" :clearable="true" placeholder="Enter some text here"/>

    <h3>Input with button</h3>
    <vi-input :line="line" placeholder="Enter some text here">
      <vi-button text color="brand" lowercase slot="append">Verify Email</vi-button>
    </vi-input>

  </div>
</template>

<script>
  export default {
    name: 'input-doc',
    data () {
      return {
        data01: '',
        line: false,
        requirements: [
          {
            message: 'Is at least 8 characters long',
            error: false
          },
          {
            message: 'Contains uppercase, lowercase, numbers and symbols (punctuation marks)',
            error: true
          },
          {
            message: 'Does not contain your username',
            error: true
          }
        ]
      }
    }
  }
</script>
