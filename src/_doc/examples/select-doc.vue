<template>
  <div class="section-header-doc">
    <h2>Select</h2>

    <vi-card>
      <vi-card-content>
        <p>Multiple Mode: If you provide an array to v-model. The component will be in multiple mode. For string it would be single selection</p>
        <br>
        <p><b>option-value</b> and <b>option-name</b> are useful when the provide an array of object as options. The use to specify the key. By default <b>option-value</b> is value <b>option-name</b> is name</p>
      </vi-card-content>
    </vi-card>

    <h3>Default</h3>
    <vi-select v-model="selected" :options="options" option-value="id"/>

    <h3>Prefix an Icon</h3>
    <vi-select v-model="selected" :options="options" option-value="id" prefix-icon="tip" placeholder="Selete Tip Card"/>

    <h3>Darker</h3>
    <p>input box has darker border</p>
    <vi-select darker v-model="selected" :options="options" option-value="id"/>

    <h3>Line Style</h3>
    <p>input box line style</p>
    <vi-select v-model="selected" :options="options" :line="true" option-value="id"/>

    <h3>Scoped slot</h3>
    <vi-select
      v-model="selected"
      :options="options"
      option-value="id"
      placeholder="Select an organization">
      <template slot="selection" slot-scope="{selection}">
        <vi-item v-if="selection" class="pl-0 pr-0">
          <vi-item-avatar>
            <vi-avatar size="30"><img :src="selection.logo_url"></vi-avatar>
          </vi-item-avatar>
          <vi-item-content>{{selection.name}}</vi-item-content>
        </vi-item>
      </template>
      <template slot="item" slot-scope="{item, toggle}">
        <vi-item @click="toggle(item)" :link="true" v-if="item">
          <vi-item-avatar>
            <vi-avatar size="30"><img :src="item.logo_url"></vi-avatar>
          </vi-item-avatar>
          <vi-item-content>{{item.name}}</vi-item-content>
        </vi-item>
      </template>
    </vi-select>

    <h3>Multiple with chips</h3>
    <p>For multiple selection we might want to display the selected option as a chip (label)</p>
    <vi-select :chip="true" v-model="selectedMultiple" :options="options" option-value="id"/>

    <h3>Multiple with scoped slot</h3>
    <p>
      The selection and item could be customized <br>
      you need to make use of <b>{selection, toggle}</b> from scoped slot to make it interactive
    </p>
    <vi-select
      v-model="selectedMultiple"
      :options="options"
      option-value="id"
      placeholder="Select an organization">

      <template slot="selection" slot-scope="{selection, toggle}">
        <vi-chip @remove="toggle(selection)" outline removable class="vi-chip--select-multi">
          <vi-avatar :image-url="selection.logo_url"/>
          {{selection.name}}
        </vi-chip>
      </template>

      <template slot="item" slot-scope="{item, toggle}">
        <vi-item @click="toggle(item)" :link="true">
          <vi-item-avatar>
            <vi-avatar size="30"><img :src="item.logo_url"></vi-avatar>
          </vi-item-avatar>
          <vi-item-content>{{item.name}}</vi-item-content>
        </vi-item>
      </template>
    </vi-select>

    <h3>Cache for multiple selection</h3>
    <p>
      The selection will not be effective until you hit confirm<br>
      ** You MUST use activator slot to complete the UI (otherwise the default selection is displaying the cached selection)
      ** <b>cache-multiple</b> can accept boolean or a string. When it is a string, it config the text of the confirm button
    </p>

    <vi-select
      v-model="selectedMultiple"
      :options="options"
      header="Filter by"
      cache-multiple="Select"
      option-value="id">

      <template slot="activator" slot-scope="{opened}">
        {{selectedMultiple.length === 0 ? 'Please select' : 'selected ' + selectedMultiple.length}}
        <vi-icon size="10" name="down" :flip-y="opened" class="ml-2"/>
      </template>
    </vi-select>

    <h3>Auto complete</h3>
    <p>Filter the option when you type</p>
    <vi-select :auto-complete="true" :options="options" :chip="true" v-model="selectedMultiple" option-value="id"/>

    <h3>Primitive Value</h3>
    <p>The array that provided to options could be just a simple array (not array of object)</p>
    <vi-select
      v-model="selectedPrimitive"
      :options="optionsPrimitive"/>

    <h3>Multiple Primitive Value</h3>
    <vi-select
      v-model="selectedMultiplePrimitive"
      :options="optionsPrimitive"/>

    <h3>Allow create</h3>
    <p>Allow user to create new values. You can choose not to provide options when this option is on</p>
    <vi-select :allow-create="true" :chip="true" v-model="createdEmails"/>

    <h3>Collapse multiple</h3>
    <p>
      Note: combined multiple chip cannot be closed by back button, and there is no remove button
      <br>
      You can specify the label name for the collapsed chip by providing a String Value
    </p>
    <vi-select :allow-create="true" :chip="true" collapse-multiple="Taxonomy" v-model="createdEmails"/>

    <h3>Nudge Bottom</h3>
    <p>Same as menu</p>

    <h3>Have multiple chips while having a separate input value</h3>
    <p>There are some tricks here</p>
    <ul>
      <li>We did not supply the options (no dropdown and caret)</li>
      <li>used @search to get an extra value</li>
      <li>did not use allow-create (so that pressing enter will not create a new value)</li>
    </ul>
    <vi-select @search="v => {search = v}" :chip="true" v-model="createdEmails" prefix-icon="search"/>
    <pre>search: {{search}}</pre>
    <pre>createdEmails: {{createdEmails}}</pre>

    <h3>Year month day select</h3>
    <vi-year-month-day-select v-model="birthday"/>
    {{birthday}}
  </div>
</template>

<script>
  export default {
    name: 'select-doc',
    data () {
      return {
        selected: '',
        selectedMultiple: [],
        selectedPrimitive: '',
        selectedMultiplePrimitive: [],
        createdEmails: [],
        birthday: '',
        search: '',
        options: [
          {
            logo_url: 'https://api.adorable.io/avatars/285/me',
            name: 'Apple',
            id: '13a5147b-8904-4af7-9da9-489cd64430cc'
          },
          {
            logo_url: 'https://api.adorable.io/avatars/285/me2',
            name: 'Banana',
            id: '23a5147b-8904-4af7-9da9-489cd64430cc'
          },
          {
            logo_url: 'https://api.adorable.io/avatars/285/me3',
            name: 'Orange',
            id: '33a5147b-8904-4af7-9da9-489cd64430cc'
          }
        ],
        optionsPrimitive: ['Hong Kong', 'Japan', 'USA']
      }
    }
  }
</script>
