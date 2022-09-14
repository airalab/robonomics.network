<template>
  <layout>

     <MetaInfo
        :pageTitle = "'Robonomics blog, ' + $page.tag.title"
        :pageImage = "'/website_cover_blogs.png'"
      />

      <BlogTagsBanner :allTags="$page.allPostsTags.edges" :activeTag="$page.tag.title" />

      <div class="layout__title layout__title__tag">
        <h1><a href="/blog/">Robonomics blog</a></h1>
        <h2>Tag: {{ $page.tag.title }}</h2>
      </div>

      <section class="layout blog_grid">
        <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </section>
      
      <Pagination class="pagination" 
        :pageInfo="$page.tag.belongsTo.pageInfo"
      />
  </layout>
</template>

<page-query>
query ($id: ID!, $page: Int) {
  tag (id: $id) {
    title
    belongsTo(page: $page) @paginate  {
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
          }
        }
      }
    }
  }
  allPostsTags: allPost(filter: {locale: { eq: "en" }} ) {
    edges {
      node {
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
    Pagination: () => import('~/components/Pagination.vue'),
    BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
  }
}
</script>

<style scoped>
  .layout__title__tag h1 { margin-bottom: 0; }
  .layout__title__tag h2 { margin-top: 0; }
</style>

