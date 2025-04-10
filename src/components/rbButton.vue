<template>

  <component 
    v-bind="$attrs"
    :is="componenttype"
    :class="classes"
    :style="{transform: 'scale('+scale+')'}"
    :v-smooth-scroll="anchor ? '{ updateHistory: false, offset: -250 }' : null"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot/>
  </component>

</template>



<script>

export default {

  props: {

    anchor: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    buttonstyle: {
      type: String,
      default: '3d',
      validator: function (value) {
        return ['3d', 'flat'].indexOf(value) !== -1;
      }
    },

    buttoncolor: {
      type: String,
      default: 'blue',
      validator: function (value) {
        return ['blue', 'green', 'pale-blue', 'vivid-blue', 'violet', 'white', 'black', 'accent-green'].indexOf(value) !== -1;
      }
    },

    link: {
      type: String
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
        [`rb-button`]: true,
        [`rb-button-block`]: this.block,
        [`rb-button-${this.buttonstyle}`]: this.buttonstyle,
        [`rb-button-${this.buttoncolor}`]: this.buttoncolor
      };
    },

    componenttype() {
      if(this.$attrs.to) {
        return 'g-link'
      } else {
        return 'button'
      }
      
    }
  },

}
</script>

<style scoped>

  .rb-button {
    --b-color-background: var(--rb-color-blue);
    --b-color-background-hover: var(--rb-color-blue-dark);
    --b-color-text: var(--rb-color-light);
    --b-color-shadow: var(--rb-color-dark);
    --b-color-borderwidth: 1px;
    --b-color-padding: 1rem;
    --b-color-hover: var(--rb-color-light);

    align-content: center;
    appearance: none;
    background-color: var(--b-color-background);
    border-color: var(--b-color-background);
    border-style: solid;
    border-width: var(--b-color-borderwidth);
    color: var(--b-color-text);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family);
    font-size: var(--base-font-size);
    font-variation-settings: var(--font-flex-bold);
    font-weight: 500;
    gap: var(--b-color-padding);
    justify-content: center;
    line-height: 1;
    padding: var(--b-color-padding);
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  .rb-button:hover {
    background-color: var(--b-color-background-hover);
    border-color: var(--b-color-background-hover);
    color: var(--b-color-hover);
  }

  .rb-button-3d {
    box-shadow: 4px 4px 0 var(--b-color-shadow);
  }

  .rb-button[disabled] {
    pointer-events: none;
    filter: grayscale(1);
    --b-color-background: var(--rb-color-gray);
  }

  .rb-button-block{
    display: block;
    width: 100%;
  }

  .rb-button-green {
    --b-color-background: var(--rb-color-green);
    --b-color-background-hover: var(--rb-color-green-dark);
  }

  .rb-button-pale-blue {
    --b-color-background: var(--rb-color-pale-blue);
    --b-color-background-hover: var(--rb-color-pale-blue-dark);
  }

  .rb-button-vivid-blue {
    --b-color-text: hsl(299, 0%, 0%);
    --b-color-background: var(--rb-color-vivid-blue);
    --b-color-background-hover: var(--rb-color-vivid-blue-dark);
  }

  .rb-button-violet{
    --b-color-background: var(--rb-color-violet);
    --b-color-background-hover: var(--rb-color-violet-dark);
  }

  .rb-button-white {
    --b-color-background: var(--rb-color-light);
    --b-color-background-hover: var(--rb-color-gray);
    --b-color-text: var(--rb-color-dark);
  }

  .rb-button-black {
    --b-color-background: var(--rb-color-dark);
  }

  .rb-button-accent-green{
    --b-color-background: var(--rb-color-green-accent);
    --b-color-background-hover: var(--rb-color-violet-dark);
    --b-color-text: var(--rb-color-dark);
    font-weight: 900;
  }
</style>
