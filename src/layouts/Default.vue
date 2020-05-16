<template>
  <div class="layout screen">
    <transition name="fade" appear>
      <slot/>
    </transition>

    <div class="footer">
      <div>
        <strong>#ROS</strong>&nbsp;
        <strong>#NixOS</strong>&nbsp;
        <strong>#IPFS</strong>&nbsp;
        <strong>#Ethereum</strong>&nbsp;
        <strong>#Polkadot</strong>&nbsp;
      </div>
      <div>Founded in 2015 &nbsp; &bull; &nbsp; Latest release {{ this.releaseTime }}</div>

      <div class="">
        <div v-if="!this.cookiePolicyAccepted()">This website uses cookies. <g-link to="/cookie-policy">Read Cookie Policy</g-link> / <button v-click="this.cookiePolicySet" class="button button__primary">Ok</button></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

  .screen{
    min-height: 100%;
    position: relative;
    overflow-x: hidden;

    &:before{
      content: "";
      position: absolute;
      z-index: -1;
      top: var(--screen-padding);
      bottom: var(--screen-padding);
      right: var(--screen-padding);
      left: var(--screen-padding);
      border: 1px solid var(--color-dark);
      background-color: var(--color-gray-light);
    }
  }

  .layout{
    padding-top: calc( var(--space) * 3 );
    padding-bottom: 11rem; //padding for footer

    &__content {
      max-width: var(--content-width);
      margin-left: auto;
      margin-right: auto;
      padding-left: calc( var(--space) * 2);
      padding-right: calc( var(--space) * 2);

      @media screen and (max-width: 720px) {
        padding-left: var(--space);
        padding-right: var(--space);
      }
    }
  }


  .footer{
    position: absolute;
    bottom: calc(var(--space) + 1rem);
    left: var(--space);
    right: var(--space);
    text-align: center;
    line-height: 1.5;
  }
</style>


<script>
  import axios from 'axios'
  import moment from 'moment'

  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies)

  export default {
    data () {
      return {
        release: null,
        update: null,
        releaseTime: null
      }
    },

    methods: {
      cookiePolicyAccepted(){
        return this.$cookies.get('cookiePolicy4');
      },
      cookiePolicySet(){
        this.$cookies.set('cookiePolicy4','accepted');
      }
    },

    async mounted () {
      try {
        const results = await axios.get(
          'https://api.github.com/repos/airalab/robonomics/releases/latest'
        )

        this.release = results.data;
        this.update = this.release['published_at'];
        this.releaseTime = moment(this.update).from();

      } catch (error) {
        console.log(error)
      }
    }
  }
</script>
