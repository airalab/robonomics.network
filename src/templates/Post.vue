<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.post.title"
      :pageDescription = "$page.post.description"
    />

    <div class="layout__title blog_title">
      <h1>{{ $page.post.title }}</h1>
    </div>

    <div class="layout__content layout__text">
      <PostMeta :post="$page.post" />
    </div>


    <div class="post__header">
        <g-image :alt="$page.post.title" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
    </div>


    <section class="post layout layout__text">
       <VueRemarkContent />
    </section>

    <PostRelated />
       
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
query($id: ID!) {
  post(id: $id) {
    title
    cover_image (width: 2000, quality: 100)
    description
    path
    date (format: "MMMM D, YYYY")
    content
    related
  }
  allPost{
    edges {
      node {
        title
        cover_image (width: 2000, quality: 100)
        path
      }
    }
  }
}

</page-query>


<script>

  export default {

    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      PostMeta: () => import('~/components/PostMeta.vue'),
      PostTags: () => import('~/components/PostTags.vue'),
      PostCard: () => import('~/components/PostCard.vue'),
      PostRelated: () => import('~/components/PostRelated.vue'),
    }

  }

</script>


<style lang="scss">
  .post {
    // background-color: var(--color-light);
    padding: var(--space);
    text-align: left;
    font-weight: 400;

    &__header {
      margin-top: var(--space-text);
      // margin-bottom: var(--space-text);
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;

      img {
        display: block;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    h1,h2,h3,h4,h5 {
      a[aria-hidden="true"]{
        margin-right: 10px;
        text-decoration: none;
      }
    }
  }
</style>

