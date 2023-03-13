<template>
  <li class="e-books__item">

    <div class="e-books__img">
      <g-image :src="require('!!assets-loader!~/assets/images/'+book.img)"/>
    </div>

    <div class="e-books__content">
      <h3>{{ book.title }}</h3>
      <p>{{ book.description }}</p>
      <div class="e-books__links">
        <g-link
          v-for="link in book.options"
          :key="link.id"
          :to="link.link"
        >
        {{ link.text }}
        </g-link>
      </div>
    </div>
    

  </li>
</template>

<script>
export default {

  props: {
    book: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

  .e-books__item {
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: var(--space);
  }

  h3 {
    margin-bottom: calc(var(--space) * 0.2);
    font-family: var(--font-family);
    text-align: left;
  }

  p {
    font-weight: 300;
    margin-bottom: calc(var(--space) * 0.5);
  }

  .e-books__links {
    columns: 2;
    font-weight: 500;
    max-width: 186px;
  }

  @media screen and (max-width: 750px) {
    .e-books__item {
      padding: var(--space);
      grid-template-columns: 1fr;
      border-bottom: 3px dotted var(--color-dark);
    }

    .e-books__img {
      max-width: 210px;
    }
  }




</style>