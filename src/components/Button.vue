<template>

  <g-link v-if="link" :to="link" :class="classes" :style="{transform: 'scale('+scale+')'}">{{label}}</g-link>
  <button v-else :class="classes" :style="{transform: 'scale('+scale+')'}" type="submit" :disabled="disabled">{{label}}</button>

</template>




<script>

export default {

  props: {

    link: {
      type: String
    },

    label: {
      type: String
    },

    button: {
      type: String,
      default: 'border',
      // validator: function (value) {
      //   return ['border', 'primary', 'block'].indexOf(value) !== -1;
      // }
    },

    scale: {
      type: String,
      default: '1',
    },

    disabled: { 
      type: Boolean,
      default: false
    }
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
