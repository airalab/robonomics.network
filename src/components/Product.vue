<template>

  <article class="product" ref="product">
    <div class="product__header">
      <span class="product__number">{{ id + 1 }}</span>
      
      <div class="product__header-text">
        <h3>
            <template v-if="!titleLink">{{ title }}</template>
            <g-link v-else :aria-label="'go to '+ title + ' page'" :to="titleLink">{{ title }}</g-link>
        </h3>
<!-- 
        <div>
            <span class="highlight-solid-green" :class="{'blue': status === 'coming'}">
                <template v-if="status === 'ready'">{{ $t('Early access for community members') }}</template>
                <template v-if="status === 'coming'">{{ $t('Coming soon') }}</template>
            </span>
        </div> -->

        <!-- <div class="linereduce">
          <g-link v-if="status === 'ready'" class="highlight" to="/blog/robo-season-pass-2025-welcome-to-the-paper-st-club/">{{$t('How to get membership pass') }}</g-link>
        </div> -->

        <div class="product__notify-btn">
          <rb-button buttoncolor="accent-green" @click="openModal = true">{{ $t('Notify me when available') }}</rb-button>
        </div>
      </div>

      <modal @closeModal="openModal = false" v-if="openModal" :deviceName="title" :id="id"/>

    </div>
    
    <div dir="ltr" class="product__model" :class="{'product__model--altruist': defaultTitle === 'Altruist outdoor sensor'}">
      <slot/>
    </div>

    <div class="product__text">
      <p v-html="text"></p>
      <h5>{{$t('Use case:')}}</h5>
      <p class="product__use-text">{{ cases }}</p>
    </div>
    <div class="product__adds" v-if="casesImages && casesImages.length">
      <g-image v-for="image in casesImages"  :key="image" :src="require('!!assets-loader!~/assets/images/hardware-2025/'+ image)" quality="75"/>
    </div>
  </article>

</template>

<script>
export default {


  components: {
    Modal: () => import ('@/components/devices/DeviceNotify.vue')
  },

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
        id: this.product.id,
        title: this.product.title,
        text: this.product.text,
        cases: this.product.cases,
        casesImages: this.product.casesImages,
        titleLink: this.product.titleLink,
        status: this.product.status,
        defaultTitle: this.product.defaultTitle,
        openModal: false
    }
  }

}
</script>

<style>

.product__notify-btn button {
  margin-top: calc(var(--space) * 0.5);
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 40px !important;
  font-variation-settings: unset;
  font-weight: 700;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.1902 5.19675L23.6762 0.1087C23.5666 0.0401984 23.4366 0 23.2967 0H7.0838C6.94388 0 6.81385 0.0401984 6.70435 0.1087L15.1902 5.19675Z' fill='black'/%3E%3Cpath d='M16.6481 5.92871L15.5594 6.58151C15.4463 6.64932 15.3183 6.68323 15.1903 6.68323C15.0624 6.68323 14.9344 6.64932 14.8212 6.58151L13.7325 5.92871L6.87292 11.9681C6.93953 11.9885 7.01036 11.9995 7.08386 11.9995H23.2967C23.3702 11.9995 23.4411 11.9885 23.5077 11.9681L16.6481 5.92871Z' fill='black'/%3E%3Cpath d='M24 10.5567V1.52051L17.8945 5.18128L24 10.5567Z' fill='black'/%3E%3Cpath d='M6.38086 1.52051V10.5567L12.4863 5.18128L6.38086 1.52051Z' fill='black'/%3E%3Cpath d='M4.27142 9.41808H2.10937C1.72106 9.41808 1.40625 9.11199 1.40625 8.73443C1.40625 8.35687 1.72106 8.05078 2.10937 8.05078H4.27142C4.65973 8.05078 4.97455 8.35687 4.97455 8.73443C4.97455 9.11199 4.65973 9.41808 4.27142 9.41808Z' fill='black'/%3E%3Cpath d='M4.27142 6.68371H0.703122C0.314811 6.68371 0 6.37761 0 6.00006C0 5.6225 0.314811 5.31641 0.703122 5.31641H4.27142C4.65973 5.31641 4.97454 5.6225 4.97454 6.00006C4.97454 6.37761 4.65973 6.68371 4.27142 6.68371Z' fill='black'/%3E%3Cpath d='M4.27142 3.94836H2.10937C1.72106 3.94836 1.40625 3.64226 1.40625 3.26471C1.40625 2.88715 1.72106 2.58105 2.10937 2.58105H4.27142C4.65973 2.58105 4.97455 2.88715 4.97455 3.26471C4.97455 3.64226 4.65973 3.94836 4.27142 3.94836Z' fill='black'/%3E%3C/svg%3E%0A");
  background-size: 24px 12px;
  background-position: 8px;
  background-repeat: no-repeat;
  text-transform: none;
  letter-spacing: 0;
}

.product__notify-btn button:hover {
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.1902 5.19675L23.6762 0.1087C23.5666 0.0401984 23.4366 0 23.2967 0H7.0838C6.94388 0 6.81385 0.0401984 6.70435 0.1087L15.1902 5.19675Z' fill='white'/%3E%3Cpath d='M16.6481 5.92871L15.5594 6.58151C15.4463 6.64932 15.3183 6.68323 15.1903 6.68323C15.0624 6.68323 14.9344 6.64932 14.8212 6.58151L13.7325 5.92871L6.87292 11.9681C6.93953 11.9885 7.01036 11.9995 7.08386 11.9995H23.2967C23.3702 11.9995 23.4411 11.9885 23.5077 11.9681L16.6481 5.92871Z' fill='white'/%3E%3Cpath d='M24 10.5567V1.52051L17.8945 5.18128L24 10.5567Z' fill='white'/%3E%3Cpath d='M6.38086 1.52051V10.5567L12.4863 5.18128L6.38086 1.52051Z' fill='white'/%3E%3Cpath d='M4.27142 9.41808H2.10937C1.72106 9.41808 1.40625 9.11199 1.40625 8.73443C1.40625 8.35687 1.72106 8.05078 2.10937 8.05078H4.27142C4.65973 8.05078 4.97455 8.35687 4.97455 8.73443C4.97455 9.11199 4.65973 9.41808 4.27142 9.41808Z' fill='white'/%3E%3Cpath d='M4.27142 6.68371H0.703122C0.314811 6.68371 0 6.37761 0 6.00006C0 5.6225 0.314811 5.31641 0.703122 5.31641H4.27142C4.65973 5.31641 4.97454 5.6225 4.97454 6.00006C4.97454 6.37761 4.65973 6.68371 4.27142 6.68371Z' fill='white'/%3E%3Cpath d='M4.27142 3.94836H2.10937C1.72106 3.94836 1.40625 3.64226 1.40625 3.26471C1.40625 2.88715 1.72106 2.58105 2.10937 2.58105H4.27142C4.65973 2.58105 4.97455 2.88715 4.97455 3.26471C4.97455 3.64226 4.65973 3.94836 4.27142 3.94836Z' fill='white'/%3E%3C/svg%3E%0A");
}


.product__notify-btn button.success {
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_775_11179)'%3E%3Cpath d='M12.6601 10.5472C12.6601 10.222 12.5549 9.92242 12.379 9.68345C12.725 9.42793 12.9519 9.00486 12.9519 8.52677C12.9519 7.74828 12.3509 7.11492 11.6121 7.11492H8.49365L8.93056 5.52459V4.77724C8.93056 3.40633 7.87214 2.29102 6.57116 2.29102C6.26417 2.29102 6.0144 2.55421 6.0144 2.87771V4.54738C5.78584 4.93875 4.35611 6.61754 2.89844 8.25728V15.0129L4.40426 15.608C5.06226 15.868 5.75222 15.9998 6.45494 15.9998H8.37163H10.134H10.7365C11.4753 15.9998 12.0763 15.3665 12.0763 14.588C12.0763 14.263 11.9715 13.9633 11.7957 13.7244C12.1416 13.4688 12.3682 13.0456 12.3682 12.5676C12.3682 12.2424 12.263 11.9428 12.0871 11.7039C12.4332 11.4483 12.6601 11.0253 12.6601 10.5472Z' fill='black'/%3E%3Cpath d='M2.13635 8.71191H0.0576172V14.8538H2.13635V8.71191Z' fill='black'/%3E%3C/g%3E%3Cpath d='M17.5912 0.750286L17.2887 0.4315C17.1641 0.300177 16.9606 0.300177 16.8349 0.4315L13.6627 3.77539L12.0009 2.02431C11.8763 1.89298 11.6728 1.89298 11.5471 2.02431L11.2446 2.3431C11.12 2.47444 11.12 2.68883 11.2446 2.82128L13.4347 5.12911C13.4976 5.19534 13.5785 5.22902 13.6605 5.22902C13.7426 5.22902 13.8246 5.19534 13.8864 5.12911L17.588 1.22848C17.7159 1.09491 17.7159 0.881639 17.5912 0.750286Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.8144 0.514769C18.0637 0.777457 18.0611 1.20169 17.8109 1.46388L17.8103 1.46452L14.1103 5.36335C13.9873 5.49458 13.8237 5.56154 13.6604 5.56154C13.495 5.56154 13.3336 5.49309 13.2113 5.36417L11.0212 3.05634L11.0202 3.05532C10.7741 2.7937 10.7727 2.3694 11.0212 2.10757L11.3246 1.78778C11.5729 1.52837 11.9756 1.52692 12.2241 1.78877L13.6625 3.30451L16.6125 0.194936C16.8607 -0.0644254 17.2634 -0.0658677 17.5119 0.195944L17.8144 0.514769ZM13.6625 3.77515L12.0008 2.02407C11.8762 1.89273 11.6727 1.89273 11.547 2.02407L11.2445 2.34286C11.1198 2.47419 11.1198 2.68858 11.2445 2.82104L13.4346 5.12887C13.4974 5.1951 13.5784 5.22877 13.6604 5.22877C13.7424 5.22877 13.8245 5.1951 13.8863 5.12887L17.5879 1.22824C17.7157 1.09467 17.7157 0.881395 17.5911 0.750042L17.2886 0.431256C17.1639 0.299933 16.9605 0.299933 16.8348 0.431256L13.6625 3.77515Z' fill='black'/%3E%3Cdefs%3E%3CclipPath id='clip0_775_11179'%3E%3Crect width='13.0095' height='13.7088' fill='white' transform='translate(0 2.29102)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-size: 22px;
  color: var(--color-dark) !important;
  filter: unset !important;
  background-color: var(--rb-color-green-accent) !important;
}

</style>

<style scoped>

div[class^='product__']:not(.product__model) {
  position: relative;
  z-index: 100;
}

.product {
  /* overflow: hidden; */
}

.product:not(:last-child) {
  margin-bottom: calc(var(--space) * 4)
}

.product__header {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--space);
}

.product__header h3 {
    text-align: left;
    margin: 0;
}

.product__number {
  display: inline-block;
  margin-right: var(--space);
  font-size: 125px;
  line-height: 0.8;
  font-weight: 900;
}

[dir="rtl"] .product__number {
  margin-right: 0;
  margin-left: var(--space);
}

.highlight-solid-green {
    text-transform: uppercase;
}

.highlight-solid-green.blue {
  background-color: hsl(229,100%, 88%);
}

a.highlight, .highlight-solid-green {
    font-size: 80%;
}

.product__model {
  position: relative;
  max-width: 680px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
}

.product__model.product__model--altruist {
  max-width: unset;
}

.product__model .with-models {
  min-height: 480px;
  height: 100%;
}

.with-models-2 .product__model {
  overflow: unset;
}

.product__text {
  max-width: 680px;
  margin: 0 auto;
}

.product__adds {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: var(--space);
  margin-top: var(--space);
}


@media screen and (max-width: 760px) {

  .product__adds {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}

@media screen and (max-width: 520px) {

  .with-models .product__model {
    min-height: 480px;
    align-items: flex-start;
  }

}

</style>