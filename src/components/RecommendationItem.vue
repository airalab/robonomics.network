<template>
  <g-link class="books-recommendations__link" :style="{'backgroundColor': rec.color}" :to="rec.link">
    <strong>{{ rec.title }}</strong>
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
    max-width: 218px;
    width: 100%;
    padding: calc(var(--space) * 0.5);
    padding-right: calc(var(--space) * 0.8);
  }
  

  strong {
    font-size: var(--base-font-size);
    color: #fff;
    text-align: left;
    text-transform: none;
    margin: 0;
    letter-spacing: 0;
  }

  span {
    position: absolute;
    font-weight: 300;
    color: #fff;
    left: calc(var(--space) * 0.5);
    bottom: calc(var(--space) * 0.5);
  }

  @media screen and (max-width: 950px) {
    strong {
      font-size: calc( var(--base-font-size) * 1.3);
    }
  }

  @media screen and (max-width: 780px) {
    .books-recommendations__link {
      width: 218px;
    }
  }



</style>