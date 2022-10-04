<template>
  <layout>

     <MetaInfo
        :pageTitle = "'Robonomics blog, available posts translations'"
        :pageImage = "'/website_cover_blogs.png'"
      />

      <BlogTagsBanner :allTags="tagsList" />

      <div class="text-wrapper">
        <p>
          <b>{{ $ts('This page may need translation') }}.</b>
          <br/>
          {{ $ts('If you want to help us with translation') }}:
        </p>
        <div>
          <span>{{ $ts('contact us at') }}:  <a href="mailto:localization@robonomics.network?subject=Robonomics%20WIKI%20Localization">localization@robonomics.network</a> </span>
        </div>
        <h3>Meanwhile, you can check available translations:</h3>
      </div>

      <section class="layout blog_grid">
        <a class="link" v-for="edge in postList" :key="edge.node.id" :href="edge.node.path" @click="redirectToChosenLocale(edge.node.path, edge.node.locale)">
          <PostCard :post="edge.node" :locale="edge.node.locale"/>
        </a>
      </section>
      
  </layout>
</template>



<page-query>
  query {

    posts: allPost {
      edges {
        node {
          id
          title
          date (format: "D. MMMM YYYY")
          description
          cover_image (width: 1500, quality: 100)
          path
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
    BlogTagsBanner: () => import('~/components/blocks/BlogTagsBanner.vue')
  },

  data() {
    return {
      postTitle: '',
    }
  },

  methods: {
    redirectToChosenLocale(path, locale) {
      if(locale === 'en') {
        const enPath = '/en' + path;
        // window.location.href = 'https://robonomics.network' + enPath;
        window.location.href =  enPath;
      } else {
        // window.location.href = 'https://robonomics.network' + path;
        window.location.href =  path;
      }
    }
  },

  computed: {

    lang(){
      return this.$locale
    },

    postList() {
      return this.$page.posts.edges.filter((e) => {
        const path =  e.node.path; 
        const title = path.match(/\/([^\/]+)[\/]?$/);

        return title[1] === this.postTitle
      })
    },

    tagsList() {
      return this.$page.posts.edges.filter((e) => {
        if(e.node.locale === this.lang) {
          return e.node.tags
        }
      })
    }
  },

  mounted() {
    const path = this.$route.path; 
    const title = path.match(/\/([^\/]+)[\/]?$/);
    this.postTitle = title[1];
  }
}
</script>

<style scoped>
  .layout__title__tag h1 { margin-bottom: 0; }
  .layout__title__tag h2 { margin-top: 0; }

  .link {
    display: block;
    text-decoration: none;
    color: var(--color-dark);
  }

  .link:hover {
    color: var(--color-dark);
  }

  .text-wrapper {
    padding-top: var(--space);
    text-align: center;
  }

</style>

