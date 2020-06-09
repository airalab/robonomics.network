<template>
  <layout-inside>

    <div class="layout__content layout__text">
      <h1>404 – page not found</h1>
    </div>

    <div class="layout__content layout__text">
      <p>In some reason the page you were looking for wasn't found (maybe it was deprecated or url has a typo). Anyway, you may use navigation below to find what you need.</p>

      <navigation />
    </div>

  </layout-inside>
</template>


<script>
  import navigation from '~/components/Navigation.vue'

  export default {
    components: {
      navigation
    }
  }
</script>