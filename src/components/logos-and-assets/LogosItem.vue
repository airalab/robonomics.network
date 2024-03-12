<template>
  <li class="logos__item" :class="`logos__item--${itemBackground}`">
    <g-image class="logos__img" :src="require('!!assets-loader!~/assets/images/logos-and-assets/'+srcImg)" quality="75" :alt="alt"/>
    <div class="logos__links">
      <a class="logos__link" :href="srcSVG" download>SVG</a>
      <span class="logos__divider"></span>
      <a  class="logos__link" :href="srcPNG" download>PNG</a>
    </div>
  </li>
</template>

<script>
export default {

  props: {
    srcImg: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      required: true,
      default: 'logo image'
    },
    srcPNG: {
      type: String,
      required: true,
      default: ''
    },
    srcSVG: {
      type: String,
      required: true,
      default: ''
    },
    itemBackground: {
      type: String,
      default: 'default',
      required: true,
      validator: function (value) {
        return ['light', 'alto', 'french-gray', 'spun-pearl', 'default'].indexOf(value) !== -1;
      }
    }
  }

}
</script>

<style scoped>

  .logos__item {
    margin: 0;
    min-height: 336px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: calc(var(--space) * 0.5);
  }

  .logos__img {
    margin-bottom: var(--space);
  }

  .logos__links {
    display: flex;
    align-items: center;
  }

  .logos__link {
    font-weight: 500;
  }

  .logos__divider {
    display: inline-block;
    width: 4px;
    height: 4px;
    margin: 0 calc(var(--space) * 0.4);
    border-radius: 100%;
    background-color: #000;
  }
 
  .logos__item--default {
    background-color: #f5f5f5;
  }

  .logos__item--light {
    background-color: #fff;
  }

  .logos__item--alto {
    background-color: #d9d9d9;
  }

  .logos__item--french-gray {
    background-color: #C4C4C6;
  }

  .logos__item--spun-pearl {
    background-color: #b1b0b2;
  }
</style>