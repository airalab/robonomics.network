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
    description,
    content
  }
}
</page-query>


<script>

  export default {

    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
    }

  }

</script>


<style lang="scss">
  .landing {
    text-align: center;
  }
</style>

