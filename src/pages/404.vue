<template>
  <layout-inside>

    <MetaInfo
      :pageTitle = "'Page not found'"
      :pageDescription = "'In some reason the page you were looking for was not found (maybe it was deprecated or url has a typo). Anyway, you may use navigation on robonomics.network to find what you need.'"
    />

    <div class="layout__content layout__text">
      <h1>404 – page not found</h1>
    </div>

    <div class="layout__content layout__text">
      <p>In some reason the page you were looking for wasn't found (maybe it was deprecated or url has a typo). Anyway, you may use navigation below to find what you need.</p>

      <Navigation />
    </div>

  </layout-inside>
</template>


<script>
  import Navigation from '~/components/Navigation.vue'
  import MetaInfo from '~/components/MetaInfo.vue'

  export default {

    components: {
      Navigation,
      MetaInfo
    }

  }
</script>