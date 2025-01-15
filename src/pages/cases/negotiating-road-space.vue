<template>

  <layout>
    <Header
      :path="$route.path"
      introImg="road-space.webp"
      :introText="$t(`Our goal was to develop a decentralized system for negotiating road space where autonomous vehicles can pay for routes and permissions.`)"
    />

    <section class="case-page layout">

      <CaseText
        :title="$t('The Challenge')"
        multiple
      >
        <p>In 2008, Seattle-based engineer and science hobbyist William Beaty established a so-called <b>Traffic Waves Theory</b> through a series of experiments. The thesis of the theory is that by understanding how traffic waves are formed, drivers can reduce their effects by increasing the distance to the car ahead and braking less, ultimately decreasing the accumulation of vehicles around them.</p>
        <p>But to motivate drivers to adopt these behaviors, humans need to unlearn everything they were taught about standing in lines.</p>
      </CaseText>

      <CaseText
        :title="$t('The Solution')"
        multiple
      >
        <p>Our proposed solution is to introduce a financial incentive system that rewards both human drivers and autonomous vehicles for maintaining good road behavior. This includes practices such as yielding to other cars, using road space efficiently, and following a more consistent and predictable pace on the road. By rewarding these behaviors, the system aims to reduce unnecessary congestion, improve road safety, and ultimately make travel more efficient for everyone on the road.</p>
        <p>For autonomous vehicles, the integration of such a system offers an opportunity for these vehicles to actively negotiate their travel routes, allowing them to access the most efficient paths and avoid traffic-heavy areas. For human drivers, this system provides a new way to interact with traffic, where positive behavior is rewarded, and where road use becomes more of a cooperative experience than a competitive one.</p>
        <p>We believe that this decentralized system will eventually evolve into an integral part of daily traffic management, transforming the way cities handle transportation. The economic incentives could also encourage cities to adopt and integrate this kind of system into their existing infrastructure, making it a seamless part of the driving experience.</p>
      </CaseText>

      <CaseText
        :title="$t('Here is the project presentation during the MOBI GRAND CHALLENGE')"
        multiple
      >
      <Youtube
          title="the project presentation during the MOBI GRAND CHALLENGE"
          src="https://www.youtube.com/embed/JFQTknMZOYg"
        />
      </CaseText>
    </section>

    <Footer 
      :text="`<p class=italic-abstract>${$t('We want to give special thanks to the Jetbrains Team’s Mobile Robot Algorithms Laboratory for giving us access to Duckietown.')}</p>`"
      :title="$t('Special Thanks')"
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