<template>
  
  <layout>

    <MetaInfo
      pageTitle = "Robonomics art shop"
      pageDescription = "'Useful products with our unique designs made by Robonomics artists with love. Shop online."
      :pageImage = "'/website_cover_shop.jpg'"
    />

    <div class="title-with-bg">
      <h1><span>Robonomics art shop</span></h1>
    </div>

    <section class="layout section__solid shop">


      <section class="text-left shop__text">
        <p>Welcome to our brand new online shop on <g-link to="https://robonomics.threadless.com/">robonomics.threadless.com</g-link>!</p>
        <p class="shop__text">Our shop features clothing, accessories, home decor and other items that display our love for robotics, technology and art. You can find t-shirts, long sleeves, hoodies, shower curtains, pillows, blankets and other useful products with our unique designs made by Robonomics artists and processed production&shipping by fellows from Threadless. Enjoy!</p>
      </section>

      <div class="grid grid-3 shop__grid">
        <ShopItem
          v-for="product in products"
          :key="product.id"
          :link="product.link"
          :title="product.text"
          :image="product.image"
          :classImage="product.class"
        />
        <g-link class="shop__link" to="https://robonomics.threadless.com/">SHOP NOW</g-link>
      </div>

      <g-link to="https://robonomics.threadless.com/" class="shop-circle shop-circle-1">
        <g-image src="@/assets/images/shop-circle-1.png" alt="product"/>
      </g-link>

      <g-link  to="https://robonomics.threadless.com/" class="shop-circle shop-circle-2">
        <g-image src="@/assets/images/shop-circle-2.png" alt="product"/>
      </g-link>

    </section>


  </layout>

</template>

<script>

import products from '@/data/shop.yaml'

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    ShopItem: () => import("~/components/ShopItem.vue"),
  },

  computed: {
    products () {
      return products
    }
  }

}
</script>

<style scoped>

  .shop {
    position: relative;
    padding-bottom: calc(var(--space) * 6);
    background-color: transparent;
    overflow: hidden;
  }
  .shop__text {
    max-width: 1004px;
  }

  .shop__text a {
    text-decoration: none;
  }

  .shop__text p:first-of-type {
    margin-bottom: 0;
  }

  .shop__grid {
    justify-items: center;
  }

  .shop__grid .shop__item:nth-child(4) {
    grid-row: 2;
  }

  .shop__grid .shop__item:nth-child(5) {
    grid-row: 2;
  }

  .shop__grid .shop__item:nth-child(6) {
    grid-row: 2;
  }

  .shop__grid .shop__item:nth-child(8) {
    grid-column: 2/3;
    grid-row: 3;
  }

  .shop__grid .shop__item:nth-child(9) {
    grid-column: 3/4;
    grid-row: 3;
  }

  .shop__link {
    grid-column: 2/3;
    grid-row: 4;
    justify-self: self-start;
    padding: 1rem 1.5rem;
    padding-left: 60px;
    margin-top: var(--space);
    font-family: var(--font-family-code);
    font-weight: 500;
    color: #fff;
    background-color: var(--color-blue);
    background-image: url('~@/assets/images/shop-shirt.png');
    background-repeat: no-repeat;
    background-position: left 14px center;
    background-size: 34px 26px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0;
    transition: background-color 0.33s ease-in-out, color 0.33s ease-in-out;
  }

  .shop__link:hover {
    color: var(--color-light);
    background-color: var(--color-blue-dark-mid);
  }

  .shop-circle-1 {
    max-height: 614px;
    position: absolute;
    top: 54px;
    right: -86px;
    border-radius: 100%;
  }

  .shop-circle-2 {
    max-height: 614px;
    position: absolute;
    bottom: 117px;
    left: -86px;
    border-radius: 100%;
  }

  @media screen and (max-width: 1660px) {
    .shop-circle {
      max-width: 350px;
      max-height: 350px;
    }

    .shop-circle-1 {
      top: calc(14% - 12px);
    }

    .shop-circle-2 {
      left: -61px;
      bottom: calc(41% - 365px);
    }
  }

  @media screen and (max-width: 990px) {

    .shop {
      padding-bottom: calc(var(--space) * 4);
    }

    .shop-circle {
      display: none;
    }

    .shop__grid .shop__item:nth-child(4),
    .shop__grid .shop__item:nth-child(5),
    .shop__grid .shop__item:nth-child(6),
    .shop__grid .shop__item:nth-child(8),
    .shop__grid .shop__item:nth-child(9) {
      grid-row: auto;
      grid-column: auto;
    }

    .shop__grid {
      grid-template-columns: repeat(2,1fr);
      align-items: center;
    }

    .shop__link {
      margin-top: 0;
      grid-column: 1/3;
      grid-row: 6;
      justify-self: center;
    }

    .shop__grid .shop__item:nth-child(8){
      grid-column: 1/2;
      grid-row: 4;
    }

    .shop__grid .shop__item:nth-child(7) {
      grid-column: 2;
    }
  }

  @media screen and (max-width:570px) {

    .shop {
      padding-bottom: calc(var(--space) * 3);
    }

    .grid-3 { grid-template-columns: 1fr; }

    .shop__link {
      margin-top: calc(var(--space) * 2);
      grid-column: unset;
      grid-row: unset;
    }

    .shop__grid .shop__item:nth-child(8),
    .shop__grid .shop__item:nth-child(7){
      grid-column: unset;
      grid-row: unset;
    }

  }

  

</style>