<template>
  <nav class="navigation">
    <ul aria-label="Use it">
      <li><g-link aria-label="Robonomics smart devices" to="/devices/">Smart devices</g-link></li>
      <li><g-link aria-label="Robonomics dapp" to="https://robonomics.app/">dapp</g-link></li>
      <li><g-link aria-label="Robonomics merch" to="/merch/">Wearable merch</g-link></li>
    </ul>

    <ul aria-label="Learn">
      <li><g-link aria-label="Robonomics academy" to="https://robonomics.academy/">Academy</g-link></li>
      <li><g-link aria-label="Robonomics wiki" to="https://wiki.robonomics.network/">Wiki</g-link></li>
    </ul>

    <ul aria-label="Explore website">
      <li><g-link aria-label="Robonomics papers" to="/papers/">Science & White paper</g-link></li>
      <li><g-link aria-label="about XRT" to="/xrt/">Tokenomics</g-link></li>
      <li><g-link aria-label="use cases" to="/cases/">Cases</g-link></li>
      <li><g-link aria-label="timeline" to="/timeline/">Timeline</g-link></li>
      <li><g-link aria-label="assets" to="/logos-and-assets/">Brand assets</g-link></li>
      <li><g-link aria-label="wallpapers" to="/wallpapers/">Wallpapers</g-link></li>
      <li><g-link aria-label="Home assistant themes" to="/home-assistant-themes/">Home assistant themes</g-link></li>
      <li><g-link aria-label="Robonomics NFT" to="/nft/">NFT</g-link></li>
      <li><g-link aria-label="books" to="/books/">Books & reading inspiration</g-link></li>
      <li><g-link aria-label="blog" to="/blog/">Blog</g-link></li>
      <li><g-link aria-label="contact us" to="/contact/">Contacts</g-link></li>
    </ul>
  </nav>
  <!-- <div class="layout navigation__layout">
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
  </div> -->
</template>

<style scoped>
  .navigation {
    display: flex;
    font-variation-settings: 'wght' 800;
    gap: var(--space);
    padding: var(--space) var(--layout-sidepadding);
    text-transform: uppercase;
  }

  .navigation a {
    color: var(--text-color);
    font-variation-settings: 'wght' 800;
    text-decoration: underline;
    font-size: 90%;
  }

  ul {
    position: relative;
    margin: 0;
  }

  ul li {
    padding-left: var(--space);
    margin-bottom: calc(var(--space) * 0.3);
  }

  ul:before {
    content: attr(aria-label);
    position: absolute;
    writing-mode: vertical-lr;
    writing-mode: sideways-lr;
    white-space: nowrap;

    color: var(--rb-color-light-gray);
  }
  ul[aria-label="Explore website"] {
    column-count: 4;
    gap: var(--space);
  }

  @media screen and (width > 1400px) {
    ul[aria-label="Explore website"] {
      column-count: 5;
    }
  }

  @media screen and (width < 1200px) {
    ul[aria-label="Explore website"] {
      column-count: 3;
    }
  }

  @media screen and (width < 900px) {
    ul[aria-label="Explore website"] {
      column-count: 2;
    }
  }

  @media screen and (width < 700px) {
    ul[aria-label="Explore website"] {
      column-count: 1;
    }
  }

  @media screen and (width < 500px) {
    .navigation {
      flex-direction: column;
    }

    ul li {
      padding-left: calc(var(--space) * 2);
    }
  }
</style>

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