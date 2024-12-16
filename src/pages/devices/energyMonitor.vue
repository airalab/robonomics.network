<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="$t('Energy Monitor')">

    <MetaInfo
      :pageTitle="$t('Energy Monitor')"
      :pageDescription="$t('A non-invasive device for installation in electrical panels with DIN rail mounting. Built on the Espressif ESP32C6 chip with open RISC-V architecture.')"
    />

    <DeviceBuySection price="$45">
      <g-image src="~/assets/images/hardware-2025/energy-monitor-nobg.webp" alt="energy-monitor picture" />
    </DeviceBuySection>


    <article class="layout layout__text space-b-2">
      <p><b>{{ $t('A non-invasive') }}</b> {{ $t('device for installation in electrical panels with DIN rail mounting. Built on the Espressif ESP32C6 chip with open RISC-V architecture.') }}</p>
      <p><b>{{$t('Equipped')}}</b> {{ $t('with USB-C') }}, <b>{{ $t('supports') }}</b> {{$t('WiFi and Zigbee. Records electricity consumption and generation data in the Polkadot network at 10-minute intervals.')}}</p>
    </article>


    <h2 class="layout title-lined"><span>{{ $t('Device Specifications') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <ul>
        <li> <b>{{ $t('Input Voltage:') }}</b> {{$t('AC 100-240V 50/60Hz')}}</li>
        <li><b>{{ $t('Measuring Range:') }}</b> {{$t('0.1-80A')}}</li>
        <li> <b>{{ $t('Wireless Protocol:') }}</b> {{ $t('IEEE 802.11b/g/n (2.4 GHz Wi-Fi)') }}</li>
        <li><b>{{ $t('CPU:') }}</b>{{ $t('ESP32-S3 MCU-based system on a chip (SoC) dual-core microprocessor (Xtensa 32-bit LX7), up to 240 MHz') }}</li>
        <li><b>{{$t('Memory:')}}</b> {{ $t('448 KB ROM, 520 KB SRAM, 8 MB FLASH') }}
        </li>
        <li><b>{{ $t('USB-C') }}</b> {{ $t('for development and updates') }}</li>
      </ul>
    </article>

    <h2 class="layout title-lined"><span>{{$t('Help & support')}}</span></h2>
    <article class="layout layout__text space-b-2">
      <ul>
        <li>{{ $t('To configure the device, please visit:') }} <g-link class="highlight" to="https://tasmota.github.io/docs/MQTT/">https://tasmota.github.io/docs/MQTT/</g-link></li>
      </ul>
    </article>

  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    DeviceBuySection: () => import ('@/components/blocks/DevicesBuySection.vue'),
  },

}
</script>

<style scoped>
  .model {
    margin: var(--space) auto;
  }
</style>