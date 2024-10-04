<template>
  <layout>

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <section class="devices-banner banner-with-pattern">
      <div class="title-with-bg">
        <h1><span>{{ $t('Smart Devices') }}</span></h1>
      </div>

      <div class="layout">

        <div class="devices-bannercontent">
          <h3 class="banner-with-pattern__text-shadow">
            <span>{{ $t('Control your home') }}</span>
            <span>{{ $t('Be smart') }}</span>
            <span>{{ $t('Be independent') }}</span>
          </h3>

          <div class="devices-bannertext">
            <p>{{ $t("We are an autonomous team with extensive expertise in robotics, blockchain, and IoT. Having a deep understanding of the challenges faced by advanced smart home users, we've chosen to venture into manufacturing our own devices. Take control of your home, save energy, and liberate yourself from corporate clouds and device limitations with us!") }}</p>
            <b>Built for:</b>
            <div class="banner-logos">
              <LogoHomeAssistant/>
              <LogoTasmota/>
            </div>
          </div>

          <g-image class="devices-bannergirl" immediate aria-hidden="true" src="~/assets/images/devices/devices-banner-girl.svg" />
        </div>
      
      </div>
    </section>

    <!-- products -->
    <section class="products">
      <div class="layout layout__mid">
        <DevicesItem 
          v-for="device in devices"
          :key="device.id"
          :title="device.title"
          :text="device.text"
          :img="device.img"
          :hacksterLink="device.hacksterLink"
          :telegramLink="device.telegramLink"
          :release="device.release"
          :features="device.features"
        />
      </div>
    </section>


  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    DevicesItem: () => import("~/components/devices/DevicesItem.vue"),
    LogoHomeAssistant: () => import("~/components/svg/logo-home-assistant.vue"),
    LogoTasmota: () => import("~/components/svg/logo-tasmota.vue"),
  },

  data() {
    return {
      links: {
        tg: 'https://t.me/robo_oshw_bot'
      }
    }
  },

  computed: {
    devices() {
      return [
        {
          id: 0,
          title: this.$t(`Product 1: Universal IR Remote Control`),
          text: this.$t('Build smart climate control with any ANY A-N-Y air conditioner, setup open/close operations for any ANY A-N-Y gates in your home. We’ve built universal IR remote control with an open-source Tasmota firmware onboard. We installed USB-C port for your better experience - upgrade the firmware for the remote control just with a simple wired connection!'),
          img: 'ir-remote.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-ir-esp32/specs",
          telegramLink: this.links.tg,
          release: this.$t("Worldwide shipping starts after EU & USA certification"),
          features: [
            {
              text: this.$t('type-c for OSS firmware upgrading'),
              id: 0,
              accent: true
            },
            {
              text: this.$t('Supports wide range of devices'),
              id: 1
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 2
            },
            {
              text: this.$t('WI-FI'),
              id: 3
            },
            {
              text: this.$t('MQTT'),
              id: 4
            },
          ]
        },
        {
          id: 1,
          title: this.$t('Product 2: Smart Energy Power Consumption Monitoring'),
          text: this.$t('Have you ever wondered what consumes the most electricity in your home? Our smart energy power meter is designed to help you identify the major sources of electricity usage and prevent unwanted energy leaks. This energy meter works both, with an individual asset or an entire building, doesn’t need any cloud, MQTT protocol onboard, can be used with Home Assistant and it’s useful energy management dashboard.'),
          img: 'energy-monitor.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-em-esp32p3/specs",
          telegramLink: this.links.tg,
          release: this.$t("Worldwide shipping starts after EU & USA certification"),
          features: [
            { 
              text: this.$t('type-c for OSS firmware upgrading'),
              id: 0,
              accent: true
            },
            {
              text: this.$t('Efficient energy monitoring consumption'),
              id: 1 
            },
            {
              text: this.$t('Doesn’t need any cloud service'),
              id: 2
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 3
            },
            {
              text: this.$t('WI-FI'),
              id: 4
            },
            {
              text: this.$t('MQTT'),
              id: 5
            },
          ] 
        },
        {
          id: 2,
          title: this.$t('Product 3 : 1 gang wi-fi Smart Switch'),
          text: this.$t('Why should you install any corporate app for switching on/off your smart light?  Our wi-fi smart switches doesn’t require any cloud connection. We tried out many other switches from various manufactureres all over the world and know some important details to make comfortable device. As other smart devices from Robonomics it is fully compatible with Home Assistant, uses open-source upgradable firmware Tasmota.'),
          img: 'smart-switch-1.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-sws-1g-e-esp32/specs",
          release: this.$t("Worldwide shipping starts after EU & USA certification"),
          features: [
            { 
              text: this.$t('type-c for OSS firmware upgrading'),
              id: 0,
              accent: true
            },
            {
              text: this.$t('large touchable  buttons'),
              id: 1 
            },
            {
              text: this.$t('Doesn’t need any cloud service'),
              id: 2
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 3
            },
            {
              text: this.$t('WI-FI'),
              id: 4
            },
            {
              text: this.$t('MQTT'),
              id: 5
            },
          ] 
        },
        {
          id: 3,
          title: this.$t('Product 4: 2 gang wi-fi Smart Switch'),
          text: this.$t('Why should you install any corporate app for switching on/off your smart light?  Our wi-fi smart switches doesn’t require any cloud connection. We tried out many other switches from various manufactureres all over the world and know some important details to make comfortable device. As other smart devices from Robonomics it is fully compatible with Home Assistant, uses open-source upgradable firmware Tasmota.'),
          img: 'smart-switch-2.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-sws-2g-e-esp32/specs",
          release: this.$t("Worldwide shipping starts after EU & USA certification"),
          features: [
            { 
              text: this.$t('type-c for OSS firmware upgrading'),
              id: 0,
              accent: true
            },
            {
              text: this.$t('large touchable  buttons'),
              id: 1 
            },
            {
              text: this.$t('Doesn’t need any cloud service'),
              id: 2
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 3
            },
            {
              text: this.$t('WI-FI'),
              id: 4
            },
            {
              text: this.$t('MQTT'),
              id: 5
            },
          ] 
        },
        {
          id: 4,
          title: this.$t('Product 5: Air Quality Sensor'),
          text: this.$t('Join with this air quality sensor to the decentralized opensource sensors map which operates with the sole intent of serving the free will of individuals. This sensor is ready to install, you will need wi-fi and a power socket, it can be installed both indoor and outdoor. Includes PM2.5/PM10 sensor and temperature/humidity sensor, can be expanded with several types of additional sensors (VOC, CO2, atmospheric pressure).'),
          img: 'quality-sensor.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-es-sds-esp8266-ac-dc",
          // telegramLink: this.links.tg,
          release: this.$t("Worldwide shipping starts after EU & USA certification"),
          features: [
            { 
              text: this.$t('type-c for OSS firmware upgrading'),
              id: 0,
              accent: true
            },
            {
              text: this.$t('Measures PM2.5/PM10'),
              id: 1 
            },
            {
              text: this.$t('Can be added as a part of global sensor map or your own fork'),
              id: 2
            },
            {
              text: this.$t('Compatible with luftdaten'),
              id: 3
            }
          ] 
        }
      ]
    }
  }

}
</script>

<style scoped>

  .layout {
    overflow: hidden;
  }

  .devices-banner {
    background-image: url('../assets/images/devices/devices-banner-bg.webp');
    background-color: var(--color-blue);
    padding: 0 0 var(--space);
  }

  .devices-banner h3 {
    color: var(--rb-color-greenyellow);
    padding-top: var(--space);
  }

  .devices-banner h3 span {
    display: block;
  }

  .banner-logos {
    display: flex;
    gap: 30px;
  }

  .banner-logos svg {
    display: block;
    height: 30px;
  }

  .devices-bannercontent {
    position: relative;
    width: 45vw;
    max-width: 1000px;
  }

  .devices-bannergirl {
    position: absolute;
    z-index: 10;
    width: 620px;
    max-width: 620px;
    right: -600px;
    top: 30px;
  }

  .devices-bannertext {
    background-color: var(--color-blue-vivid);
    color: var(--text-color);
    font-style: italic;
    font-weight: 700;
    margin-bottom: var(--space);
    padding: calc(var(--space) * 0.5);
  }

  .banner-buttons {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    z-index: 0;
    padding: 2rem 0;
  }

  @media screen and (max-width: 1250px) {
    .devices-banner h3 {
      font-size: calc(var(--base-font-size) * 2.8);
    }
  }

  @media screen and (max-width: 1080px) {
    .devices-banner h3 {
      font-size: calc(var(--base-font-size) * 2.2);
    }
  }

  @media screen and (max-width: 1000px) {
    .devices-bannercontent {
      width: 55vw;
    }
  }

  @media screen and (max-width: 800px) {
    .devices-bannercontent {
      width: 100%;
    }

    .devices-bannergirl {
      display: none;
    }
  }

</style>