<template>
  <footer class="animate-inside" v-in-viewport.once>
    <div class="layout">
      <div class="footer__row footer__top-row">
        <div class="footer__column footer__top-row-column">
          <span class="turned-text-green">Use it</span>
          <g-link class="footer__link" aria-label="see robonomics smart devices" to="/devices/">Smart devices</g-link>
          <g-link class="footer__link" aria-label="see robonomics dapp" to="https://robonomics.app/">dapp</g-link>
          <g-link class="footer__link" aria-label="see robonomics merch" to="/merch/">Wearable merch</g-link>
        </div>
        <div class="footer__column footer__top-row-column">
          <span class="turned-text-green">Learn</span>
          <g-link class="footer__link" aria-label="see robonomics academy" to="https://robonomics.academy/">Academy</g-link>
          <g-link class="footer__link" aria-label="see robonomics wiki" to="https://wiki.robonomics.network/">Wiki</g-link>
        </div>
        <div class="footer__column footer__bottom-row-column">
          <span class="turned-text-green">Explore website</span>
          <g-link class="footer__link" aria-label="see robonomics papers" to="/papers/">Science & White paper</g-link>
          <g-link class="footer__link" aria-label="learn more about xrt" to="/xrt/">Tokenomics</g-link>
          <g-link class="footer__link" aria-label="see robonomics cases" to="/cases/">Cases</g-link>
        </div>
        <div class="footer__column footer__bottom-row-column">
          <g-link class="footer__link" aria-label="see robonomics timeline" to="/timeline/">Timeline</g-link>
          <g-link class="footer__link" aria-label="see robonomics assets" to="/logo-and-assets/">Brand assets</g-link>
          <g-link class="footer__link" aria-label="see robonomics wallpapers" to="/cases/">wallpapers</g-link>
        </div>
        <div class="footer__column footer__bottom-row-column">
          <g-link class="footer__link" aria-label="see robonomics home assistant themes" to="/home-assistant-themes/">Home assistant themes</g-link>
          <g-link class="footer__link" aria-label="see robonomics NFT" to="/nft/">NFT</g-link>
          <g-link class="footer__link" aria-label="see recommended by robonomics books" to="/books/">Books & reading inspiration</g-link>
        </div>
        <div class="footer__column footer__bottom-row-column">
          <g-link class="footer__link" aria-label="see robonomics blog" to="/blog/">Blog</g-link>
          <g-link class="footer__link" aria-label="contact us" to="/contact/">Contacts</g-link>
        </div>
      </div>
      <div class="footer__row footer__bottom-row">
      </div>
    </div>
    <g-link class="footer__privacy" aria-label="see privacy policy page" to="/privacy-policy/">Privacy Policy</g-link>
  </footer>
</template>


<static-query>
query {
  metadata {
    discord,
    twitter
  }
}
</static-query>


<style scoped>

  footer {
    min-height: 312px;
    height: 100%;
    color: #000;
    padding: var(--space) 0;
    transition: background-color 0.33s ease;
    background-color: #fff;
  }

  footer .layout {
    padding-bottom: 58px;
  }

  .footer__row {
    display: flex;
    gap: calc(var(--space) * 2)
  }

  .footer__top-row  {
    margin-bottom: calc(var(--space) * 2)
  }

  .footer__column {
    position: relative;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .footer__column .turned-text-green {
    font-size: 18px;
  }

  .footer__link {
    text-align: left;
    font-weight: 900;
    text-decoration: underline;
    color: var(--color-dark);
    text-transform: uppercase;
  }

  .footer__link:not(:last-of-type) {
    margin-bottom: calc(var(--space) * 0.3);
  }

  .footer__privacy {
    position: absolute;
    bottom: var(--space);
    right: var(--space);
    letter-spacing: 0.5px;
    color: #000;
    text-decoration: underline;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1200px) {
    .footer__row {
      flex-wrap: wrap;
      gap: calc(var(--space)* 3);
    }
  }

  @media screen and (max-width: 780px) {
    .footer__row {
      flex-direction: column;
      gap: 0;
    }

    .footer__link {
      font-size: 18px;
    }

    .footer__top-row-column {
      margin-bottom: calc(var(--space) * 2);
    }

    .footer__bottom-row-column:not(:last-of-type) {
      margin-bottom: 10px;
    }

    .footer__bottom-row {
      gap: calc(var(--space)* 0.5);
    }

    .footer__privacy {
      left: calc(var(--space) + 20px);
      right: unset;
    }

   
    
  }

</style>


<script>

  export default {

    computed: {
      year: () => (new Date).getFullYear()
    }
  }
</script>
