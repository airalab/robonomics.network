<template>
  <div class="product__item">
    <h2 class="product__title">{{ title }}</h2>
    <div class="product__content grid-3">
      <g-image :src="require(`!!assets-loader!@/assets/images/devices/${img}`)"  quality="75%" :alt="title" class="product__img"/>
      <p class="product__text">{{ text }}</p>
      <div class="products__links">
        <g-link :to="hacksterLink" class="devices__link devices__link--blue">{{ $t('View specification') }}</g-link>
        <g-link v-if="!release" :to="telegramLink" class="devices__link">{{ $t('Buy in Telegram bot') }}</g-link>
        <span v-if="release && !telegramLink"  class="product__release">{{release}}</span>
      </div>
    </div>
    <div class="product-key-features">
      <div class="product-key-features__title">{{ $t('Key Features') }}</div>
      <ul class="list-simple product-key-features__list">
        <li class="product-key-features__item"  v-for="feature in features" :key="feature.id" :class="{'accent': feature.accent && feature.accent}">{{ feature.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    hacksterLink: {
      type: String,
      default: '',
      required: true
    },
    telegramLink: {
      type: String,
      default: '',
    },
    release: {
      type: String,
      default: ''
    },
    features: {
      type: Array,
      default: []
    }
  }

}
</script>

<style scoped>
  .devices__link {
    color: var(--color-light);
    font-family: var(--font-family);
    text-transform: uppercase;
  }

  .grid-3 {
    grid-template-columns: 300px 1fr minmax(270px, 320px);
    gap: calc(var(--space) * 2);
    margin-bottom: var(--space);
  }

  .product__item {
    margin-bottom: calc(var(--space) * 3)
  }

  .product__title {
    font-family: "Roboto Flex";
    font-weight: 800;
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  .product__img {
    width: 100%;
    align-self: center;
  }

  .product__text {
    font-weight: 500;
    line-height: 1.5;
    font-style: italic;
  }

  .products__links {
    display: flex;
    flex-direction: column;
  }

  .products__links .devices__link {
    width: 100%;
  }

  .product__release {
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  .products__links .devices__link:first-of-type {
    margin-bottom: calc(var(--space) * 0.5);
  }

  .product-key-features__title {
    display: inline-block;
    margin-bottom: calc(var(--space) * 0.5);
    padding: calc(var(--space) * 0.2) calc(var(--space) * 0.5);
    font-weight: 600;
    color: var(--color-light);
    background-color: var(--color-bright-pink);
    text-transform: uppercase;
  }

  .product-key-features__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--space) * 0.3);
  }

  .product-key-features__item {
    padding: calc(var(--space) * 0.2) calc(var(--space) * 0.5);
    font-size: calc(var(--base-font-size) * 0.8);
    font-weight: 600;
    color: var(--color-dark);
    background-color: var(--color-light);
    text-transform: uppercase;
  }

  .product-key-features__item:not(:last-child) {
    margin-right:  calc(var(--space) * 0.5);
  }

  .product-key-features__item.accent {
    background-color: var(--device-color-yellow);
  }

  @media screen and (max-width: 1160px) {

    .product__title {
      text-align: center;
    }

    .grid-3 {
      grid-template-columns: 1fr;
    }

    .product__img {
      max-width: 380px;
      margin: 0 auto;
    }

    .devices__link {
      padding: calc(var(--space) * 0.5) calc(var(--space) * 0.7);
    }

    .product-key-features {
      margin-top: calc(var(--space) * 2);
    }

  }

  .dark-theme a:not(.button):hover {
    opacity: 0.5;
  }

</style>