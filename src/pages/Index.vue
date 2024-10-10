<template>
  <layout>

      <MetaInfo
        pageTitle = "Robonomics Network"
        pageDescription = "Robonomics is a decentralized cloud for storing digital twins of robotics and IoT devices. Robonomics enables economic and technical communication between machines and humans. Its decentralized architecture secures the end user's privacy."
      />

    <section class="home">

      <div class="layout layout__new">
        <h1 class="home__title title2">Hardware for cyber punks 2025 line up</h1>
        <Products/>
      </div>

      <Member/>

      <div class="layout layout__new"> 
        <div class="home__advantages grid-3">
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--scalable title2">Scalable</h3>
            <p class="simple-text">Since Blockchain started its rapid growing we are on top of technologies and know how radical they can change and how to scale WEB3 infrastructure according to new network standards.</p>
          </div>
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--antiscam title2">anti-scam</h3>
            <p class="simple-text">It’s always tempting to promise what the market expects—even beyond reality. While we’re tech optimists, we prioritize solid architecture and failure-resistant solutions.</p>
          </div>
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--privacy title2">Privacy friendly</h3>
            <p class="simple-text">We adhere to decentralized, open-source paradigms, which are crucial for the smart hardware already being used by the masses in everyday life.</p>
          </div>
        </div>
        <g-link to="/timeline/" class="advantages__link"><span>Robonomics Timeline</span></g-link>
      </div>

    </section>

    
  </layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
  import MetaInfo from '~/components/MetaInfo.vue'
  import Products from '~/components/Products.vue'
  import Member from '~/components/home/homeMember.vue'

  export default {

    components: {
      MetaInfo,
      Products,
      Member
    }

  }
</script>


<style scoped>

  .home {
    padding-bottom: calc(var(--space) * 3);
  }

  .home__advantages {
    margin-bottom: var(--space);
  }

  .home__advantages-title {
    padding-top: 60px;
    text-transform: uppercase;
    text-align: left;
    background-position: left;
    background-repeat: no-repeat;
  }

  .home__advantages-title--scalable {
    background-image: url("data:image/svg+xml,%3Csvg width='102' height='8' viewBox='0 0 102 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M101.854 4.35355C102.049 4.15829 102.049 3.84171 101.854 3.64645L98.6716 0.464466C98.4763 0.269204 98.1597 0.269204 97.9645 0.464466C97.7692 0.659728 97.7692 0.976311 97.9645 1.17157L100.793 4L97.9645 6.82843C97.7692 7.02369 97.7692 7.34027 97.9645 7.53553C98.1597 7.7308 98.4763 7.7308 98.6716 7.53553L101.854 4.35355ZM1 4.5H101.5V3.5H1V4.5Z' fill='%233F3F3F'/%3E%3Cpath d='M0.646446 4.35355C0.451187 4.15829 0.451187 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53554 0.464466C4.7308 0.659728 4.7308 0.976311 4.53554 1.17157L1.70711 4L4.53554 6.82843C4.7308 7.02369 4.7308 7.34027 4.53554 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM101.5 4.5H1V3.5H101.5V4.5Z' fill='%233F3F3F'/%3E%3C/svg%3E%0A");
  }


  .home__advantages-title--antiscam {
    background-image: url("data:image/svg+xml,%3Csvg width='102' height='14' viewBox='0 0 102 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7C14.3689 -1 17.2751 -1 9.71882 7C2.16251 15 5.06878 15 18.4376 7C31.8065 -1 34.7128 -1 27.1565 7C19.6001 15 22.5064 15 35.8753 7C49.2441 -1 52.1504 -1 44.5941 7C37.0378 15 39.9441 15 53.3129 7C66.6818 -1 69.588 -1 62.0317 7C54.4754 15 57.3817 15 70.7505 7C84.1194 -1 87.0257 -1 79.4694 7C71.9131 15 74.8193 15 88.1882 7C101.557 -1 104.463 -1 96.907 7' stroke='%233F3F3F'/%3E%3C/svg%3E%0A");
  }

  .home__advantages-title--privacy {
    background-size: 109px 15px;
    background-image: url("../assets/images/hardware-2025/privacy.png");
  }

  .advantages__link {
    display: block;
    text-align: center;
    font-weight: 900;
  }

  .advantages__link span {
    position: relative;
  }

  .advantages__link span::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: var(--color-blue);
  }

  @media screen and (max-width: 990px) {

    .home__advantages-title {
      padding-top: 0;
      padding-right: 100px;
      background-position: right;
    }
  }



</style>