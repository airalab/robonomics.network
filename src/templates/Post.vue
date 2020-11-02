<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.post.title"
      :pageDescription = "$page.post.description"
    />

    <div class="layout__title">
      <h1>{{ $page.post.title }}</h1>
    </div>

    <div class="layout__content layout__text">
      <PostMeta :post="$page.post" />
    </div>

    <section class="post layout__content layout__text">
      <div class="post__header">
        <g-image :alt="$page.post.title" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

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
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMMM D, YYYY")
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 1500, quality: 100)
  }
}
</page-query>


<script>

  export default {

    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      PostMeta: () => import('~/components/PostMeta.vue'),
      PostTags: () => import('~/components/PostTags.vue'),
    }

  }

</script>


<style lang="scss">
  .post {
    background-color: var(--color-light);
    padding: var(--space);
    text-align: left;

    &__header {
      margin-bottom: var(--space-text);
    }
  }
</style>

