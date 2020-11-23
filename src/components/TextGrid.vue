<template>

  <section class="grid" :style="style">
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
        [`grid-template-${this.orient}`]: this.layout,
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
  }
</style>