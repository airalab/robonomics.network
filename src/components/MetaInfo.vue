<template></template>
  
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
export default {
  props: {
      pageTitle: { type: String, default: '' },
      pageDescription: { type: String, default: '' }
  },
 

  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        { key: 'description', name: 'description', content: this.pageDescription },

        // Some Open Graph Tags
        { property: "og:title", content: this.pageTitle },
        { property: "og:description", content: this.pageDescription },
        // { property: "og:image", content: this.$page.post.cover_image },
        // {
        //   property: "og:url",
        //   content: this.$static.metadata.siteUrl + this.$page.post.path
        // },

        // Some Twitter Cards Tags
        // { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.pageTitle },
        // { name: "twitter:image", content: this.$page.post.cover_image },
        { name: "twitter:description", content: this.pageDescription }
      ]

      // //Some ld+json tags
      // script: [
      //   {
      //     type: "application/ld+json",
      //     json: {
      //       "@context": "http://schema.org",
      //       "@type": "BlogPosting",
      //       description: this.$page.post.description,
      //       datePublished: this.$page.post.date,
      //       author: {
      //         name: this.$page.post.author
      //       },
      //       headline: this.$page.post.title,
      //       image: this.$page.post.cover_image,
      //     }
      //   }
      // ]
    };
  }
};
</script>