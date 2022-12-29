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
   import translations from '@/data/locales/translations.yaml'
export default {
  props: {
      pageTitle: { type: String, default: '' },
      pageDescription: { type: String, default: '' },
      pageImage: { type: String, default: '' },
      pageImageWidth: { type: String, default: '1280' },
      pageImageHeight: { type: String, default: '765' },
      pageLang: {type: String, default: 'en'}
  },

  // data() {
        
  //       return {
  //           url: this.$static.metadata.siteUrl + this.$route.fullPath,
  //       };
        
  //   },

  // mounted() {
  //   this.url = this.$static.metadata.siteUrl + this.$route.fullPath
  //   console.log(this.url)
  // },

  data() {
    return {
      allLocales: ["ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr", "uk"],
      locale: 'en',
      metaTitle: '',
      metaDescription: ''
    }
  },

  computed: {
    image() {
      if(this.pageImage != '') {
        return this.$static.metadata.siteUrl + this.pageImage
      }
      else{
        return this.$static.metadata.siteUrl + '/website_cover.jpg'
      }
    },

    // title() {
    //   return this.pageTitle + ' / ' + this.$static.metadata.siteName
    // },

    url(){
      return this.$static.metadata.siteUrl + this.$route.fullPath
    },

    translations() {
      return translations;
    }
  },

  methods: {
    getLocale() {
      this.allLocales.map(locale => {
        if(this.$route.path.includes(`/${locale}/`)) {
          this.locale = locale;
        } 
      })
    },
    
    getMetaInfo(alias) {
      let hasAlias = 0
      for (const item of this.translations) {
        if (item.alias === alias){
          hasAlias++
          
          // Check if there is translation for current alias, if no show default locale string
          if (eval(`item.${this.locale}`)){
            return eval(`item.${this.locale}`)
          }
          else {
              return eval(`item.en`)
          }
        }
      }
      if(hasAlias == 0) {
        return alias;
      }
    }
  },

  metaInfo() {
    const locale = this.locale;
    const title =  this.metaTitle + ' / ' + this.$static.metadata.siteName;
    const description = this.metaDescription;
    const image = this.image;
    return {
      title: title,
      htmlAttrs: {
        lang: locale,
        amp: true
      },
      meta: [
        { key: 'description', name: 'description', content: description },

        // Some Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { property: "og:image:width", content: this.pageImageWidth },
        { property: "og:image:height", content: this.pageImageHeight },
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
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: image },
        { name: "twitter:description", content: description },
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
  },

  created() {
    this.getLocale();
    this.metaTitle = this.getMetaInfo(this.pageTitle);
    this.metaDescription = this.getMetaInfo(this.pageDescription)
  }
};
</script>