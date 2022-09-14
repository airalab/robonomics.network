<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.post.title"
      :pageDescription = "$page.post.description"
      :pageImage = "$page.post.cover_image ? $page.post.cover_image.src : ''"
      :pageImageHeight = "'576'"
    />

    <!-- <div class="small-banner">
      <h3>{{$ts('Important news & announcements')}}</h3>
      <g-image alt="" src="~/assets/images/blog-banner-img.svg" aria-hidden="true" />
    </div> -->

    <div class="post__header animate-inside" v-in-viewport.once>
        <g-image :alt="$page.post.title" v-if="$page.post.cover_image" :src="$page.post.cover_image"/>
    </div>

    <div class="layout__title blog_title">
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
    cover_image (width: 2000, quality: 100)
    description
    path
    author
    date (format: "MMMM D, YYYY")
    content
    related
    abstract
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
        cover_image (width: 2000, quality: 100)
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
      PostMeta: () => import('~/components/PostMeta.vue'),
      // PostTags: () => import('~/components/PostTags.vue'),
      PostCard: () => import('~/components/PostCard.vue'),
      PostRelated: () => import('~/components/PostRelated.vue'),
      Abstract: () => import('~/components/TextAbstract.vue'),
      PostAuthor: () => import('~/components/blocks/PostAuthor.vue'),
    }

  }

</script>


<style>
  .post {
    padding: var(--space);
    text-align: left;
    font-weight: 400;
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

  /* .post strong, .post b {
      background-color: #f8ffb5;
    } */

  .post a { word-break: break-all; }

  .post h2 strong, .post h3 strong, .post h4 strong, .post h5 strong {
    color: var(--color-green);
  }

  .small-banner {
    margin-top: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-blue);
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

  @media screen and (max-width: 700px) {
    .small-banner img {
      width: 94px;
      height: 60px;
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

