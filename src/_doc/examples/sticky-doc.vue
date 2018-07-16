<template>
  <div class="sticky-doc">
    <h1>Sticky</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda aut cupiditate dolor dolorum ea eligendi esse, ex exercitationem facilis, iste itaque iure molestias odio possimus provident quisquam suscipit tempore voluptatem! A at cupiditate dolor, eius inventore, iste iusto libero mollitia nemo omnis perspiciatis quos rem, tempora vitae voluptas? Ea temporibus, veritatis! Aliquid at consectetur enim nostrum rerum? Architecto, consequuntur corporis earum ex incidunt ipsum laboriosam maxime quia repudiandae soluta suscipit vel veniam! Amet animi architecto at cum dignissimos dolore doloremque earum eos et, hic incidunt mollitia necessitatibus nobis obcaecati officiis optio provident quasi quibusdam quos reprehenderit, sit voluptates.
    </p>

    <div class="layout">
      <div class="sideway">
        <div v-sticky="{zIndex: 999, offset: 100, footer: '.footer', footerOffset: 40}" class="i-am-sticky">
          <div>
            <vi-button icon size="50">
              <vi-icon name="bookmark"></vi-icon>
            </vi-button>
            <vi-button icon size="50">
              <vi-icon name="bookmark"></vi-icon>
            </vi-button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </div>

      <div class="main">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa distinctio dolores facere fugiat nulla officia placeat porro quam, ratione rerum similique suscipit vero? Aliquid amet commodi, debitis dolor, ducimus fugit maxime necessitatibus nihil, odit ratione reprehenderit soluta? Aliquam corporis deserunt doloribus ex excepturi fuga impedit optio quod sit totam! Delectus dolor ducimus id iste maiores nihil numquam quasi quo? Deserunt ex exercitationem id iusto nisi officia officiis velit vitae. Accusantium consectetur hic, maxime nihil perspiciatis repudiandae sit. Assumenda atque consequatur culpa cum delectus dicta dolores doloribus ea eos in ipsa iste iusto labore maiores modi, nobis quaerat suscipit voluptatum!</p>
      </div>
    </div>

    <div class="footer">
      Sticky will be hidden before touching me!
    </div>

  </div>
</template>

<script>
  export default {
    name: 'sticky-doc'
  }
</script>

<style lang="stylus" scoped>
  .layout
    display flex

  .sideway
    width 20%
    flex-shrink 0

  .main
    width 80%

  .footer
    background #e1e1e1
    height 1000px
    padding 80px

  .i-am-sticky
    padding 0 1px
    height 79px
    // width 60px
</style>
