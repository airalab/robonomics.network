<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="fuji.jpg"
      :introText="$t(`Send a request message and get the result from the autonomous agent. The resulting file is saved to IPFS and the resultant message requires a signature with a private key.`)"
    />

    <section class="case-page layout">

      <CaseText
      :title="$t('Overview')"
      :text="$t('This case study explores how Robonomics Network facilitates decentralized data access using IoT devices and blockchain technology. By leveraging the Robonomics dApp connected to a weather sensor on Fuji Mountain, users can obtain real-time weather data securely and transparently.')"
      />

      <CaseText
        :title="$t('How does it work?')"
        multiple
      >

        <h4>Requirements:</h4>
        <ul>
          <li>MetaMask Extension (<g-link to="https://metamask.io/">Download here</g-link>)</li>
        </ul>

        <h3>Steps to Retrieve Weather Data:</h3>
        <ol>
          <li>
            <b>Open the dApp</b>: 
            Visit the <g-link to="https://robonomics.app/#/fuji/airalab/QmbQT8cj9TJKfYVaidfShnrEX1g14yTC9bdG1XbcRX73wY/0x4D8a26e1f055c0b28D71cf1deA05f0f595a6975d/">Fuji Weather Sensor</g-link> page in the Robonomics dApp.
          </li>
          <li>
            <p>
              <b>Install MetaMask (if needed)</b>: If MetaMask is not installed, you will be prompted to install it for the dApp to function properly.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-1.webp" alt="Robonomics dApp if no MetaMask installed" />
          </li>
          <li>
            <p> <b>Allow Connection</b>:
              Connect your MetaMask wallet to the Robonomics dApp when prompted.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-2.webp" alt="Connection to Robonomics dApp via Metamask" />
          </li>
          <li>
            <p>
              <b>Request Sensor Data</b>:
              Click the "Request current values" button to initiate the data request.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-3.webp" alt="Request sensor's data in Robonomics network via dApp" />
          </li>
          <li>
            <p>
              <b>Sign the Message</b>:
              Confirm the data request by signing a message via MetaMask. No tokens or ether are required.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-4.webp" alt="Sign a message in Robonomics network via dApp" />
          </li>
          <li>
            <p>
              <b>Data Collection Process</b>:
              An autonomous agent will gather the weather data from the Fuji Mountain sensor and transmit it back. Wait for the response.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-5.webp" alt="Wait for response of the agent in Robonomics network via dApp" />
          </li>
          <li>
            <p>
              <b>Receive the Result</b>:
              The dApp will download the result file from IPFS (InterPlanetary File System), a decentralized storage solution.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-6.webp" alt="Wait for IPFS file with results in Robonomics network via dApp" />
          </li>
          <li>
            <p>
              <b>View Weather Data</b>:
              The retrieved weather data from Fuji Mountain will be displayed in the dApp interface.
            </p>
            <g-image quality="75" src="@/assets/images/cases/fuji/sensor-demo-7.webp" alt="The results of sensor network in Robonomics via dApp" />
          </li>
        </ol>
      </CaseText>

      <CaseText
        :title="$t('Technical Insights')"
        multiple
      >
        <ul>
          <li> <b>Decentralized Communication</b>: The weather data request is processed using the Robonomics protocol, ensuring transparent communication without intermediaries.</li>
          <li><b>IPFS Storage</b>: The results are securely stored on IPFS, with cryptographic signing ensuring data integrity.</li>
          <li><b>Autonomous Agents</b>: Smart contracts and autonomous agents facilitate secure data collection and delivery.</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('Key Benefits')"
        multiple
      >
        <ul>
          <li><b>Trustless Data Retrieval</b>: No central authority is required to validate the data.</li>
          <li><b>Security</b>: Data is cryptographically signed using the agent's private key.</li>
          <li><b>Transparency</b>: All interactions and results are immutably stored on the blockchain and IPFS.</li>
        </ul>
      </CaseText>

      <CaseText
      :title="$t(`Here's a walkthrough video:`)"
      multiple>
        <Youtube
          title="walkthrough video"
          src="https://www.youtube.com/embed/t098NlMELk4"
        />
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t('This R&D case highlights the capabilities of decentralized technologies in real-world data collection and access. Robonomics Network empowers secure, verifiable data retrieval from IoT sensors, advancing the reliability of environmental monitoring solutions.')}</p>`"
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