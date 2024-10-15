<template>
  <div class="home-product">
    <div class="home-product__header">
      <span class="home-product__number">{{ id + 1 }}</span>
      <div class="home-product__header-text">
        <span class="home-product__highlighted highlighted-text" :class="{'blue': highlightedText.toLocaleLowerCase() !== 'early access for community members'}">{{ highlightedText }}</span>
        <h3 v-if="!titleLink" class="home-product__title">{{ title }}</h3>
        <h3 v-else class="home-product__title">
          <g-link :aria-label="'go to '+ title + ' page'" :to="titleLink">{{ title }}</g-link>
        </h3>
      </div>
    </div>
    <div class="home-product__model">
      <slot/>
    </div>
    <div class="home-product__text">
      <p class="home-product__descr" v-html="text"></p>
      <h5 class="home-product__use-title">Use case:</h5>
      <p class="home-product__use-text">{{ cases }}</p>
    </div>
    <div class="home-product__adds" v-if="casesImages.length">
      <g-image v-for="image in casesImages"  :key="image" :src="require('!!assets-loader!~/assets/images/hardware-2025/'+ image)" quality="75"/>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      default: 1
    },
    highlightedText: {
      type: String,
      default: ''
    },
    text: {
      type: String
    },
    cases: {
      type: String,
      default: ''
    },
    casesImages: {
      type: Array,
      default: () => []
    },
    titleLink: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>

.home-product {
  margin-bottom: calc(var(--space) * 3)
}

.home-product__header {
  display: flex;
  align-items: flex-start;
  text-transform: uppercase;
  margin-bottom: calc(var(--space) * 1.5);
}

.home-product__number {
  display: inline-block;
  margin-right: var(--space);
  font-size: 125px;
  line-height: 0.8;
  font-weight: 900;
}

.home-product__title {
  margin: 0;
  text-align: left;
}

.home-product__highlighted.blue {
  background-color: hsl(229,100%, 88%);
}

.home-product__model {
  position: relative;
  max-width: 680px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
}


.home-product__model .with-models {
  min-height: 480px;
  height: 100%;
}

.home-product__model img {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
}

.home-product__text {
  max-width: 680px;
  margin: 0 auto;
  margin-top: calc(var(--space) * 2.5);
  margin-bottom: calc(var(--space) * 2.5);
}

.home-product__descr {
  margin-bottom: calc(var(--space) * 2);
}

.home-product__use-title {
  display: inline-block;
  text-transform: none;
  margin-top: 0;
  margin-bottom: calc(var(--space) * 0.3);
}

.home-product__adds {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: var(--space);
}


@media screen and (max-width: 760px) {

  .home-product__adds {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}

@media screen and (max-width: 520px) {
  .home-product__number {
    font-size: 45px;
    margin-right: calc(var(--space) * 0.5);
  }

  .home-product__highlighted {
    font-size: 10px;
    padding: 0.2rem 0rem;
  }

  .with-models .home-product__model {
    min-height: 480px;
    align-items: flex-start;
  }

}

</style>