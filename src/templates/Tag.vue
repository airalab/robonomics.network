<template>
  <layout>

     <MetaInfo
        :pageTitle = "'Robonomics blog, ' + $page.TagPosts.title"
        pageImage = "/website_cover_blogs.jpg"
      />

      <BlogTagsBanner :allTags="tagsList" :activeTag="$page.TagPosts.title" />

      <section class="layout blog_grid">
        <PostCard v-for="edge in postList" :key="edge.node.id" :post="edge.node"/>
      </section>
      
      <Pagination class="pagination" 
        :pageInfo="$page.TagPosts.belongsTo.pageInfo"
      />
  </layout>
</template>

<page-query>
query ($id: ID!) {
  TagPosts: tag (id: $id) {
    title
    belongsTo @paginate  {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "MMMM D, YYYY")
            description
            content
            cover_image (width: 1500, quality: 100)
            locale
          }
        }
      }
    }
  }
  
  allPostsTags: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        locale
        tags {
          id
          title
          path
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
    Pagination: () => import('~/components/blocks/Pagination.vue'),
    BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
  },

  computed: {
    tagsList() {
      return this.$page.allPostsTags.edges.filter((e) => {
        return e.node.locale === this.$locale
      })
    },

    postList() {
      return this.$page.TagPosts.belongsTo.edges.filter((e) => {
        return e.node.locale === this.$locale
      })
    }
  }
}
</script>

<style scoped>
  .layout__title__tag h1 { margin-bottom: 0; }
  .layout__title__tag h2 { margin-top: 0; }
</style>
