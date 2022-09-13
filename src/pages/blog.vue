<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Blog'"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_blog.png'"
    />

    <h1 v-if="$ts('Robonomics blog')" class="layout layout__content">{{$ts('Robonomics blog')}}</h1>

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

    <Pager class="pagination" :info="$page.posts.pageInfo"/>

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
  
  posts: allPost(filter: { published: { eq: true }, locale: { eq: $locale } },perPage: 6, page: $page) @paginate {

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
  import { Pager } from 'gridsome'

  export default {
    
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      PostCard: () => import('~/components/PostCard.vue'),
      Pager
    },

    computed: {
      lang(){
        return this.$locale
      }
    }

  }

</script>


<style scoped>
  .pagination {
    text-align: center;
    padding-bottom: 20px;
  }

  .pagination a {
    padding: 5px 10px;
    color: var(--color-dark);
    background-color: var(--color-light);
    border: 1px solid var(--color-dark);
    /* box-shadow: 0.2rem 0.2rem 0 var(--color-dark); */
    text-decoration: none;
  }

  .pagination a:not(:last-child) {
    margin-right: 5px;
  }

  .pagination a.active {
    margin-right: calc(5px + 0.2rem);
    box-shadow: 0.2rem 0.2rem 0 var(--color-dark);
  }

  .pagination a:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 420px) {
    .pagination a {
      padding: 8px;
    }
  }

  @media screen and (max-width: 390px) {
    .pagination a {
      padding: 4px;
    }
  }
</style>

