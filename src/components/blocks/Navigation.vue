<template>
  <nav class="navigation">
    <ul :aria-label="$t('Use it')">
      <li><g-link aria-label="Robonomics smart devices" to="/devices/">{{ $t('Smart devices') }}</g-link></li>
      <li><g-link aria-label="Robonomics dapp" to="https://robonomics.app/">{{ $t('dapp') }}</g-link></li>
      <li><g-link aria-label="Robonomics merch" to="/merch/">{{ $t('Wearable merch') }}</g-link></li>
    </ul>

    <ul :aria-label="$t('Learn')">
      <li><g-link aria-label="Robonomics academy" to="https://robonomics.academy/">{{ $t('Academy') }}</g-link></li>
      <li><g-link aria-label="Robonomics wiki" to="https://wiki.robonomics.network/">{{ $t('Wiki') }}</g-link></li>
    </ul>

    <ul :aria-label="$t('Explore website')">
      <li><g-link aria-label="about XRT" to="/xrt/">{{ $t('Tokenomics') }}</g-link></li>
      <li><g-link aria-label="Robonomics papers" to="/papers/">{{$t('Science & White paper')}}</g-link></li>
      <!-- <li><g-link aria-label="use cases" to="/cases/">{{ $t('Cases') }}</g-link></li> -->
      <li><g-link aria-label="timeline" to="/timeline/">{{ $t('Timeline') }}</g-link></li>
      <li><g-link aria-label="assets" to="/logos-and-assets/">{{ $t('Brand assets') }}</g-link></li>
      <li><g-link aria-label="wallpapers" to="/wallpapers/">{{ $t('Wallpapers') }}</g-link></li>
      <li><g-link aria-label="Home assistant themes" to="/home-assistant-themes/">{{ $t('Home assistant themes') }}</g-link></li>
      <li><g-link aria-label="Robonomics NFT" to="/nft/">{{ $t('NFT') }}</g-link></li>
      <li><g-link aria-label="books" to="/books/">{{ $t('Books') }}</g-link></li>
      <li><g-link aria-label="blog" to="/blog/">{{ $t('Blog') }}</g-link></li>
      <li><g-link aria-label="contact us" to="/contact/">{{ $t('Contacts') }}</g-link></li>
    </ul>
  </nav>
</template>

<style scoped>
  .navigation {
    display: flex;
    font-size: 80%;
    font-variation-settings: 'wght' 800;
    gap: var(--space);
    line-height: 1.2;
    padding: var(--space) var(--layout-sidepadding);
    text-transform: uppercase;
    min-height: 23ch;
  }

  .navigation a {
    display: block;
    margin-bottom: calc(var(--space) * .5);
    color: var(--text-color);
    font-size: 80%;
    font-variation-settings: var(--font-flex-bold);
    text-decoration: underline;
  }

  .navigation a:hover {
    color: var(--color-link);
  }

  ul {
    position: relative;
    margin: 0;
  }

  ul li {
    padding-left: var(--space);
    /* margin-bottom: calc(var(--space) * 0.3); */
    margin-bottom: 0;
    break-inside: avoid-column;
  }

  ul:before {
    content: attr(aria-label);
    position: absolute;
    writing-mode: vertical-lr;
    writing-mode: sideways-lr;
    white-space: nowrap;

    color: var(--rb-color-light-gray);
  }

  ul:nth-child(1) a {
    white-space: nowrap;
  }

  ul:nth-child(3) {
    column-count: 4;
    gap: var(--space);
  }

  @media screen and (width > 1400px) {
    ul:nth-child(3) {
      column-count: 5;
    }
  }

  @media screen and (width < 1200px) {
    ul:nth-child(3) {
      column-count: 3;
    }
  }

  @media screen and (width < 900px) {
    ul:nth-child(3) {
      column-count: 2;
    }
  }

  @media screen and (width < 700px) {
    ul:nth-child(3) {
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