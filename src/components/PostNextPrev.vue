<template>
      <section>
   
        <div v-for="edge in $page.neib.edges"  v-html="edge.next" />
        <!--<PostCard v-for="edge in $page.related.edges" :key="edge.node.id" :post="edge.node"/>-->
        </section>

</template>


<page-query>
query{
  neib: allPost{
    edges{
      next{
        title
      }
      previous{
        title
      }
      node{
        title
      }
    }
  }
}

</page-query>


<script>

  export default {

    components: {
      PostCard: () => import('~/components/PostCard.vue'),
    },



  }

</script>


<style lang="scss">
 
</style>
