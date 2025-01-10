<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="riscv[0].title">

    <MetaInfo
      :pageTitle="riscv[0].title"
      :pageDescription="$t('The first server for a smart home built entirely on open-source — from CPU to decentralized cloud.')"
      :pageImage = "'/og-pics/devices-riscv.webp'"
    />

    <DeviceBuySection price="$275">
      <RiscV noanimation />
    </DeviceBuySection>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('Take control of your smart home data with open-source home server on RISC-V processor and Web3 connectivity.') }}</p>
      <p>{{ $t('Experience the power of true DePIN (Decentralized Physical Infrastructure Network) — a revolutionary technological movement brought to life and thriving for years on our') }} <g-link aria-label="go to decentralized sensor map" to="https://sensors.social/">{{ $t('decentralized sensor map') }}</g-link>.</p>
    </article>

    <article class="layout space-b-2">
      <!-- <h2 class="title-lined"><span>Benefits for your smart home</span></h2> -->

      <div class="grid-3">
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('Surveillance-free') }}</h5>
          <p>{{ $t('No hidden data logs on corporate servers while still allowing secure remote access.') }}</p>
        </section>
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('No vendor lock-in') }}</h5>
          <p>{{ $t('Supports over 3000 integrations with devices from various manufacturers.') }}</p>
        </section>
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('Open hardware') }}</h5>
          <p>{{ $t('Open processor architecture and open-source code ensure a trustless system.') }}</p>
        </section>
      </div>
    </article>


    <h2 class="layout title-lined"><span>{{ $t('Open and efficient hardware') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('Our Home Server is powered by a RISC-V processor and features fully transparent circuit board schematics. RISC-V is an open and modular processor architecture that comes with a BSD license. Unlike proprietary ARM, it offers flexibility for customization without licensing restrictions, making it ideal for trustless IoT devices and servers.') }}</p>
      <ul>
          <li><b>{{ $t('Processor:') }}</b> {{ $t('StarFive JH-7110 with RISC-V 4-core CPU, 2 MB L2 cache, up to 1.5 GHz, RV64GC ISA support') }}</li>
          <li><b>{{$t('GPU:')}}</b> {{ $t('IMG BXE-4-32 MC1, up to 600 MHz') }}</li>
          <li><b>{{ $t('Memory:') }}</b> {{$t('8 GB LPDDR4 SDRAM, up to 2800 Mbps')}}</li>
          <li><b>{{ $t('Storage:') }}</b> {{$t('32 GB TF card (minimum)')}}</li>
          <li><b>{{$t('Interfaces:')}}</b> {{$t('2x Gigabit Ethernet ports, 4x USB 3.0 Type-A ports, 40-pin GPIO header, M.2 connector,  eMMC socket, 2-pin fan header')}}</li>
          <li><b>{{ $t('Power:') }}</b> {{$t('5V DC via USB-C, up to 30 W (minimum 3 A) or 5V input via 40-pin GPIO')}}</li>
          <li><b>{{$t('OS:')}}</b> {{ $t('Ubuntu 24.04 LTS') }}</li>
        </ul>
    </article>

    <h2 class="layout title-lined"><span>{{ $t('Vendor agnostic smart home heart') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('The server comes pre-installed with Home Assistant, an open-source home automation platform, giving you full control of your smart home without relying on third-party cloud services.') }}</p>
      <p>{{$t('Its modular design allows you to easily add components, automations, and integrations, supporting over 3,000 devices from various manufacturers without vendor lock-in. With support for Zigbee and Wi-Fi protocols, you can connect a wide range of devices, from temperature sensors to energy consumption monitors, all to a local server.')}}</p>
    </article>

    <h2 class="layout title-lined"><span>{{ $t('Designed for privacy') }}</span></h2>
    
    <article class="layout layout__text space-b-2">
      <p>{{ $t('Our smart home server eliminates corporate interference, keeping your data local or encrypted with your personal key in decentralized Web3 storage. Enjoy complete privacy with no tracking, no surveillance—just secure, trustless control over your smart home.') }}</p>
      <p>{{ $t('With Robonomics Web3 cloud and P2P remote control, you get cryptographic access to all the functions of smart home:') }}</p>
      <ul>
        <li>{{$t('Access current device states remotely')}}</li>
        <li>{{ $t('Control devices remotely via parachain or LibP2P') }}</li>
        <li>{{ $t('Manage Home Assistant users') }}</li>
        <li>{{ $t('Back up and restore Home Assistant configurations') }}</li>
        <li>{{ $t("Store your home's digital twin in a secure, decentralized cloud") }}</li>
      </ul>
    </article>

    <h2 class="layout title-lined"><span>{{ $t('Help & support') }}</span></h2>
    <article class="layout layout__text space-b-2">
      <ul>
        <li><g-link class="highlight" to="https://wiki.robonomics.network/docs/home-server-on-risc/#ubuntu-installation">{{ $t('Home server on RISC V') }}</g-link></li>
        <li><g-link class="highlight" to="https://wiki.robonomics.network/docs/home-server-on-risc/#home-assistant-core-installation">{{$t('Home Assistant Core Installation')}}</g-link></li>
        <li><g-link class="highlight" to="https://wiki.robonomics.network/docs/home-server-on-risc/#robonomics-integration-installation">{{$t('Robonomics Integration Installation')}}</g-link></li>
        <li><g-link class="highlight" to="https://wiki.robonomics.network/docs/zigbee-devices/">{{ $t('Zigbee Devices in Zigbee2MQTT') }}</g-link></li>
      </ul>
    </article>

  </layout>
  
</template>

<script>
import devices from '@/data/devices.js'
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    RiscV: () => import("~/components/3dmodels/server.vue"),
    DeviceBuySection: () => import ('@/components/blocks/DevicesBuySection.vue')
  },

  computed: {
    riscv() {
      return devices.products.filter(product => (product.code === 'server'))
    }
  },

}
</script>

<style scoped>
  .model {
    margin: var(--space) auto;
  }
</style>