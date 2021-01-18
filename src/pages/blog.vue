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


<style lang="scss">
  // .blog_title {
  //     background: linear-gradient(45deg,  #5DC0DF, #355bd6, var(--link-color-hover), #355bd6, #5DC0DF);
  //     color: #fff;
  //     padding-bottom: calc(var(--space)*2);

  //     h1 {
  //       color: #fff;
  //       background: none;
  //       -webkit-text-fill-color: #fff;
  //     }
  // }

  .blog_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space);

    @media screen and (max-width: 970px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 620px) {
      grid-template-columns: 1fr;
    }
  }
</style>
