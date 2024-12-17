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
      <p>{{ $t('Take control of your smart home data with an open-source server and stay connected using Web3 remote control technologies.') }}</p>
      <p>{{ $t('Experience the power of true DePIN (Decentralized Physical Infrastructure Network) — a revolutionary technological movement brought to life and thriving for years on our') }} <g-link aria-label="go to decentralized sensor map" to="https://sensors.social/">{{ $t('decentralized sensor map') }}</g-link>.</p>
    </article>

    <article class="layout space-b-2">
      <!-- <h2 class="title-lined"><span>Benefits for your smart home</span></h2> -->

      <div class="grid-3">
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('Worldwide available') }}</h5>
          <p>{{ $t('There are no restrictions on using this smart home server anywhere in the world.') }}</p>
        </section>
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('Free from vendor lock-in') }}</h5>
          <p>{{ $t('Available over 3,000 integrations with devices from a wide range of manufacturers.') }}</p>
        </section>
        <section class="oldy">
          <h5 class="space-b-05">{{ $t('Secure Web3 Cloud') }}</h5>
          <p>{{ $t('No hidden data logs on corporate servers while still allowing remote control.') }}</p>
        </section>
      </div>
    </article>


    <h2 class="layout title-lined"><span>{{ $t('Well-engineered hardware architecture') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('RISC-V is an open and modular processor architecture based on a reduced instruction set (RISC). Unlike proprietary solutions, it offers flexibility for customization without licensing restrictions, making it ideal for IoT devices and servers. RISC-V enables highly efficient and cost-effective designs, which translate into lower power consumption and better performance of your home server.') }}</p>
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

    <h2 class="layout title-lined"><span>{{ $t('Broad device range with open-source software') }}</span></h2>

    <article class="layout layout__text space-b-2">
      <p>{{ $t('By installing an open-source platform Home Assistant on this server, you can create a smart home with a wide variety of devices from different manufacturers, without being tied to a specific brand.') }}</p>
      <p>{{$t('With extensive integrations for Zigbee and Wi-Fi, Home Assistant connects nearly 4,000 devices, from temperature sensors to energy monitors, right out of the box using Zigbee2MQTT.')}}</p>
    </article>

    <h2 class="layout title-lined"><span>{{ $t('Truly decentralized cloud for quick remote control') }}</span></h2>
    
    <article class="layout layout__text space-b-2">
      <p>{{ $t('With over 10 years of expertise in decentralized technologies, we deliver exceptional peer-to-peer communication for your smart home. Enjoy remote device access via parachain or Libp2p, cryptographic user access control, and secure storage of backups and digital twins of your smart home in an encrypted decentralized cloud.') }}</p>
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