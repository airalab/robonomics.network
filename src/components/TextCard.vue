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
    <rbnet-button v-if="link && linkText && linkButton" :link="link" :label="linkText" button="primary" class="large"/>

  </div>
</template>




<script>

export default {

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
        return ['small', 'mid', 'big', 'block'].indexOf(value) !== -1;
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
        return ['transparent', 'white', 'darkblue', 'gradient'].indexOf(value) !== -1;
      }
    },

    shadow: {
      type: String,
      default: 'gray',
      validator: function (value) {
        return ['light', 'gray', 'dark'].indexOf(value) !== -1;
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
        [`${this.back}`]: this.back,
        [`card-shadow-${this.shadow}`]: this.shadow,
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


<style scoped>

  .card {
    position: relative;
    padding: var(--space);
    margin-bottom: var(--space);
    font-weight: 300;
  }

    /* ORIENTATION */

    .card.icon, .card.image {
      display: grid;
      gap: var(--space);
      align-content: start; 
      align-items: start;
    }

    .card.vertical.alignContent-none,
    .card.vertical.alignContent-none h1,
    .card.vertical.alignContent-none h2,
    .card.vertical.alignContent-none h3,
    .card.vertical.alignContent-none h4,
    .card.vertical.alignContent-none h5,

    .card.alignContent-center,
    .card.alignContent-center h1,
    .card.alignContent-center h2,
    .card.alignContent-center h3,
    .card.alignContent-center h4,
    .card.alignContent-center h5
    { text-align: center; }

    .card.vertical.icon, .card.vertical.image { grid-template-rows: auto 1fr; } /* pic + content */

    .card.gorizontal.alignContent-none,
    .card.gorizontal.alignContent-none h1,
    .card.gorizontal.alignContent-none h2,
    .card.gorizontal.alignContent-none h3,
    .card.gorizontal.alignContent-none h4,
    .card.gorizontal.alignContent-none h5,

    .card.alignContent-left,
    .card.alignContent-left h1,
    .card.alignContent-left h2,
    .card.alignContent-left h3,
    .card.alignContent-left h4,
    .card.alignContent-left h5
    { text-align: left; }

    .card.alignContent-right,
    .card.alignContent-right h1,
    .card.alignContent-right h2,
    .card.alignContent-right h3,
    .card.alignContent-right h4,
    .card.alignContent-right h5
    { text-align: right; }
    
    @media screen and (min-width: 650px) {
      .card.gorizontal.icon, .card.gorizontal.image { grid-template-columns: auto 1fr; } /* pic + content */
    }

    @media screen and (max-width: 650px) {
      .card.gorizontal.icon, .card.gorizontal.image { grid-template-columns: 1fr; }
    }

    .card.alignContentV-middle {
      align-content: center; 
      align-items: center;
    }

    /* end of ORIENTATION */

    /* COLORING */
    .card {
      --color-back: transparent;
      --color-text: var(--clor-dark);
      --color-iconback: #000; 
      
      background-color: var(--color-back);
      color: var(--color-text);
    }

    .card .pic.round.icon { background-color: var(--color-iconback); }

    .card.oldy__link:hover {
      transform: translateY(.2rem);
    }

    .card.oldy__link:hover .pic.round.icon {
        --color-iconback: var(--link-color);
      }

    .card.white {
      --color-back: var(--color-light);
      --color-text: var(--color-dark);
    }
    .card.blue {
      --color-back: var(--link-color);
      --color-text: var(--color-light);
    }
    .card.darkblue {
      --color-back: var(--color-blue);
      --color-text: var(--color-light);
    }

    .card-shadow-light {
      --oldy-box-color: var(--color-light);
    }

    .card-shadow-gray {
      --oldy-box-color: var(--color-gray);
    }

    .card-shadow-dark {
      --oldy-box-color: var(--color-dark);
    }



    .card.blue .pic.round.icon {
        background-color: #000;
    }

      .card.blue.oldy__link:hover .pic.round.icon {
          background-color: var(--link-color);
      }
    /* end of COLORING */

    .card .button {
      text-align: center;
    }


    /* PICTURES */

    .card .pic {
      margin: 0 auto;
      overflow: hidden;

      /* Centering image within */
      display: flex;
      justify-content: center;
      align-items: center;

      /* PICTURES -- SIZING */
      --image-size: 5rem;
      width: var(--image-size);
    }

    .card .pic.round.icon img {
          max-width: 60%;
          max-height: 60%;
        }

      .card .pic.round {
        height: var(--image-size);
        border-radius: calc(var(--image-size)*2);
      }

      .card .pic.mid { --image-size: 10rem }
      .card .pic.big { --image-size: 15rem}
      .card .pic.block { --image-size: 100%}
    

    /*end of PICTURES */

    /* LINK */
    .link.overlap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
      }
    
    /* end of LINK */

    /* CONTENT */
    .card .content h1:not(:last-child),
    .card .content h2:not(:last-child),
    .card .content h3:not(:last-child),
    .card .content h4:not(:last-child),
    .card .content h5:not(:last-child),
    .card .content p:not(:last-child)
    {
      margin-bottom: calc(var(--space) * 0.7);
    }
    /* end of CONTENT */
  
</style>