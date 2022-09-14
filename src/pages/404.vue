<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Page not found'"
      :pageDescription = "'In some reason the page you were looking for was not found (maybe it was deprecated or url has a typo). Anyway, you may use navigation on robonomics.network to find what you need.'"
    />

    <section class="section__solid section__404">
      <div class="layout layout__content">
        <h1 v-if="$ts('404_title')">{{$ts('404_title')}}</h1>
      </div>

      <!-- <div class="layout hyphens layout__text_small">
        <p>{{ $ts('404string_1') }}:</p>
        <ul>
          <li>{{ $ts('404reason_1') }};</li>
          <li>{{ $ts('404reason_2') }};</li>
          <li>{{ $ts('404reason_3') }}.</li>
        </ul>

        <p>
          <b>{{ $ts('This page may need translation') }}.</b>
          <br/>
          {{ $ts('If you want to help us with translation') }}:
        </p>
        <ul>
          <li>{{ $ts('contact us at') }}: <a href="mailto:localization@robonomics.network?subject=Robonomics%20WIKI%20Localization">localization@robonomics.network</a></li>
          <li>{{ $ts('or') }} {{ $ts('send') }} <g-link to="https://github.com/airalab/robonomics.network">GitHub PR</g-link></li>
        </ul>
      </div> -->
      <p >
        Check url once more or create an <g-link class="link" to="https://github.com/airalab/robonomics.network/issues">issue</g-link> telling us that you’ve got 404 error (do not forget to mention current url)
      </p>

      <div class="page-404__bg" aria-hidden="true">
        <div class="page-404__bg-flying">
          <g-image src="~/assets/images/page-404-flying.png"/>
        </div>
        <div>
          <g-image src="~/assets/images/page-404-img.png"/>
        </div>
      </div>
    </section>


  </layout>
</template>


<script>
  import Navigation from '~/components/Navigation.vue'
  import MetaInfo from '~/components/MetaInfo.vue'

  export default {

    components: {
      Navigation,
      MetaInfo
    }

  }
</script>

<style scoped>
  .section__404 {
    height: 100%;
    padding-bottom: 0;
    padding-left: var(--space);
    padding-right: var(--space);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto Mono';
    font-weight: 600;
    background-color: #000;
    color: #fff;
  }

  .section__404 h1 {
    margin-top: 0;
    padding-top: 0;
    color: var(--color-link-contacts);
    text-shadow: -5px 2px #fff;
  }

  .section__404 p {
    max-width: 625px;
    width: 100%;
    text-align: center;
  }

  .link {
    text-decoration: none;
    color: var(--color-link-contacts);
  }

  .page-404__bg {
    position: relative;
  }

  .page-404__bg img {
    display: block;
    width: 100%;
    height: 100%;
    filter: contrast(1.5);
  }

  .page-404__bg-flying {
    position: absolute;
    right: calc(10% - 20px);
    top: calc(15% + 50px);
    width: 134px;
    height: 109px;
    animation: xAxis 4.5s infinite ease-in-out, yAxis 4.5s infinite ease-out;;
  }

  @keyframes yAxis {
    50% {
      transform: translateY(-100px) rotate(90deg);
    }
  }

  @keyframes xAxis {
    50% {
      transform: translateX(100px) rotate(-45deg);
    }
  }

  @media screen and (max-width: 640px) {
    .page-404__bg-flying {
      right: calc(10% + 69px);
      top: calc(15% + 12px);
      width: 95px;
      height: 72px;
    }
  }

</style>