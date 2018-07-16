<template>
  <div class="input-doc">
    <h1>Button</h1>

    <section>
      <h3>Default</h3>
      <div class="ex">
        <p><b>Primary</b> A shorthand for color=brand-gradient and float=true</p>
        <p class="mb-10"><b>Secondary</b> By default (without any params), it will look like a secondary button</p>
        <vi-button primary size="150">Primary</vi-button>
        <vi-button size="150">Secondary</vi-button>
      </div>
    </section>

    <section>
      <h3>Outline</h3>
      <div class="ex">
        <p><b>Primary</b> hover will be filled</p>
        <div>
          <vi-button outline color="orange">Orange</vi-button>
          <vi-button outline color="blue">Blue</vi-button>
          <vi-button outline color="green">green</vi-button>
          <vi-button outline color="brand">brand</vi-button>
          <vi-button outline color="charcoal">Charcoal</vi-button>
        </div>

        <p class="mt-20"><b>Secondary</b> hover will be darken the outline</p>

        <div>
          <vi-button outline color="light-grey">Light Grey</vi-button>
          <vi-button outline color="grey">Grey</vi-button>
        </div>

        <p class="mt-20"><b>more than Secondary..</b> hover with orange border</p>
        <vi-button outline>Grey</vi-button>
      </div>
    </section>

    <section>
      <h3>Fill</h3>
      <div class="ex">
        <p><b>Icon</b>(flat color)</p>
        <vi-button color="orange">Orange</vi-button>
        <vi-button color="blue">Blue</vi-button>
        <vi-button color="green">green</vi-button>
        <vi-button color="brand">brand</vi-button>
        <vi-button color="charcoal">Charcoal</vi-button>
        <vi-button color="light-grey">Light grey</vi-button>

        <p class="mt-20"><b>With gradient</b> only have brand-gradient</p>
        <vi-button color="brand-gradient">brand</vi-button>
      </div>
    </section>

    <section>
      <h3>Text</h3>
      <div class="ex">
        <p><b>Color: </b> hover with lighten color</p>
        <div>
          <vi-button text color="orange">Orange</vi-button>
          <vi-button text color="blue">Blue</vi-button>
          <vi-button text color="green">Green</vi-button>
          <vi-button text color="brand">Brand</vi-button>
          <vi-button text color="charcoal">Charcoal</vi-button>
        </div>

        <div>
          <vi-button text color="orange"><vi-icon name="tip"/></vi-button>
          <vi-button text color="blue"><vi-icon name="tip"/></vi-button>
          <vi-button text color="green"><vi-icon name="tip"/></vi-button>
          <vi-button text color="brand"><vi-icon name="tip"/></vi-button>
          <vi-button text color="charcoal"><vi-icon name="tip"/></vi-button>
        </div>

        <p class="mt-20"><b>Grey: </b> hover with orange</p>
        <div>
          <vi-button text color="light-grey">Light grey</vi-button>
          <vi-button text color="grey">Grey</vi-button>
        </div>
        <div>
          <vi-button text color="light-grey"><vi-icon name="tip"/></vi-button>
          <vi-button text color="grey"><vi-icon name="tip"/></vi-button>
        </div>
      </div>
    </section>

    <section>
      <h3>Flat</h3>
      <p>Show the background untiil hover</p>
      <div class="ex">
        <vi-button size="26" icon flat circular>
          <vi-icon size="14" name="down"/>
        </vi-button>
      </div>
    </section>

    <section>
      <h3>Size</h3>
      <div class="ex">
        <h4>Use with text button: set the width</h4>
        <p>Without setting fixed width</p>
        <vi-button>Cancel</vi-button>
        <p>Setting fixed width</p>
        <vi-button size="150">Cancel</vi-button>

        <h4>Use with icon button: set the width and height</h4>
      </div>
    </section>

    <section>
      <h3>Button row</h3>
      <div class="ex">
        <p>Align in between</p>
        <vi-button-row>
          <vi-button size="150">Cancel</vi-button>
          <vi-button color="brand-gradient" float size="150">Confirm</vi-button>
        </vi-button-row>

        <p class="mt-20">Align center</p>
        <vi-button-row :center="true">
          <vi-button size="150">Cancel</vi-button>
          <vi-button color="brand-gradient" float size="150">Confirm</vi-button>
        </vi-button-row>
      </div>
    </section>

    <h3>round</h3>
    <vi-button round>round</vi-button>

    <h3>raise</h3>
    <vi-button raise>raise</vi-button>

    <h3>disabled</h3>
    <vi-button disabled>disabled</vi-button>

    <h3>icon</h3>
    <h4>fill</h4>
    <vi-button color="brand" icon>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <vi-button color="brand" icon large>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <h4>outline</h4>
    <vi-button outline icon>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <vi-button outline icon large>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <h4>text</h4>
    <vi-button text icon>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <vi-button text icon large>
      <vi-icon name="bookmark-outline"></vi-icon>
    </vi-button>

    <h3>text with icon</h3>
    <vi-button>
      Search
      <vi-icon right name="question-circular"></vi-icon>
    </vi-button>

    <vi-button>
      <vi-icon left name="question-circular"></vi-icon>
      Remove
    </vi-button>

    <vi-button text lowercase>
      <vi-icon left name="question-circular"></vi-icon>
      Remove
    </vi-button>

    <h3>text</h3>
    <div>
      <vi-button text><vi-icon left name="question-circular"></vi-icon>Default</vi-button>
      <vi-button text color="orange"><vi-icon left name="question-circular"></vi-icon>Orange</vi-button>
      <vi-button text color="blue">Blue</vi-button>
      <vi-button text color="green">green</vi-button>
      <vi-button text color="brand">brand</vi-button>
      <vi-button text color="charcoal">brand</vi-button>
    </div>

    <section>
      <h3>Real Example</h3>
      <div class="ex">
        <vi-button min-width="100">Cancel</vi-button>
        <vi-button min-width="100" raise color="brand">Submit</vi-button>
        <vi-button outline color="light-grey">Cancel</vi-button>
        <vi-button outline color="light-grey">Yes, delete</vi-button>
      </div>
      <div>
        <vi-button text icon><vi-icon size="26" name="share"/></vi-button>
        <vi-button text icon><vi-icon size="24" name="bookmark-outline"/></vi-button>
      </div>
      <div>
        <vi-button min-width="240" raise color="brand">All</vi-button>
        <vi-button min-width="240">Pending <vi-icon right size="16" name="star"></vi-icon></vi-button>
      </div>
      <div>
        <vi-button style="font-size: 12px" text lowercase><vi-icon left size="18" name="trash"/>Remove</vi-button>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'input-doc',
    data () {
      return {
        data01: ''
      }
    }
  }
</script>
