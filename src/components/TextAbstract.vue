<template>

  <section class="text_abstract layout layout__text" :class="className" v-html="text" />

</template>




<script>

export default {

  props: {
    text: '',
    className: '',
  }

}
</script>


<style lang="scss">
  .text_abstract {
    font-size: 1.7rem;
    font-style: italic;
    margin-bottom: var(--space);
    text-align: center;

    @media screen and (max-width:1060px){
        font-size: 1.7rem;
    }

    @media screen and (max-width:1000px){
        font-size: 1.4rem;
    }
  }

  .post_abstract {
    font-weight: 500;
    font-size: var(--base-font-size);
    font-style: normal;
  }
</style>