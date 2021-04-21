<template>

  <g-link v-if="link" :to="link" :class="classes" :style="{transform: 'scale('+scale+')'}">{{label}}</g-link>
  <button v-else :class="classes" :style="{transform: 'scale('+scale+')'}" type="submit">{{label}}</button>

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
  },

  computed: {
    classes() {
      return {
        [`button`]: true,
        [`${this.button}`]: true,
      };
    },

  //   src() {
  //     if(this.link) {
  //       return this.link;
  //     }
  //     else {
  //       return '#';
  //     }
  //   }
  },

}
</script>


// <style lang="scss">
//   .button {
//     appearance: none;
//     text-decoration: none;
//     cursor: pointer;

//     display: inline-block;
// 		vertical-align: middle;
// 		vertical-align: -moz-middle-with-baseline;
// 		vertical-align: -webkit-baseline-middle;

//     padding: .5rem .8rem;

// 		text-align: center;

//     &, select {
//       font-family: var(--font-family-code);
//       font-weight: 500;
//       font-size: var(--base-font-size);
//       line-height: 1;
//     }

//   }
// </style>