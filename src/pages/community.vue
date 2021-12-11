<template>
    <layout>
        <div class="page">
            <section class="layout layout__content">
                <h1>This page has moved to other pages</h1>
                <p>If you are not automaticly redirected please follow links below.</p>
            </section>

            <section class="layout layout__text">
                <Card link="/xrt/" image="/website_cover_token.jpg" :imageRound="false" orientation="vertical" imageSize="block">
                    <h3>{{$ts('Robonomics token')}}, XRT</h3>
                </Card>
            </section>


            <p>{{redirect}}</p>
        </div>
    </layout>
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

  components: {
      Card: () => import("~/components/TextCard.vue"),
  },

  computed: {
      redirect(){
          if(location.hash === "#token"){
              return this.$static.metadata.home + '/xrt/'
          }
      }
  }
}
</script>