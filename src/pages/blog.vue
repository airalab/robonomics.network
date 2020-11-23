<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Blog'"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_community.png'"
    />

    <div class="layout__title">
      <h1>Robonomics blog</h1>
    </div>

    <section class="layout__content layout__text">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </section>

    <!--<section class="blog-socials layout__content layout__text">
      <span>Follow us:</span>
      <g-link to="https://wiki.robonomics.network/">Wiki</g-link>
			<g-link to="https://discourse.robonomics.network">Forum</g-link>
			<g-link to="https://t.me/robonomics">Telegram</g-link>
			<g-link to="https://twitter.com/AIRA_Robonomics">Twitter</g-link>
			<g-link to="https://github.com/airalab">GitHub</g-link>
    </section>-->

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
  .blog-socials {
    a, span {
      display: inline-block;
      margin-left: var(--space);
      text-transform: uppercase;
      letter-spacing: 1px;

      &:first-child {
        margin-left: 0;
      }
      
    }

    a {
      text-decoration: none;
    }
  }
</style>
