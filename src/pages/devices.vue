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
          <g-link to="https://www.hackster.io/robonomics-web3-cloud/products" class="devices__link">{{ $t('BUY DEVICE') }}</g-link>
          <g-link to="https://www.hackster.io/robonomics-web3-cloud/products"  class="devices__banner-support">
            <span>{{ $t('Support it on hackster.io') }}</span>
          </g-link>
        </div>

      </div>
    </section>

    <!-- products -->
    <section class="products">
      <div class="layout">
        <DevicesItem 
          v-for="device in devices"
          :key="device.id"
          :title="device.title"
          :text="device.text"
          :img="device.img"
          :hacksterLink="device.hacksterLink"
          :telegramLink="device.telegramLink"
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
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products",
          telegramLink: "#",
          features: [
            {
              text: this.$t('Supports wide range of devices'),
              id: 0 
            },
            {
              text: this.$t('Firmware upgradable by plug-in USB-C port'),
              id: 1
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 2
            },
          ]
        },
        {
          id: 1,
          title: this.$t('Product 2: Smart Energy Power Consumption Monitoring'),
          text: this.$t('Have you ever wondered what consumes the most electricity in your home? Our smart DIN energy power meter is designed to help you identify the major sources of electricity usage and prevent unwanted energy leaks. This energy meter works both, with an individual asset or an entire building, doesn’t need any cloud, MQTT protocol onboard, can be used with Home Assistant and it’s useful energy management dashboard.'),
          img: 'energy-monitor.png',
          hacksterLink: "https://www.hackster.io/robonomics-web3-cloud/products",
          telegramLink: "#",
          features: [
            {
              text: this.$t('Efficient energy monitoring consumption'),
              id: 0 
            },
            {
              text: this.$t('Doesn’t need any cloud service'),
              id: 1
            },
            {
              text: this.$t('Home Assistant Friendly'),
              id: 2
            },
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
    overflow: hidden;
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
    max-width: 332px;
    width: 100%;
  }

  .devices__banner-buy {
    position: absolute;
    bottom: 0;
    right: 125px;
    max-width: 280px;
    width: 100%;
    padding: calc(var(--space) * 0.5);
    padding-bottom: var(--space);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-blue);
  }

  .devices__banner-buy .devices__link {
    margin-bottom: calc(var(--space) * 0.5);
  }

  .devices__banner-support {
    position: relative;
    display: block;
    width: 100%;
    color: var(--color-light);
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
    background-image: url("data:image/svg+xml,%3Csvg width='234' height='24' viewBox='0 0 234 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M233.061 13.0607C233.646 12.4749 233.646 11.5251 233.061 10.9393L223.515 1.3934C222.929 0.807611 221.979 0.807611 221.393 1.3934C220.808 1.97919 220.808 2.92893 221.393 3.51472L229.879 12L221.393 20.4853C220.808 21.0711 220.808 22.0208 221.393 22.6066C221.979 23.1924 222.929 23.1924 223.515 22.6066L233.061 13.0607ZM0 13.5L232 13.5V10.5L0 10.5L0 13.5Z' fill='%23A7D100'/%3E%3C/svg%3E%0A");
    background-size: 100%;
    background-position: left;
    background-repeat: no-repeat;
  }


  @media screen and (max-width: 1210px) {
    .devices__banner-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .devices__banner-buy {
      margin-top: var(--space);
      position: static;
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

  /* dark theme */
  .dark-theme a:not(.button):hover {
    opacity: 0.5;
  }

</style>