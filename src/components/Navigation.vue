<template>
  <div class="layout navigation__layout">
    <div class="navigation__row navigation__top-row">
      <div class="navigation__column navigation__top-row-column">
        <span class="turned-text">Use it</span>
        <g-link class="navigation__link" aria-label="see robonomics smart devices" to="/devices/">Smart devices</g-link>
        <g-link class="navigation__link" aria-label="see robonomics dapp" to="https://robonomics.app/">dapp</g-link>
        <g-link class="navigation__link" aria-label="see robonomics merch" to="/merch/">Wearable merch</g-link>
      </div>
      <div class="navigation__column navigation__top-row-column">
        <span class="turned-text">Learn</span>
        <g-link class="navigation__link" aria-label="see robonomics academy" to="https://robonomics.academy/">Academy</g-link>
        <g-link class="navigation__link" aria-label="see robonomics wiki" to="https://wiki.robonomics.network/">Wiki</g-link>
      </div>
      <div class="navigation__column navigation__bottom-row-column">
        <span class="turned-text">Explore website</span>
        <g-link class="navigation__link" aria-label="see robonomics papers" to="/papers/">Science & White paper</g-link>
        <g-link class="navigation__link" aria-label="learn more about xrt" to="/xrt/">Tokenomics</g-link>
        <g-link class="navigation__link" aria-label="see robonomics cases" to="/cases/">Cases</g-link>
      </div>
      <div class="navigation__column navigation__bottom-row-column">
        <g-link class="navigation__link" aria-label="see robonomics timeline" to="/timeline/">Timeline</g-link>
        <g-link class="navigation__link" aria-label="see robonomics assets" to="/logos-and-assets/">Brand assets</g-link>
        <g-link class="navigation__link" aria-label="see robonomics wallpapers" to="/wallpapers/">wallpapers</g-link>
      </div>
      <div class="navigation__column navigation__bottom-row-column">
        <g-link class="navigation__link" aria-label="see robonomics home assistant themes" to="/home-assistant-themes/">Home assistant themes</g-link>
        <g-link class="navigation__link" aria-label="see robonomics NFT" to="/nft/">NFT</g-link>
        <g-link class="navigation__link" aria-label="see recommended by robonomics books" to="/books/">Books & reading inspiration</g-link>
      </div>
      <div class="navigation__column navigation__bottom-row-column">
        <g-link class="navigation__link" aria-label="see robonomics blog" to="/blog/">Blog</g-link>
        <g-link class="navigation__link" aria-label="contact us" to="/contact/">Contacts</g-link>
      </div>
    </div>
    <div class="navigation__row navigation__bottom-row">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  .navigation__layout {
    padding-bottom: 0;
  }

  .navigation__layout .turned-text {
    color: hsl(0, 0%, 85%)
  }

  .navigation__row {
    display: flex;
    gap: calc(var(--space) * 2)
  }

  .navigation__top-row  {
    margin-bottom: calc(var(--space) * 2)
  }

  .navigation__column {
    position: relative;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .navigation__column .turned-text {
    font-size: 18px;
  }

  .navigation__link {
    text-align: left;
    font-weight: 900;
    text-decoration: underline;
    color: var(--color-dark);
    text-transform: uppercase;
  }

  .navigation__link:not(:last-of-type) {
    margin-bottom: calc(var(--space) * 0.3);
  }


  @media screen and (max-width: 1200px) {
    .navigation__row {
      flex-wrap: wrap;
      gap: calc(var(--space)* 3);
    }
  }

  @media screen and (max-width: 780px) {
    .navigation__row {
      flex-direction: column;
      gap: 0;
    }

    .navigation__link {
      font-size: 18px;
    }

    .navigation__top-row-column {
      margin-bottom: calc(var(--space) * 2);
    }

    .navigation__bottom-row-column:not(:last-of-type) {
      margin-bottom: 10px;
    }

    .navigation__bottom-row {
      gap: calc(var(--space)* 0.5);
    }
    
  }


  @media screen and (max-width: 510px) {
    .navigation__layout {
      padding-left: calc(var(--space) + 10px);
    }
  }


</style>