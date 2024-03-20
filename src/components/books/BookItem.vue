<template>
  <li class="e-books__item">

    <g-link class="e-books__img" :to="book.options[0].link">
      <g-image :src="require('!!assets-loader!~/assets/images/'+book.img)" quality="75"/>
    </g-link>

    <div class="e-books__content">
      <div class="e-book__header">
        <span>{{ book.year }}</span>
        <h3> {{ book.title }} </h3>
      </div>
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
    font-family: 'Roboto Flex';
    font-weight: 900;
    grid-template-columns: 1fr;
    /* gap: var(--space); */
    /* margin-bottom: calc(var(--space) * 0.6); */
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: inherit;
    font-size: calc(var(--base-font-size) * 0.9);
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  p {
    font-weight: 300;
    margin-bottom: calc(var(--space) * 0.5);
  }


  .e-books__content {
    max-width: 578px;
    width: 100%;
    margin: 0 auto;
    padding: calc(var(--space) * 0.3) calc(var(--space) * 0.75);
    background-color: var(--color-light);
  }
  .e-book__header  {
    display: flex;
    align-items: center;
  }

  .e-book__header span {
    display: inline-block;
    margin-right: calc(var(--space) * 0.5);
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 0.9);
  }

  .e-books__links {
    font-weight: 500;
    max-width: 186px;
    font-size: calc(var(--base-font-size) * 0.8);
  }

  .e-books__links a:not(:last-of-type) {
    margin-right: calc(var(--space) * 0.5);
  }


  .e-books__img {
    max-width: 578px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 980px) {
    /* .e-books__item {
      padding: var(--space);
      grid-template-columns: 1fr;
      border-bottom: 3px dotted var(--color-dark);
    } */

    .e-books__content {
      text-align: center;
    }

    .e-book__header {
      justify-content: center;
    }

    .e-books__links {
      max-width: unset;
    }
  }




</style>