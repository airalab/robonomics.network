<!-- 
todo:
Используем где кнопки везде компонент.
Надо его аккуратно переименовать во что-то более специфичное, 
то есть выбрать приставку для всех "публичных" компонентов этого сайта. 
Что-то короткое не больше 4 символов (из разряда my-button как обычно в примерах пишут, но не так конечно)
-->
<template>

  <component 
      :is="link ? 'a' : 'button'"
      :href="link"
      :target="target"
      :class="classes"
      :disabled="disabled"
      @click="$emit('click')"
      :style="{transform: 'scale('+scale+')'}"
      :v-smooth-scroll="anchor ? '{ updateHistory: false, offset: -250 }' : null"
      class="button"
    >

      <template v-if="label">{{label}}</template>
      <template v-else><slot/></template>
  </component>

</template>



<script>

export default {

  props: {

    anchor: {
      type: Boolean,
      default: false
    },

    button: {
      type: String,
      default: 'border',
      // validator: function (value) {
      //   return ['border', 'primary', 'block'].indexOf(value) !== -1;
      // }
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

    disabled: { 
      type: Boolean,
      default: false
    },

    label: {
      type: String
    },
    
    link: {
      type: String
    },

    scale: {
      type: String,
      default: '1',
    }
  },

  computed: {
    classes() {
      return {
        [`button`]: true,
        [`${this.button}`]: true,
        [`button-${this.color}`]: this.color,
        [`button-selfalign-${this.selfalign}`]: this.selfalign,
      };
    },

    target() {
      if (process.isClient) {
          if(!this.link) {
          return null
        } else {
          let parser = document.createElement('a')
          parser.to = this.href
          if (  parser.host !== window.location.host ) {
            return '_blank'
          }
        }
      }
    }
  },

}
</script>

<style scoped>
  .button, button {
    --b-color-background: var(--color-blue);
    --b-color-text: var(--color-light);
    --b-color-shadow: var(--color-dark);

    padding: .8rem 1.2rem;
    line-height: 1;
    font-weight: 700;

    background-color: var(--b-color-background);
    color: var(--b-color-text);
    box-shadow: 4px 4px 0 var(--b-color-shadow);
    border-color: var(--b-color-background);
    text-transform: uppercase;

    cursor: pointer;
    text-decoration: none;

    transition: background-color 0.25s ease-in-out;
  }

  a {
    display: inline-block;
  }

  .button[disabled], button[disabled] {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.4;
  }
  
  .button select {

    display: inline-block;
    vertical-align: middle;

    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-button-select);
    font-size: 80%;
    font-family: var(--font-family-code);
    font-weight: bold;
    line-height: 1;
    padding: .5rem;
    padding-right: 30px;

    background-image: url('/select-arrow.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 24px/4) 50%;

    color: var(--color-light);

    overflow: hidden;
  }

  .button.block, button.block{
    display: block;
    width: 100%;
    margin: calc(var(--space)/2) 0;
  }

  .button.small {
    padding: 0.3rem;
  }

  .button.large {
    padding: 0.8rem 1.4rem;
    font-size: calc(var(--base-font-size) * 1.2);
  }

  .button.orange, button.orange {
    background-color: var(--color-orange);
    border-color: var(--color-orange);
    box-shadow: 2px 2px 0 var(--color-orange-rgba);
  }

  .button.white, button.white {
    color: var(--color-dark);
    background-color: var(--color-light);
    border-color: var(--color-dark);
    box-shadow: 2px 2px 0 var(--color-dark);
  }

  .button:hover {
    --b-color-background: var(--color-violet-mid);
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

  .dark-theme .button-violet:hover {
    --b-color-background: #000;
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
