<template>
  <layout>

     <MetaInfo
        :pageTitle = "'Robonomics blog, ' + $page.tag.title"
      />

      <div class="layout__title layout__title__tag">
        <h1><a href="/blog/">Robonomics blog</a></h1>
        <h2>{{ $page.tag.title }}</h2>
      </div>

      <section class="layout__content layout__text">
        <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </section>
  </layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "MMMM D, YYYY")
            timeToRead
            description
            content
            cover_image (width: 1500, quality: 100)
          }
        }
      }
    }
  }
}
</page-query>

<script>

export default {
  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    PostCard: () => import('~/components/PostCard.vue'),
  }
}
</script>

<style lang="scss">
  .layout__title__tag {
    h1 { margin-bottom: 0; }
    h2 { margin-top: 0; }
  }
</style>

