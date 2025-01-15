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
        :title="$t('A Decentralized Protocol for Economic Coordination')"
        multiple
      >
        <p>Robonomics introduces a blockchain-based communication protocol designed for modern and future industrial processes. The protocol focuses on enabling:</p>
        <ul>
          <li><b>Cyber-Physical Systems</b>: Designed for Industry 4.0 standards, integrating physical production systems with digital intelligence.</li>
          <li><b>Peer-to-Peer Coordination</b>: A decentralized P2P network ensuring secure data exchange between industrial agents.</li>
          <li><b>Blockchain Technology</b>: Using Ethereum smart contracts, with future support for Polkadot, to manage economic agreements securely.</li>
        </ul>
        <p>This protocol offers a universal software framework implemented on the Robot Operating System (ROS), making it adaptable for various industrial agents.</p>
      </CaseText>

      <CaseText
        :title="$t('Balancing Production and Capital')"
        multiple
      >
        <p>Beyond supply shortages or market saturation, transaction costs also play a key role in production adjustments. Key insights include:</p>
        <ul>
          <li><b>Transaction Costs Impact</b>: Higher transaction costs often increase investor interest in a market, as they may reflect higher potential revenue generation.</li>
          <li><b>Capital Efficiency</b>: Aligning production strategies with capital flows can optimize resource distribution and reduce inefficiencies.</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('Technical Foundation')"
        multiple
      >
        <ul>
          <li><b>Blockchain Integration</b>: Economic coordination through Ethereum smart contracts, with plans to extend to Polkadot.</li>
          <li><b>ROS Implementation</b>: Real-time decision-making and automated adjustments using ROS-based software.</li>
        </ul>
        <p>For a detailed technical reference, visit the <g-link to="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE article on blockchain protocols for Industry 4.0</g-link>.</p>
      </CaseText>

      <CaseText
        :title="$t('Key Benefits')"
        multiple
      >
        <ul>
          <li><b>Adaptive Production</b>: Factories can self-adjust production rates based on market conditions.</li>
          <li><b>Decentralized Coordination</b>: Reduces reliance on centralized market controls.</li>
          <li><b>Industry 4.0 Ready</b>: Designed for modern automated industrial processes.</li>
        </ul>
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t(`This R&D case presents how capital flows can act as economic signals for smart factories. By adopting Robonomics' decentralized protocol, industries can better manage production efficiency and stay aligned with the evolving standards of Industry 4.0.`)}</p>`"
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