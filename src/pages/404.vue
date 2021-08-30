<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Page not found'"
      :pageDescription = "'In some reason the page you were looking for was not found (maybe it was deprecated or url has a typo). Anyway, you may use navigation on robonomics.network to find what you need.'"
    />

    <div class="layout layout__content layout__text">
      <h1 v-if="$ts('404_title')">{{$ts('404_title')}}</h1>
    </div>

    <div class="layout hyphens layout__text_small">
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
    </div>

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