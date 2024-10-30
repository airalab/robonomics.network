<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="$t('RISC-V Smart Home Server')">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="layout layout__content">
      <p class="text-center"><b>{{ $t('BECOME THE COMPLETE SOVEREIGN OF YOUR SMART HOME') }}</b>.</p>
      <p class="text-center">{{ $t('The first server for a smart home built entirely on open-source — from CPU to decentralized cloud.') }}</p>
      <p class="align-center"><g-link to="/blog/robo-season-pass-2025-welcome-to-the-paper-st-club/" class="highlight">{{ $t('Available for members') }}</g-link></p>

      <h2 class="title-lined"><span>{{$t('Overview')}}</span></h2>
      <RiscV class="risc-v-page"/>

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
    RiscV: () => import("~/components/3dmodels/riscV.vue"),
  },

}
</script>

<style scoped> 


  .layout__content {
    padding-top: calc(var(--space) * 2);
    overflow: hidden;
  }


  .layout .highlight {
    position: relative;
    z-index: 10;
  }


  .layout .risc-v-page {
    top: 30px;
    margin: 0 auto;
  }

  .highlight-solid-green__wrapper .highlight-solid-green {
    display: inline
  }

  .highlight-solid-green__wrapper {
    margin-bottom: var(--space);
  }

  .depin__github {
    display: inline-block;
    /* height: 50px; */
    /* padding-left: 60px; */
    padding-top: 10px;
    font-variation-settings: var(--font-flex-bold);
    font-size: var(--base-font-size);
    font-size: 22px;
    /* background-image: url("data:image/svg+xml,%3Csvg width='52' height='49' viewBox='0 0 52 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.0002 0C11.7194 0 0 10.8598 0 24.0931C0 35.3856 8.55115 45.6436 19.9064 48.1861V40.2151C18.7813 40.4434 17.7458 40.4501 16.6004 40.1372C15.0639 39.717 13.8154 38.7685 12.8886 37.3223C12.2979 36.3988 11.2509 35.3973 10.1587 35.4709L9.89091 32.6585C12.2527 32.471 14.2958 33.9919 15.5086 35.88C16.0474 36.7197 16.6675 37.212 17.4633 37.4296C18.2326 37.6395 19.0586 37.5388 20.0211 37.2237C20.2627 35.4381 21.1454 34.7698 21.8123 33.8287V33.8272C15.0401 32.8912 12.3411 29.5619 11.27 26.9341C9.85045 23.4449 10.6122 19.0859 13.1223 16.3313C13.1711 16.2776 13.2592 16.1372 13.225 16.039C12.0741 12.8175 13.4766 10.1525 13.5281 9.86979C14.8564 10.2337 15.0722 9.50363 19.2978 11.8826L20.0282 12.2892C20.3337 12.4579 20.2377 12.3616 20.5432 12.3403C22.3074 11.8962 24.1673 11.651 25.9998 11.6289C27.8462 11.651 29.6942 11.8962 31.5314 12.3583L31.7679 12.3803C31.7473 12.3774 31.8322 12.3664 31.9746 12.2877C37.2531 9.32496 37.0635 10.2933 38.479 9.86685C38.5302 10.1499 39.914 12.8583 38.7754 16.039C38.6218 16.4772 43.3517 20.4906 40.73 26.933C39.6589 29.5619 36.9603 32.8912 30.1881 33.8272V33.8287C31.0561 35.0547 32.0992 35.7069 32.0936 38.2362V48.1861C43.4492 45.6436 52 35.3856 52 24.0931C52.0004 10.8598 40.2809 0 26.0002 0Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
    background-position: left;
    background-size: 50px 50px;
    background-repeat: no-repeat; */
    text-transform: uppercase
  }


  @media screen and (max-width: 520px) {

    .depin__github { 
      font-size: 16px;
    }
  }

</style>