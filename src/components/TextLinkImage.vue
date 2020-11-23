<template>

  <g-link :to="link" class="text_linkImage">

    <div class="icon">
      <img alt="" :src="image"/>
    </div>

    <div>
      <h4 v-if="title" v-html="title" />
      <p v-if="caption" v-html="caption" />
    </div>
  </g-link>

</template>




<script>

export default {

  props: {
    title: {
      type: String,
      default: false,
    },

    image: {
      type: String,
      default: false,
    },

    link: {
      type: String,
      default: false,
    },

    caption: {
      type: String,
      default: false,
    },

  },

}
</script>


<style lang="scss">
  .text_linkImage{
    display: grid;
    grid-template-columns: 70px auto;
    gap: var(--space);

    background-color: var(--color-light);
    padding: var(--space);
    text-align: left;

    text-decoration: none;
    color: var(--text-color) !important;

    .icon {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      background-color: var(--link-color);

      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        display: inline-block;
        max-width: 60%;
        max-height: 60%;
      }
    }

    h4 {
      margin-bottom: calc(var(--space-text)/2);
    }

    &:hover {
      color: var(--link-color-hover) !important;
      transform: translateY(-.5rem);

      .icon{
        background-color: var(--link-color-hover);
      }
    }
  }
</style>