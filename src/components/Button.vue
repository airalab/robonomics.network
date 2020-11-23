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

    style: {
      type: String,
      default: 'border',
      validator: function (value) {
        return ['border', 'primary'].indexOf(value) !== -1;
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
        [`button__${this.style}`]: true,
      };
    },
  },

}
</script>


<style lang="scss">

</style>