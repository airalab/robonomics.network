<template>
  <layout :title="$t('our robo art wallpapers')" >
    <MetaInfo
      pageTitle = "Robonomics Wallpapers"
      pageDescription = "We created beautiful Robonomics themed wallpapers for different devices that you can use!"
      :pageImage = "'/website_cover_wallpapers.png'"
    />

    <section class="space-monkey">
      <div class="layout layout__content">
        <div class="highlight-solid-green__wrapper">
          <h2 class="m-t-0 highlight-solid-green">{{ $t('Space monkey devcon 2024 special') }}</h2>
        </div>
        <div class="space-monkey__container grid-2">
          <g-image src="~/assets/images/wallpapers/space-monkey.webp" immediate/>
          <div class="space-monkey__content">
            <p>{{ $t('Download this picture to your device and join our special Devcon 2024 quest at thrilling locations around Bangkok!') }}</p>
            <div class="wallpapers__links"> 
              <g-image src="~/assets/images/wallpapers/desktop.svg" immediate aria-hidden="true" />
              <a aria-label="download special space monkey wallpaper for desktop" href="/wallpapers/space-monkey/space-monkey-desktop.jpg" download="">{{ $t('Desktop') }}</a>
            </div>
            <div class="wallpapers__links"> 
              <g-image src="~/assets/images/wallpapers/smartphone.svg" immediate aria-hidden="true" />
              <div class="wallpapers__links-wrapper">
                <a download aria-label="download special space monkey wallpaper for iphone 13" href="/wallpapers/space-monkey/space-monkey-iphone-13.jpg">{{$t('Iphone 13')}}</a>
                <a download aria-label="download special space monkey wallpaper for iphone 14" href="/wallpapers/space-monkey/space-monkey-iphone-14.jpg">{{ $t('Iphone 14') }}</a>
                <a download aria-label="download special space monkey wallpaper for iphone 15" href="/wallpapers/space-monkey/space-monkey-iphone-15.jpg">{{$t('Iphone 15')}}</a>
                <a download aria-label="download special space monkey wallpaper for Samsung Galaxy" href="/wallpapers/space-monkey/space-monkey-samsung-galaxy.jpg">{{ $t('Samsung Galaxy') }}</a>
              </div>
            </div>
            <div class="space-monkey__decor">
              <g-image src="~/assets/images/wallpapers/television.svg" immediate aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section wallpapers">
      <div class="layout layout__mid">
        <div class="wallpapers__header">
          <g-image src="~/assets/images/wallpapers/cellphone.svg" immediate aria-hidden="true" />
          <div class="highlight-solid-green__wrapper">
            <h2 class="highlight-solid-green">{{ $t('Free Wallpapers for you from our artists') }}</h2>
        </div>
        </div>
          <div class="wallpapers__wrapper grid-3">
            <WallpapersItem 
              v-for="item in wallpapers" 
              :key="item.id"
              :img="item.img"
              :desktopLink="item.desktopLink"
              :phoneLink="item.phoneLink"
            />
          </div>
      </div>
    </section>

    <section class="hidden-wallpapers">
      <div class="layout layout__content">
        <div class="highlight-solid-green__wrapper">
          <h2 class="highlight-solid-green">{{ $t('Hide your folder with secret wallpaper') }}</h2>
        </div>
        <g-image src="~/assets/images/wallpapers/bw_astronaut_artboard_1.webp" immediate/>
        <p>{{ $t("We've created secret wallpapers just for you! Download the background and folder icons, and your folders will blend seamlessly into your Home Screen—leaving only beautiful artwork visible.") }}</p>
        <div class="wallpapers__links">
          <a aria-label="download hidden wallpaper for desktop" class="wallpapers-link-desktop" href="/wallpapers/hidden/bw-astronaut-artboard.jpg" download>{{$t('Desktop background')}}</a>
          <a aria-label="download hidden wallpaper icons for Mac OS" class="hidden-wallpaper-mac" href="/wallpapers/hidden/icons-for-os.zip" download>{{ $t('Mac OS icons') }}</a>
          <a aria-label="download hidden wallpaper icons for Windows" class="hidden-wallpaper-windows" href="/wallpapers/hidden/icons-for-windows.zip" download>{{$t('Windows icons')}}</a>
        </div>
      </div>
    </section>

  </layout>
</template>

<script>

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    WallpapersItem: () => import("~/components/wallpapers/WallpapersItem.vue"),
  },

  data() {
    return {
      wallpapers: [
        {
          id: 0,
          img: 'robot_and_cat_artboard_1.webp',
          desktopLink: '/wallpapers/regular/robot-and-cat-artboard.jpg',
          phoneLink: '/wallpapers/phone/robot-and-cat-artboard.jpg'
        },
        {
          id: 1,
          img: 'robot_and_cosmonaut_artboard_1.webp',
          desktopLink: '/wallpapers/regular/robot-and-cosmonaut-artboard.jpg',
          phoneLink: '/wallpapers/phone/robot-and-cosmonaut-artboard.jpg'
        },
        {
          id: 2,
          img: 'robot_and_electrics_sheep_artboard_1.webp',
          desktopLink: '/wallpapers/regular/robot-and-electrics-sheep-artboard.jpg',
          phoneLink: '/wallpapers/phone/robot-and-electrics-sheep-artboard.jpg'
        },
        {
          id: 3,
          img: 'coloured_astronaut_artboard_1.webp',
          desktopLink: '/wallpapers/regular/coloured-astronaut-artboard.jpg',
          phoneLink: '/wallpapers/phone/coloured-astronaut-artboard.jpg'
        },
        {
          id: 4,
          img: 'robot_and_apple_artboard_1.webp',
          desktopLink: '/wallpapers/regular/robot-and-apple-artboard.jpg',
          phoneLink: '/wallpapers/phone/robot-and-apple-artboard.jpg'
        },
        {
          id: 5,
          img: 'space_travelers_artboard_1.webp',
          desktopLink: '/wallpapers/regular/space-travelers-artboard.jpg',
          phoneLink: '/wallpapers/phone/space-travelers-artboard.jpg'
        },
        {
          id: 6,
          img: 'bw_astronaut_artboard_1.webp',
          desktopLink: '/wallpapers/regular/bw-astronaut-artboard.jpg',
          phoneLink: '/wallpapers/phone/bw-astronaut-artboard.jpg'
        },
      ]
    }
  }


}
</script>

<style>


.wallpapers__links {
    display: flex;
    align-items: flex-start;
    gap: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
  }

  .wallpapers__links a {
    line-height: 1;
    font-size: calc(var(--base-font-size) * 0.9);
    font-variation-settings: var(--font-flex-bold);
    color: var(--color-dark);
    text-decoration: underline;
    background-position: left;
    background-repeat: no-repeat;
  }

  .wallpapers__links a:hover {
    color: var(--color-link);
  }

  .wallpapers-link-desktop {
    padding-left: 42px;
    background-image: url("data:image/svg+xml,%3Csvg width='31' height='23' viewBox='0 0 31 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.9465 0H1.05346C0.47166 0 0 0.47166 0 1.05345V16.7576C0 17.3394 0.47166 17.811 1.05346 17.811H29.9465C30.5283 17.811 31 17.3394 31 16.7576V1.05345C31 0.47166 30.5283 0 29.9465 0Z' fill='black'/%3E%3Cpath d='M21.5198 21.0512H17.9434V19.6386H13.0567V21.0512H9.48024C8.97558 21.0512 8.56641 21.4603 8.56641 21.9651C8.56641 22.4697 8.97552 22.8789 9.48024 22.8789H21.5198C22.0245 22.8789 22.4336 22.4698 22.4336 21.9651C22.4336 21.4604 22.0245 21.0512 21.5198 21.0512Z' fill='black'/%3E%3C/svg%3E%0A");
    background-size: 30px 22px;
  }

</style>

<style scoped>
  h2.highlight-solid-green {
    display: inline;
    font-size: calc(var(--base-font-size)* 1.25);
    font-variation-settings: var(--font-flex-extrabold);
    padding: 0.4rem 0.8rem;
    text-align: left;
  }

  .highlight-solid-green__wrapper {
    margin-bottom: var(--space-text);
  }

  .wallpapers__links-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--space) * 0.5);
  }

  .space-monkey__content {
    position: relative;
    padding-bottom: calc(var(--space) * 3);
  }

  .space-monkey__decor {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
  }

  .wallpapers__header {
    display: flex;
    align-items: center;
    gap: var(--space);
    margin-bottom: var(--space);
  }

  .hidden-wallpapers {
    margin-bottom: calc(var(--space) * 4);
  }

  .hidden-wallpapers img {
    margin-bottom: var(--space);
  }


  .hidden-wallpapers a {
    min-height: 32px;
    padding-top: 6px;
  }

  .hidden-wallpapers .wallpapers__links {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--space) * 1.5);
  }

  .hidden-wallpaper-mac {
    padding-left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='30' viewBox='0 0 24 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.6645 0C17.733 0 17.8015 0 17.8739 0C18.042 2.07605 17.2496 3.62728 16.2865 4.75062C15.3416 5.86621 14.0476 6.94818 11.9547 6.78401C11.8151 4.73769 12.6088 3.30152 13.5706 2.18076C14.4625 1.13627 16.0978 0.20683 17.6645 0Z' fill='black'/%3E%3Cpath d='M24 21.6086C24 21.6293 24 21.6474 24 21.6668C23.4118 23.4481 22.5729 24.9748 21.5491 26.3916C20.6145 27.6778 19.4691 29.4087 17.4241 29.4087C15.657 29.4087 14.4832 28.2724 12.6722 28.2414C10.7564 28.2104 9.7029 29.1915 7.95131 29.4384C7.75094 29.4384 7.55058 29.4384 7.35409 29.4384C6.06787 29.2523 5.02984 28.2336 4.27362 27.3158C2.04374 24.6038 0.320586 21.1006 0 16.6176C0 16.1781 0 15.7398 0 15.3003C0.135732 12.0919 1.69471 9.48324 3.76689 8.21899C4.8605 7.5468 6.36389 6.97414 8.03792 7.23009C8.75536 7.34126 9.48831 7.58687 10.1308 7.82989C10.7396 8.06387 11.501 8.47882 12.2223 8.45685C12.711 8.44263 13.197 8.18797 13.6895 8.00828C15.1322 7.48733 16.5464 6.89011 18.4104 7.17062C20.6507 7.50931 22.2407 8.50468 23.2231 10.0404C21.328 11.2465 19.8298 13.064 20.0857 16.1677C20.3133 18.9871 21.9524 20.6365 24 21.6086Z' fill='black'/%3E%3C/svg%3E%0A");
    background-size: 25px 30px;
  }

  .hidden-wallpaper-windows {
    padding-top: 9px;
    padding-left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='26' height='28' viewBox='0 0 26 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.87475 3.28266L0 5.05333V13.2454L8.87469 13.096L8.87475 3.28266ZM25.3188 15.18L10.9054 14.9333V25.1213L25.3188 28V15.18ZM8.87475 14.9027L6.18961e-05 14.752V22.9427L8.87475 24.7147V14.9027ZM25.3188 0L10.9054 2.876V13.064L25.3188 12.8187V0Z' fill='%23010002'/%3E%3C/svg%3E%0A");
    background-size: 25px 28px;
  }

  @media screen and (max-width: 430px) {
    .space-monkey__decor {
      width: 30%;
      bottom: -50px;
      left: 80%;
    }

    h2.highlight-solid-green {
    padding: 0rem 0.2rem;
  }
    
  }
</style>