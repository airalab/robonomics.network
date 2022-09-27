<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Blog'"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_blogs.jpg'"
    />
<!-- 
    <h1 v-if="$ts('Robonomics blog')" class="layout layout__content">{{$ts('Robonomics blog')}}</h1> -->

    <BlogTagsBanner :allTags="$page.allPostsTags.edges"/>

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
      Pagination: () => import('~/components/Pagination.vue'),
      BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
    },

    computed: {
      lang(){
        return this.$locale
      },
    }
  }

</script>



