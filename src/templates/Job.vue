<template>
  <layout>

    <MetaInfo
      :pageTitle = "$page.job.title"
      :pageDescription = "$page.job.description"
    />

    <div class="layout__title blog_title">
      <h1 v-html="$page.job.title"/>
    </div>

    <section class="post layout layout__text hyphens">
       <VueRemarkContent />
    </section>
       
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
  job(id: $id) {
    title
    description
    path
    date (format: "MMMM D, YYYY")
    content
    employmentOption
  }
  allJob{
    edges {
      node {
        title
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
      margin-top: var(--space-text);
      max-width: 1400px;
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
</style>
