<template>
  <div class="input-doc">
    <h1>Menu</h1>

    <h2>Default</h2>
    <vi-menu min-width="170">
      <vi-button slot="activator">Default</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <h2>Nudge</h2>
    <p>control the space between the activator and the menu. <br>Note: please use number instead of string, otherwise not working</p>
    <vi-menu min-width="170" :nudge-bottom="10">
      <vi-button slot="activator">10px between</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <h2>Offset</h2>
    <p>
      By default offset-y is true. thats why the menu will open under the activator<br>
      You can offset the menu horizontally like this
    </p>
    <vi-menu min-width="170" :offsetY="false" :offsetX="true">
      <vi-button slot="activator">Offset menu</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <h2>Directions - Top Left Right Bottom</h2>
    <p>Default is bottom and right</p>
    <vi-row>
      <vi-menu top :nudge-top="10">
        <vi-button slot="activator">Top</vi-button>
        <vi-item :link="true">
          <vi-item-avatar>
            <vi-icon width="25" height="25" name="config"/>
          </vi-item-avatar>
          Setting
        </vi-item>
      </vi-menu>

      <vi-menu left :nudge-bottom="10" class="ml-10">
        <vi-button slot="activator">Left</vi-button>
        <vi-item :link="true">
          <vi-item-avatar>
            <vi-icon width="25" height="25" name="config"/>
          </vi-item-avatar>
          Setting
        </vi-item>
      </vi-menu>

      <vi-menu top left :nudge-top="10" class="ml-10">
        <vi-button slot="activator">Top Left</vi-button>
        <vi-item :link="true">
          <vi-item-avatar>
            <vi-icon width="25" height="25" name="config"/>
          </vi-item-avatar>
          Setting
        </vi-item>
      </vi-menu>
    </vi-row>

    <h2>Close on content click</h2>
    <p>If you don't want the menu to be close when the menu content is clicked, You can set <b>close-on-content-click</b> to false</p>
    <vi-menu min-width="170" :close-on-content-click="false">
      <vi-button slot="activator">Open Menu</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <h2>Disabled</h2>
    <p>Sometime you need to disable the menu so that it cannot open. There is a extra class <b>vi-menu__activator--disabled</b> added to the activator if you want to customize your styling</p>
    <vi-menu min-width="170" :disabled="true">
      <vi-button slot="activator">Open Menu</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <h2>Attach</h2>
    <p>
      See this property to true when the activator is a fixed element. Otherwise upon scroll the menu will looks 'detached' from the activator <br>
      Normally the menu will be attached to the document. Setting this to true will let the menu stay with the activator
    </p>

    <h2>Content class</h2>
    <p>Add a custom class to the detached menu.</p>
  </div>
</template>

<script>
  export default {
    name: 'menu-doc',
    data () {
      return {
        menu01: false,
        menu02: false,
        menu03: false
      }
    },
    methods: {
      show () {
        this.menu01 = false
        setTimeout(() => {
          this.menu01 = true
        }, 100)
        // this.$nextTick(() => {
        //   this.menu01 = true
        // })
      }
    }
  }
</script>

<style>

</style>
