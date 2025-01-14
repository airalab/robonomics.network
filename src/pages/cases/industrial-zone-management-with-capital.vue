<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="industrial-zone-management.webp"
      :introText="$t(`This case explores the role of smart factories in responding to capital shifts in modern markets. As part of the Industry 4.0 transformation, it introduces a decentralized communication protocol using cyber-physical systems to improve economic coordination among industrial agents.`)"
    />

    <section class="case-page layout">

      <CaseText
        :title="$t('Why Smart Factories Should Respond to Capital Changes')"
        multiple
      >
        <p>Investors often engage in arbitrage investing, shifting capital between markets with supply shortages and oversupply. This behavior effectively influences market supply levels, guiding producers to adjust their production strategies to align better with market demands.</p>
        <p>By following these capital flows, smart factories can reduce inefficiencies in production allocation and minimize mismatches between production output and consumption needs. As a result, investors act as "oracles" of the global economy, signaling market conditions for automated production adjustments.</p>
      </CaseText>

      <CaseText
        :title="$t('The Proposed Solution: A Blockchain-Based Protocol')"
        multiple
      >
        <p>Robonomics introduces a blockchain-based communication protocol designed for modern and future industrial processes. The protocol focuses on enabling:</p>
        <ul>
          <li><b>Economic Interaction</b>: Seamless interaction between industrial agents in a decentralized peer-to-peer (P2P) network.</li>
          <li><b>Smart Contracts</b>: Secure and transparent economic agreements via smart contracts on the Ethereum blockchain, with upcoming support for Polkadot.</li>
          <li><b>Cyber-Physical Integration</b>: Implementation on cyber-physical systems using the Robot Operating System (ROS).</li>
        </ul>
        <p>This architecture enables production systems to autonomously respond to market signals, improving efficiency and reducing operational delays.</p>
      </CaseText>

      <CaseText
        :title="$t('Key Factors in Capital-Driven Production Management')"
        multiple
      >
        <p>Beyond capital shortages or oversupply, another critical factor influencing smart factory responses is transaction cost. Key points include:</p>
        <ul>
          <li><b>Transaction Costs</b>: The higher the transaction costs, the greater the market's attractiveness to investors.</li>
          <li><b>Revenue Alignment</b>: Increased transaction costs often correlate with the potential to convert market shares into company revenue.</li>
        </ul>
        <p>This method ensures a secure and verifiable way to represent real-world activity in a digital format, unlocking the potential for machine-driven economies.</p>
      </CaseText>

      <CaseText
        :title="$t('Technical Implementation')"
        multiple
      >
        <ul>
          <li><b>Blockchain Integration</b>: Economic coordination through Ethereum smart contracts, with plans to extend to Polkadot.</li>
          <li><b>Industrial Automation</b>: ROS-based software for real-time decision-making in industrial operations.</li>
        </ul>
        <p>For a detailed technical reference, visit the <g-link to="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE article on blockchain protocols for Industry 4.0</g-link>.</p>
      </CaseText>

      <CaseText
        :title="$t('Key Benefits')"
        multiple
      >
        <ul>
          <li><b>Capital-Efficient Production</b>: Reduces mismatches between market supply and demand.</li>
          <li><b>Autonomous Economic Coordination</b>: Smart contracts enable trustless cooperation among industrial agents.</li>
          <li><b>Industry 4.0 Ready</b>: Designed for modern automated industrial processes.</li>
        </ul>
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t('This R&D case demonstrates how capital flows can serve as decision-making signals for smart factories. By integrating decentralized blockchain technologies, Robonomics offers a scalable, trustless communication protocol for industrial zone management aligned with Industry 4.0 principles.')}</p>`"
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