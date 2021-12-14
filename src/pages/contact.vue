<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Nav Contact')"
    />

    <section class="layout layout__text">
        <h1>{{$ts('Nav Contact')}}</h1>
        <share :assets="contact"/>
    </section>

  </layout>
</template>


<script>

  import contact from '@/data/contact.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      share: () => import('~/components/Share.vue'),
    },

    computed: {
      contact () {
        return contact
      }
    },
  }
</script>
