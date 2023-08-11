<template>
  <li class="e-books__item">

    <g-link class="e-books__img" :to="book.options[0].link">
      <g-image :src="require('!!assets-loader!~/assets/images/'+book.img)"/>
    </g-link>

    <div class="e-books__content">
      <h3> {{ book.title }} </h3>
      <p>{{ $t(book.description) }}</p>
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
    font-weight: 500;
    letter-spacing: 0;
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


  .e-books__img {
    display: block;
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