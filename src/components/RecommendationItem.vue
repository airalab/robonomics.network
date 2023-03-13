<template>
  <g-link class="books-recommendations__link" :style="{'backgroundColor': rec.color}" :to="rec.link">
    <h3>{{ rec.title }}</h3>
    <span>{{ rec.author }}</span>
  </g-link>
</template>

<script>
export default {

  props: {
    rec: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

  .books-recommendations__link {
    display: block;
    position: relative;
    height: 270px;
    padding: calc(var(--space) * 0.5);
    z-index: 5;
    overflow: hidden;
  }

  .books-recommendations__link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-blue);
    transform: translateY(-300px);
    z-index: -1;
    transition: transform 0.33s ease-in-out;
  }

  .books-recommendations__link:hover.books-recommendations__link::after {
    transform: translateY(0);
  }

  .books-recommendations__link[href="/#"] {
    cursor: none;
    pointer-events: none;
  }
  

  h3 {
    font-size: var(--base-font-size);
    font-family: var(--font-family);
    color: #fff;
    text-align: left;
    text-transform: none;
    margin: 0;
  }

  span {
    position: absolute;
    font-weight: 300;
    color: #fff;
    bottom: calc(var(--space) * 0.5);
  }

  @media screen and (max-width: 950px) {
    h3 {
      font-size: calc( var(--base-font-size) * 1.5)
    }
  }



</style>