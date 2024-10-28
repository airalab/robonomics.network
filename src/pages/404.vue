<template>
  <layout>

    <MetaInfo
      pageTitle = "Page not found"
      pageDescription = "In some reason the page you were looking for was not found. Maybe it was deprecated or url has a typo. Anyway, you may use navigation on robonomics.network to find what you need."
    />
    <section class="section__solid section__404">
      <div class="layout layout__content">
        <h1 class="title-lined" v-show="$t('This page is out of your space')"><span>{{$t('This page is out of your space')}}</span></h1>
      </div>
      <p>{{ $t('Check url once more or create an') }} <g-link class="link" to="https://github.com/airalab/robonomics.network/issues">issue</g-link> {{ $t('telling us that you’ve got 404 error (do not forget to mention current url)') }}</p>

    </section>


  </layout>
</template>


<script>
  import MetaInfo from '~/components/MetaInfo.vue'
  import Parallax from 'parallax-js'

  export default {

    components: {
      MetaInfo
    },

    mounted() {
      const scene = document.getElementById('parallax');
      const parallaxInstance = new Parallax(scene);
    },

  }
</script>

<style scoped>
  .section__404 {
    padding-left: var(--space);
    padding-right: var(--space);
    color: #111;
    overflow: hidden;
  }

  .section__404 h1 {
    position: relative;
    margin-top: 0;
    padding-top: 0;
  }

  .section__404 p {
    margin: 0 auto;
    max-width: 625px;
    width: 100%;
    text-align: center;
  }

  .link {
    text-decoration: none;
    color: var(--color-link-contacts);
  }


</style>