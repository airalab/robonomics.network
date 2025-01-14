<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="digital-markets-for-robots.webp"
      :introText="$t(`The development of robotics and automated systems during the Fourth Industrial Revolution will require robots to have the capability to order services for their own maintenance.`)"
    />

    <section class="case-page layout">

      <CaseText
        multiple
      >
        <p>Historically, similar technological transitions have occurred. For example, the shift of calculations related to production, logistics, and consumption from people to machines. If all financial operations had to be carried out manually today, the entire global population would be insufficient to handle the complexity of these calculations.</p>
        <p>We aim to offer hundreds of automated services to assist people with their daily routines. However, there are not enough workers to maintain all vending machines, car-sharing operations, drone deliveries, 3D printers, and other automated services. The solution lies in empowering robots to independently order water or coffee, self-charge, request maintenance at base stations, and call engineers directly without human call center involvement.</p>
        <p>This need will become increasingly apparent over the next decade, driving the creation of digital markets for robots. The question will focus only on the most efficient and scalable technologies needed to meet smart city standards.</p>

        <div class="cases__image">
          <g-image quality="75" src="@/assets/images/cases/digital-markets/digital-markets-1.webp" alt="" aria-hidden="true" />
        </div>
      </CaseText>

      <CaseText
        :title="$t(`Robonomics' Approach`)"
        :text="$t('Robonomics provides an alternative to centralized corporate-controlled cloud services. Instead of relying on such systems, it leverages public blockchain networks, such as Ethereum and Polkadot, to facilitate secure and autonomous transactions between robots and service providers.')"
      />

      <CaseText
        :title="$t('How Digital Markets for Robots Work')"
        multiple
      >
        <ul>
          <li><b>Autonomous Service Ordering</b>: Robots can order maintenance, charging, and other operational services independently.</li>
          <li><b>Decentralized Transactions</b>: Service orders and payments are managed on a blockchain network.</li>
          <li><b>Transparency and Security</b>: All transactions are recorded immutably on the blockchain.</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('Key Benefits')"
        multiple
      >
        <ul>
          <li><b>Scalability</b>: Robots manage their own service needs without human involvement.</li>
          <li><b>Efficiency</b>: Automated systems experience reduced downtime with proactive self-maintenance.</li>
          <li><b>Decentralization</b>: Removes reliance on centralized infrastructure, ensuring greater autonomy.</li>
        </ul>
        <div class="case__images-wrapper">
          <g-image quality="75" src="@/assets/images/cases/digital-markets/digital-markets-3.webp" alt="" aria-hidden="true" />
          <g-image quality="75" src="@/assets/images/cases/digital-markets/digital-markets-4.webp" alt="" aria-hidden="true" />
        </div>
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t(`Digital markets for robots represent a critical step toward supporting the next wave of automation and smart city infrastructure. Robonomics' decentralized approach ensures secure, scalable, and autonomous service management for robots.`)}</p>`"
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

<style scoped>
  .case__images-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    justify-items: center;
  }
  

  .case__images-wrapper img, .cases__image img {
    max-width: 250px;
    width: 100%;
  }
</style>