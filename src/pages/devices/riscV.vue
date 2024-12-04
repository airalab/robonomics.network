<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="$t('RISC-V Smart Home Server')">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="layout layout__content">
      <RiscV class="model" />

      <p class="text-center"><b>{{ $t('BECOME THE COMPLETE SOVEREIGN OF YOUR SMART HOME') }}</b>.</p>
      <p class="text-center">{{ $t('The first server for a smart home built entirely on open-source — from CPU to decentralized cloud.') }}</p>
      <device-buy-section price="$275" />

      <h2 class="title-lined"><span>{{$t('Overview')}}</span></h2>
      

      <section class="section">
        <div class="highlight-solid-green__wrapper">
          <h3 class="highlight-solid-green">{{ $t('RISC-V — Get Server with Open Architecture') }}</h3>
        </div>
        <p>{{ $t('RISC-V is an open and modular processor architecture based on a reduced instruction set (RISC). Unlike proprietary solutions, it offers flexibility for customization without licensing restrictions, making it ideal for IoT devices and servers. RISC-V enables highly efficient and cost-effective designs, which translate into lower power consumption and better performance of your home server.') }}</p>

        <details>
          <summary>{{ $t('Specification of server:') }}</summary>
              <ul class="list-smallgap">
                <li><b>{{ $t('Processor:') }}</b> {{ $t('StarFive JH-7110 with RISC-V 4-core CPU, 2 MB L2 cache, up to 1.5 GHz, RV64GC ISA support') }}</li>
                <li><b>{{$t('GPU:')}}</b> {{ $t('IMG BXE-4-32 MC1, up to 600 MHz') }}</li>
                <li><b>{{ $t('Memory:') }}</b> {{$t('8 GB LPDDR4 SDRAM, up to 2800 Mbps')}}</li>
                <li><b>{{ $t('Storage:') }}</b> {{$t('32 GB TF card (minimum)')}}</li>
                <li><b>{{$t('Interfaces:')}}</b> {{$t('2x Gigabit Ethernet ports, 4x USB 3.0 Type-A ports, 40-pin GPIO header, M.2 connector,  eMMC socket, 2-pin fan header')}}</li>
                <li><b>{{ $t('Power:') }}</b> {{$t('5V DC via USB-C, up to 30 W (minimum 3 A) or 5V input via 40-pin GPIO')}}</li>
                <li><b>{{$t('OS:')}}</b> {{ $t('Ubuntu 24.04 LTS') }}</li>
              </ul>
        </details>

        <g-link class="depin__github" aria-label="check out our guide" to="https://wiki.robonomics.network/docs/home-server-on-risc/#ubuntu-installation">{{$t('check our setup guide')}}</g-link>
      </section>

      <section class="section">
        <div class="highlight-solid-green__wrapper">
          <h3 class="highlight-solid-green">{{ $t('Home Assistant — Install Open-Source Platform for Home Automation') }}</h3>
        </div>
        <p>{{$t('Home Assistant is an open-source home automation platform designed to give users full control over their smart devices. It runs entirely locally, ensuring maximum privacy and eliminating dependence on third-party cloud services. Its core strength lies in its flexibility, enabling users to create custom integrations and automations that suit their specific needs like lighting, security, and climate control, regardless of brand.')}}</p>
        <details>
          <summary>{{$t('Features:')}}</summary>
          <ul class="list-smallgap">
            <li><b>{{$t('Local control:')}}</b>{{ $t('runs entirely on local hardware') }}</li>
            <li><b>{{$t('Modular design:')}}</b> {{ $t('Highly flexible, allowing users to add various components, automations and integrations') }}</li>
            <li><b>{{ $t('No vendor lock-in:') }}</b> {{$t('Supports over 3000 integrations with devices from various manufacturers')}}</li>
          </ul>
        </details>

        <g-link class="depin__github" aria-label="check our guide" to="https://wiki.robonomics.network/docs/home-server-on-risc/#home-assistant-core-installation">{{$t('Home Assistant Core Installation')}}</g-link>
      </section>

      <section class="section">
        <div class="highlight-solid-green__wrapper">
          <h3 class="highlight-solid-green">{{ $t('Robonomics Integration — Integrate Corporate-Free Cloud with P2P Remote Control') }}</h3>
        </div>
        <p>{{ $t('Robonomics has developed its own integration for Home Assistant, which brings all the benefits of a decentralized cloud and p2p communications to the smart home. Only you have cryptographic access to all the functions of the home and decide who will use it.') }}</p>
        <details>
          <summary>{{$t('Functions:')}}</summary>
          <ul class="list-smallgap">
            <li>{{$t('Remote access to the current device states')}}</li>
            <li>{{ $t('Remote device control via parachain or Libp2p') }}</li>
            <li>{{ $t('Home Assistant users management') }}</li>
            <li>{{$t('Backing up and restoring HA configuration')}}</li>
            <li>{{ $t('Storing digital twin of the home in a secure decentralized cloud') }}</li>
            <li>{{$t('Secure report service for technical support providing')}}</li>
          </ul>
        </details>

        <g-link class="depin__github" aria-label="check our guide" to="https://wiki.robonomics.network/docs/home-server-on-risc/#robonomics-integration-installation">{{$t('Robonomics Integration Installation')}}</g-link>
      </section>

      <section class="section">
        <div class="highlight-solid-green__wrapper">
          <h3 class="highlight-solid-green">{{ $t('Zigbee/Wi-Fi Smart Devices — Add Thousands of Solutions for Any Needs') }}</h3>
        </div>
        <p>{{ $t('Numerous Home Assistant integrations allow you to use almost any device based on the Zigbee and Wi-Fi protocols.') }}</p>
        <p>{{ $t('Thanks to the power of Zigbee2MQTT') }}, <g-link to="https://www.zigbee2mqtt.io/supported-devices/" aria-label="check zigbee2MQTT supported devices">{{ $t('almost 4000 different devices') }}</g-link> {{$t('are available to you right from the start: from simple temperature sensors to energy consumption monitoring.')}}</p>

        <g-link class="depin__github" aria-label="check zigbee devices" to="https://wiki.robonomics.network/docs/zigbee-devices/">{{ $t('Zigbee Devices in Zigbee2MQTT') }}</g-link>
      </section>

    </div>

  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    RiscV: () => import("~/components/3dmodels/server.vue"),
    DeviceBuySection: () => import ('@/components/blocks/DevicesBuySection.vue')
  },

}
</script>

<style scoped>
  .model {
    margin: var(--space) auto;
  }
</style>