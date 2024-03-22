<template>
  <g-link :to="link" class="shop__item oldy">
    <span class="shop__locale">{{ locale }}</span>
    <div class="shop__image">
      <g-image :src="require(`!!assets-loader!@/assets/images/merch/${image}`)" alt="store name"/>
    </div>
  </g-link>
</template>

<script>
export default {

  props: {
    link: {
      type: String,
      default: '/'
    },
    locale: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    }
  }

}
</script>

<style scoped>

  .shop__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
  }

  .shop__item:hover {
    box-shadow: 2px 3px 0 var(--color-blue);
  }

  .shop__locale {
    position: absolute;
    top: 10px;
    right: 10px;
    font-family:var(--font-family);
    font-weight: 900;
    color: var(--color-dark);
    text-transform: uppercase;
  }

  .shop__image {
    max-width: 160px;
    margin: 0 auto;
  }

  .dark-theme .shop__image {
    filter: invert(100%);
  }
  

</style>