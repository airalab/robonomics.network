<template>
  <layout>

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="title-with-bg">
        <h1><span>{{ $t('Robonomics hardware') }}</span></h1>
      </div>

    <section class="devices-banner"></section>

    <section class="devices-intro layout layout__content">
      <h2 class="devices-intro__title"> Begin your adventure in the world of cyber punks</h2>
      <p><b>Meet smart devices & futuristic hardware from an autonomous team with extensive expertise in robotics, blockchain, and IoT</b>.</p>
    </section>

    <!-- products -->
    <section class="products">
      <div class="layout layout__content">
        <h2 class="devices__title">
          <span>Hardware for cyber punks 2025 line up</span>
        </h2>
        <Products specialCl="altruist-page altruist-page--devices" />
      </div>
    </section>


  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    Products: () => import("~/components/Products.vue"),
  },


}
</script>

<style scoped>

  .layout {
    overflow: hidden;
  }

  .title-with-bg {
    text-align: left;
  }

  .devices-banner {
    padding: 0 0 var(--space);
    margin-bottom: var(--space);
    min-height: 620px;
    height: 100%;
    background-image: url('../../assets/images/banner-new-desktop.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .devices-intro {
    margin-top: 0;
    margin-bottom: calc(var(--space) * 3);
  }

  .devices-intro__title {
    text-align: left;
  }

  .devices__title {
    display: inline;
    text-transform: uppercase;
    background-color: var(--rb-color-green-accent);
    text-align: left;
    margin-bottom: calc(var(--space) * 3);
  }

  @media screen and (max-width: 520px) {
    .devices-banner {
      min-height: 300px;
      background-image: url('../../assets/images/banner-new-mobile.png');
    }

    .title-with-bg  {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .title-with-bg h1 {
      font-size: 30px;
      line-height: 1;
    }
  }

</style>