<template>
  <div class="spot animated">
    <g-image class="spot-body" src="~/assets/images/white-paper-2022/animated-pose-1/spot-body.png"/>
    <g-image class="spot-leg1-top" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg1-top.png"/>
    <g-image class="spot-leg1-bottom" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg1-bottom.png"/>
    <g-image class="spot-leg2-top" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg2-top.png"/>
    <g-image class="spot-leg2-bottom" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg2-bottom.png"/>
    <g-image class="spot-leg3-top" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg3-top.png"/>
    <g-image class="spot-leg3-bottom" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg3-bottom.png"/>
    <g-image class="spot-leg4-top" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg4-top.png"/>
    <g-image class="spot-leg4-bottom" src="~/assets/images/white-paper-2022/animated-pose-1/spot-leg4-bottom.png"/>
  </div>
</template>

<style scoped>

  @keyframes SpotBody {
  from {
      transform: translateY(0)
    }
    to {
      transform: translateY(-50px)
    }
  }
  @keyframes SpotLeg1Top {
    from {
      transform: translateY(0) rotate(-20deg)
    }
    to {
      transform: translateY(-60px) rotate(-30deg)
    }
  }
  @keyframes SpotLeg1Bottom {
    from {
      transform: translateY(0) rotate(6deg)
    }
    to {
      transform: translateY(-40px) rotate(30deg)
    }
  }
  @keyframes SpotLeg2Top {
    from {
      transform: translateY(0) rotate(-14deg)
    }
    to {
      transform: translateY(-40px) rotate(-20deg)
    }
  }
  @keyframes SpotLeg2Bottom {
    from {
      transform: translateY(0) rotate(9deg)
    }
    to {
      transform: translateY(-30px) rotate(28deg)
    }
  }
   @keyframes SpotLeg3Top {
    from {
      transform: translateY(0) rotate(-17deg)
    }
    to {
      transform: translateY(-35px) rotate(-12deg)
    }
  }
  @keyframes SpotLeg3Bottom {
    from {
      transform: translateY(0) rotate(9deg)
    }
    to {
      transform: translateY(-50px) rotate(40deg)
    }
  }
  @keyframes SpotLeg4Top {
    from {
      transform: translateY(0) rotate(-20deg)
    }
    to {
      transform: translateY(-60px) rotate(-30deg)
    }
  }
  @keyframes SpotLeg4Bottom {
    from {
      transform: translateY(0) rotate(11deg)
    }
    to {
      transform: translateY(-45px) rotate(35deg)
    }
  }
  .spot {
    position: relative;
    width: 395px;
    height: 223px;
    transform: scale(0.6) translateX(-80px);
  }
  .spot > img {
    display: block;
    position: absolute;
    animation-delay: 1.5s;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .spot-body {
    width: 320px;
    bottom: 67px;
    left: calc(50% - 160px);
    z-index: 2;
  }
  .animated .spot-body {
    animation-name: SpotBody;
  }
  .spot-leg1-top {
    width: 162.5px;
    bottom: 78px;
    left: -55px;
    transform-origin: 100% 100%;
    transform: rotate(-20deg);
    z-index: 4;
  }
  .animated .spot-leg1-top {
    animation-name: SpotLeg1Top;
  }
  .spot-leg1-bottom {
    width: 151px;
    bottom: 28px;
    left: -35px;
    transform-origin: 0 0;
    transform: rotate(6deg);
    z-index: 3;
  }
  .animated .spot-leg1-bottom {
    animation-name: SpotLeg1Bottom;
  }
  .spot-leg2-top {
    width: 118.5px;
    bottom: 80px;
    left: -45px;
    transform-origin: 100% 100%;
    transform: rotate(-14deg);
    z-index: 1;
  }
  .animated .spot-leg2-top {
    animation-name: SpotLeg2Top;
  }
  .spot-leg2-bottom {
    width: 142.5px;
    bottom: 46px;
    left: -37px;
    transform-origin: 0 0;
    transform: rotate(9deg);
    z-index: 0;
  }
  .animated .spot-leg2-bottom {
    animation-name: SpotLeg2Bottom;
  }
  .spot-leg3-top {
    width: 143px;
    bottom: 80px;
    left: 186px;
    transform-origin: 100% 100%;
    transform: rotate(-17deg);
    z-index: 0;
  }
  .animated .spot-leg3-top {
    animation-name: SpotLeg3Top;
  }
  .spot-leg3-bottom {
    width: 142.5px;
    bottom: 35px;
    left: 188px;
    transform-origin: 0 0;
    transform: rotate(9deg);
    z-index: 1;
  }
  .animated .spot-leg3-bottom {
    animation-name: SpotLeg3Bottom;
  }
  .spot-leg4-top {
    width: 158px;
    bottom: 80px;
    left: 166px;
    transform-origin: 100% 100%;
    transform: rotate(-20deg);
    z-index: 4;
  }
  .animated .spot-leg4-top {
    animation-name: SpotLeg4Top;
  }
  .spot-leg4-bottom {
    width: 153.5px;
    bottom: 28px;
    left: 188px;
    transform-origin: 0 0;
    transform: rotate(11deg);
    z-index: 1;
  }
  .animated .spot-leg4-bottom {
    animation-name: SpotLeg4Bottom;
  }

</style>