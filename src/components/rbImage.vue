<template v-if="zoom">
  <figure class="rb-image" :class="{'rb-image-space': space}">
    <g-link 
      v-if="pictureLink"
      :to="pictureLink" 
      class="rb-image__link"
      target="_blank"
    >
      <g-image 
        v-if="!isGif() && type === 'markdown'" 
        ref="image" 
        v-bind="$attrs"
        :src="picture" 
      />

      <img v-if="isGif() && type === 'markdown'" v-bind="$attrs" />

    </g-link>
    <template v-else>
      <g-image 
        v-if="!isGif() && type === 'markdown'" 
        ref="image" 
        v-bind="$attrs"
        :src="picture" 
      />

      <img v-if="isGif() && type === 'markdown'" v-bind="$attrs" :src="picture" />
    </template>
    <figcaption v-if="caption" :class="classListCaption">{{caption}}</figcaption>
  </figure>
</template>

<script>

export default {
  inheritAttrs: false,

  props: {
    caption: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'markdown'
    },
    zoom: {
      type: Boolean,
      default: false
    },
    captionCenter: {
      type: Boolean,
      default: false
    },
    captionSize: {
      type: String,
      default: 'normal'
    },
    captionItalic: {
      type: Boolean,
      default: true
    },
    space: {
      type: Boolean,
      default: true
    }
  },

  data(){
    return {
      picture: require(`!!assets-loader!@imagesMarkdown/${this.src.replace('../', '').replace('./', '')}`),
    }
  },

  computed: {

    pictureLink() {
      if(this.link) {
        return this.link
      } else {
        if(this.zoom) {
          return this.picture.src
        } else {
          return null
        }
      }
    },

    classListCaption() {
      return {
        'rb-image__text': true,
        [`rb-image-text-size-${this.captionSize}`]: true,
        [`caption-center`]: this.captionCenter,
        [`caption-italic`]: this.captionItalic
      };
    },
  },

  methods: {
    isGif() {
      const dotIndex = this.src.lastIndexOf('.');
      const format = this.src.substring(dotIndex);

      if(format === '.gif') {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<style scoped>
  .rb-image {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .rb-image-space {
    margin-bottom: var(--space);
  }

  .rb-image__link[target=_blank]:after {
    display: none;
  }

  .rb-image__text {
    align-self: flex-start;
  }

  .rb-image-text-size-normal{
    font-size: var(--base-font-size);
  }

  .rb-image-text-size-small{
    font-size: calc(var(--base-font-size) * 0.5);
  }

  .rb-image-text-size-x2{
    font-size: calc(var(--base-font-size) * 2);
  }

  .caption-center {
    align-self: unset;
  }

  .caption-italic {
    font-style: italic;
  }

</style>