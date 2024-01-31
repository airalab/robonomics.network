<template>

  <layout>
    <MetaInfo
      pageTitle="It's gonna get worse"
      pageDescription="DIY your own safe smart space"
    />

        <!-- banner -->
    <section class="banner-with-pattern iggw__banner">
      <div class="iggw__main-title title-with-bg">
        <h1><span>{{ $t("It's gonna get worse") }}</span></h1>
      </div>

      <div class="iggw__banner-layout layout">
        <div class="iggw__content"  dir="ltr">
          <h3 class="banner-with-pattern__text-shadow iggw__banner-title">
            <span>{{ $t('DIY') }}</span>
            <span>{{ $t('your own safe') }}</span>
            <span>{{ $t('smart space') }}</span>
          </h3>

          <p dir="ltr" class="iggw__banner-text">[ {{ $t("manifest") }} ]</p>

        </div>

        <g-image class="banner-with-pattern__img iggw__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/devices/devices-banner-decor-all.png"/>
      </div>
    </section>

    <section class="iggw__main layout layout__text">
      <p class="iggw__text">{{ $t("Have you ever wondered why, in the process of evolution on Earth, the human species prevailed instead of, for example, fungi? Even now, it's challenging to provide a definitive answer to this question. The success of Homo sapiens is often attributed to successful cooperation, but then why not bees or ants? Our survival is also owed to a crucial characteristic—the autonomy of an individual within the population. In other words, the ability not to unquestionably submit to the queen bee. Ultimately, the group where each member has the right to be independent prevails.") }}</p>
      <p class="iggw__text">{{ $t("Unfortunately, those who proclaim themselves arbiters of human destinies rarely contemplate the true laws of nature. Politicians and major corporations engage in strategic games, where the populace is treated as mere units. This dynamic existed before the advent of computer games and has persisted since: 'buying units,' 'building units,' 'removing units'—throughout history, various ruling structures around the world have resorted to such dehumanizing terms when dealing with other people. However, almost invariably, to commit crimes against humanity, these rulers require enforcers, who, in turn, have their subordinates. Therefore, over the last 200 years, such stark dystopias in the vein of the book '1984' typically endure for no more than one or two generations.") }}</p>
      <p class="iggw__text">{{ $t("What can unsettle the balance between freedom and subordination is the Internet of Things (IoT). Completely confining people, for example, is no easy task these days. A recent case with the quarantine vividly illustrated this: in Shanghai, exits from homes were sealed, and it was such a disturbing action by the authorities that these measures remained in place for no more than 3 months. But what if goals could be achieved without turning to such obvious methods? What if you could ask a major telecommunications company to disable the lock-opening function in all the apartments in the city? What if you could start blocking essential functions in their customers' cars because they haven't paid a subscription or the surveillance policy ('gathering necessary metrics') doesn't align with their region's policy on collecting information about citizens") }}</p>
      <p class="iggw__text">{{ $t('This is exactly where we are all heading now. And this could be just the beginning of a widespread nightmare that will quietly embed itself in the lives of many modern people in a twisted way.') }}</p>
      <p class="iggw__text">{{ $t("We, the Robonomics team, aim to redirect the development of IoT towards a more open and secure path. We've") }} <g-link to="https://wiki.robonomics.network/docs/robonomics-smart-home-overview/">{{ $t('introduced') }}</g-link> {{ $t("an independent web3 cloud for IoT, allowing your home to stay connected autonomously, and communication with the manufacturer's server is only optional. Currently, we have started producing our own") }} <g-link to="https://robonomics.network/devices/">{{ $t('IoT devices') }}</g-link> {{ $t("based on open hardware and open software. Our goal is to create a fully open hardware-software system that won't let any digital intruders into your apartment. So, with our innovations, you can enjoy your time in the bedroom as you wish!") }} </p>
    </section>
  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
  }

}
</script>

<style scoped>

  .iggw__banner {
    min-height: 650px;
    margin-bottom: calc(var(--space) * 4);
    background-image: url('../assets/images/iggw/iggw-banner-bg.jpg');
    background-color: #D9E021;
  }

  .iggw__banner-title span {
    text-shadow: 7px 7px #111;
  }

  .iggw__banner-img{
    right: 30px;
  }

  .iggw__banner-text {
    color: var(--Text, #000);
    font-family: "Roboto Flex";
    font-size: calc(var(--base-font-size) * 3);
    font-weight: 700;
    text-align: left;
  }

  .iggw__banner-layout {
    padding-top: calc(var(--space) * 3);
    padding-bottom: calc(var(--space) * 3);
  }

  .iggw__text {
    font-weight: 500;
    font-size: calc(var(--base-font-size) * 1.1);
  }

  .iggw__text:not(:last-child) {
    margin-bottom: calc(var(--space) * 2);
  }

  @media screen and (max-width: 1760px) {
    .iggw__banner-title {
      max-width: 595px;
    }
  }

  @media screen and (max-width: 1400px) {
    .iggw__banner {
      min-height: unset;
    }

    .iggw__banner-img {
      right: 80px;
      top: 66px;
      max-width: 650px;
    }

  }

  @media screen and (max-width: 1250px) {
    .iggw__banner-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .iggw__banner-img {
      position: static;
    }
  }

  @media screen and (max-width: 450px) {
    .iggw__banner-title {
      font-size: calc(var(--base-font-size) * 2.5);
    }
  }

</style>