<template>
  <layout class="postpage">

    <MetaInfo
      :pageTitle = "$page.post.title"
      :pageDescription = "$page.post.description"
      :pageImage = "$page.post.cover_image ? $page.post.cover_image.src : ''"
      :pageImageHeight = "'576'"
    />

    <g-link to="/blog/" class="small-banner section__blue">
      <h3>{{$t('Important news and announcements')}}</h3>
      <g-image quality="75" alt="" src="~/assets/images/blog-banner-img.svg" aria-hidden="true" />
    </g-link>

    <hr/>

    <div class="post__header">
        <g-image  quality="75" :alt="$page.post.title" v-if="$page.post.cover_image" :src="$page.post.cover_image"/>
    </div>

    <div class="layout__title">
      <h1 v-html="$page.post.title"/>
    </div>

    <Abstract v-if="$page.post.abstract" :text="$page.post.abstract" :className="'post_abstract'"/>

    <div class="layout">
      <PostMeta :post="$page.post" :author="$page.post.author" />
      <!-- <post-author v-if="$page.post.author" :author="$page.post.author"/> -->
    </div>

    <section class="post layout layout__text hyphens">
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
    abstract
    locale
    tags {
      id
      title
      path
    }
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
      PostMeta: () => import('~/components/post/PostMeta.vue'),
      // PostTags: () => import('~/components/post/PostTags.vue'),
      PostCard: () => import('~/components/PostCard.vue'),
      PostRelated: () => import('~/components/post/PostRelated.vue'),
      Abstract: () => import('~/components/TextAbstract.vue'),
      PostAuthor: () => import('~/components/blocks/PostAuthor.vue'),
    },

  }

</script>


<style>
  .post {
    padding: 0 var(--space);
    text-align: left;
    font-weight: 400;
    overflow: hidden;
    line-height: 1.75;
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

  .post .big-table {
    margin-bottom: var(--space);
    overflow-y: auto;
  }

  .post .big-table table {
    white-space: nowrap;
  }

  .post__header {
      /* margin-top: var(--space-text); */
      /* max-width: 1400px; */
      margin-left: auto;
      margin-right: auto;
  }


  .post__header img {
      display: block;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

  .post code {
    vertical-align: middle;
    padding: calc(var(--space) * 0.1)  calc(var(--space) * 0.3);
    background-color: var(--color-bright-pink);
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

