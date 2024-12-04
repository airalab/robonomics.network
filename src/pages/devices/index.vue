<template>
  <layout :title="$t('Robonomics hardware')">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="layout layout__content">

      <p><b>{{ $t('Meet smart devices & futuristic hardware from an autonomous team with extensive expertise in robotics, blockchain, and IoT') }}</b>.</p>

      <DevicesList />
    </div>
  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    DevicesList: () => import ('~/components/blocks/DevicesList.vue'),
  },
}
</script>