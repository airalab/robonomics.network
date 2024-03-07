<template>
  <g-link class="books-recommendations__link" :style="{'backgroundColor': rec.color}" :to="rec.link">
    {{ rec.id + 1 }}.  {{ rec.title }} | {{ rec.author }}
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
    width: 100%;
    font-weight: 500;
    color: var(--color-dark);
    padding: calc(var(--space) * 0.5);
    padding-right: calc(var(--space) * 0.8);
  }
  

  @media screen and (max-width: 950px) {
    strong {
      font-size: calc( var(--base-font-size) * 1.3);
    }
  }

</style>