<template>
  <layout>

    <MetaInfo
      pageTitle = "Robonomics Kusama slot"
      pageDescription = "During 2022, the Robonomics parachain in Kusama was used in a dozen R&D projects and processed more than 4 million transactions for IoT devices in total."
      pageImage = "/website_cover_crowdloan.jpg"
    />

    <div class="page">
       <section class="banner-leftside section__solid section__blue">
         <div class="content layout">
           <section class="banner-leftside-title">
              <h1>Robonomics Kusama slot</h1>
              <p>4 million transactions<br/> for IoT devices in 2022</p>
           </section>

           <section class="banner-leftside-state">
              <div id="confetti-container">
                <p>Status:</p>
                <p>сampaign for renewal of slot<br/> is in progress</p>
                <g-image id="confetti" src="~/assets/images/confetti.png" aria-hidden="true" />
              </div>
           </section>

           <rbnet-button link="https://parachains.info/auctions/kusama" type="primary" color="bluevivid" target="_blank">Auction status on Kusama</rbnet-button>
         </div>
         
         <!-- <MovingNumbers/> -->
       </section>

       <section>
        <div class="content layout layout__text text-cite-big">
          During 2022, the Robonomics parachain in Kusama was used in a dozen R&D projects and processed more than 4 million transactions for IoT devices in total.
        </div>
       </section>

       <section>
        <div class="sec-i-t content layout">
          <g-image alt="Robonomics dapp smart home" src="~/assets/images/dapp-smart-devices.png" />
          <article>
            <h3>Decentralized cloud for IoT, updates for wiki, courses for Academy</h3>
            <p>Our plans for 2023 include the active development around the idea of a decentralized cloud for the control of home IoT infrastructure. Now we are working to ensure that our <g-link to="https://dapp.robonomics.network/">decentralized application</g-link>, <g-link to="https://wiki.robonomics.network">wiki</g-link> project and our educational resource, the <g-link to="https://robonomics.academy/">Robonomics Academy</g-link>, have all the necessary functions and information for IoT infrastructure owners.</p>
          </article>
        </div>
       </section>

       <section id="formula">
        <div class="content layout layout__text text-cite-big">
          <g-image class="theme-support-light" src="~/assets/images/crowdloan-formula.png" aria-hidden="true" />
          <g-image class="theme-support-dark" src="~/assets/images/crowdloan-formula-light.png" aria-hidden="true" />
          <p>For developers of the Robonomics parachain, finding an option to autonomize the life of the parachain is an important part of building a decentralized cloud for IoT. This year, for the first time, we are trying to launch a crowdloan campaign on behalf of the parachain itself.</p>
          <p><g-link to="/blog/robonomics-crowdloan-campaigns-november-2022/">Read more</g-link></p>
        </div>
       </section>

      <section class="participate section__solid section__blue">
        <div class="content layout">
          <div>Campaign for renewal of slot<br/> is in progress</div>
          <rbnet-button link="https://parachains.info/auctions/kusama" type="primary" color="bluevivid" target="_blank">Check status</rbnet-button>
        </div>
       </section>

    </div>

  </layout>
</template>


<script>

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Card: () => import("~/components/TextCard.vue"),
      MovingNumbers: () => import("~/components/decor/MovingNumbers.vue")
    }
  }
</script>

<style scoped>

  /* + BANNER */

  .banner-leftside {
    font-family: var(--font-family-code);
    letter-spacing: 1px;
    line-height: 1.2;
    overflow: hidden;
    padding-bottom: calc(var(--space) * 4);
    padding-top: calc(var(--space) * 4);
    position: relative;
    text-align: left;
    text-transform: uppercase;
  }

  .banner-leftside-title {
    font-size: calc(var(--base-font-size) * 1.2);
  }

  .banner-leftside-title h1 {
    padding-top: 0;
    margin-top: 0;
    text-align: left;
  }

  .banner-leftside-state {
    color: var(--color-blue-vivid);
    font-weight: 300;
  }

  .banner-leftside .numbers {
    left: auto;
    right: -250px;
  }

  .banner-leftside .content {
    position: relative;
    max-width: 1300px;
    z-index: 1;
  }

  #confetti-container {
    display: inline-block;
    position: relative;
  }

  #confetti {
    display: block;
    height: 1400px;
    max-width: none;
    position: absolute;
    left: calc(100% + var(--space-text));
    width: auto;
    top: calc(50% - 700px - var(--space-text)*2);
  }
  /* - BANNER */


  .text-cite-big {
    font-size: calc(var(--base-font-size) * 1.5);
    font-weight: 300;
    font-style: italic;
    line-height: 1.4;
    text-align: center;
  }

  .sec-i-t {
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: calc(var(--space) * 4);
    font-family: var(--font-family-code);
    text-align: left;
  }

  .sec-i-t h3 {
    text-align: left;
  }

  @media screen and (max-width: 1200px) {
    .sec-i-t {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 800px) {
    .sec-i-t {
      grid-template-columns: 1fr;
    }
  }

  #formula .layout__text {
    max-width: 1200px;
  }

  #formula img {
    display: block;
    margin: calc(var(--space) * 2) auto var(--space);
    width: 500px;
  }

  #formula p:last-child {
    text-align: right;
  }

  .participate .content {
    align-items: center;
    color: var(--color-blue-vivid);
    display: flex;
    font-family: var(--font-family-code);
    font-weight: 300;
    justify-content: space-between;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
  }

</style>
