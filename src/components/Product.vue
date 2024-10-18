<template>

  <article class="product">
    <div class="product__header">
      <span class="product__number">{{ id + 1 }}</span>
      
      <div class="product__header-text">
        <h3>
            <template v-if="!titleLink">{{ title }}</template>
            <g-link v-else :aria-label="'go to '+ title + ' page'" :to="titleLink">{{ title }}</g-link>
        </h3>

        <div>
            <span class="highlight-solid-green" :class="{'blue': status === 'coming'}">
                <template v-if="status === 'ready'">Early access for community members</template>
                <template v-if="status === 'coming'">Coming soon</template>
            </span>
        </div>

        <g-link v-if="status === 'ready'" class="highlight" to="/blog/robo-season-pass-2025-welcome-to-the-paper-st-club/">How to get membership pass</g-link>
      </div>

    </div>
    <div class="product__model" :class="{'product__model--altruist': title === 'Altruist outdoor sensor'}">
      <slot/>
    </div>
    <div class="product__text">
      <p class="product__descr" v-html="text"></p>
      <h5>Use case:</h5>
      <p class="product__use-text">{{ cases }}</p>
    </div>
    <div class="product__adds" v-if="casesImages && casesImages.length">
      <g-image v-for="image in casesImages"  :key="image" :src="require('!!assets-loader!~/assets/images/hardware-2025/'+ image)" quality="75"/>
    </div>
  </article>

</template>

<script>
export default {

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
        id: this.product.id,
        title: this.product.title,
        text: this.product.text,
        cases: this.product.cases,
        casesImages: this.product.casesImages,
        titleLink: this.product.titleLink,
        status: this.product.status,
    }
  },

}
</script>

<style scoped>

div[class^='product__']:not(.product__model) {
  position: relative;
  z-index: 1;
}

.product {
  overflow: hidden;
}

.product:not(:last-child) {
  margin-bottom: calc(var(--space) * 3)
}

.product__header {
  display: flex;
  align-items: flex-start;
  margin-bottom: calc(var(--space) * 1.5);
}

.product__header h3 {
    text-align: left;
    margin: 0 0 calc(var(--space) * .5);
}

.product__number {
  display: inline-block;
  margin-right: var(--space);
  font-size: 125px;
  line-height: 0.8;
  font-weight: 900;
}

.highlight-solid-green {
    text-transform: uppercase;
}

.highlight-solid-green.blue {
  background-color: hsl(229,100%, 88%);
}

a.highlight, .highlight-solid-green {
    font-size: 80%;
}

.product__model {
  position: relative;
  max-width: 680px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* overflow: hidden; */
}

.product__model.product__model--altruist {
  max-width: unset;
}

.product__model .with-models {
  min-height: 480px;
  height: 100%;
}

.with-models-2 .product__model {
  overflow: unset;
}

.product__text {
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: calc(var(--space) * 2.5);
}

.product__descr {
  margin-bottom: calc(var(--space) * 2);
}

.product__adds {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: var(--space);
}


@media screen and (max-width: 760px) {

  .product__adds {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}

@media screen and (max-width: 520px) {
  /* .product__number {
    font-size: 45px;
    margin-right: calc(var(--space) * 0.5);
  }

  .highlighted-text {
    font-size: 10px;
    padding: 0.2rem 0rem;
  } */

  .with-models .product__model {
    min-height: 480px;
    align-items: flex-start;
  }

}

</style>