<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Blog'"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_blog.png'"
    />

    <div class="layout__title blog_title">
      <h1>Robonomics blog</h1>
    </div>

    <section class="layout blog_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </section>

  </layout>
</template>


<static-query>
  query {
    metadata {
      siteName,
      siteDescription
    }
  }
</static-query>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image (width: 1500, quality: 100)
        path
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
    }

  }

</script>

