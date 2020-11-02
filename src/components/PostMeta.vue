<template>
   <div class="post-meta">
      <span>{{ post.date }}</span>
      
      <span v-if="post.tags">in</span>

      <template v-for="(tag, index) in post.tags">
        <g-link class="post-meta__tags" :to="tag.path" :key="tag.id">{{ tag.title }}</g-link>

        <span class="divide" v-if="(index+1) != post.tags.length">,</span>
      </template>

    </div>
</template>

<script>

export default {
  props: ['post']
}
</script>

<style lang="scss">
  .post-meta {
    font-size: 90%;

    span, a {
      margin-left: .4rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  span.divide {
    margin-left: 0;
  }
</style>