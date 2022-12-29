<template>

  <component 
      :is="link ? 'a' : 'button'"
      :href="link"
      :class="classes"
      :disabled="disabled"
      @click="$emit('click')"
      :style="{transform: 'scale('+scale+')'}"
      :v-smooth-scroll="anchor ? '{ updateHistory: false, offset: -250 }' : null"
    >

      <template v-if="label">{{label}}</template>
      <template v-else><slot/></template>

  </component>


  <!-- <a 
      v-if="link"
      :href="link"
      :class="classes"
      :target="external() ? '_blank' : null"
      :rel="external() ? 'noopener' : null"
      :disabled="disabled"
      @click="$emit('click')"
      :style="{transform: 'scale('+scale+')'}"
      :v-smooth-scroll="anchor ? '{ updateHistory: false, offset: -250 }' : null"
    >

      <template v-if="label">{{label}}</template>
      <template v-else><slot/></template>

  </a>


  <button 
      v-else
      :class="classes"
      :disabled="disabled"
      @click="$emit('click')"
      :style="{transform: 'scale('+scale+')'}"
    >

      <template v-if="label">{{label}}</template>
      <template v-else><slot/></template>

  </button> -->

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
    },

    click: {
      type: Function
    },

    color: {
      type: String,
      default: 'blue',
      validator: function (value) {
        return ['blue', 'green', 'violet', 'red', 'bluevivid'].indexOf(value) !== -1;
      }
    },

    anchor: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        [`button`]: true,
        [`${this.button}`]: true,
        [`button-${this.color}`]: this.color,
      };
    },
  },

}
</script>

<style scoped>
  .button {
    --b-color-background: var(--color-blue-mid);
    --b-color-text: var(--color-light);
    --b-color-shadow: var(--color-dark);

    padding: .8rem 1.2rem;
    line-height: 1;

    background-color: var(--b-color-background);
    color: var(--b-color-text);
    box-shadow: 4px 4px 0 var(--b-color-shadow);
    border-color: var(--b-color-background);
    text-transform: uppercase;
  }

  .button:hover {
    --b-color-background: var(--color-blue-light);
    background-color: var(--b-color-background);
  }

  .button-green {
    --b-color-background: var(--color-green);
  }
  .button-green:hover {
    --b-color-background: var(--color-green-dark);
  }

  .button-red {
    --b-color-background: var(--color-red);
  }
  .button-red:hover {
    --b-color-background: var(--color-red-dark);
  }


  .button-violet {
    --b-color-background: var(--color-purple-mid);
    color: #fff;
  }
  .button-violet:hover {
    --b-color-background: var(--color-dark);
  }
  
  .button-bluevivid {
    --b-color-background: var(--color-blue-vivid);
    --b-color-text: #000;
    --b-color-shadow: #000;
  }
  .button-bluevivid:hover {
    --b-color-background: var(--color-orangeYellow);
  }
</style>
