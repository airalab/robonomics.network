<template>
  <layout>

    <MetaInfo
      pageTitle = "Robonomics Logos and Assets"
      pageDescription = "We have put together Robonomics logos, colors, assets and guidelines to show how you may use it."
      :pageImage = "'/website_cover_logos.png'"
    />

    <!-- banner -->

    <section class="section section__blue logos-and-assets__banner">
      <div class="papers__main-title title-with-bg">
        <h1><span>{{ $t('logos and assets') }}</span></h1>
      </div>

      <div class="layout layout__content text-center container">
        <g-image class="logos-and-assets__banner-logo" quality="75" src="@/assets/images/logos-and-assets/logo-banner.svg" alt="robonomics logo"/>
        <p class="logos-and-assets__banner-text">{{ $t("Download the Robonomics logos here. We've got two options for your") }} <u>{{ $t('basic needs') }}</u> {{$t('and one designed for')}} <u>{{$t('XRT')}}</u> {{$t('token. Additionally, discover the optimal')}} <u>{{ $t('color palette') }}</u> {{$t('for the distinguished Robonomics brand')}}.</p>
        <g-image quality="75" aria-hidden="true" alt="" src="@/assets/images/logos-and-assets/logo-banner-text.svg" />
      </div>
    </section>

    <!-- logos section -->
    <section class="logos">
      <div class="layout text-center container">
        <div class="logos-and-assets__header">
          <h2>{{$t('Robonomics logos')}}</h2>
          <a href="/logos/logos-robonomics.zip" download>{{ $t('Download all') }}</a>
        </div>

        <ul class="logos__wrapper logos__robonomics grid-3 list-simple">
          <LogosItem 
            class="logos-and-assets__item"
            v-for="logo in robonomicsLogos"
            :key="logo.id"
            :srcImg="logo.srcImg"
            :alt="logo.alt"
            :srcPNG="logo.srcPNG"
            :srcSVG="logo.srcSVG"
            :itemBackground="logo.background"
          />
        </ul>

        <!-- XRT -->
        <div class="logos-and-assets__header">
          <h2>{{$t('XRT logos')}}</h2>
          <a href="/logos/logos-xrt.zip" download>{{ $t('Download all') }}</a>
        </div>

        <ul class="logos__wrapper logos__xrt grid-3 list-simple">
          <LogosItem 
            class="logos-and-assets__item"
            v-for="logo in xrtLogos"
            :key="logo.id"
            :srcImg="logo.srcImg"
            :alt="logo.alt"
            :srcPNG="logo.srcPNG"
            :srcSVG="logo.srcSVG"
            :itemBackground="logo.background"
          />
        </ul>

        <!-- RWS -->
        <div class="logos-and-assets__header">
          <h2>{{$t('RWS logos')}}</h2>
          <a href="/logos/logos-rws.zip" download>{{ $t('Download all') }}</a>
        </div>

        <ul class="logos__wrapper logos__xrt grid-3 list-simple">
          <LogosItem 
            class="logos-and-assets__item"
            v-for="logo in rwsLogos"
            :key="logo.id"
            :srcImg="logo.srcImg"
            :alt="logo.alt"
            :srcPNG="logo.srcPNG"
            :srcSVG="logo.srcSVG"
            :itemBackground="logo.background"
          />
        </ul>
      </div>
    </section>

    <!-- color pallet section -->
    <section class="color-pallet">
      <div class="layout text-center container">
        <div class="logos-and-assets__header">
          <h2>
            {{$t('Recommended color palette')}}
          </h2>
        </div>
          <ul class="list-simple color-pallet__wrapper grid-3 animate-inside" v-in-viewport.once>
            <li class="color-pallet__item logos-and-assets__item  color-pallet__item--primary-blue">
              <h3 class="color-pallet__subtitle">Primary blue</h3>
              <span class="color-pallet__code">#2949d3</span>
            </li>
            <li class="color-pallet__item logos-and-assets__item  color-pallet__item--light">
              <h3 class="color-pallet__subtitle">Light</h3>
              <span class="color-pallet__code">#ffffff</span>
            </li>
            <li class="color-pallet__item logos-and-assets__item  color-pallet__item--gray">
              <h3 class="color-pallet__subtitle">Medium</h3>
              <span class="color-pallet__code">#f2f2f2</span>
            </li>
            <li class="color-pallet__item logos-and-assets__item color-pallet__item--black">
              <h3 class="color-pallet__subtitle">Dark</h3>
              <span class="color-pallet__code">#000000</span>
            </li>
            <li class="color-pallet__item logos-and-assets__item  color-pallet__item--red">
              <h3 class="color-pallet__subtitle">Accentuating red</h3>
              <span class="color-pallet__code">#ee005b</span>
            </li>
            <li class="color-pallet__item logos-and-assets__item  color-pallet__item--green">
              <h3 class="color-pallet__subtitle">Accentuating green</h3>
              <span class="color-pallet__code">#5fce05</span>
            </li>
          </ul>
      </div>
    </section>
  </layout>
</template>

<script>

export default {
  components: {
    Abstract: () => import('~/components/TextAbstract.vue'),
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    LogosItem: () => import("~/components/logos-and-assets/LogosItem.vue"),
  },

  data() {
    return {
      robonomicsLogos: [
        {
          id: 0,
          srcImg: 'logo-robonomics-blue.svg',
          alt: "robonomics logo blue",
          srcPNG: '/logos/logos-robonomics/icon_black_Primary_blue.png',
          srcSVG: '/logos/logos-robonomics/icon_black_Primary_blue.svg',
          background: 'light'
        },
        {
          id: 1,
          srcImg: 'logo-robonomics-white.svg',
          alt: "robonomics logo white",
          srcPNG: '/logos/logos-robonomics/icon_white.png',
          srcSVG: '/logos/logos-robonomics/icon_white.svg',
          background: 'alto'
        },
        {
          id: 2,
          srcImg: 'logo-robonomics-black.svg',
          alt: "robonomics logo black",
          srcPNG: '/logos/logos-robonomics/icon_black.png',
          srcSVG: '/logos/logos-robonomics/icon_black.svg'
        },
        {
          id: 3,
          srcImg: 'logo-robonomics-text-blue.svg',
          alt: "robonomics logo with text blue",
          srcPNG: '/logos/logos-robonomics/logo_horizontal_Primary_blue.png',
          srcSVG: '/logos/logos-robonomics/logo_horizontal_Primary_blue.svg',
        },
        {
          id: 4,
          srcImg: 'logo-robonomics-text-white.svg',
          alt: "robonomics logo with text white",
          srcPNG: '/logos/logos-robonomics/logo_horizontal_white.png',
          srcSVG: '/logos/logos-robonomics/logo_horizontal_white.svg',
          background: 'french-gray'
        },
        {
          id: 5,
          srcImg: 'logo-robonomics-text-black.svg',
          alt: "robonomics logo with text black",
          srcPNG: '/logos/logos-robonomics/logo_horizontal_black.png',
          srcSVG: '/logos/logos-robonomics/logo_horizontal_black.svg',
          background: 'light'
        },
        {
          id: 6,
          srcImg: 'logo-robonomics-network-blue.svg',
          alt: "robonomics network logo blue",
          srcPNG: '/logos/logos-robonomics/logo_RN_vertical_Primary_blue.png',
          srcSVG: '/logos/logos-robonomics/logo_RN_vertical_Primary_blue.svg'
        },
        {
          id: 7,
          srcImg: 'logo-robonomics-network-white.svg',
          alt: "robonomics network logo white",
          srcPNG: '/logos/logos-robonomics/logo_RN_vertical_white.png',
          srcSVG: '/logos/logos-robonomics/logo_RN_vertical_white.svg',
          background: 'spun-pearl'
        },
        {
          id: 8,
          srcImg: 'logo-robonomics-network-black.svg',
          alt: "robonomics network logo black",
          srcPNG: '/logos/logos-robonomics/logo_RN_vertical_black.png',
          srcSVG: '/logos/logos-robonomics/logo_RN_vertical_black.svg'
        }
      ],
      xrtLogos: [
        {
          id: 0,
          srcImg: 'logo-xrt-plain.svg',
          alt: "logo-xrt-plain",
          srcPNG: '/logos/logos-xrt/icon_XRT_color.png',
          srcSVG: '/logos/logos-xrt/icon_XRT_color.svg'
        },
        {
          id: 1,
          srcImg: 'logo-xrt-text-1.svg',
          alt: "logo xrt text 1",
          srcPNG: '/logos/logos-xrt/logo_XRT_horizontal_color.png',
          srcSVG: '/logos/logos-xrt/logo_XRT_horizontal_color.svg'
        },
        {
          id: 2,
          srcImg: 'logo-xrt-text-2.svg',
          alt: "logo xrt text 2",
          srcPNG: '/logos/logos-xrt/logo_XRT_vertical_color.png',
          srcSVG: '/logos/logos-xrt/logo_XRT_vertical_color.svg'
        }
      ],
      rwsLogos: [
        {
          id: 0,
          srcImg: 'logo-rws.svg',
          alt: "logo rws",
          srcPNG: '/logos/logos-rws/rws-logo.png',
          srcSVG: '/logos/logos-rws/rws-logo.svg'
        }
      ]
    }
  }

}
</script>

<style scoped>

  h2, h3 {
    font-size: calc(var(--base-font-size) * 1.2);
    font-family: var(--font-family);
    margin: 0;
    letter-spacing: 0;
    text-align: left;
    text-transform: none;
  }

  .container {
    max-width: 1080px;
  }

  .grid-3 {
    gap: 0;
    justify-content: center;
  }

  .logos-and-assets__banner {
    margin: 0;
    padding-bottom: var(--space);
  }

  .logos-and-assets__banner-logo {
    margin-bottom: calc((var(--space) * 1.2));
  }

  .logos-and-assets__banner-text {
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
    font-style: italic;
    margin-bottom: calc((var(--space) * 1.2));
  }

  .logos-and-assets__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space);
  }

  .logos-and-assets__header {
    font-weight: 500;
  }

  .logos-and-assets__item  {
    border: 1px solid var(--color-dark);
  }

  .logos {
    margin-bottom: calc((var(--space) * 3.5));
  }
  
  .logos__robonomics {
    margin-bottom: calc((var(--space) * 3.5));
  }
  

  .color-pallet__item {
    height: 369px;
    padding: 40px 48px;
    margin-bottom: 0;
    font-weight: 500;
    color: #fff;
    text-align: left;
  }

  .color-pallet__subtitle {
    font-size: calc(var(--base-font-size) * 1);
    margin-bottom: calc(var(--space) * 0.3);
  }

  .color-pallet__code {
    text-transform: uppercase;
  }

  .color-pallet__item--primary-blue {
    background-color: #2949d3;
  }

  .color-pallet__item--gray {
    color: #000;
    background-color: #f2f2f2;
  }

  .color-pallet__item--light {
    color: #000;
    background-color: #fff;
  }

  .color-pallet__item--black {
    background-color: #000;
  }

  .color-pallet__item--red {
    background-color: #ee005b;
  }

  .color-pallet__item--green {
    background-color: #5fce05
  }

  @media screen and (max-width: 920px) {
    .logos-and-assets__banner .container {
      padding: calc(var(--space) * 2) var(--space);
    }
  }
  

  @media screen and (max-width: 380px) {
    h2 {
      font-size: 2rem;
    }

 
  }
</style>