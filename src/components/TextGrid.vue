<template>

  <section class="grid" :style="style" :class="classes">
    <slot/>
  </section>

</template>




<script>

export default {

  props: {

    orient: {
      type: String,
      default: 'columns',
      validator: function (value) {
        return ['columns', 'rows'].indexOf(value) !== -1;
      }
    },

    layout: {
      type: String,
      default: false,
    },

  },

  computed: {
    style() {
      return {
        [`grid-template-${this.orient}`]: `repeat(${this.layout},1fr)`
      };
    },

    classes() {
      return {
        [`${this.orient}-${this.layout}`]: true
      };
    },
  },

}
</script>


<style lang="scss">
  .grid {
    display: grid;
    gap: var(--space);

    .text_linkCard {
      .button {
        display:block;
      }
    }

    &.columns-4{
      @media screen and (max-width:1380px){
        grid-template-columns: repeat(2,1fr) !important;
      }

      @media screen and (max-width:570px){
        grid-template-columns: 1fr !important;
      }
    }

    &.columns-3{
      @media screen and (max-width:1340px){
        grid-template-columns: 1fr !important;
      }
    }

    &.columns-2{
      @media screen and (max-width: 570px){
        grid-template-columns: 1fr !important;
      }
    }
  }
  
</style>