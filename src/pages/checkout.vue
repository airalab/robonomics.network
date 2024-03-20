<template>
    <layout>

      <MetaInfo
        pageTitle = "Checkout"
        pageDescription = "Proceed with your order"
        :pageImage = "'/website_cover_devices.png'"
      />


      <section class="devices banner-with-pattern">
        <div class="title-with-bg">
          <h1><span>{{ $t('Smart devices online shop') }}</span></h1>
        </div>
      </section>



    </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
  },

}
</script>

<style scoped>

  .banner-with-pattern {
    margin: 0;
    background-image: url('../assets/images/devices/devices-banner-bg.jpg');
  }

  .title-with-bg {
    display: block;
  }

  @media screen and (max-width: 650px) {

    .banner-with-pattern {
      min-height: 65px;
    }
    
  }

</style>