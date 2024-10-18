<template>

  <layout>

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="title-with-bg">
      <h1><span>{{ $t('Altruist outdoor sensor') }}</span></h1>
    </div>

    <div class="altruist__intro layout layout__content">
      <g-link class="altruist__back-link" to="/devices/"> &larr; All hardware</g-link>
      <Altruist class="altruist-page"/>
      <p class="altruist__text-bold"> <b>A smart sensor that collects environmental data - noise, dust, and temperature, and stores them on a decentralized <g-link aria-label="go to decentralized sensor map" to="https://sensors.social/">sensor map</g-link></b>.</p>

      <h5 class="altruist__cases-title">Use case:</h5>
      <p>Become a provider of environmental data to your friends and neighbors in the area. Access truly decentralized measurements of air quality, noise, temperature, and other environmental conditions on the sensor map.</p>

      <rb-button to="https://robonomics.app/#/" class="altruist__intro-btn">GET A DEVICE</rb-button>
      <span class="altruist__intro-highlighted-text highlighted-text">early access for community members</span>
    </div>

    <section class="depin">
      <div class="layout layout__content">
        <h3 class="depin__header">
          <span class="highlighted-text">Simple & hardcore ways</span>
          to become a part of a sensor-based DePIN:
        </h3>

        <ol class="depin__list">

          <li class="depin__item">
            <h2 class="depin__title">Into the map</h2>
            <p class="depin__text">Connect your device as simple as other smart devices and look at your environmental outdoor data on a decentralized fully distributed sensor map, <g-link class="depin__link" to="https://sensors.social/" aria-label="check the sensor map">this</g-link> or any other independent fork.</p>
            <g-link class="depin__github" aria-label="check our firmware" to="https://github.com/airalab/altruist-firmware">Open-source under the hood: check our firmware</g-link>
          </li>

          <li class="depin__item">
            <h2 class="depin__title">join the Connectivity</h2>
            <p class="depin__text depin__text--first">Data processing is always a sensitive issue. That's why we offer a fully open-source <g-link class="depin__link" to="https://github.com/airalab/sensors-connectivity" aria-label="check open source connectivity module">connectivity module</g-link>  giving you the freedom to choose which servers to use for processing. No closed clouds, no opaque code.</p>

            <div class="depin__info">
              <h3 class="depin__subtitle">Robonomics Connectivity</h3>
              <p class="depin__text">Robonomics established three Connectivity hubs to ensure a stable connection. This option switched on by default on the station.</p>
            </div>

            <div class="depin__info">
              <h3 class="depin__subtitle">your own connectivity</h3>
              <p class="depin__text">You may launch your own hub for receiving data from Altruist Civil Station and further processing.</p>
            </div>

            <ol class="depin-guide__list">
              <li class="depin-guide__item">
                <h5>Deploy Connectivity</h5>
                <button @click="show.firstContainer = !show.firstContainer" aria-label="open technical requirements" class="depin-guide__requirements-btn bold-text"><b>Technical requirements</b></button>
                <div ref="myText" class="depin-guide__requirements simple-text" v-show="show.firstContainer">
                  <ul class="depin-guide__requirements-list">
                    <li class="depin-guide__requirements-item">2 CPU cores;</li>
                    <li class="depin-guide__requirements-item">4 GB RAM;</li>
                    <li class="depin-guide__requirements-item">40 GB storage;</li>
                    <li class="depin-guide__requirements-item">Static IP.</li>
                  </ul>
                </div>
                <p>Than set up <g-link aria-label="see open source connectivity module" to="https://github.com/airalab/sensors-connectivity">connectivity module</g-link> and follow <g-link aria-label="check the instruction for  connectivity" to="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/">the instructions</g-link>.</p>
              </li>
              <li class="depin-guide__item">
                <h5>Connect a station to your connectivity</h5>
                <ol class="depin-guide__sublist">
                  <li class="depin-guide__subitem">
                    Open your sensor settings by its IP.
                  </li>
                  <li class="depin-guide__subitem">
                    Go to APIs settings.
                  </li>
                  <li class="depin-guide__subitem">
                    Check the checkbox for sending data to custom API and fill corresponding fields (server IP, ports, etc.).
                  </li>
                </ol>
              </li>
              <li class="depin-guide__item">
                <h5>Join with your setup to global map (optional)</h5>
                <p class="simple-text">If you want to publish data to <g-link aria-label="see the sensors map" to="https://sensors.social/">the global map</g-link>, you need to make two pull requests:</p>

                <ol class="depin-guide__sublist">
                  <li class="depin-guide__subitem">
                    Add IPFS ID of your Connectivity to agents list of sensor map: <g-link aria-label="check agents.json file" to="https://github.com/airalab/sensors.social/blob/master/src/agents.json">https://github.com/airalab/sensors.social/blob/master/src/agents.json</g-link>
                  </li>
                  <li class="depin-guide__subitem">
                    Add parachain address of your Connectivity to template agents list of long-term storage server: <g-link aria-label="check agents.template.json file" to="https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json">https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json</g-link>
                  </li>
                </ol>

              </li>
            </ol>

            <g-link class="depin__github" aria-label="check our connectivity module" to="https://github.com/airalab/sensors-connectivity">Open-source under the hood: check our connectivity module</g-link>
          </li>

          <li class="depin__item">
            <h2 class="depin__title">your own air quality map</h2>
            <p class="depin__text depin__text--first">You have the opportunity to become the administrator of a sovereign sensor infrastructure, giving you full control over how data is collected, processed, and shared within your own independent network.</p>

            <ol class="depin-guide__list">
              <li class="depin-guide__item">
                <h5>Deploy a map</h5>
                <ol class="depin-guide__sublist">
                  <li class="depin-guide__subitem">
                    Fork the map repository: <g-link to="https://github.com/airalab/sensors.social" aria-label="see the sensors map repository">https://github.com/airalab/sensors.social</g-link>
                  </li>
                  <li class="depin-guide__subitem">
                    Edit the settings to customize your map, including the domain, provider, starting viewpoint, and your connectivity IPFS ID for the list of agents.
                  </li>
                  <li class="depin-guide__subitem">
                    Deploy your own version of the web interface and begin receiving real-time data from your sensor.
                  </li>
                </ol>
                <p>Full guide here: <g-link aria-label="see full guide" to="https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map"> https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map </g-link></p>
              </li>
              <li class="depin-guide__item">
                <h5>Launch long-term storage</h5>
                <p>Simply collecting data from sensors is not enough; it needs to be processed. Tweak a server for collecting sensor’s data based on with open-source node.js software <g-link aria-label="check node.js software for sensors" to="https://github.com/airalab/RoSeMAN">Robonomics Sensors Measure Analytics and Archive Node (RoSeMAN)</g-link> and get your own working server for long-term map data storage.</p>
                <button @click="show.secondContainer = !show.secondContainer" aria-label="open technical requirements" class="depin-guide__requirements-btn bold-text"><b>Technical requirements</b></button>
                <div ref="myText" class="depin-guide__requirements" v-show="show.secondContainer">
                  <ul class="depin-guide__requirements-list">
                    <li class="depin-guide__requirements-item">2 CPU cores;</li>
                    <li class="depin-guide__requirements-item">4 GB RAM;</li>
                    <li class="depin-guide__requirements-item">40 GB storage;</li>
                    <li class="depin-guide__requirements-item">Static IP.</li>
                  </ul>
                </div>
                <span class="depin_instructions">Instructions:</span>
                <ol class="depin-guide__sublist">
                  <li class="depin-guide__subitem">
                    Fork the RoSeMAN repository: <g-link aria-label="check the roseman repository" to="https://github.com/airalab/RoSeMAN">https://github.com/airalab/RoSeMAN</g-link>
                  </li>
                  <li class="depin-guide__subitem">
                    Choose Docker or Node.js (required MongoDB database) version.
                  </li>
                  <li class="depin-guide__subitem">
                    Add a parachain address of your Connectivity to agents list.
                  </li>
                  <li class="depin-guide__subitem">
                    Add RoSeMAN domain to remote provider of map.
                  </li>
                  <li class="depin-guide__subitem">
                    Run the project.
                  </li>
                </ol>
              </li>
            </ol>

            <g-link class="depin__github" aria-label="check our server-side software" to="https://github.com/airalab/RoSeMAN">Open-source under the hood: check our server-side software</g-link>
          </li>
        </ol>
      </div>

    </section>

  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    Altruist: () => import("~/components/home/hardware/altruistSensor.vue"),
  },

  data() {
    return {
      show: {
        firstContainer: false,
        secondContainer: false,
      },
    }
  }

}
</script>

<style scoped>

  .title-with-bg  {
    text-align: left;
  }

  .altruist__intro {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .altruist__back-link {
    position: absolute;
    left: var(--screen-padding-left);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 20;
  }

  .altruist__img {
    max-width: 350px;
    width: 100%;
    align-self: center;
    margin: calc(var(--space) * 2) 0;
  }

  .altruist__intro-btn {
    margin-bottom: 15px;
    align-self: center;
  }

  .altruist__intro-highlighted-text {
    margin-bottom: calc(var(--space) * 3);
    align-self: center;
    text-transform: uppercase;
  }

  .altruist__cases-title {
    margin-top: 0;
    text-align: left;
    text-transform: none;
    margin-bottom: calc(var(--space) * 0.3);
  }

  .depin__header {
    display: inline-flex;
    flex-direction: column;
    margin-bottom: calc(var(--space) * 2);
    text-transform: uppercase;
    text-align: left;
  }

  .depin__header .highlighted-text {
    align-self: flex-start;
    font-weight: 900;
    font-size: inherit;
    padding-left: 0;
  }

  .depin__list {
    margin-left: 0;
    list-style: none;
  }

  .depin__item {
    position: relative;
    margin-bottom: calc(var(--space) * 3.5);
  }

  .depin__item::before {
    position: absolute;
    width: 60px;
    height: 50px;
    left: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 900;
    content: counter(index, decimal);
    counter-increment:index;
    background-color: var(--rb-color-green-accent)
  }

  .depin__item:first-child {
    counter-reset:index;
  } 

  .depin__title {
    padding-top: 10px;
    padding-left: 60px;
    text-align: left;
    text-transform: uppercase;
  }

  .depin__subtitle {
    text-align: left;
    text-transform: uppercase;
    margin-bottom: calc(var(--space) * 0.5);
  }

  .depin__text--first {
    margin-bottom: calc(var(--space) * 2);
  }

  .depin__info {
    margin-bottom: calc(var(--space) * 2);
  }

  .depin-guide__list {
    margin-left: 0;
    list-style: none;
  }

  .depin-guide__item {
    position: relative;
    margin-bottom: calc(var(--space) * 1.4);
  }

  .depin-guide__item::before {
    position: absolute;
    top: 4px;
    left: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;
    content: counter(index, decimal);
    counter-increment:index;
  }

  .depin-guide__item::after {
    content: '.';
    position: absolute;
    top: 4px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;
  }

  .depin-guide__item:first-child {
    counter-reset:index;
  } 

  .depin-guide__item h5 {
    margin-top: 0;
    text-transform: none;
    text-align: left;
  }

  .depin-guide__subitem {
    margin-bottom: 10px;

  }

  .depin-guide__subitem a,
  .simple-text a {
    word-wrap: break-word;
  }

  .depin-guide__requirements-btn {
    padding: 0;
    margin-bottom: var(--space);
    font-weight: 700;
    letter-spacing: 0;
    color: var(--color-blue);
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom: 2px dashed var(--color-blue);
    text-decoration: none;
    text-transform: initial;
  }

  .depin-guide__requirements-btn:hover {
    color: var(--color-blue-dark);
  }

  .depin-guide__requirements {
    margin-bottom: var(--space);
  }

  .depin-guide__requirements-list {
    list-style: disc;
  }

  .depin_instructions {
    display: block;
    font-size: calc(var(--base-font-size) * 0.95);
    font-variation-settings: 'wght' 400, 'wdth' 100;
  }

  .depin__github {
    display: inline-block;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
    font-variation-settings: var(--font-flex-bold);
    font-size: var(--base-font-size);
    font-size: 22px;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='49' viewBox='0 0 52 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.0002 0C11.7194 0 0 10.8598 0 24.0931C0 35.3856 8.55115 45.6436 19.9064 48.1861V40.2151C18.7813 40.4434 17.7458 40.4501 16.6004 40.1372C15.0639 39.717 13.8154 38.7685 12.8886 37.3223C12.2979 36.3988 11.2509 35.3973 10.1587 35.4709L9.89091 32.6585C12.2527 32.471 14.2958 33.9919 15.5086 35.88C16.0474 36.7197 16.6675 37.212 17.4633 37.4296C18.2326 37.6395 19.0586 37.5388 20.0211 37.2237C20.2627 35.4381 21.1454 34.7698 21.8123 33.8287V33.8272C15.0401 32.8912 12.3411 29.5619 11.27 26.9341C9.85045 23.4449 10.6122 19.0859 13.1223 16.3313C13.1711 16.2776 13.2592 16.1372 13.225 16.039C12.0741 12.8175 13.4766 10.1525 13.5281 9.86979C14.8564 10.2337 15.0722 9.50363 19.2978 11.8826L20.0282 12.2892C20.3337 12.4579 20.2377 12.3616 20.5432 12.3403C22.3074 11.8962 24.1673 11.651 25.9998 11.6289C27.8462 11.651 29.6942 11.8962 31.5314 12.3583L31.7679 12.3803C31.7473 12.3774 31.8322 12.3664 31.9746 12.2877C37.2531 9.32496 37.0635 10.2933 38.479 9.86685C38.5302 10.1499 39.914 12.8583 38.7754 16.039C38.6218 16.4772 43.3517 20.4906 40.73 26.933C39.6589 29.5619 36.9603 32.8912 30.1881 33.8272V33.8287C31.0561 35.0547 32.0992 35.7069 32.0936 38.2362V48.1861C43.4492 45.6436 52 35.3856 52 24.0931C52.0004 10.8598 40.2809 0 26.0002 0Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
    background-position: left;
    background-size: 50px 50px;
    background-repeat: no-repeat;
    text-transform: uppercase
  }


  @media screen and (max-width: 520px) {
    .title-with-bg  {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    .title-with-bg h1 {
      font-size: 30px;
      line-height: 1;
    }

    .depin__github { 
      font-size: 16px;
    }

    .altruist__intro-btn {
      align-self: unset;
    }
  }

  @media screen and (max-width: 475px) {
    .depin-guide__item::before  {
      font-size: 17px;
    }

    .depin-guide__item::after {
      font-size: 17px;
    }

    .depin-guide__list {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 360px) {
    .depin-guide__item::before  {
      font-size: 14px;
      top: 3px;
    }

    .depin-guide__item::after {
      font-size: 14px;
      top: 3px;
    }
  }

</style>