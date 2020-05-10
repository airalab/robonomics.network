<template>
  <div class="layout screen">
    <transition name="fade" appear>
      <slot/>
    </transition>

    <div class="footer">
      <strong>#ROS</strong>&nbsp;
      <strong>#NixOS</strong>&nbsp;
      <strong>#IPFS</strong>&nbsp;
      <strong>#Ethereum</strong>&nbsp;
      <strong>#Polkadot</strong>&nbsp;
      <br/>
      <!-- <div class="footer__technologies">
            <g-image alt="we use ROS" src="~/assets/images/logo-ros.svg" />
            <g-image alt="we use ROS" src="~/assets/images/logo-nixos.svg" />
            <g-image alt="we use ROS" src="~/assets/images/logo-ipfs.svg" />
            <g-image alt="we use ROS" src="~/assets/images/logo-ethereum.svg" />
            <g-image alt="we use ROS" src="~/assets/images/logo-polkadot.svg" />
      </div> -->
      Since 2015
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

    &:before{
      content: "";
      position: absolute;
      top: var(--space);
      bottom: var(--space);
      right: var(--space);
      left: var(--space);
      border: 1px solid var(--color-dark);
    }

    @media screen and (max-width: 720px) {
      &:before{
        top: calc( var(--space) / 2);
        bottom: calc( var(--space) / 2);
        right: calc( var(--space) / 2);
        left: calc( var(--space) / 2);
      }
    }
  }

  .layout{
    padding-top: calc( var(--space) * 3 );
    padding-bottom: 5rem; //padding for footer

    @media screen and (max-width: 720px) {
      // padding-bottom: 7rem; //padding for footer
      padding-top: calc( var(--space) * 1.5 );
    }

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
    bottom: calc(var(--space) + .5rem);
    left: var(--space);
    right: var(--space);
    text-align: center;


    // &__technologies{

    //   margin-bottom: .8rem;

    //   transition: .2s all ease-out;
    //   filter: grayscale(100%);

    //   &:hover{
    //     filter: grayscale(0);
    //   }

    //   img{
    //     display: inline-block;
    //     vertical-align: middle;
    //     margin-right: 1.2rem;

    //     @media screen and (max-width: 720px) {
    //       transform: scale(.8);
    //     }
    //   }
    // }
  }
</style>