<template>
  <layout>

    <MetaInfo
      pageTitle = "Blog"
      pageDescription = "Futuristic, secure, and server-less IoT platform on top of Ethereum and Polkadot. Bringing economy of robots into the 4th industrial revolution."
      :pageImage = "'/website_cover_blogs.jpg'"
    />
<!-- 
    <h1 v-if="$ts('Robonomics blog')" class="layout layout__content">{{$ts('Robonomics blog')}}</h1> -->

    <BlogTagsBanner :allTags="$page.allPostsTags.edges"/>

    <div v-if="$page.posts.edges.length === 0" class=" blog__no-post align-center">
      <blockquote>{{$t('No posts yet')}}</blockquote>

      <div class="layout layout__content oldy " v-if="$locale != $defaultLocale">
        <p>{{ $t('If you want to help us with translation') }}:</p>
        <ul class="list-simple">
          <li>{{ $t('contact us at') }}: <a href="mailto:localization@robonomics.network?subject=Robonomics%20WIKI%20Localization">localization@robonomics.network</a></li>
          <li>{{ $t('or') }} {{ $t('send') }} <g-link to="https://github.com/airalab/robonomics.network">GitHub PR</g-link></li>
        </ul>
      </div>
    </div>

    <section class="layout blog_grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </section>

    <Pagination class="pagination" 
      :pageInfo="$page.posts.pageInfo"
    />

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
query ($locale: String!, $page: Int) {

  allPostsTags: allPost(filter: {locale: { eq: $locale }} ) {
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
  
  posts: allPost(filter: { published: { eq: true }, locale: { eq: $locale } },perPage: 12, page: $page) @paginate {

    pageInfo {
      totalPages
      currentPage
    }
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
      Pagination: () => import('~/components/utils/Pagination.vue'),
      BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
    },

    computed: {
      lang(){
        return this.$locale
      },
    }
  }

</script>


<style scoped>
  blockquote {
    border-left: none;
  }


  .blog__no-post .oldy {
    text-align: center;
  }

  .blog__no-post .oldy p {
    margin-bottom: calc(var(--space) * 0.7);
    text-transform: uppercase;
    font-weight: 500;
  }

  .blog__no-post .oldy li {
    font-weight: 300;
    font-style: italic;
  }

  .blog__no-post .oldy li:not(:last-child) {
    margin-bottom: calc(var(--space) * 0.3);
  }

</style> 


