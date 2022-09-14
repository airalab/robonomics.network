<template>

  <section v-if="text" class="text_abstract layout layout__text animate" :class="className" v-html="text" v-in-viewport.once/>

  <!-- <section class="text_abstract layout layout__text animate" :class="className" v-in-viewport.once>
    <slot/>
  </section> -->

</template>




<script>

export default {

  props: {
    text: '',
    className: '',
  }

}
</script>


<style scoped>
  .text_abstract {
    font-size: 1.7rem;
    font-style: italic;
    margin-bottom: var(--space);
    text-align: center;
  }

  .post_abstract.text_abstract {
    font-size: 1.7rem !important;
    margin-bottom: 0;
    font-weight: 300;
    font-size: var(--base-font-size);
    /* font-style: normal; */
  }

  @media screen and (max-width:1060px){
        .text_abstract { font-size: 1.7rem; }
    }

    @media screen and (max-width:1000px){
        .text_abstract { font-size: 1.4rem; }
        .post_abstract.text_abstract {
          font-size: 1.4rem !important;
        }
    }

</style>