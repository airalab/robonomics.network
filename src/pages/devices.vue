<template>
  <layout>

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Control your home.Be smart.Be independent."
      :pageImage = "'/website_cover_devices.png'"
    />


    <!-- banner -->
    <section class="devices">
      <div class="devices__main-title title-with-bg">
        <h1><span>{{ $t('Smart Devices') }}</span></h1>
      </div>

      <div class="devices__banner-layout layout">
        <div class="devices__content">
          <h3 class="devices__banner-title">
            <span>{{ $t('Control your home') }}</span>
            <span>{{ $t('Be smart') }}</span>
            <span>{{ $t('Be independent') }}</span>
          </h3>

          <p class="devices__text">{{ $t("We are self-driving team with extensive expertise in robotics, blockchain, and IoT. Having a deep understanding of the challenges faced by advanced smart home users, we've chosen to venture into manufacturing our own devices. Take control of your home, save energy, and liberate yourself from corporate clouds and device limitations with us!") }}</p>

          <div class="devices__banner-logos">
            <g-image quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-hass-logo.png"/>
            <g-image quality="75" class="mobile" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-tasmota-logo.png"/>
          </div>
        </div>

        <g-image class="devices__banner-img devices__banner-img--girl" quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-banner-decor-1.png"/>
        <g-image class="devices__banner-img devices__banner-img--blob"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-banner-decor-2.png"/>

        <div class="devices__banner-buy">
          <div class="devices__banner-buy-wrapper">
            <g-link to="https://www.hackster.io/robonomics-web3-cloud/products" class="devices__link">{{ $t('BUY DEVICE') }}</g-link>
            <g-link to="https://www.hackster.io/robonomics-web3-cloud/products"  class="devices__banner-support">
              <span>{{ $t('Support it on hackster.io') }}</span>
            </g-link>
          </div>
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
    DevicesItem: () => import("~/components/DevicesItem.vue")
  },

  data() {
    return {
      devices: [
        {
          id: 0,
          title: this.$t(`Product 1: Universal IR Remote Control`),
          text: this.$t('Build smart climate control with any ANY A-N-Y air conditioner, setup open/close operations for any ANY A-N-Y gates in your home. We’ve built universal IR remote control with an open-source Tasmota firmware onboard. We installed USB-C port for your better experience - upgrade the firmware for the remote control just with a simple wired connection!'),
          img: 'ir-remote.png',
          hacksterLink: "https://wiki.robonomics.network/docs/ir-controller/",
          telegramLink: "https://t.me/robo_oshw_bot",
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
          text: this.$t('Have you ever wondered what consumes the most electricity in your home? Our smart DIN energy power meter is designed to help you identify the major sources of electricity usage and prevent unwanted energy leaks. This energy meter works both, with an individual asset or an entire building, doesn’t need any cloud, MQTT protocol onboard, can be used with Home Assistant and it’s useful energy management dashboard.'),
          img: 'energy-monitor.png',
          hacksterLink: "https://wiki.robonomics.network/docs/energy-meter",
          telegramLink: "https://t.me/robo_oshw_bot",
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
          title: this.$t('Product 3, 4: 1,2 gang wi-fi Smart Switch'),
          text: this.$t('Why should you install any corporate app for switching on/off your smart light?  Our wi-fi smart switches doesn’t require any cloud connection. We tried out many other switches from various manufactureres all over the world and know some important details to make comfortable device. As other smart devices from Robonomics it is fully compatible with Home Assistant, uses open-source upgradable firmware Tasmota.'),
          img: 'smart-switch.png',
          hacksterLink: "https://wiki.robonomics.network/docs/wi-fi-smart-switch",
          release: this.$t("Start of Sales: Jan '24"),
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
          title: this.$t('Product 5: Air Quality Sensor'),
          text: this.$t('Join with this air quality sensor to the decentralized opensource sensors map which operates with the sole intent of serving the free will of individuals. This sensor is ready to install, you will need wi-fi and a power socket, it can be installed both indoor and outdoor. Includes PM2.5/PM10 sensor and temperature/humidity sensor, can be expanded with several types of additional sensors (VOC, CO2, atmospheric pressure).'),
          img: 'quality-sensor.png',
          hacksterLink: "https://wiki.robonomics.network/docs/air-quality-sensor",
          telegramLink: "https://t.me/robo_oshw_bot",
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
  .devices {
    position: relative;
    margin-top: 0;
    background-image: url('../assets/images/devices/devices-banner-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* overflow: hidden; */
    background-color: var(--color-blue);
  }

  .devices__link {
    color: var(--color-light);
  }

  .devices__content {
    padding-top: var(--space);
    padding-bottom: calc(var(--space) * 0.5);
    display: flex;
    flex-direction: column;
  }

  .devices__banner-title {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-family: 'Roboto Flex';
    font-size: calc(var(--base-font-size) * 3);
    color: #fff;
    text-transform: none;
    letter-spacing: 0;
  }

  .devices__banner-title span {
    text-shadow: 10px 2px #111;
  }

  .devices__text {
    position: relative;
    z-index: 10;
    max-width: 780px;
    padding: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
    font-style: italic;
    font-weight: 500;
    line-height: 1.8;
    color: var(--color-light);
    background-color: var(--color-blue)
  }

  .devices__banner-logos {
    display: flex;
    max-width: 410px;
    width: 100%;
  }

  .devices__banner-logos img {
    height: 60px;
    object-fit: contain;
  }

  .devices__banner-logos img:first-of-type {
    margin-right: calc(var(--space) * 0.5);
  }

  .devices__banner-img {
    position: absolute;
  }

  .devices__banner-img--blob {
    right: -5px;
    top: 40px;
    max-width: 324px;
    width: 100%;
  }

  .devices__banner-img--girl {
    right: 245px;
    top: 92px;
    max-width: 550px;
    width: 100%;
  }

  .devices__banner-buy {
    position: absolute;
    max-width: 385px;
    width: 100%;
    top: 173px;
    left: 735px;
    min-height: 269px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-image: url('data:image/svg+xml,<svg width="426" height="298" viewBox="0 0 426 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M410.456 224.054C397.789 244.78 377.52 260.298 355.366 271.598C310.161 294.647 255.495 301.427 203.556 290.384C185.682 286.597 168.14 280.765 150.172 277.65C132.204 274.534 113.231 274.299 97.2017 281.397C88.3201 285.317 80.6036 291.352 71.4988 294.832C49.2601 303.31 19.9947 293.229 7.10669 272.391C-5.75898 251.566 -0.156672 222.728 19.5258 209.944C29.8897 203.202 42.7811 200.917 54.8238 197.209C91.0088 186.088 93.7275 178.046 110.168 145.293C129.36 107.052 92.5946 44.8325 126.008 17.5483C163.32 -12.9249 293.792 2.72181 335.508 26.0483C380.807 51.375 410.591 85.3288 421.701 134.039C428.491 163.741 426.644 195.464 412.171 221.145C411.608 222.101 411.032 223.077 410.469 224.033L410.456 224.054Z" fill="white"/></svg>');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  .devices__banner-buy-wrapper {
    max-width: 280px;
    width: 100%;
    position: absolute;
    bottom: 40px;
    right: 2px;
    padding: calc(var(--space) * 0.5);
    padding-bottom: var(--space);
  }


  .devices__banner-support {
    position: relative;
    display: block;
    width: 100%;
    margin-top: calc(var(--space) * 0.5);
    /* color: var(--color-light); */
  }

  .devices__banner-support span {
    display: inline-block;
    font-weight: 800;
    font-size: calc(var(--space) * 0.5);
  }

  .devices__banner-support::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    max-width: 232px;
    width: 100%;
    height: 26px;
    background-image: url("data:image/svg+xml,%3Csvg width='234' height='24' viewBox='0 0 234 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M233.061 13.0607C233.646 12.4749 233.646 11.5251 233.061 10.9393L223.515 1.3934C222.929 0.807611 221.979 0.807611 221.393 1.3934C220.808 1.97919 220.808 2.92893 221.393 3.51472L229.879 12L221.393 20.4853C220.808 21.0711 220.808 22.0208 221.393 22.6066C221.979 23.1924 222.929 23.1924 223.515 22.6066L233.061 13.0607ZM0 13.5L232 13.5V10.5L0 10.5L0 13.5Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
    background-size: 100%;
    background-position: left;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 1850px) {
      .devices__banner-img--girl {
      max-width: 320px;
    }
  }

  @media screen and (max-width: 1650px) {
    .devices__banner-buy {
      left: unset;
      top: unset;
      bottom: -30px;
      right: 125px;
      /* min-height: 260px; */
    }
  }


  @media screen and (max-width: 1260px) {
    .devices__banner-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .devices__banner-buy {
      margin-top: var(--space);
      position: relative;
      align-self: flex-end;
    }

    .devices__banner-img--blob {
      max-width: 154px;
    }

    .devices__banner-img--girl{
      display: none;
    }
  }

  @media screen and (max-width: 630px) {
    .devices__banner-img--blob {
     display: none;
    }

    .devices__banner-logos {
      width: auto;
      flex-direction: column;
      align-items: flex-start;
      justify-items: flex-start;
      align-self: flex-start;
    }

    .devices__banner-logos img {
      width: 100%;
    }

    .devices__banner-logos img:first-of-type {
      margin-right: 0;
      max-width: 280px;
      margin-bottom: calc(var(--space) * 0.5);
    }

    .devices__banner-logos img:last-of-type {
      max-width: 120px;
    }

    .devices__banner-buy {
      padding-bottom: calc(var(--space) * 1.6);
    }

    .devices__banner-buy span {
      font-size: calc(var(--space) * 0.8);
    }
  }

  @media screen and (max-width: 580px) {
    .devices__banner-title {
      font-size: calc(var(--base-font-size) * 2);
    }


    .devices__banner-buy {
      position: static;
      min-height: auto;
      /* left: 0;
      right: unset; */
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-light);
      background-image: none;
    }

    .devices__banner-buy-wrapper {
      position: static;
      padding-top: var(--space);
    }
  }

  /* dark theme */
  .dark-theme a:not(.button):hover {
    opacity: 0.5;
  }

</style>