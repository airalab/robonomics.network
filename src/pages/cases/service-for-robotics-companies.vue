<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="robotic-companies.jpg"
      :introText="$t(`In 2022, the Robonomics team began collaborating with other parachain teams within the Polkadot ecosystem to leverage the unique strengths of this decentralized network. This collaboration resulted in the launch of a Backup and Data Archiving Service designed specifically for robotics companies.`)"
    />

    <section class="case-page layout">

      <CaseText
        :text="$t('With robots generating enormous amounts of data—including videos, raw technical data, and logs—storage can become a significant challenge, especially at scale. This new service offers an affordable and secure solution to meet these needs.')"
      />

      <CaseText
        :title="$t('Addressing the Challenge of Data Storage')"
        multiple
      >
        <p>Robots generate vast quantities of data daily, from technical logs and sensor readings to videos and other valuable information. Storing such data efficiently and affordably has been a longstanding issue, especially as the data continues to grow in volume. Traditional storage solutions can be costly, which presents a significant barrier for robotics companies seeking to manage and archive this data on a large scale.</p>
        <p>As these companies scale up their operations, managing this data effectively while ensuring security, privacy, and compliance with regulatory standards becomes a complex challenge. The need for an affordable, secure, and easily accessible data archiving solution is more pressing than ever.</p>
      </CaseText>

      <CaseText
        :title="$t('Our Solution: A Decentralized Approach')"
        multiple
      >
      <p>The <b>Robonomics platform</b> has now made it possible for robotics companies to archive their data using a <b>Web3-based backup and data archiving service</b>. This solution leverages the Polkadot ecosystem and integrates with the <b>Crust Network</b> to provide a cost-effective, secure, and transparent way of storing large volumes of robot-generated data.</p>
      <p>Key aspects of the solution include:</p>
        <ul>
          <li><b>Affordable Data Storage</b>: By using <b>Crust Network</b>, a decentralized storage solution, robotics companies can store their data affordably. This integration reduces the overall cost of storing massive datasets while maintaining access and scalability.</li>
          <li><b>Security and Traceability</b>: Data stored on the <b>Crust Network</b> is encrypted with the user’s or device’s private key, ensuring that only authorized parties have access. Moreover, the data is fully traceable through the blockchain at every stage of its lifecycle, providing transparency and ensuring data integrity.</li>
          <li><b>Data Management Compliance</b>: The decentralized and encrypted nature of the service also helps robotics companies meet their privacy and regulatory obligations. Whether for auditing purposes or for regulatory compliance, the service ensures that data is managed securely and in line with industry standards.</li>
        </ul>
      </CaseText>

      <CaseText
        :title="$t('Key Technology Behind the Service')"
        multiple
      >
        <p>The breakthrough enabling this service is the creation of an <b>HRMP (Horizontal Relay-routed Message Passing)</b> channel between the <b>Robonomics parachain</b> and the <b>Crust Network </b> parachain. This channel facilitates the seamless flow of data between the two networks, combining Robonomics’ robotics-focused platform with Crust’s decentralized storage capabilities.</p>
        <p>This integration makes it possible to offer decentralized backup and data archiving services that are both secure and scalable. The decentralized nature of the storage solution ensures that data is safe, accessible, and traceable on the blockchain.</p>
      </CaseText>

      <CaseText
        :title="$t('Why This Service Is Essential')"
        multiple
      >
        <p>For robotics companies, reducing the cost of data storage and ensuring secure, transparent management of that data are critical. The <b>Backup and Data Archiving Service</b> provided by <b>Robonomics</b> and <b>Crust Network</b> meets these needs, offering a long-term solution for companies seeking to scale their data storage operations without breaking the bank.</p>
        <p>As the robotics industry continues to grow, the amount of data generated will continue to rise. This service ensures that companies can manage their data efficiently while adhering to privacy and regulatory standards. Furthermore, it allows companies to focus on innovation and growth rather than data storage challenges.</p>
      </CaseText>

      <CaseText
        :title="$t('Looking Ahead')"
        multiple
      >
        <p>This service represents the first step in what will likely be an expanding ecosystem of decentralized solutions for robotics companies. As the technology and industry continue to evolve, there will be further developments to enhance scalability, provide more encryption options, and integrate with other Web3 services.</p>
      </CaseText>

    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t('For additional details about the collaboration between Robonomics and Crust Network and how decentralized storage is reshaping data management for robotics companies, visit the official')} <a class='block' href='/blog/robonomics-and-crust-networks-strategic-partnership/' aria-label='Learn More About Robonomics and Crust Collaboration' target='_blank'>${$t('blog')}</a>.</p>`"
      :title="$t('Learn More About the Collaboration')"
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