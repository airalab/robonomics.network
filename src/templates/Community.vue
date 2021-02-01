<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.community.title"
      :pageDescription = "$page.community.description"
    />

    <div class="layout__title">
      <h1>{{ $page.community.title }}</h1>
    </div>

    <section>

    <Abstract v-if="$page.community.abstract" :text="$page.community.abstract"/>

    <div class="layout landing">
      <VueRemarkContent />
    </div>
  
      <!--<div class="layout" v-html="$page.land.content" />-->

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
    },
    // computed: {
    //   CoverImage() {
    //     if ( this.$page.post.cover_image.src )
    //       return
    //   }
    // }

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

