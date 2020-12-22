<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.land.title"
      :pageDescription = "$page.land.description"
    />

    <div class="layout__title">
      <h1>{{ $page.land.title }}</h1>
    </div>

    <section>

    <Abstract v-if="$page.land.abstract" :text="$page.land.abstract"/>

    <div class="layout landing">
      <VueRemarkContent />
    </div>
  
      <!--<div class="layout" v-html="$page.land.content" />-->

    </section>

  </layout>
</template>

<page-query>
query Land ($id: ID!) {
  land: land (id: $id) {
    title
    path
    description
    content
    abstract
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

