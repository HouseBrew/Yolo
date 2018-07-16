<template>
  <div class="chiop-example">
    <h1>Chip (Label)</h1>

    <div class="ex">

      <h2>Default</h2>
      <vi-chip>
        Verified
      </vi-chip>

      <h2>Removable</h2>
      <vi-chip :removable="true">
        Verified
      </vi-chip>

      <h2>Prepend</h2>
      <vi-chip prepend="Taxonomy">
        2 Selected
      </vi-chip>

      <h2>Outline</h2>
      <vi-chip outline removable>
        <vi-avatar>
          <img src="https://api.adorable.io/avatars/285/me">
        </vi-avatar>
        Verified
      </vi-chip>

      <h2>Small</h2>
      <vi-chip small>
        Verified
      </vi-chip>
      <vi-chip small color="brand">
        <vi-icon name="clear" color="brand"/> Unverified
      </vi-chip>

      <h2>Large</h2>
      <vi-chip large>
        Verified
      </vi-chip>
      <vi-chip large color="brand">
        <vi-icon name="clear" color="brand"/> Unverified
      </vi-chip>

      <h2>Small, Text, Icon</h2>
      <vi-chip small text>
        <vi-icon name="done" color="green" size="10"/> Verified
      </vi-chip>

      <vi-chip small text>
        <vi-icon name="remove-circular" color="red" size="10"/> Unverified
      </vi-chip>

      <vi-chip small text color="brand">
        <vi-icon name="clear" color="brand" size="10"/> Removed
      </vi-chip>

      <vi-chip small color="brand">
        <vi-icon name="clear" color="brand" size="10"/> Removed
      </vi-chip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chip-example'
  }
</script>
