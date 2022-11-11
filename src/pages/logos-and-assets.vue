<template>
  <layout>

    <MetaInfo
      pageTitle = "Robonomics Logos and Assets"
      pageDescription = "'We have put together Robonomics logos, colors, assets and guidelines to show how you may use it."
      :pageImage = "'/website_cover_logos.jpg'"
    />

    <!-- logos and usage section -->
    <section class="logos-and-usage">
      <div class="layout layout__content text-center container">
        <h2>
          {{$ts('Robonomics logos and usage')}}
        </h2>
        <Abstract :text="$ts('We have put together Robonomics logos and guidelines to show how you may use it.')" :className="'logos-and-assets__text'" />
        <div class="logos-and-assets__wrapper grid-3 animate-inside" v-in-viewport.once>
          <a href="/logos/Robonomics-logos.zip" class="logos-and-usage__link-download oldy dark oldy__link" download>
            <div class="logos-and-usage__img">
              <g-image aria-hidden="true" src="~/assets/images/logos/logo_robonomics_network_color.png" />
            </div>
            <div class="logos-and-usage__download">
              <span>{{$ts('Download Robonomics logo')}}</span>
            </div>
          </a>
          <a href="/logos/RWS-logos.zip" class="logos-and-usage__link-download oldy dark oldy__link" download>
            <div class="logos-and-usage__img">
              <g-image aria-hidden="true" src="~/assets/images/logos/logo_robonomics_web_services.png" />
            </div>
            <div class="logos-and-usage__download">
              <span>{{$ts('Download RWS logo')}}</span>
            </div>
          </a>
          <a href="/logos/Robonomics-wiki.zip" class="logos-and-usage__link-download oldy dark oldy__link" download>
            <div class="logos-and-usage__img">
              <g-image aria-hidden="true" src="~/assets/images/logos/logo_robonomics_wiki_black.png" />
            </div>
            <div class="logos-and-usage__download">
              <span>{{$ts('Download wiki logo')}}</span>
            </div>
          </a>
        </div>
        <div class="layout layout__text section-wide animate-inside below-viewport in-viewport">
          <ul class="list-simple logos-and-usage__list animate-inside" v-in-viewport.once>
            <li class="logos-and-usage__item logos-and-usage__item--allowed">
              {{$ts('Use these permitted logos to link to Robonomics, RWS or Robonomics Wiki')}}
            </li>
            <li class="logos-and-usage__item logos-and-usage__item--allowed">
              {{$ts('Use permitted Robonomics logo to inform others you are integrated with Robonomics')}}
            </li>
            <li class="logos-and-usage__item logos-and-usage__item--allowed">
              {{$ts('Use permitted logos in blog posts, articles and slides about Robonomics technology and integrated projects')}}
            </li>
            <li class="logos-and-usage__item logos-and-usage__item--banned">
              {{$ts('Do not modify the permitted Robonomics logos, including changing the color, dimensions, or combining it with other words or design elements.')}}
            </li>
            <li class="logos-and-usage__item logos-and-usage__item--banned">
              {{$ts('Do not use Robonomics logo and name in a way that suggests you are Robonomics, your offering or project is by Robonomics, or that Robonomics is endorsing you or your offering or project if it was not approved by Robonomics DAO.')}}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- color pallet section -->
    <section class="color-pallet">
      <div class="layout layout__content text-center container">
        <h2>
          {{$ts('Robonomics Color pallet')}}
        </h2>
        <Abstract :text="$ts('These colors we use in our interfaces, prints, and other visuals. </br> Use it for your slides, banners for posts etc telling about Robonomics.')" :className="'logos-and-assets__text'" />
          <ul class="list-simple color-pallet__wrapper grid-4 animate-inside" v-in-viewport.once>
            <li class="color-pallet__item color-pallet__item--primary-blue">
              <h3 class="color-pallet__subtitle">Primary blue</h3>
              <span class="color-pallet__code">#2949d3</span>
            </li>
            <li class="color-pallet__item color-pallet__item--light-blue">
              <h3 class="color-pallet__subtitle">Light blue</h3>
              <span class="color-pallet__code">#03A5ED</span>
            </li>
            <li class="color-pallet__item color-pallet__item--dark-blue">
              <h3 class="color-pallet__subtitle">Dark blue</h3>
              <span class="color-pallet__code">#221363</span>
            </li>
            <li class="color-pallet__item color-pallet__item--lilac">
              <h3 class="color-pallet__subtitle">Lilac</h3>
              <span class="color-pallet__code">#b5c0f1</span>
            </li>
            <li class="color-pallet__item color-pallet__item--gray">
              <h3 class="color-pallet__subtitle">Light gray</h3>
              <span class="color-pallet__code">#f2f2f2</span>
            </li>
            <li class="color-pallet__item color-pallet__item--black">
              <h3 class="color-pallet__subtitle">Text, border color</h3>
              <span class="color-pallet__code">#000000</span>
            </li>
            <li class="color-pallet__item color-pallet__item--red">
              <h3 class="color-pallet__subtitle">Red</h3>
              <span class="color-pallet__code">#ee005b</span>
            </li>
            <li class="color-pallet__item color-pallet__item--green">
              <h3 class="color-pallet__subtitle">Green</h3>
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
  }

}
</script>

<style scoped>

  h2 {
    font-size: 2.5rem;
  }

  .logos-and-usage {
    padding-top: calc(var(--space) * 4);
  }

  .logos-and-usage__link-download {
    text-decoration: none;
    padding: 0;
  }

  .logos-and-usage__img { 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px 74px;
    min-height: 276px;
    background-color: #fff;
  }

  .logos-and-assets__text {  
    max-width: 889px;
    font-size: 1.5rem;
    font-weight: 300;  
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .logos-and-usage__wrapper {
    margin-bottom: calc(var(--space) * 2);
  }


  .logos-and-usage__download {
    padding: 25px;
    background-color: var(--color-blue);
  }

  .logos-and-usage__download span {
    padding-left: 40px;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: var(--font-family-code);
    color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25.814' height='19.038' viewBox='0 0 25.814 19.038'%3E%3Cg id='Group_4281' data-name='Group 4281' transform='translate(-205.5 -657.462)'%3E%3Cpath id='Path_7569' data-name='Path 7569' d='M12744.118,6315.5v8.971h23.814V6315.5' transform='translate(-12537.618 -5648.971)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cg id='Group_4280' data-name='Group 4280' transform='translate(213 658.462)'%3E%3Cpath id='Path_7570' data-name='Path 7570' d='M12777.487,6291.394v11.569' transform='translate(-12772.186 -6291.394)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3Cpath id='Path_7571' data-name='Path 7571' d='M12769.208,6305.911l5.3,5.3,5.3-5.3' transform='translate(-12769.208 -6299.006)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-position: left;
    background-size: 24px 18px;
    background-repeat: no-repeat;
    text-transform: uppercase;

  }

  .logos-and-usage__list {
    text-align: left;
  }

  .logos-and-usage__item {
    position: relative;
    font-weight: 500;
    padding-left: 33px;
  }

  .logos-and-usage__item:not(:last-child) {
    margin-bottom: var(--space);
  }

  .logos-and-usage__item:before {
    position: absolute;
    left: 0;
    height: 15px;
    width: 15px;
  }

  .logos-and-usage__item--allowed::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.714' height='16.124' viewBox='0 0 19.714 16.124'%3E%3Cpath id='Path_7572' data-name='Path 7572' d='M13091.343,6451.823l5.528,5.455,1.328-1.67,2.157-2.711,6.472-8.135' transform='translate(-13089.222 -6442.654)' fill='none' stroke='%231ca50d' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'/%3E%3C/svg%3E");
    top: -1px;
  }

  .logos-and-usage__item--banned::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.728' height='19.728' viewBox='0 0 19.728 19.728'%3E%3Cg id='Group_4292' data-name='Group 4292' transform='translate(-539.222 -1090.157)'%3E%3Cpath id='Path_7576' data-name='Path 7576' d='M13096.342,6732.277l15.485,15.486' transform='translate(-12554.999 -5640)' fill='none' stroke='%23bd044b' stroke-linecap='round' stroke-width='3'/%3E%3Cpath id='Path_7577' data-name='Path 7577' d='M13111.827,6732.277l-15.485,15.486' transform='translate(-12554.999 -5640)' fill='none' stroke='%23bd044b' stroke-linecap='round' stroke-width='3'/%3E%3C/g%3E%3C/svg%3E");
    top: 3px;
  }

  .color-pallet {
    padding-top: calc(var(--space) * 2);
  }

  .color-pallet__wrapper {
    gap: 0;
  }

  .color-pallet__item {
    height: 369px;
    padding: 65px 48px;
    margin-bottom: 0;
    font-weight: 500;
    color: #fff;
    text-align: left;
  }

  .color-pallet__item--primary-blue {
    background-color: #2949d3;
  }

  .color-pallet__item--light-blue {
    background-color: #03A5ED;
  }

  .color-pallet__item--dark-blue {
    background-color: #221363;
  }

  .color-pallet__item--lilac {
    background-color: #b5c0f1;
  }

  .color-pallet__item--gray {
    color: #000;
    background-color: #f2f2f2;
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
  

  .color-pallet__subtitle {
    margin: 0;
    margin-bottom: 1rem;
    text-align: left;
    font-family: var(--font-family);
    text-transform: none;
  }

  @media screen and (max-width: 1350px) {
    .logos-and-usage__download span {
      display: inline-block;
      max-width: 252px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .logos-and-usage__img {
      padding: var(--space);
    }
  }

  @media screen and (max-width: 1070px) {
    .logos-and-usage__download span {
      display: inline;
      max-width: unset;
      white-space: pre-wrap;
    }
  }

  @media screen and (max-width: 520px) {
    .logos-and-assets__wrapper {
      gap: calc(var(--space) * 3);
    }

    .color-pallet__item {
      height: 280px;
    }
  }

  @media screen and (max-width: 380px) {
    h2 {
      font-size: 2rem;
    }
  }
</style>