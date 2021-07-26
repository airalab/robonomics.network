<template>

  <div :class="card_classes">

    <div v-if="icon || image || imageLocal" :class="pic_classes">
      <g-image aria-hidden="true" :src="pic_src"/>
    </div>

    <div class="content" v-if="hasDefaultSlot">
      <slot/>
    </div>

    <g-link v-if="link && !linkButton" :class="link_classes" :to="link">
      <template v-if="linkText">{{linkText}}</template>
    </g-link>
    <Button v-if="link && linkText && linkButton" :link="link" :label="linkText" button="primary" class="large"/>

  </div>
</template>




<script>

export default {

  components: {
      Button: () => import("~/components/Button.vue"),
  },

  data() {
        return {
            isActive: false
        }
    },

  props: {
    link: { type: String },
    linkText: { type: String },
    linkButton: {
      type: Boolean,
      default: false,
    },
    overlap: {
      type: Boolean,
      default: true,
    },

    icon: { type: String },
    image: { type: String },
    imageLocal: { type: String },
    imageSize: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'mid', 'big'].indexOf(value) !== -1;
      }
    },
    imageRound: {
      type: Boolean,
      default: true,
    },

    orientation: {
      type: String,
      default: 'gorizontal',
      validator: function (value) {
        return ['gorizontal', 'vertical'].indexOf(value) !== -1;
      }
    },

    back: {
      type: String,
      default: 'white',
      validator: function (value) {
        return ['transparent', 'white', 'blue', 'gradient'].indexOf(value) !== -1;
      }
    },

    alignContent: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['left', 'center', 'right', 'none'].indexOf(value) !== -1;
      }
    },

    alignContentV: {
      type: String,
      default: 'top',
      validator: function (value) {
        return ['middle', 'top'].indexOf(value) !== -1;
      }
    },

  },


  computed: {

    card_classes() {
      return {
        [`card`]: true,
        [`icon`]: this.icon,
        [`image`]: this.image || this.imageLocal,
        [`${this.orientation}`]: true,
        [`${this.back}`]: true,
        [`alignContent-${this.alignContent}`]: true,
        [`alignContentV-${this.alignContentV}`]: true,
        [`oldy`]: this.back != `transparent`,
        [`oldy__link`]: this.link || this.popup,
      };
    },

    pic_classes() {
      return {
        [`pic`]: true,
        [`round`]: this.imageRound,
        [`icon`]: this.icon,
        [`image`]: this.image || this.imageLocal,
        [`${this.imageSize}`]: true,
      };
    },

    link_classes() {
      return {
        [`link`]: true,
        [`text`]: this.linkText,
        [`overlap`]: this.overlap
      };
    },

    pic_src() {
      if (this.icon || this.image) {
        return this.icon || this.image
      }
      if (this.imageLocal) {
        return require(`!!assets-loader!@/assets/images/${this.imageLocal}`)
      }
    },

    hasDefaultSlot () {
      return !!this.$slots.default
    },
  },

}
</script>


<style lang="scss">

  .card {
    position: relative;
    padding: var(--space);
    margin-bottom: var(--space);
    font-weight: 300;

    /* ORIENTATION */

    &.icon, &.image {
      display: grid;
      gap: var(--space);
      align-content: start; 
      align-items: start;
    }

    &.vertical {
      &.alignContent-none {
        &, h1, h2, h3, h4, h5 { text-align: center; }
      }

      &.icon, &.image { grid-template-rows: auto 1fr; } //pic + content
    }

    &.gorizontal {
      &.alignContent-none {
        &, h1, h2, h3, h4, h5 { text-align: left; }
      }

      @media screen and (min-width: 550px) {
        &.icon, &.image { grid-template-columns: auto 1fr; } //pic + content
      }
      
    }

    &.alignContent-center { 
      &, h1, h2, h3, h4, h5 { text-align: center; }
    }

    &.alignContent-left {
      &, h1, h2, h3, h4, h5 { text-align: left; }
    }

    &.alignContent-right {
      &, h1, h2, h3, h4, h5 { text-align: right; }
    }

    &.alignContentV-middle {
      align-content: center; 
      align-items: center;
    }

    /* end of ORIENTATION */

    /* COLORING */
    --color-back: transparent;
    --color-text: #000;
    --color-iconback: #000; 
    
    background-color: var(--color-back);
    color: var(--color-text);

    .pic.round.icon { background-color: var(--color-iconback); }

    &.oldy__link:hover {
      transform: translateY(.2rem);

      .pic.round.icon {
        --color-iconback: var(--link-color);
      }
    }

    &.white {
      --color-back: #fff;
      --color-text: #000;
    }


    &.blue {
      --oldy-box-color: #fff;
      --color-back: var(--link-color);
      --color-text: #fff;

      .pic.round.icon {
        background-color: #000;
      }

      &.oldy__link:hover {
        .pic.round.icon {
          background-color: var(--link-color);
        }
      }
    }
    /* end of COLORING */


    /* PICTURES */

    .pic {
      margin: 0 auto;
      overflow: hidden;

      /* Centering image within */
      display: flex;
      justify-content: center;
      align-items: center;

      &.round.icon {
        img {
          max-width: 60%;
          max-height: 60%;
        }
      }

      /* PICTURES -- SIZING */
      --image-size: 5rem;
      width: var(--image-size);
      &.round {
        height: var(--image-size);
        border-radius: calc(var(--image-size)*2);
      }

      &.mid { --image-size: 10rem }
      &.big { --image-size: 15rem}
    }

    /*end of PICTURES */

    /* LINK */
    .link {
      &.overlap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
      }
    }
    /* end of LINK */

    /* CONTENT */
    .content {
      h1, h2, h3, h4, h5, p {
        &:not(:last-child) {
          margin-bottom: calc(var(--space) * 0.7);
        }
      }
    }
    /* end of CONTENT */

  }
</style>