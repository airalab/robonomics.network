<template>
  <div class="layout layout__mid product__item hyphens">
    <h2 v-if="!shop" class="product__title">{{ title }}</h2>
    <div class="product__content grid-3" :class="{'shop': shop}">
      <g-image :src="require(`!!assets-loader!@/assets/images/devices/${img}`)"  quality="75%" :alt="title" class="product__img"/>
      <div class="product__text">
        <p >{{ text }}</p>
        <g-link v-if="shop" :to="hacksterLink">{{ $t('View more on Hackster') }}</g-link>
      </div>
      <div class="products__links" v-if="!shop">
        <rb-button block class="devices__link" :to="hacksterLink" buttoncolor="pale-blue" buttonstyle="flat">{{ $t('View specification') }}</rb-button>
        <rb-button block v-if="telegramLink" :to="telegramLink" buttoncolor="green" buttonstyle="flat" class="devices__link">{{ $t('Buy in Telegram bot') }}</rb-button>
        <span v-if="release" class="product__release">{{release}}</span>
      </div>
      <DevicesShopItem :price="price" :title="title" :unavailable="unavailable"  v-else/>
    </div>
    <div class="product-key-features">
      <ul class="list-simple product-key-features__list">
        <li class="product-key-features__item"  v-for="feature in features" :key="feature.id" :class="{'accent': feature.accent && feature.accent || shop}">{{ feature.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: { 
    DevicesShopItem: () => import("~/components/devices/DevicesShopItem.vue")
  },

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
    },
    shop: {
      type: Boolean,
      default: false
    },
    price: {
      type: Number,
      default: null
    },
    unavailable: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>

  .grid-3 {
    grid-template-columns: 300px 1fr minmax(270px, 320px);
    gap: calc(var(--space) * 2);
    margin-bottom: var(--space);
  }

  .grid-3.shop {
    grid-template-columns: 322px 1fr minmax(290px, 320px);
    gap: 0;
  }

  .grid-3.shop .product__text {
    margin-left: calc(var(--space));
    margin-right: calc(var(--space) * 3)
  }

  .product__item {
    margin-bottom: calc(var(--space) * 2)
  }

  .product__title {
    font-family: "Roboto Flex";
    font-weight: 900;
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  .product__img {
    width: 100%;
  }

  .product__text {
    font-weight: 500;
    line-height: 1.8;
    font-style: italic;
  }

  .products__links {
    display: flex;
    flex-direction: column;
  }

  .product__release {
    margin-top: 10px;
    padding-left: 68px;
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 0.8);
    text-transform: uppercase;
    text-align: left;
    background-image: url('data:image/svg+xml,<svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_1142_1887)"><path d="M7.525 0C6.66968 0 5.84939 0.335825 5.24458 0.933597C4.63978 1.53137 4.3 2.34212 4.3 3.1875V6.375H1.075C0.789892 6.375 0.516462 6.48694 0.31486 6.6862C0.113259 6.88546 0 7.15571 0 7.4375C0 7.71929 0.113259 7.98954 0.31486 8.1888C0.516462 8.38806 0.789892 8.5 1.075 8.5H18.275C18.5601 8.5 18.8335 8.61194 19.0351 8.8112C19.2367 9.01046 19.35 9.28071 19.35 9.5625C19.35 9.84429 19.2367 10.1145 19.0351 10.3138C18.8335 10.5131 18.5601 10.625 18.275 10.625H3.225C2.93989 10.625 2.66646 10.7369 2.46486 10.9362C2.26326 11.1355 2.15 11.4057 2.15 11.6875C2.15 11.9693 2.26326 12.2395 2.46486 12.4388C2.66646 12.6381 2.93989 12.75 3.225 12.75H16.125C16.4101 12.75 16.6835 12.8619 16.8851 13.0612C17.0867 13.2605 17.2 13.5307 17.2 13.8125C17.2 14.0943 17.0867 14.3645 16.8851 14.5638C16.6835 14.7631 16.4101 14.875 16.125 14.875H1.075C0.789892 14.875 0.516462 14.9869 0.31486 15.1862C0.113259 15.3855 0 15.6557 0 15.9375C0 16.2193 0.113259 16.4895 0.31486 16.6888C0.516462 16.8881 0.789892 17 1.075 17H13.975C14.2601 17 14.5335 17.1119 14.7351 17.3112C14.9367 17.5105 15.05 17.7807 15.05 18.0625C15.05 18.3443 14.9367 18.6145 14.7351 18.8138C14.5335 19.0131 14.2601 19.125 13.975 19.125H4.3V27.625C4.3 29.3158 4.97955 30.9373 6.18916 32.1328C7.39877 33.3284 9.03935 34 10.75 34C12.4606 34 14.1012 33.3284 15.3108 32.1328C16.5204 30.9373 17.2 29.3158 17.2 27.625H25.8C25.8 29.3158 26.4796 30.9373 27.6892 32.1328C28.8988 33.3284 30.5394 34 32.25 34C33.9606 34 35.6012 33.3284 36.8108 32.1328C38.0205 30.9373 38.7 29.3158 38.7 27.625H40.85C41.4202 27.625 41.9671 27.4011 42.3703 27.0026C42.7735 26.6041 43 26.0636 43 25.5C43 24.9364 42.7735 24.3959 42.3703 23.9974C41.9671 23.5989 41.4202 23.375 40.85 23.375V15.7675C40.8533 15.2082 40.7448 14.6537 40.5308 14.1359C40.3168 13.6181 40.0015 13.1471 39.603 12.75L34.4 7.6075C33.9982 7.2136 33.5217 6.90197 32.9978 6.69047C32.4739 6.47897 31.9129 6.37177 31.347 6.375H27.95V3.1875C27.95 2.34212 27.6102 1.53137 27.0054 0.933597C26.4006 0.335825 25.5803 0 24.725 0L7.525 0ZM36.55 15.7675V17H27.95V10.625H31.347L36.55 15.7675ZM10.75 24.4375C11.3878 24.4375 12.0114 24.6244 12.5417 24.9747C13.0721 25.3249 13.4854 25.8228 13.7295 26.4052C13.9736 26.9876 14.0375 27.6285 13.913 28.2469C13.7886 28.8652 13.4814 29.4331 13.0304 29.8789C12.5794 30.3247 12.0048 30.6283 11.3792 30.7513C10.7536 30.8742 10.1051 30.8111 9.51585 30.5699C8.92655 30.3286 8.42288 29.9201 8.06851 29.3959C7.71414 28.8717 7.525 28.2554 7.525 27.625C7.525 26.7796 7.86478 25.9689 8.46958 25.3711C9.07439 24.7733 9.89468 24.4375 10.75 24.4375ZM29.025 27.625C29.025 26.9946 29.2141 26.3783 29.5685 25.8541C29.9229 25.3299 30.4266 24.9214 31.0158 24.6801C31.6051 24.4389 32.2536 24.3758 32.8792 24.4987C33.5048 24.6217 34.0794 24.9253 34.5304 25.3711C34.9814 25.8169 35.2886 26.3848 35.413 27.0031C35.5375 27.6215 35.4736 28.2624 35.2295 28.8448C34.9854 29.4272 34.5721 29.9251 34.0417 30.2753C33.5114 30.6256 32.8878 30.8125 32.25 30.8125C31.3947 30.8125 30.5744 30.4767 29.9696 29.8789C29.3648 29.2811 29.025 28.4704 29.025 27.625Z" fill="black"/></g><defs><clipPath id="clip0_1142_1887"><rect width="43" height="34" fill="white"/></clipPath></defs></svg>');
    background-position: left;
    background-size: 43px 34px;
    background-repeat: no-repeat;
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
    width: 70%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--space) * 0.3);
  }

  .product-key-features__item {
    padding: calc(var(--space)* 0.2) calc(var(--space)* 0.3);
    font-size: calc(var(--base-font-size)* 0.6);
    font-weight: 600;
    color: #000;
    background-color: var(--color-light);
    text-transform: uppercase;
  }

  .product-key-features__item:not(:last-child) {
    margin-right:  calc(var(--space) * 0.5);
  }

  .product-key-features__item.accent {
    background-color: var(--color-yellow);
  }

  @media screen and (max-width: 1160px) {

    .product__title {
      text-align: center;
    }

    .grid-3, .grid-3.shop {
      grid-template-columns: 1fr;
    }

    .product-key-features__list {
      width: 100%;
    }


    .grid-3.shop .product__text {
      margin-left: 0;
      margin-right: 0;
      margin-top: var(--space);
      margin-bottom: calc(var(--space) * 3);
    }

    .product__img {
      max-width: 380px;
      margin: 0 auto;
    }

    .devices__link {
      padding: calc(var(--space) * 0.5) calc(var(--space) * 0.7);
    }

    .product__release {
      min-height: 44px;
      display: flex;
      align-items: center;
    }

    .product-key-features {
      margin-top: calc(var(--space) * 2);
    }

  }

  /* dark theme */

  .dark-theme a:not(.button):hover {
    opacity: 0.5;
  }

  .dark-theme .product__release {
    background-image: url('data:image/svg+xml,<svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_1142_1887)"><path d="M7.525 0C6.66968 0 5.84939 0.335825 5.24458 0.933597C4.63978 1.53137 4.3 2.34212 4.3 3.1875V6.375H1.075C0.789892 6.375 0.516462 6.48694 0.31486 6.6862C0.113259 6.88546 0 7.15571 0 7.4375C0 7.71929 0.113259 7.98954 0.31486 8.1888C0.516462 8.38806 0.789892 8.5 1.075 8.5H18.275C18.5601 8.5 18.8335 8.61194 19.0351 8.8112C19.2367 9.01046 19.35 9.28071 19.35 9.5625C19.35 9.84429 19.2367 10.1145 19.0351 10.3138C18.8335 10.5131 18.5601 10.625 18.275 10.625H3.225C2.93989 10.625 2.66646 10.7369 2.46486 10.9362C2.26326 11.1355 2.15 11.4057 2.15 11.6875C2.15 11.9693 2.26326 12.2395 2.46486 12.4388C2.66646 12.6381 2.93989 12.75 3.225 12.75H16.125C16.4101 12.75 16.6835 12.8619 16.8851 13.0612C17.0867 13.2605 17.2 13.5307 17.2 13.8125C17.2 14.0943 17.0867 14.3645 16.8851 14.5638C16.6835 14.7631 16.4101 14.875 16.125 14.875H1.075C0.789892 14.875 0.516462 14.9869 0.31486 15.1862C0.113259 15.3855 0 15.6557 0 15.9375C0 16.2193 0.113259 16.4895 0.31486 16.6888C0.516462 16.8881 0.789892 17 1.075 17H13.975C14.2601 17 14.5335 17.1119 14.7351 17.3112C14.9367 17.5105 15.05 17.7807 15.05 18.0625C15.05 18.3443 14.9367 18.6145 14.7351 18.8138C14.5335 19.0131 14.2601 19.125 13.975 19.125H4.3V27.625C4.3 29.3158 4.97955 30.9373 6.18916 32.1328C7.39877 33.3284 9.03935 34 10.75 34C12.4606 34 14.1012 33.3284 15.3108 32.1328C16.5204 30.9373 17.2 29.3158 17.2 27.625H25.8C25.8 29.3158 26.4796 30.9373 27.6892 32.1328C28.8988 33.3284 30.5394 34 32.25 34C33.9606 34 35.6012 33.3284 36.8108 32.1328C38.0205 30.9373 38.7 29.3158 38.7 27.625H40.85C41.4202 27.625 41.9671 27.4011 42.3703 27.0026C42.7735 26.6041 43 26.0636 43 25.5C43 24.9364 42.7735 24.3959 42.3703 23.9974C41.9671 23.5989 41.4202 23.375 40.85 23.375V15.7675C40.8533 15.2082 40.7448 14.6537 40.5308 14.1359C40.3168 13.6181 40.0015 13.1471 39.603 12.75L34.4 7.6075C33.9982 7.2136 33.5217 6.90197 32.9978 6.69047C32.4739 6.47897 31.9129 6.37177 31.347 6.375H27.95V3.1875C27.95 2.34212 27.6102 1.53137 27.0054 0.933597C26.4006 0.335825 25.5803 0 24.725 0L7.525 0ZM36.55 15.7675V17H27.95V10.625H31.347L36.55 15.7675ZM10.75 24.4375C11.3878 24.4375 12.0114 24.6244 12.5417 24.9747C13.0721 25.3249 13.4854 25.8228 13.7295 26.4052C13.9736 26.9876 14.0375 27.6285 13.913 28.2469C13.7886 28.8652 13.4814 29.4331 13.0304 29.8789C12.5794 30.3247 12.0048 30.6283 11.3792 30.7513C10.7536 30.8742 10.1051 30.8111 9.51585 30.5699C8.92655 30.3286 8.42288 29.9201 8.06851 29.3959C7.71414 28.8717 7.525 28.2554 7.525 27.625C7.525 26.7796 7.86478 25.9689 8.46958 25.3711C9.07439 24.7733 9.89468 24.4375 10.75 24.4375ZM29.025 27.625C29.025 26.9946 29.2141 26.3783 29.5685 25.8541C29.9229 25.3299 30.4266 24.9214 31.0158 24.6801C31.6051 24.4389 32.2536 24.3758 32.8792 24.4987C33.5048 24.6217 34.0794 24.9253 34.5304 25.3711C34.9814 25.8169 35.2886 26.3848 35.413 27.0031C35.5375 27.6215 35.4736 28.2624 35.2295 28.8448C34.9854 29.4272 34.5721 29.9251 34.0417 30.2753C33.5114 30.6256 32.8878 30.8125 32.25 30.8125C31.3947 30.8125 30.5744 30.4767 29.9696 29.8789C29.3648 29.2811 29.025 28.4704 29.025 27.625Z" fill="white"/></g><defs><clipPath id="clip0_1142_1887"><rect width="43" height="34" fill="white"/></clipPath></defs></svg>');
  }

</style>