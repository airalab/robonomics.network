<template>
  
    <section class="layout layout__text">
      <h3>Related posts:</h3>
      <section class="relatedPosts">
        <PostCard v-for="edge in related" :key="edge.id" :post="edge"/>
      </section>

    </section>

</template>


<script>

  export default {

    components: {
      PostCard: () => import('~/components/PostCard.vue'),
    },

    computed: {
      page() {
        return this.$page.post;
      },
      pages() {
        return this.$page.allPost.edges.map(edge => edge.node);
      },
      related() {
        if (this.pages && ! this.page.related) {
          return false;
        }

        var arr = this.page.related;
        var tmp =[];

        this.pages.filter(function(obj) { 
          
            if(arr.indexOf(obj.title) >= 0)
              tmp.push(obj);
        });

        return tmp;

      },
    }

  }

</script>


<style lang="scss">
  .relatedPosts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;

    @media screen and (max-width:570px){
       grid-template-columns: 1fr;
    }

    .post-card:not(:last-child) {
      margin-bottom: var(--space);
    }

    .post-card__header { 
      margin-bottom : 0;
    }

    h4 {
      font-size: 90%
    }
  }
</style>
