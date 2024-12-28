<template>
  <div :class=classList>
    <slot></slot>
  </div>
</template>

<script>
export default {

  props: {
    columns: {
      type: Number,
      default: 4,
      validator: function (value) {
        return [1, 2, 3, 4, 5, 6].indexOf(value) !== -1;
      }
    },

    align: {
      type: String,
      default: null,
      validator: function (value) {
        return ['start', 'center', 'end'].indexOf(value) !== -1;
      }
    },

    justify: {
      type: String,
      default: null,
      validator: function (value) {
        return ['start', 'center', 'end'].indexOf(value) !== -1;
      }
    },

    textAlign: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    },

    flexible: {
      type: Boolean,
      default: true
    },

    space: {
      type: String,
      default: 'space'
    }
  },


  computed: {
    classList() {
      return {
        'rb-grid-container': true,
        [`grid-${this.columns}`]: true,
        [`grid-align-${this.align}`]: this.align ? true : false,
        [`grid-justify-${this.justify}`]: this.justify ? true : false,
        [`grid-text-${this.textAlign}`]: this.textAlign ? true : false,
        [`grid-flexible`]: this.flexible,
        [`grid-space-${this.space}`]: true,
      };
    },
  },
}
</script>

<style scoped>

  .rb-grid-container {
    display: grid;
    grid-template-rows: 1fr min-content ;
    gap: var(--grid-space);
    align-items: start;
    margin-bottom: var(--space);
  }

  .grid-space-0 {
    --grid-space: 0rem;
  }

  .grid-space-space {
    --grid-space: 1rem;
  }

  .grid-space-x2 {
    --grid-space: 4rem;
  }

  .rb-grid-container.grid-1 {
    grid-template-columns: 1fr
  }

  .rb-grid-container.grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .rb-grid-container.grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .rb-grid-container.grid-4 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--text-width) / 4 - var(--grid-space)), 1fr));
  }

  .rb-grid-container.grid-5 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--text-width) / 5 - var(--grid-space)), 1fr));
  }

  .rb-grid-container.grid-6 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--text-width) / 6 - var(--grid-space)), 1fr));
  }

  .rb-grid-container.grid-align-start {
    align-items: start;
  }

  .rb-grid-container.grid-align-center {
    align-items: center;
  }

  .rb-grid-container.grid-align-end {
    align-items: end;
  }

  .rb-grid-container.grid-justify-start {
    justify-items: start;
  }

  .rb-grid-container.grid-justify-center {
    justify-items: center;
  }

  .rb-grid-container.grid-justify-end {
    justify-items: end;
  }

  .rb-grid-container.grid-text-left {
    text-align: left;
  }

  .rb-grid-container.grid-text-center {
    text-align: center;
  }

  .rb-grid-container.grid-text-right {
    text-align: right;
  }

  @media screen and (max-width: 1080px) {
    
    .rb-grid-container.grid-2.grid-flexible {
      grid-template-columns: 1fr 1fr;
    }
  }
  

  @media screen and (max-width: 520px) {

    .rb-grid-container.grid-2.grid-flexible {
      grid-template-columns: 1fr
    }

    .rb-grid-container.grid-3.grid-flexible {
      grid-template-columns: 1fr
    }
  }

</style>