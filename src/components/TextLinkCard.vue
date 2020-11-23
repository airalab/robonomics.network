<template>

  <section class="text_linkCard" :class="classes">
    <h3 v-if="title">{{title}}</h3>
    <div class="text_linkCard__description"><slot/></div>
    <g-link v-if="button" :to="link" class="button button__border">{{button}}</g-link>
  </section>

</template>




<script>

export default {

  props: {
    title: {
      type: String,
      default: false,
    },

    link: {
      type: String,
      default: false,
    },

    button: {
      type: String,
      default: false,
    },

    back: {
      type: String,
      default: 'white',
      validator: function (value) {
        return ['white', 'gradient'].indexOf(value) !== -1;
      }
    },
  },

  computed: {
    classes() {
      return {
        [`text_linkCard__${this.back}`]: true,
      };
    },
  },

}
</script>


<style lang="scss">
  .text_linkCard {
    background-color: var(--color-light);
    padding: var(--space);
    text-align: center;

    h3 {
      margin-bottom: calc(var(--space-text)/2);
    }

    &__description {
      margin-bottom: var(--space-text);
    }

    &__description:empty {
      display:none
    }
  }

  .text_linkCard__gradient {
    background: linear-gradient(45deg,  #5DC0DF, #355bd6, var(--link-color-hover), #355bd6, #5DC0DF);
    color: #fff;
    padding-top: calc(var(--space)*2);
    padding-bottom: calc(var(--space)*2);

    .button__border {
      color: #fff;
      border-color: #fff;
      background: transparent;

      &:hover{
        background: #fff;
        color: var(--link-color);
        border-color: var(--link-color)
      }
    }
  }

</style>