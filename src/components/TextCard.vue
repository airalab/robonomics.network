<template>
  <div class="card" :class="classes" @focus="isFocused = true" @blur="isFocused = false; isActive = false" tabindex="0" @click="toggleActive">

    <div v-if="icon" class="icon"><img alt="" :src="icon"/></div>
    <div v-if="image" class="image" :class="{icon: imageRound}"><img alt="" :src="image"/></div>
    
    <div class="content">
      <slot/>
    </div>

    <g-link class="link" v-if="link" :to="link">Link</g-link>

  </div>
</template>




<script>

export default {

  data() {
        return {
            isActive: false,
            isFocused: false
        }
    },

  methods: {
    toggleActive: function (event) {
      this.isActive = !this.isActive;
    }
  },

  props: {
    link: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    image: {
      type: String,
      default: '',
    },

    button: {
      type: String,
      default: '',
    },

    orientation: {
      type: String,
      default: 'gorizontal',
    },

    back: {
      type: String,
      default: 'white',
      validator: function (value) {
        return ['white', 'gradient', 'transparent'].indexOf(value) !== -1;
      }
    },

    imageSize: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'big'].indexOf(value) !== -1;
      }
    },
    
    popup: {
      type: Boolean,
      default: false,
    },

    imageRound: {
      type: Boolean,
      default: true,
    },

  },


  computed: {


    classes() {
      return {
        [`card-icon`]: this.icon,
        [`card-image`]: this.image,
        [`card-link`]: this.link || this.popup,
        [`oldy`]: this.back != `transparent`,
        [`oldy__link`]: this.link || this.popup || this.back != `transparent`,
        [`card-${this.back}`]: true,
        [`card-imageSize-${this.imageSize}`]: this.icon || this.image,
        [`${this.orientation}`]: true,
        [`card-popup`]: this.popup,
        [`active`]: this.isActive&&this.isFocused,
      };
    },
  },

}
</script>


<style lang="scss">
  .card {
    position: relative;
    padding: var(--space);
    margin-bottom: var(--space);

    h1, h2, h3, h4, h5 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .content {
      font-size: 85%;

      p:not(:last-child) {
        margin-bottom: calc(var(--space-text) * 0.5);
      }
    }

    .content > *:not(:first-child) {
      margin-top: 1rem;
    }




    &-white { 
      background: #fff;
    }

    &-gradient { 
      background: linear-gradient(45deg,  #5DC0DF, #355bd6, var(--link-color-hover), #355bd6, #5DC0DF);
      color: #fff;

      padding-top: calc(var(--space)*2);
      padding-bottom: calc(var(--space)*2);

      .button__border {
        border-color: #fff;
        color: #fff;
        background-color: transparent;
      }
    }

    &-transparent {
      background-color: transparent;
      border-top: 1px dashed var(--text-color)
    }





    &-icon, &-image {
      display: grid;
      gap: var(--space);
      text-align: left;

      .icon {
        background-color: var(--text-color);
        // background-color: var(--color-green);
        // background: linear-gradient(45deg,  #5DC0DF, #355bd6, var(--link-color-hover), #355bd6, #5DC0DF);

        display: flex;
        justify-content: center;
        align-items: center;
        
        img {
          display: inline-block;
          max-width: 60%;
          max-height: 60%;
        }
      }

    }


    &-image {
      
        .image {
          overflow: hidden;

          img {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
        }
     }




    &-link {
      position: relative;

      &:hover {
        // color: var(--link-color-hover);
        transform: translateY(.2rem);

        // .icon{
        //   background-color: var(--link-color-hover);
        // }
    }

      .link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.0;
        overflow: hidden;
        text-indent: -9999px;
        z-index: 0;
      }

      .icon {
        background-color: var(--link-color);
      }
    }

  }


  .card-imageSize-small {
    &.gorizontal {
      grid-template-columns: 70px auto;

      .icon {
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
    }

    &.vertical {
      grid-template-rows: 100px auto;
      justify-items: center;
      text-align: center;

      .icon {
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }
    }
  }

  .card-imageSize-big {
    &.gorizontal {
          grid-template-columns: 120px auto;

          .icon {
            width: 120px;
            height: 120px;
            border-radius: 60px;
          }
      }
  }


  .card-popup {
    .content > .button { pointer-events: none; }
  }

  .card .popup {
      position: absolute;
      top: calc(var(--space)/2*(-1));
      left: 0;
      right: 0;
      bottom: 0;

      padding: calc(var(--space)/2);

      background-color: var(--color-light);

      transform-origin: 50% 100%;
      transform: scale(0);
    }


    .card.active .popup {
      transform: scale(1);
    }
</style>