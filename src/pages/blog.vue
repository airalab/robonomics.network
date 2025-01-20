<template>
  <layout :title="$t('Tech Blog & Updates')">

    <MetaInfo
      pageTitle = "Blog"
      pageDescription = "Futuristic, secure, and server-less IoT platform on top of Ethereum and Polkadot. Bringing economy of robots into the 4th industrial revolution."
      :pageImage = "'/website_cover_blogs.jpg'"
    />

    <!-- <BlogTagsBanner :allTags="$page.allPostsTags.edges"/> -->

    <div v-if="allPosts.length === 0" class=" blog__no-post align-center">
      <blockquote>{{$t('No posts yet')}}</blockquote>

      <div class="layout layout__content oldy" v-if="$locale != $defaultLocale">
        <p>{{ $t('If you want to help us with translation') }}:</p>
        <ul class="list-simple">
          <li>{{ $t('contact us at') }}: <a href="mailto:localization@robonomics.network?subject=Robonomics%20WIKI%20Localization">localization@robonomics.network</a></li>
          <li>{{ $t('or') }} {{ $t('send') }} <g-link to="https://github.com/airalab/robonomics.network">GitHub PR</g-link></li>
        </ul>
      </div>
    </div>

    <section class="layout blog_grid">
      <PostCard v-for="edge in paginatedPosts" :key="edge.node.id" :post="edge.node" />
    </section>

    <div class="pagination">
      <!-- First Page -->
      <a 
        :href="generateRoute(1)"
        aria-label="Go to first page"
        @click.prevent="goToPage(1)"
        :class="{ disabled: currentPage === 1 }"
      >
      
      </a>

      <!-- Previous Page -->
      <a 
        :href="generateRoute(currentPage - 1)"
        aria-label="Go to previous page"
        @click.prevent="goToPage(currentPage - 1)"
        :class="{ disabled: currentPage === 1 }"
      >
      
      </a>

      <a
        v-for="page in totalPages"
        :key="page"
        :href="generateRoute(page)"
        :class="{ active: currentPage === page }"
        @click.prevent="goToPage(page)"
      >
        {{ page }}
      </a>

      <!-- Next Page -->
      <a 
        :href="generateRoute(currentPage + 1)" 
        aria-label="Go to next page"
        @click.prevent="goToPage(currentPage + 1)"
        :class="{ disabled: currentPage === totalPages }"
      >
      
      </a>

      <!-- Last Page -->
      <a 
        :href="generateRoute(totalPages)"
        aria-label="Go to last page"
        @click.prevent="goToPage(totalPages)"
        :class="{ disabled: currentPage === totalPages }"
      >
      
      </a>
    </div>

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

  fallbackPosts: allPost(filter: { published: { eq: true }, locale: { eq: "en" } }) {
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
      BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
    },

    data() {
      return {
        allPosts: [],
        currentPage: 1,
        postsPerPage: 12,
      }
    },

    computed: {
      lang(){
        return this.$locale
      },
      totalPages() {
        return Math.ceil(this.allPosts.length / this.postsPerPage);
      },

      paginatedPosts() {
        const start = (this.currentPage - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        return this.allPosts.slice(start, end);
      }
    },

    methods: {

      addFallbackPosts() {

        this.$page.fallbackPosts.edges.map(p => {
          const path =  p.node.path.substring(0, p.node.path.length - 1).split("/").pop();

          const exists =  this.allPosts.filter(existingItem => {
            const localePath = existingItem.node.path.substring(0, existingItem.node.path.length - 1).split("/").pop()
            return localePath === path;
          });

          if(!exists[0]) {
            this.allPosts.push(p)
          }
    
        })
      
      },

      getAllPosts() {
        if(this.lang !== 'en') {
          this.$page.posts.edges.map(post => {
            this.allPosts.push(post)
          })
          this.addFallbackPosts();
        } else {
          this.allPosts.push(...this.$page.posts.edges);
        }
      },
      goToPage(page) {
        if (page !== this.currentPage) {
          if (page === 1) {
            // Redirect to clean path without query for the first page
            this.$router.push({ path: this.$route.path });
          } else {
            // Redirect to query-based path for other pages
            this.$router.push({ path: this.$route.path, query: { page } });
          }
        }

      },

      generateRoute(page) {
        return page === 1 ? this.$route.path : `${this.$route.path}?page=${page}`;
      },

    },

    watch: {
      '$route.query.page': {
        // immediate: true,
        handler(newPage) {
          const parsedPage = parseInt(newPage, 10) || 1;
          if (parsedPage > this.totalPages) {
            this.currentPage = 1; // Redirect to the first page
            this.$router.push({ path: this.$route.path });
          } else {
            this.currentPage = parsedPage;
          }
        },
      },
    },

   mounted() {
      const pageFromQuery = parseInt(this.$route.query.page, 10);
      this.currentPage = pageFromQuery > 0 ? pageFromQuery : 1;
      this.getAllPosts();
      this.allPosts = this.allPosts.sort((a,b) => (new Date(b.node.date) - new Date(a.node.date)));
      if (pageFromQuery > this.totalPages) { 
        this.currentPage = 1; 
        this.$router.push({ path: this.$route.path });
      }
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

  /* pagination */


  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--space) 0;
  }

  .pagination a {
    color: var(--color-blue);
    text-decoration: none;
  }

  .pagination a:not(:last-child) {
    margin-right: 45px;
  }


  .pagination a.active {
    color: var(--color-dark);
  }

  .pagination a:hover {
    opacity: 0.5;
  }

  .pagination a[aria-label="Go to first page"],
  .pagination a[aria-label^="Go to last page"],
  .pagination a[aria-label^="Go to previous page"],
  .pagination a[aria-label^="Go to next page"]
   {
    font-family: 'customIcons';
    font-size: 1.5rem;
  }

  .pagination a[aria-label="Go to first page"],
  .pagination a[aria-label^="Go to previous page"]
  {
    color: var(--color-dark);
  }

  .pagination a[aria-label^="Go to last page"],
  .pagination a[aria-label^="Go to next page"] {
    display: inline-block;
    transform: scale(-1);
  }

  .pagination .disabled {
    display: none !important;
  }


  @media screen and (max-width: 480px) {
    .pagination a:not(:last-child) {
      margin-right: 25px;
    }
  }

  /* end of pagination  */

</style> 


