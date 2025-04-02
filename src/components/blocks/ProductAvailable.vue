<template>
  <section class="product-available">
    <section class="lined">
      <div class="price-number">{{ title }}</div>
      <PriceSection :price="price" :message1="$t('Now Available!')" :message2="$t('Worldwide Shipping')" />
      <ul>
        <li class="italic-text" v-for="item in info" :key="item">{{item}}</li>
      </ul>
    </section>
    <div class="product-buy__wrapper" :class="{ 'active': showOrder }">
      <rb-button buttoncolor="black" block @click="$emit('toggle-order')">
        {{$t('Order Now')}}
      </rb-button>
    <div class="product-buy__container" :class="{ 'active oldy': showOrder }">
      <div v-if="showOrder" class="active">
        <ul>
          <OrderLink v-for="orderLink in orderLinks" :key="orderLink.id" :link="orderLink.link" :flag="orderLink.flag" :text="orderLink.label" :region="orderLink.region"  :payments="orderLink.payments" :title="title" />
        </ul>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import PriceSection from "@/components/blocks/PriceSection.vue";
import OrderLink from "@/components/blocks/OrderLink.vue";

export default {
  components: { PriceSection, OrderLink },
  props: { title: String, price: String, showOrder: Boolean, orderLinks: Array, info: Array },
};
</script>

<style scoped>

    section {
      max-width: 500px;
    }

    .lined > * {
      margin-bottom: var(--space);
    }

    .lined > *:not(:last-child) {
      padding-bottom: var(--space);
      border-bottom: 1px solid var(--color-dark);
    }

    .lined li {
      margin-bottom: calc(var(--space) * 0.8);
    }

    .price {
        display: flex;
        gap: var(--space);
        align-content: flex-start;
        margin-bottom: var(--space);
    }

    .price-number {
        font-variation-settings: var(--font-flex-extrabold);
        font-size: calc(var(--space) * 1.3);
        line-height: 1;
    }

    html[lang="de"] .price-number,
    html[lang="nl"] .price-number {
      hyphens: auto;
    }

    .price-desc {
        min-width: 170px;
        font-variation-settings: var(--font-flex-medium);
    }

    .product-available {
        position: relative;
        align-self: start;
    }

    .product-available .italic-text {
        text-transform: uppercase;
    }

    .product-available ul {
        list-style: none;
        margin-left: 0;
        margin-bottom: 0;
    }

    .product-available li:not(:last-child) {
        margin-bottom: calc(var(--space) * 0.3);
    }

    .product-buy__wrapper.active button {
      margin-bottom: calc(var(--space) * 0.5);
    }

    .product-buy__container.active {
        position: absolute;
        right: 0;
        left: 0;
        padding: calc(var(--space) * 0.8) calc(var(--space) * 0.5);
        text-align: center;
        transition: none;
        box-shadow: none;
    }

    .product-buy__container.active a {
        padding-right: 60px;
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='16' viewBox='0 0 44 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM0 9H43V7H0V9Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
        background-position: right;
        background-repeat: no-repeat;
        font-variation-settings: 'wght' 800, 'wdth' 100, 'opsz' 26, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712,  'slnt' -10;
    }

    .product-buy__container div {
        position: relative;
        text-align: center;
        display: none;
    }

    .product-buy__container div.active {
        display: block;
    }

    .product-buy__container div p {
        margin-bottom: calc( var(--space) * 0.7);
    }

    @media screen and (max-width: 460px) {
      .price-number {
        font-size: calc(var(--space) * 1.8);
      }
    }


</style>
