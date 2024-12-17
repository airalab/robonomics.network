<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="hikikomori[0].title">

    <MetaInfo
      :pageTitle="hikikomori[0].title"
      :pageDescription="$t('A smart home assistant you’ll enjoy caring for, even when you’re away. Only devs.')"
      pageImage="/og-pics/devices-hikikomori.webp"
    />

    <DeviceBuySection price="$75">
      <g-image src="~/assets/images/hardware-2025/hikikomori.webp" alt="Hikikomori smart Tamagotchi picture'" />
    </DeviceBuySection>


    <article class="layout layout__text space-b-2">
      <p>{{ $t('HIKIKOMORI') }} <b>{{ $t('ESP32-C6-LCD-1.47') }}</b> {{ $t('is a microcontroller development board with 2.4GHz Wi-Fi 6 and Bluetooth BLE 5 support, integrates 4MB Flash.') }}</p>
      <p>{{ $t('Onboard 1.47inch LCD screen can smoothly run GUI programs such as LVGL. Combined with various peripheral interfaces, suitable for the quick development of the HMI and other ESP32-C6 applications.') }}</p>
    </article>


    <h2 class="layout title-lined"><span>{{ $t('Device Specifications') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <ul>
        <li> {{ $t('Equipped with a high-performance') }} <b>{{$t('32-bit RISC-V processor')}}</b> {{ $t('with clock speed up to 160 MHz, and a low-power 32-bit RISC-V processor with clock speed up to 20MHz') }}</li>
        <li><b>{{ $t('Supports') }}</b> {{ $t('2.4GHz Wi-Fi 6 (802.11 b/g/n) and Bluetooth 5 (LE), with onboard antenna') }}</li>
        <li> <b>{{ $t('Built in') }}</b> {{ $t('320KB ROM, 512KB of HP SRAM, 16KB LP SRAM and 4MB Flash memory') }}</li>
        <li><b>{{ $t('Onboard') }}</b> {{ $t('1.47inch LCD display, 172x320 resolution, 262K color') }}</li>
        <li> <b>{{ $t('Adapting') }}</b> {{ $t('multiple IO interfaces,') }} <b>{{ $t('integrates') }}</b> {{ $t('full-speed USB-С port') }}
        </li>
        <li> <b>{{$t('Onboard TF card slot')}}</b> {{ $t('for external TF card storage of pictures or files') }}</li>
        <li><b>{{$t('Supports accurate control')}}</b> {{ $t('such as flexible clock and multiple power modes to realize low power consumption in different scenarios') }}</li>
        <li><b>{{$t('Built-in RGB LED')}}</b> {{$t('with clear acrylic sandwich panel for cool lighting effect')}}</li>
        <li><b>{{ $t('Battery Level Gauge') }}</b></li>
        <li><b>{{ $t('Low-Power I2C Temperature sensor') }}</b></li>
        <li><b>{{$t('RV-3032-C7 Real-Time Clock Module')}}</b></li>
        <li><b>{{$t('Battery 180mA')}}</b></li>
      </ul>
    </article>

  </layout>
  
</template>

<script>

import devices from '@/data/devices.js'

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    DeviceBuySection: () => import ('@/components/blocks/DevicesBuySection.vue'),
  },

  computed: {
    hikikomori() {
      return devices.products.filter(product => (product.code === 'hikikomori'))
    }
  },

}
</script>

<style scoped>
  .model {
    margin: var(--space) auto;
  }
</style>