<template>
   <div class="post-meta">
      <span>{{ post.date }}</span>
      
      <span v-if="post.tags.length > 0">in</span>

      <template v-for="(tag, index) in post.tags">
        <g-link class="post-meta__tags" :to="tag.path" :key="tag.id">{{ tag.title }}</g-link>

        <span class="divide" v-if="(index+1) != post.tags.length">,</span>
      </template>

      / <g-link to="/blog">All posts</g-link>

    </div>
</template>

<script>

export default {
  props: ['post']
}
</script>

<style scoped>
  .post-meta {
    font-size: 90%;
    margin-bottom: calc(var(--space)*2);
    font-family: var(--font-family-code);

    border-width: 1px 0;
    border-style: dashed;
    border-color: var(--color-gray);
    padding: var(--space) 0;

    text-align: center;
  }

  .post-meta span, .post-meta a {
    margin-left: .4rem;
  }

  .post-meta span:first-child, .post-meta a:first-child {
    margin-left: 0;
  }

  .post-meta span.divide {
    margin-left: 0;
  }
</style>