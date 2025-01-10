<template>
  <layout class="postpage" :translated="$page.post.translated">

    <MetaInfo
      :pageTitle = "$page.post.title"
      :pageDescription = "$page.post.description"
      :pageImage = "$page.post.cover_image ? $page.post.cover_image.src : ''"
      :pageImageHeight = "'576'"
    />

    <h1 v-html="$page.post.title" class="layout"/>

    <section class="layout metainfo">
      <div v-if="$page.post.author">By {{$page.post.author}}</div>
      <div>
        <template v-if="$page.post.date">{{ $page.post.date }} </template>

        <template v-if="$page.post.tags.length > 0">
          in 
          <template v-for="(tag, index) in $page.post.tags">
            <g-link :to="tag.path" :key="tag.id">{{ tag.title }}</g-link>
            <span v-if="(index+1) != $page.post.tags.length" :key="tag.id" class="tagdivide">,</span>
          </template>
        </template> 
        
        <template v-if="$page.post.date || $page.post.tags.length > 0"> / </template>
        <g-link to="/blog"><b>All posts</b></g-link>
      </div>
    </section>

    <p class="abstract layout layout__text" :class="{'space-b-05': $page.post.abstractAuthor}" v-if="$page.post.abstract">{{$page.post.abstract}}</p>
    <b class="abstract layout layout__text" v-if="$page.post.abstractAuthor"> {{ $page.post.abstractAuthor }}</b>

    <g-image v-if="$page.post.cover_image" :src="$page.post.cover_image" aria-hidden="true" class="poster" />

    <section class="post layout layout__text">
      <VueRemarkContent />
    </section>

    <PostRelated v-if="$page.post.related.length > 0" />
       
  </layout>
</template>


<static-query>
  query {
    metadata {
      siteName,
      siteDescription
    }
  }
</static-query>


<page-query>
query($id: ID!) {
  post(id: $id) {
    title
    cover_image (width: 2000, quality: 80)
    description
    path
    author
    date (format: "MMMM D, YYYY")
    content
    related
    abstract,
    abstractAuthor
    locale
    tags {
      id
      title
      path
    }
    translated
  }
  allPost{
    edges {
      node {
        title
        cover_image (width: 2000, quality: 80)
        path
      }
    }
  }
}

</page-query>


<script>

  export default {

    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      PostCard: () => import('~/components/PostCard.vue'),
      PostRelated: () => import('~/components/post/PostRelated.vue'),
      PostAuthor: () => import('~/components/blocks/PostAuthor.vue'),
    },

  }

</script>

<style scoped>
  .abstract {
    font-size: 120%;
    font-style: italic;
    text-align: center;
  }

  .metainfo {
    font-size: 90%;
    text-align: center;
    font-style: italic;
    margin-bottom: var(--space);
  }

  .tagdivide {
    margin-right: 5px;
  }

  .poster {
    display: block;
    margin: var(--space) auto;
    max-width: 100%;
  }

</style>


<style>

  .post {
    padding: 0 var(--space);
    text-align: left;
    font-weight: 400;
    overflow: hidden;
    line-height: 1.75;
  }

  html[lang="ar"] .post {
    text-align: right;
  }

  .postpage h1, .post h2, .post h3, .post h4, .post h5 {
    font-family: var(--font-family);
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  .post h2, .post h3, .post h4, .post h5 {
    text-align: left !important;
    hyphens: initial;
  }

  html[lang="ar"] .post h2, html[lang="ar"] .post h3, html[lang="ar"] .post h4, html[lang="ar"] .post h5 {
    text-align: right !important;
  }

  .post .big-table {
    margin-bottom: var(--space);
    overflow-y: auto;
  }

  .post .big-table table {
    white-space: nowrap;
  }

  .post code {
    vertical-align: middle;
    padding: calc(var(--space) * 0.1)  calc(var(--space) * 0.3);
    background-color: hsl(220.87deg 50.39% 29.76%);
    font-weight: 600;
    color: var(--color-light);
  }

  .post h2 strong, .post h3 strong, .post h4 strong, .post h5 strong {
    color: var(--color-green);
  }

  .small-banner {
    margin-top: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .small-banner h3 {
    margin-bottom: 0;
    margin-right: 35px;
    color: #fff;
  }

  .small-banner img {
    width: 94px;
    height: 103px;
  }

  hr {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (max-width: 700px) {
    .small-banner img {
      width: 94px;
      height: 60px;
    }
  }

  @media screen and (max-width: 510px) {
    .post table {
      display: block;
      /* white-space: nowrap; */
      overflow: scroll;
    }
  }

  @media screen and (max-width: 430px) {
    .small-banner {
      padding: 5px;
    }

    .small-banner img {
      height: 50px;
    }

    .small-banner h3 {
      margin-right: 0;
      font-size: 0.8rem;
    }
  }
</style>

