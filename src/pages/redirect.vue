<template>
    <div>This page has moved to a <a :href="redirect">{{ $static.metadata.home + redirect }}</a>. Automatic redirecting</div>
</template>

<static-query>
query {
  metadata {
    home
  }
}
</static-query>

<script>
export default {
  metaInfo() {
        return {
            // title: `Redirecting to https://robonomics.network/${this.redirect}`,
            meta: [
                {
                    'http-equiv': 'refresh',
                    content: `0; url="${this.redirect}"`
                }
            ],

            link: () => [
                {
                    rel: 'canonical',
                    href: `${this.$static.metadata.home}${this.redirect}`,
                    id: 'canonical',
                },
            ],
        }
  },

  computed: {
      redirect(){
          if(this.$context.redirect){
              return this.$context.redirect
          }
      }
  }
}
</script>