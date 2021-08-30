<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Blog'"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_blog.png'"
    />

    <div class="layout__title blog_title">
      <h1 v-if="$ts('Robonomics blog')">{{$ts('Robonomics blog')}}</h1>
    </div>

    <div v-if="$page.posts.edges.length === 0" class="align-center layout">
      <blockquote>{{$ts('No posts yet')}}</blockquote>

      <div class="layout__text_small hyphens" v-if="$locale != $defaultLocale">
        <p>{{ $ts('If you want to help us with translation') }}:</p>
        <ul>
          <li>{{ $ts('contact us at') }}: <a href="mailto:localization@robonomics.network?subject=Robonomics%20WIKI%20Localization">localization@robonomics.network</a></li>
          <li>{{ $ts('or') }} {{ $ts('send') }} <g-link to="https://github.com/airalab/robonomics.network">GitHub PR</g-link></li>
        </ul>
      </div>
    </div>

    <section class="layout blog_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
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
query ($locale: String!) {
  
  posts: allPost(filter: { published: { eq: true }, locale: { eq: $locale } }) {
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
        locale
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
    },

    computed: {
      lang(){
        return this.$locale
      }
    }

  }

</script>

