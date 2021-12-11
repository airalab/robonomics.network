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

                <Card link="/papers/" orientation="vertical">
                    <h3>Papers</h3>
                </Card>

                <Card link="/books/" orientation="vertical">
                    <h3>Books</h3>
                </Card>

                <Card link="/contact/" orientation="vertical">
                    <h3>Social media links</h3>
                </Card>
            </section>
            
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

  components: {
      Card: () => import("~/components/TextCard.vue"),
  },

  mounted() {
        if(location.hash === "#token"){
            location.replace(this.$static.metadata.home + '/xrt/');
        }

        if(location.hash === "#intouch"){
            location.replace(this.$static.metadata.home + '/contact/');
        }

        if(location.hash === "#science"){
            location.replace(this.$static.metadata.home + '/papers/');
        }

        if(location.hash === "#docs"){
            location.replace(this.$static.metadata.home + '/books/');
        }
  }
}
</script>