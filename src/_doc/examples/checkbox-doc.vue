<template>
  <div class="checkbox-example">

    <h1>Checkbox</h1>

    <div style="margin: 40px 0">
      <h3>Checkbox List with maximum 2 selections</h3>
      <vi-checkbox style="margin-bottom: 10px;" v-model="inputValueArray" v-for="item in list" :key="item.value" :optionValue="item.value" :label="item.name" :maxSelected='maxSelected'/>
      Input: {{ inputValueArray }}
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox List without maximum selection</h3>
      <vi-checkbox style="margin-bottom: 10px;" v-model="inputValueArray2" v-for="item in list" :key="item.value" :optionValue="item.value" :label="item.name"/>
      Input: {{ inputValueArray2 }}
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox List with different sizes</h3>
      <vi-checkbox style="margin-bottom: 10px;" v-model="inputValueArray" v-for="item in list" :key="item.value" size="36" :optionValue="item.value" :label="item.name" :maxSelected='maxSelected'/>
      Input: {{ inputValueArray }}
    </div>

    <div style="margin: 40px 0">
      <h3>Radios List (the v-model value has to be 'string', not Array)</h3>
      <vi-checkbox style="margin-bottom: 10px;" v-model="inputValueString" v-for="item in list" :key="item.value" :optionValue="item.value" :label="item.name"/>
      Input: {{ inputValueString }}
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox List with customized slot (Example 1)</h3>
      <vi-checkbox style="margin-bottom: 10px" :colorFollow=true v-model="inputValueString2" v-for="item in list2" :key="item.value" :optionValue="item.value" :maxSelected='maxSelected'>
        <div style="display:flex; margin-top: -3px; margin-left: 0px; width: 500px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
          <div style="width: 250px; text-overflow:ellipsis; overflow:hidden; margin-right: 50px">
            {{item.name}}
          </div>
          <div>
            {{item.date}}
          </div>
        </div>
      </vi-checkbox>
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox List with customized slot (Example 2) and also add property 'brandLabel' to change the label color of the checked options</h3>
      <vi-checkbox style="margin-top: 15px; margin-bottom: 15px;" brandLabel v-model="inputValueString3" v-for="item in list2" :key="item.value" :optionValue="item.value" :maxSelected='maxSelected'>
        <div style="display:inline; margin-top: 0px; width: 500px; text-overflow:ellipsis">
          <div style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; width:150px">
            {{item.name}}
          </div>
        </div>
      </vi-checkbox>
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox accepting boolean input value</h3>
      <vi-checkbox style="margin-top: 15px; margin-bottom: 15px;" brandLabel v-model="toggle">
        <div style="display:inline; margin-top: 0px; width: 500px; text-overflow:ellipsis">
          <div style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; width:150px">
            TESTING boolean
          </div>
        </div>
      </vi-checkbox>
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox accepting boolean input value and swap icon (swapIcon must be used with boolean v-model)</h3>
      <vi-checkbox style="margin-top: 15px; margin-bottom: 15px;" brandLabel swapIcon v-model="toggle2" :label="'Testing'">
      </vi-checkbox>
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox with non-boolean input value and swapIcon (swapIcon won't work and console will have a warning)</h3>
      <vi-checkbox style="margin-bottom: 10px;" swapIcon v-model="inputValueArray2" v-for="item in list" :key="item.value" :optionValue="item.value" :label="item.name"/>
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox with option value of Object type (for getting multiple properteis of items) <br> (creation of a 'key' property is required)</h3>
      <vi-checkbox style="margin-top: 15px; margin-bottom: 15px;" brandLabel v-model="inputObject" v-for="item in list2" :key="item.value" :label="item.name" :optionValue="{key: item.date, name: item.name}">
      </vi-checkbox>
      Input: {{ inputObject }}
    </div>

    <div style="margin: 40px 0">
      <h3>Checkbox inline-flex</h3>
      <vi-checkbox style="margin-top: 15px; margin-bottom: 15px;" inlineFlex brandLabel v-model="inputObject" v-for="item in list2" :key="item.value" :label="item.name" :optionValue="{key: item.date, name: item.name}">
      </vi-checkbox>
      Input: {{ inputObject }}
    </div>

  </div>
</template>

<script>

const sampleData = [{
    name: "APPLE",
    value: "red"
},{
    name: "ORANGE",
    value: "orange"
},{
    name: "BANANA",
    value: "yellow"
},{
    name: "PEAR",
    value: "green"
}]

const sampleData2 = [{
    name: "Taking Initiative",
    date: "Jan 25 2018",
    value: "a"
},{
    name: "Coach With Impact Closing Reflection ASDASD",
    date: "Jan 23 2018",
    value: "b"
},{
    name: "Difficult Conversations",
    date: "Jan 19 2018",
    value: "c"
},{
    name: "Impactful Presentations Opening AABABABBBA",
    date: "Jan 15 2018",
    value: "d"
}]

export default {
   name: 'checkbox-example',
   data () {
     return {
       list: sampleData,
       list2: sampleData2,
       inputValueArray: [],
       inputValueArray2: [],
       inputValueString: '',
       inputValueString2: '',
       inputValueString3: '',
       inputObject: [],
       maxSelected: 2,
       toggle: true,
       toggle2: false,
     }
   }
}
</script>
