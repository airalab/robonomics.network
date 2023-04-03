<template>
  <g-link :to="link" class="shop__item" :class="classImage">
    <div class="shop__image">
      <g-image :src="require(`!!assets-loader!@/assets/images/${image}`)" alt="product image"/>
    </div>
    <h3 v-if="title">{{$ts(title)}}</h3>
  </g-link>
</template>

<script>
export default {

  props: {
    link: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
    },
    image: {
      type: String,
      required: true,
      default: 'shop-1.jpg'
    },
    classImage: {
      type: String,
    }
  }

}
</script>

<style scoped>

  .shop__item {
    text-decoration: none;
  }

  .shop__item h3 {
    margin-bottom: 0;
    margin-top: calc(var(--space) * 0.5);
    font-size: calc(var(--base-font-size) * 0.8);
    font-family: var(--font-family);
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  .shop__image {
    overflow: hidden;
  }

  .shop__image img {
    transition: transform 0.5s ease-in-out;
  }

  .shop__item:hover .shop__image img {
    transform: scale(1.3);
  }

  .hideDesktop {
    display: none;
  }

  .hideDesktop .shop__image {
    border-radius: 100%;
  }

  /* .hideDesktop.shop__item:hover .shop__image img {
    transform: scale(1);
    cursor: default;
  } */

  @media screen and (max-width: 990px) {
    .shop__item.hideDesktop {
      display: block;
    }
  }

</style>