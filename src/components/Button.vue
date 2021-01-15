<template>

  <g-link :to="link" :class="classes" :style="{transform: 'scale('+scale+')'}">{{label}}</g-link>

</template>




<script>

export default {

  props: {

    link: {
      type: String,
      default: false,
    },

    label: {
      type: String,
      default: false,
    },

    button: {
      type: String,
      default: 'border',
      validator: function (value) {
        return ['border', 'primary', 'block'].indexOf(value) !== -1;
      }
    },

    scale: {
      type: String,
      default: '1',
    },
  },

  computed: {
    classes() {
      return {
        [`button`]: true,
        [`${this.button}`]: true,
      };
    },
  },

}
</script>


<style lang="scss">

</style>