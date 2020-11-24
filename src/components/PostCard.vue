<template>
  <div class="post-card">
    <div class="post-card__header">
      <g-image :alt="post.title" v-if="post.cover_image" class="post-card__image" :src="post.cover_image"/>
    </div>
    <div class="post-card__content">
      <h4 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <!-- <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" /> -->

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>



<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'


export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],

}
</script>

<style lang="scss">
  .post-card {
    background-color: var(--color-light);
    position: relative;

    h4 {
      padding-top: calc(var(--space)/2);
    }

    // &:not(:last-child){
    //   margin-bottom: var(--space);
    // }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
    }

    &__header {
      margin-bottom: calc(var(--space)/2);
    }

    &__content {
      padding-left: calc(var(--space)/2);
      padding-right: calc(var(--space)/2);
      padding-bottom: calc(var(--space)/2);
      font-size: 90%;
      text-align: left;

      h4 {
        margin-bottom: calc(var(--space)/2);
      }
    }

    &__description {
      margin-bottom: 0;
      font-size: calc(var(--base-font-size)*0.9);
    }
  }
</style>
