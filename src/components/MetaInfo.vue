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

  data() {
        
        return {
            title: this.pageTitle + ' / Robonomics.network',
            url: ''
        };
        
    },

  mounted() {
    this.url = window.location.href;
  },
 

  metaInfo() {
    return {
      title: this.title,
      meta: [
        { key: 'description', name: 'description', content: this.pageDescription },

        // Some Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.pageDescription },
        { property: "og:image", content: '/website_cover.png' },
        { property: "og:image:width", content: '1280' },
        { property: "og:image:height", content: '800' },
        { property: "og:url", content: this.url },
        // {
        //   property: "og:url",
        //   content: window.location.href
        // },
        // {
        //   property: "og:url",
        //   content: this.$static.metadata.siteUrl + window.location.pathname
        // },


        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:image", content: '/website_cover.png' },
        { name: "twitter:description", content: this.pageDescription },
        { name: "twitter:site", content: '@AIRA_Robonomics' },
        { name: "twitter:creator", content: '@AIRA_Robonomics' }
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