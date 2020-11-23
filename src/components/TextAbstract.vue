<template>

  <div class="text_abstract layout__text" v-html="text" />

</template>




<script>

export default {

  props: {
    text: ''
  }

}
</script>


<style lang="scss">
  .text_abstract {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: var(--space);
    text-align: center;
  }
</style>