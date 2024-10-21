<template>
  <layout title="Robonomics hardware">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <section class="devices-intro layout layout__content">
      <p><b>Meet smart devices & futuristic hardware from an autonomous team with extensive expertise in robotics, blockchain, and IoT</b>.</p>
    </section>

    <div class="layout layout__content">
      <Products specialCl="altruist-page altruist-page--devices" />
    </div>
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