<template>
  <layout :title="$t('Robonomics open-source hardware')">

    <MetaInfo
      :pageTitle = "$t('Open-source hardware')"
      :pageDescription = "$t('Experience the power of true DePIN (Decentralized Physical Infrastructure Network) — a revolutionary technological movement brought to life and thriving with Robonomics')"
      :pageImage = "'/og-pics/devices.webp'"
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