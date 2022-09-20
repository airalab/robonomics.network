<template>
  <section id="blog-banner" class="section__solid section__blue">
    <div class="layout">
        <h1>{{$ts('Important news &amp; announcements')}}</h1>
        <div class="blog-banner__wrapper">
          <div class="blog-banner__img">
            <g-image alt="" src="~/assets/images/blog-banner-img.svg" aria-hidden="true" />
          </div>
          <div class="blog-banner__tags-wrapper" v-if="tags.length">
            <ul class="list blog-banner__tags-list animate-inside-fast" v-in-viewport.once>
              <li class="blog-banner__tags-item">
                <g-link class="blog-banner__tags-link" to="/blog/">{{$ts('All posts')}}</g-link>
              </li>
              <li class="blog-banner__tags-item" v-for="tag in tags" :key="tag.id">
                <g-link class="blog-banner__tags-link" :class="{'inactiveTag': activeTag !== '' && tag.title !== activeTag}" :to="tag.path">{{tag.title}}</g-link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    allTags: {
      type: Array,
      default: []
    },
    activeTag: {
      type: String,
      default: '',
    }
  },

  computed: {
    tags() {
      return this.getTags()
    }
  },

  methods: {
    getTags() {
      const arr = [];
      
      this.allTags.map(tags => {
        tags.node.tags.forEach(tag => {
          arr.push(tag)
        });
      })

      return arr.filter((item,i,array)=>array.findIndex(tag => (tag.id === item.id)) === i)
    }
  },


}
</script>

<style scoped>

  #blog-banner {
    padding-top: calc(var(--space)*4);
    padding-bottom: calc(var(--space)*4);
  }

  h1 {
    padding-top: 0;
    margin-top: 0;
  }

  .blog-banner__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blog-banner__img {
    margin-right: 60px;
  }

  .blog-banner__tags-wrapper {
    width: 100%;
    max-width: 655px;
  }

  .blog-banner__tags-list {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
  }

  .blog-banner__tags-item {
    margin: 0;
    margin-right: 40px;
    margin-bottom: 15px;
  }

  .blog-banner__tags-link {
    font-family: var(--font-family-code);
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }

  .inactiveTag {
    opacity: 0.4;
  }

    @media screen and (max-width: 680px) {
    .blog-banner__wrapper {
      flex-direction: column;
    }

    .blog-banner__img {
      margin-right: 0;
      margin-bottom: 30px;
    }

    .blog-banner__tags-list  {
      justify-content: center;
    }

    .blog-banner__tags-item {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
    .blog-banner__tags-link {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
  
</style>