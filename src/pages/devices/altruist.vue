<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="$t('Outdoor sensor “Altruist“')">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="layout layout__content">
      <ModelAltruist class="model" />

      <article>
        <p>Join the movement with an open-source hardware sensor integrated into a decentralized map. Share and access noise, dust, and temperature data from other independent sensors nearby. Forget corporate servers—this data is securely distributed worldwide through innovative Web3 technology.</p>
        <p>Experience the power of true DePIN (Decentralized Physical Infrastructure Network) — a revolutionary technological movement brought to life and thriving for years on our <g-link aria-label="go to decentralized sensor map" to="https://sensors.social/">decentralized sensor map</g-link>.</p>
      </article>

      <device-buy-section price="$95" />

      <h2 class="title-lined"><span>{{ $t('3 ways to use it') }}</span></h2>
    </div>

    <section class="layout space-b-2">
      <div class="grid-3">
        <article class="oldy">
          <h5 class="space-b-05">Monitor Air Quality</h5>

          <p>Access <strong>noise, dust, and temperature data</strong> from other independent sensors on our <g-link class="highlight" aria-label="go to decentralized sensor map" to="https://sensors.social/">decentralized sensor map</g-link>.</p>
          
          <p>Connect your device as simple as other smart devices and share your environmental outdoor data with community.</p>

          <g-link class="highlight" aria-label="check our firmware" to="https://github.com/airalab/altruist-firmware">{{ $t('Check open-source sensor firmware on GitHub') }}</g-link>
        </article>
        <article class="oldy">
          <h5 class="space-b-05">{{ $t("Operate your own Data Server") }}</h5>
           <p>{{ $t("Data processing is always a sensitive issue. That's why we offer a fully open-source") }}
          <g-link class="highlight" to="https://github.com/airalab/sensors-connectivity" aria-label="check open source connectivity module">{{$t('connectivity module')}}</g-link>  
          {{ $t('giving you the freedom to choose which servers to use for processing. No proprietary clouds, no hidden code.') }}</p>
          <p>Keep in mind, you can join the <g-link class="highlight" aria-label="go to decentralized sensor map" to="https://sensors.social/">global decentralized sensor map</g-link> even with a sensor connected through your own server!</p>
          
        </article>
        <article class="oldy">
          <h5 class="space-b-05">Run your own Interactive Map</h5>
          <p>Love the idea of a decentralized map but want to customize it with extra layouts and become an administrator of new sovereign sensor infrastructure? You can deploy <g-link to="https://github.com/airalab/sensors.social/" aria-label="GitHub Reposytory for the map" class="highlight">your own version by forking</g-link> our open-source code on GitHub (be sure to check the license type). Remember to use open-source resources responsibly.</p>
        </article>
      </div>
    </section>

    <section class="layout layout__text space-b-2">
      <h2 class="title-lined"><span>{{ $t('Device Specifications') }}</span></h2>

      <ul>
        <li><b>Input Voltage:</b> AC 100-240V 50/60Hz</li>
        <li><b>Wireless protocol:</b> Supports 2.4GHz Wi-Fi 6 (802.11 b/g/n) and Bluetooth 5 (LE), Zigbee with onboard antenna</li>
        <li>Equipped with a high-performance <b>32-bit RISC-V processor</b> with clock speed up to 160 MHz, and a low-power 32-bit RISC-V processor with clock speed up to 20MHz</li>
        <li><b>Memory:</b> 320KB ROM, 512KB of HP SRAM, 16KB LP SRAM and 4MB Flash memory</li>
        <li><b>USB-C</b> for firmware development and updates</li>
        <li><b>PM sensor:</b> SDS011 laser PM2.5/PM10 sensor</li>
        <li><b>Supported sensors:</b> T&H: SHT3X,BME280,HTU21D; Noise Level Sensor:  I2S INMP441; Geiger counter : Radsens.</li>
      </ul>
    </section>

    <section class="layout layout__text space-b-2">
      <h2 class="title-lined"><span>{{ $t('Help & support') }}</span></h2>

        <details>
          <summary class="text-center">{{$t('Steps to set up your Connectivity')}}</summary>

          <p>With Robonomics decentralized map you can use Robonomics Connectivity or create your own Connectivity Service. <b>{{ $t('Robonomics Connectivity') }}</b>: {{$t('Robonomics established three Connectivity hubs to ensure a stable connection. This option switched on by default on the station.')}} <b>{{ $t('Your own Connectivity') }}</b>: {{ $t('You may launch your own hub for receiving data from Altruist Civil Station and further processing.') }}</p>

          <ol>
            <li>
              <p><b>{{ $t('Deploy Connectivity') }}</b></p>
              <p>{{ $t('Technical requirements:') }}</p>
              <ul class="list-smallgap">
                <li>{{ $t('2 CPU cores;') }}</li>
                <li>{{ $t('4 GB RAM;') }}</li>
                <li>{{ $t('40 GB storage;') }}</li>
                <li>{{$t('Static IP')}}.</li>
              </ul>
              <p>{{ $t('Than set up') }} <g-link aria-label="see open source connectivity module" to="https://github.com/airalab/sensors-connectivity">{{$t('connectivity module')}}</g-link> {{ $t('and follow') }} <g-link aria-label="check the instruction for  connectivity" to="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/">{{$t('the instructions')}}</g-link>.</p>
            </li>

            <li>
              <p><b>{{ $t('Connect a station to your connectivity') }}</b></p>
              <ol class="list-smallgap">
                  <li>{{ $t('Open your sensor settings by its IP.') }}</li>
                  <li>{{$t('Go to APIs settings')}}.</li>
                  <li>{{$t('Check the checkbox for sending data to custom API and fill corresponding fields (server IP, ports, etc.).')}}</li>
                </ol>
            </li>

            <li>
              <p><b>{{ $t('Join with your setup to global map (optional)') }}</b></p>
              <p>{{ $t('If you want to publish data to') }} <g-link aria-label="see the sensors map" to="https://sensors.social/">{{ $t('the global map') }}</g-link>, {{ $t('you need to make two pull requests:') }}</p>

              <ol class="list-smallgap">
                  <li>{{$t('Add IPFS ID of your Connectivity to agents list of sensor map:')}} <g-link aria-label="check agents.json file" to="https://github.com/airalab/sensors.social/blob/master/src/agents.json" class="text-break">https://github.com/airalab/sensors.social/blob/master/src/agents.json</g-link></li>
                  <li>{{ $t('Add parachain address of your Connectivity to template agents list of long-term storage server:') }} <g-link aria-label="check agents.template.json file" to="https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json" class="text-break">https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json</g-link></li>
              </ol>
            </li>
          </ol>
        </details>

        <details>
          <summary class="text-center">{{$t('Steps for launching your own map')}}</summary>
          <ol>
            <li>
              <p><b>{{$t('Deploy web interface')}}</b></p>

              <ol class="list-smallgap">
                  <li>{{$t('Fork the map repository:')}} <g-link to="https://github.com/airalab/sensors.social" aria-label="see the sensors map repository">https://github.com/airalab/sensors.social</g-link></li>
                  <li>{{ $t('Edit the settings to customize your map, including the domain, provider, starting viewpoint, and your connectivity IPFS ID for the list of agents.') }}</li>
                  <li>{{$t('Deploy your own version of the web interface and begin receiving real-time data from your sensor.')}}</li>
              </ol>

              <p>{{$t('Full guide here:')}} <g-link aria-label="see full guide" to="https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map"> https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map </g-link></p>

            </li>

            <li>
              <p><b>{{ $t('Launch long-term storage') }}</b></p>
              <p>{{$t('Simply collecting data from sensors is not enough; it needs to be processed. Tweak a server for collecting sensor’s data based on with open-source node.js software')}} <g-link aria-label="check node.js software for sensors" to="https://github.com/airalab/RoSeMAN">{{$t('Robonomics Sensors Measure Analytics and Archive Node (RoSeMAN)')}}</g-link> {{$t('and get your own working server for long-term map data storage.')}}</p>
              <p>{{$t('Technical requirements:')}}</p>
              <ul class="list-smallgap">
                <li>{{ $t('2 CPU cores;') }}</li>
                <li>{{$t('4 GB RAM;')}}</li>
                <li>{{$t('40 GB storage;')}}</li>
                <li>{{$t('Static IP.')}}</li>
              </ul>
              <p>{{$t('Steps for launching a storage:')}}</p>
              <ol class="list-smallgap">
                  <li>{{$t('Fork the RoSeMAN repository:')}} <g-link aria-label="check the roseman repository" to="https://github.com/airalab/RoSeMAN">https://github.com/airalab/RoSeMAN</g-link></li>
                  <li>{{ $t('Choose Docker or Node.js (required MongoDB database) version.') }}</li>
                  <li>{{$t('Add a parachain address of your Connectivity to agents list.')}}</li>
                  <li>{{ $t('Add RoSeMAN domain to remote provider of map.') }}</li>
                  <li>{{$t('Run the project.')}}</li>
                </ol>
            </li>
          </ol>
        </details>
    </section>

  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    ModelAltruist: () => import("~/components/3dmodels/altruist.vue"),
    DeviceBuySection: () => import ('@/components/blocks/DevicesBuySection.vue')
  }

}
</script>

<style scoped>
  .model {
    margin: var(--space) auto;
    max-width: 600px;
  }
</style>