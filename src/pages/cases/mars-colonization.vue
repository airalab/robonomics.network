<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="mars-colonization.webp"
      :introText="$t(`This R&D case explores the role of Kusama network's decentralized infrastructure in supporting interplanetary missions, particularly Mars colonization.`)"
    />

    <section class="case-page layout">

      <CaseText
        :title="$t(`Exploring Kusama's Role in Space Exploration`)"
        multiple
      >
        <p>During the Hackusama — Hack on Polkadot’s Wild Cousin, our team examined the UN Agreement Governing the Activities of States on the Moon and Other Celestial Bodies (1979). From this analysis, we proposed a decentralized interplanetary architecture using the Kusama network and developed software modules implementing:</p>
        <ul>
          <li><b>Article 6</b>: Freedom of scientific investigation</li>
          <li><b>Article 7</b>: Preventing disruption of the existing environmental balance</li>
          <li><b>Article 9</b>: Establishment of manned and unmanned stations</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('The Mars Rover Experiment')"
        multiple
      >
        <p>As part of the experiment, a rover was deployed within the boundaries of a simulated Mars habitat station. The rover performed the following tasks:</p>
        <ul>
          <li>Traversed a predefined route</li>
          <li>Published odometry data and photos directly to the Kusama network</li>
        </ul>
        <p>This data could be sufficient for organizations like SpaceY to begin designing and selling living spaces on Mars through a parachain slot on Kusama.</p>
      </CaseText>

      <CaseText
        :title="$t('Technical Implementation')"
        multiple
      >
        <ul>
          <li><b>Data Storage</b>: Blockchain-based storage inspired by the 1979 UN Agreement.</li>
          <li><b>IoT Infrastructure</b>: The “Mars-1” base camp featured IoT devices for environmental monitoring.</li>
          <li><b>Satellite Connectivity</b>: Satellite equipment facilitated data transmission to Kusama on the Mars parachain.</li>
          <li><b>Rover Integration</b>: The “Mars-2” rover was equipped with hardware and software to publish data to the Kusama network.</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('Use Cases and Potential Impact')"
        multiple
      >
        <ol>
          <li><b>Supply Chain Management</b>: Tokenized IoT data can verify the authenticity and condition of goods in real-time.</li>
          <li><b>Energy Markets</b>: Smart meters can tokenize energy data for direct peer-to-peer energy trading.</li>
          <li><b>Environmental Monitoring</b>: IoT sensors can provide verified data for carbon credits and sustainability projects.</li>
        </ol>
        <p>Learn more about Kusama architecture <g-link to="https://blog.aira.life/">here</g-link>.</p>
      </CaseText>

      <CaseText
      :title="$t(`A fun video about the use of KUSAMA on Mars:`)"
      multiple>
        <Youtube
          title="the use of KUSAMA on Mars"
          src="https://www.youtube.com//embed/31zXeUq3htE"
        />
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t('This R&D case demonstrates how the Kusama network can support scientific exploration, resource management, and data transparency for space missions. The decentralized architecture offers a promising foundation for the future of Mars colonization and beyond.')}</p>`"
      :title="$t('Conclusion')"
    />
  </layout>
  
</template>

<script>
export default {

  components: {
    CaseText: () => import('~/components/case/CaseText.vue'),
    Header: () => import('~/components/case/CaseHeader.vue'),
    Footer: () => import('~/components/case/CaseFooter.vue'),
  }

}
</script>

<style>

</style>