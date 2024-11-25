<template>
   <div class="post-meta">
      <div>
        <span>{{ post.date }}</span>
      
        <span v-if="post.tags.length > 0">in</span>

        <template v-for="(tag, index) in post.tags">
          <g-link class="post-meta__tags" :to="tag.path" :key="tag.id">{{ tag.title }}</g-link>

          <span class="divide" v-if="(index+1) != post.tags.length" :key="tag.id">,</span>
        </template>

        / <g-link to="/blog"><b>All posts</b></g-link>
      </div>

      <post-author v-if="author" :author="author"/>

    </div>
</template>

<script>

export default {
  props: ['post', 'author'],

  components: {
      PostAuthor: () => import('~/components/blocks/PostAuthor.vue')
    }
}
</script>

<style scoped>
  .post-meta {
    font-size: 90%;
    font-style: italic;
    opacity: 0.7;
    margin-bottom: 0;

    /* border-width: 1px 0;
    border-style: dashed;
    border-color: var(--color-gray); */
    /* padding: var(--space) 0; */
    padding-bottom: 0;
    text-align: center;
  }

  .post-meta span, .post-meta a {
    margin-left: .4rem;
    text-decoration: none;
  }

  .post-meta span:first-child, .post-meta a:first-child {
    margin-left: 0;
  }

  .post-meta span.divide {
    margin-left: 0;
  }
</style>