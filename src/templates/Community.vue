<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.community.title"
      :pageDescription = "$page.community.description"
      :pageImage = "[$page.community.cover_image.src ? $page.community.cover_image.src : '/website_cover.png?v=2']"
    />

    <div class="layout__title">
      <h1>{{ $page.community.title }}</h1>
    </div>

    <section>

      <Abstract v-if="$page.community.abstract" :text="$page.community.abstract"/>

      <div class="layout landing">
        <VueRemarkContent />
      </div>

    </section>

  </layout>
</template>

<page-query>
query Community ($id: ID!) {
  community: community (id: $id) {
    title
    path
    description
    content
    abstract
    cover_image (width: 2000, quality: 100)
  }
}
</page-query>


<script>

  export default {

    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      Abstract: () => import('~/components/TextAbstract.vue'),
    }

  }

</script>


<style lang="scss">
  .landing {
    text-align: center;

    h1,h2,h3,h4,h5 {
      a[aria-hidden="true"]{
        display: none;
      }
    }
  }
</style>

