<template>
  <div class="data-table-doc">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at blanditiis dolore eos est mollitia nobis odio sed totam, voluptatum. Alias culpa deserunt dignissimos iure ratione rem! Ab accusamus aliquam, aperiam cumque delectus distinctio dolores dolorum ea earum esse est eveniet expedita facilis itaque laboriosam libero minus molestiae neque non nostrum officia perspiciatis provident quisquam sapiente ut vero voluptatem! Ducimus praesentium quo sit. Alias amet aperiam aspernatur beatae distinctio dolor dolorem facere hic in ipsa minus mollitia natus numquam odio odit officiis, placeat, possimus qui quisquam quo reiciendis saepe soluta sunt vero voluptas. Cupiditate delectus libero maxime recusandae saepe totam.
    <button @click="changeItems">changeItems</button>
    <vi-input placeholder="search" v-model="search"/>
    <vi-data-table
      :search="search"
      :items="items"
      :headers="headers"
      :pagination.sync="pagination"
      :smallSortIcon="true"
      :divided="true"
      :height="300"
      :disable-virtual-scroll="true"
      :itemHeight="49">

      <div slot="item" slot-scope="{item, key}" :key="key" class="vi-table__row">
        <div>yo</div>
        <div>{{item}}</div>
      </div>
    </vi-data-table>
  </div>
</template>

<script>
  export default {
    name: 'data-table-doc',
    data () {
      return {
        pagination: {},
        search: '',
        headers: [
          {
            text: 'Member name',
            index: 'username',
            width: '33%',
            sortable: true
          },
          {
            text: 'test',
            index: 'test',
            sortable: true
          }
        ],
        items: []
      }
    },
    methods: {
      changeItems () {
        this.items = [1, 2, 3]
      }
    },
    created () {
      for (let i = 0; i < 500; i ++) {
        this.items.push(i)
      }
    }
  }
</script>

<style lang="stylus">
  .vi-table__col
    &:nth-child(2)
      justify-content flex-start

    &:nth-child(3)
      justify-content flex-start
</style>
