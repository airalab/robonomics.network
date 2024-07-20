<template>
  <layout>

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />


    <!-- banner -->
    <section class="devices banner-with-pattern">
      <div class="devices__main-title title-with-bg">
        <h1><span>{{ $t('Smart devices online shop') }}</span></h1>
      </div>

      <div class="devices__banner-layout layout">
        <div class="devices__content">
          <h3 class="banner-with-pattern__text-shadow devices__banner-title">
            <span>{{ $t('Control your home') }}</span>
            <span>{{ $t('Be smart') }}</span>
            <span>{{ $t('Be independent') }}</span>
          </h3>

          <div class="devices__descr">
            <p class="devices__text">{{ $t("We are an autonomous team with extensive expertise in robotics, blockchain, and IoT. Having a deep understanding of the challenges faced by advanced smart home users, we've chosen to venture into manufacturing our own devices. Take control of your home, save energy, and liberate yourself from corporate clouds and device limitations with us!") }}</p>
            <g-link target="_blank" class="devices__manifesto" to="/its-gonna-get-worse/">[ Manifesto ]</g-link>
          </div>

          <div class="devices__banner-logos">
            <span>Supports:</span>
            <div class="devices__banner-logos--wrapper">
              <g-image immediate quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-hass-logo.png"/>
              <g-image immediate quality="75" class="mobile" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-tasmota-logo.png"/>
            </div>
          </div>
        </div>

        <g-image immediate class="banner-with-pattern__img  devices__banner-img devices__banner-img--girl"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-banner-girl.png"/>

      </div>
    </section>

    <!-- products -->
    <section class="products">
      <div v-for="device in devices"           
      :key="device.id">
        <DevicesItem 
          shop
          :title="device.title"
          :text="device.text"
          :img="device.img"
          :hacksterLink="device.hacksterLink"
          :telegramLink="device.telegramLink"
          :release="device.release"
          :features="device.features"
          :price="device.price"
          :unavailable="device.unavailable"
        />
        <hr>
      </div>
    </section>


  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    DevicesItem: () => import("~/components/devices/DevicesItem.vue")
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
          title: this.$t(`Universal IR Remote Control`),
          text: this.$t('Build smart climate control with any ANY A-N-Y air conditioner, setup open/close operations for any ANY A-N-Y gates in your home. We’ve built universal IR remote control with an open-source Tasmota firmware onboard. We installed USB-C port for your better experience - upgrade the firmware for the remote control just with a simple wired connection!'),
          img: 'ir-remote.png',
          price: 28,
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-ir-32-11-23/specs",
          release: this.$t("Free worldwide shipping starts"),
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
          title: this.$t('Smart Energy Power Consumption Monitoring'),
          text: this.$t('Have you ever wondered what consumes the most electricity in your home? Our smart energy power meter is designed to help you identify the major sources of electricity usage and prevent unwanted energy leaks. This energy meter works both, with an individual asset or an entire building, doesn’t need any cloud, MQTT protocol onboard, can be used with Home Assistant and it’s useful energy management dashboard.'),
          img: 'energy-monitor.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-em-esp-11-23/specs",
          price: 40,
          release: this.$t("Free worldwide shipping"),
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
            }
          ] 
        },
        {
          id: 2,
          title: this.$t('1 gang wi-fi Smart Switch'),
          text: this.$t('Why should you install any corporate app for switching on/off your smart light?  Our wi-fi smart switches doesn’t require any cloud connection. We tried out many other switches from various manufactureres all over the world and know some important details to make comfortable device. As other smart devices from Robonomics it is fully compatible with Home Assistant, uses open-source upgradable firmware Tasmota.'),
          img: 'smart-switch-1.png',
          price: 28,
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-sws-1g-e-esp-11-23/specs",
          release: this.$t("Free worldwide shipping"),
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
            }
          ] 
        },
        {
          id: 3,
          title: this.$t('2 gang wi-fi Smart Switch'),
          text: this.$t('Why should you install any corporate app for switching on/off your smart light?  Our wi-fi smart switches doesn’t require any cloud connection. We tried out many other switches from various manufactureres all over the world and know some important details to make comfortable device. As other smart devices from Robonomics it is fully compatible with Home Assistant, uses open-source upgradable firmware Tasmota.'),
          img: 'smart-switch-2.png',
          price: 28,
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-sws-2g-e-esp-11-23/specs",
          release: this.$t("Free worldwide shipping"),
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
            }
          ] 
        },
        {
          id: 4,
          title: this.$t('Air Quality Sensor'),
          text: this.$t('Join with this air quality sensor to the decentralized opensource sensors map which operates with the sole intent of serving the free will of individuals. This sensor is ready to install, you will need wi-fi and a power socket, it can be installed both indoor and outdoor. Includes PM2.5/PM10 sensor and temperature/humidity sensor, can be expanded with several types of additional sensors (VOC, CO2, atmospheric pressure).'),
          img: 'quality-sensor.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products/robonomics-es-sds-dht-esp-11-23/specs",
          release: this.$t("Free worldwide shipping"),
          unavailable: true,
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
              text: this.$t('Easily forkable map'),
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
  .devices {
    background-image: url('../assets/images/devices/devices-banner-bg.webp');
    background-color: var(--color-blue);
  }

  a.devices__link {
    --color-link: var(--color-light);
    --color-link-hover: var(--color-light)
  }

  hr {
    margin-bottom: calc(var(--space)* 2);;
    background-color: var(--header-bg);
  }

  .devices__banner-layout {
    position: relative;
    max-width: 1400px;
  }

  .devices__content {
    position: relative;
    padding-top: var(--space);
    padding-bottom: calc(var(--space)* 1.5);
    display: flex;
    flex-direction: column;
  }

  .devices__descr {
    max-width: 600px;
    position: relative;
    z-index: 10;
  }

  .devices__text {
    width: 100%;
    padding: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
    font-style: italic;
    font-weight: 500;
    line-height: 1.8;
    color: #fff;;
    background-color: hsla(229, 67%, 49%, 1);
    border: 3px solid #81D7D6;
  }

  .devices__manifesto {
    position: absolute;
    bottom: 10px;
    right: -40px;
    padding: calc(var(--space) * 0.3) calc(var(--space) * 0.5);
    font-weight: 800;
    color: #000;
    background-color: var(--color-yellow);
    text-transform: uppercase;
  }

  .devices__banner-logos {
    position: absolute;
    bottom: 10px;
    right: 0;
    /* width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px; */
    
    
  }

  .devices__banner-logos span {
    display: inline-block;
    font-family: inherit;
    font-weight: 700;
    font-size: calc(var(--base-font-size) * 1.3);
    color: #fff;
  }

  .devices__banner-logos--wrapper {
    display: flex;
    /* gap: 10px; */
    max-width: 304px;
  }
  

  .devices__banner-logos img {
    height: 40px;
    width: 100%;
    object-fit: contain;
  }

  .devices__banner-logos img:first-of-type {
    margin-right: calc(var(--space) * 0.5);
  }

  .devices__banner-logos img:last-of-type {
    max-width: 244px;
  } 

  .devices__banner-img--girl {
    right: 218px;
    top: 100px;
    max-width: 596px;
  }

  @media screen and (max-width: 1660px) {
    .devices__banner-img--girl {
      right: 120px;
      top: 55px;
      max-width: 544px;
    }
  }

  @media screen and (max-width: 1260px) {

    .devices__banner-layout {
      overflow: hidden;
    }

    .devices__banner-title {
      max-width: 100%;
    }

    .devices__content{
      padding-bottom: calc(var(--space) * 3.5);
    }

    .devices__banner-logos {
      right: unset;
      left: 0;
    }

    .devices__banner-img--girl,
    .devices__banner-img--blob {
      right: calc(100% - 1050px);
      top: 145px;
      max-width: 444px;
    }

    .devices__text {
      padding-bottom: var(--space);
    }

    .devices__manifesto {
      position: absolute;
      right: 0;
    }
  }

  @media screen and (max-width: 920px) {
    .devices__banner-img--girl {
      display: none;
    }
  }

  @media screen and (max-width: 630px) {
    .devices__banner-logos img {
      width: 100%;
    }

    .devices__banner-logos img:first-of-type {
      margin-right: 10px;
      max-width: 280px;
      margin-bottom: calc(var(--space) * 0.5);
    }

    .devices__banner-logos img:last-of-type {
      max-width: 120px;
    }

    .devices__text {
      padding-bottom: calc(var(--space) * 2);
    }
  }

  @media screen and (max-width: 580px) {
    .devices__banner-title {
      font-size: calc(var(--base-font-size) * 2);
    }

    .devices__manifesto {
      width: 100%;
      text-align: center;
    }

    .devices__banner-logos--wrapper img {
      width: 100%;
      height: 30px;
    }

    .devices__banner-logos img:first-of-type {
      margin-bottom: 0;
    }

    .devices__banner-logos img:last-of-type {
      max-width: 88px;
    }

  }

</style>