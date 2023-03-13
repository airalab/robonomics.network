<template>
  <layout>

    <MetaInfo
      pageTitle = "Nav Papers"
    />

    <section class="layout layout__text">
        <h1>{{$ts('Nav Papers')}}</h1>
        <share :assets="papers"/>
    </section>

  </layout>
</template>

<style scoped>

</style>

<script>

  import papers from '@/data/papers.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      share: () => import('~/components/ShareOld.vue'),
    },

    computed: {
      papers () {
        return papers
      }
    },
  }
</script>
