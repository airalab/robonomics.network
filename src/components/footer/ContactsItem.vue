<template>
  <g-link class="contacts__item oldy" :to="link[0].options[0].link">
    <div class="contacts__img">
      <g-image :src="require('!!assets-loader!~/assets/images/'+ img)" quality="75"/>
    </div>
    <div class="contacts__info">
      <h4 class="contacts__title">{{ title }}</h4>
      <span class="contacts__text">{{ text }}</span>
    </div>
  </g-link>
</template>

<script>
export default {

  props: {
    link: {
      type: Array,
      default() {
        return []
      }
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
  .contacts__item {
    display: flex;
    padding: calc(var(--space) * 0.8);
    background-color: var(--color-light);
    color: var(--color-dark);
    border-color: transparent;
    transition: box-shadow 0.33s ease-in-out;
  }

  .contacts__item:hover {
    color: var(--color-dark);
    box-shadow: .25rem .25rem 0 #fff;
  }

  .contacts__img {
    margin-right: calc(var(--space) * 0.5);
    flex-shrink: 0;
  }

  .contacts__img img {
    width: 55px;
    height: 55px;
  }

  .contacts__img {
   max-width: 100%;
  }

  .contacts__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contacts__title {
    margin: 0;
    margin-bottom: calc(var(--space) * 0.2);
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
  }

  .contacts__text {
    font-weight: 400;
    font-size: calc(var(--base-font-size) * 0.9);
    text-align: left;
  }


  @media screen and (max-width: 1400px) {
    .contacts__item {
      padding: calc(var(--space) * 0.8) calc(var(--space) * 0.5);
    }
  }

</style>