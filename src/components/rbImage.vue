<template >
  <figure class="rb-image">
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
    <figcaption v-if="caption" class="rb-image__text" :class="{'caption-center': captionCenter}">{{caption}}</figcaption>
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
    }
  },

  data(){
    return {
      picture: require(`!!assets-loader!@imagesMarkdown/${this.src}`),
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
    }
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
  .rb-image{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .rb-image__link[target=_blank]:after {
    display: none;
  }

  .rb-image__text {
    align-self: flex-start;
    font-style: italic;
    margin-bottom: var(--space);
  }

  .caption-center {
    align-self: unset;
  }

</style>