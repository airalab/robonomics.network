<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Nav Books')"
    />

    <section class="layout layout__text">
        <h1>{{$ts('Nav Books')}}</h1>
        <share :assets="books"/>
    </section>

  </layout>
</template>

<style scoped>

</style>

<script>

  import books from '@/data/books.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      share: () => import('~/components/Share.vue'),
    },

    computed: {
      books () {
        return books
      }
    },
  }
</script>
