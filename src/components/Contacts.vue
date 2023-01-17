<template>
  <section class="section section__solid contacts">
    <!-- <hr/> -->
    <div class="contacts__container">
      <!-- <h2 class="contacts__title">
        Connecting Robonomics
      </h2> -->
      <div class="contacts__wrapper" :class="{'contacts__wrapper--withForm': showForm}">
        <div class="contacts__items" :class="{'moveItems': showForm}">
          <div class="discord contacts__item" v-in-viewport.once>
              <g-link class="contacts__link" :to="this.discord[0].options[0].link">
                <svg xmlns="http://www.w3.org/2000/svg" width="138.934" height="105.665" viewBox="0 0 138.934 105.665">
                  <path id="Path_6784" data-name="Path 6784" d="M138.3,72.378c-.725-17.483-4.882-34.892-13.139-50.369-2.189-4.1-4.717-8.015-7.148-11.982a3.476,3.476,0,0,0-1.486-1.244A113.613,113.613,0,0,0,90.08.544a1.234,1.234,0,0,0-1.566.809c-.838,1.782-1.8,3.506-2.558,5.318-.392.922-.875,1.087-1.812,1.025a168.955,168.955,0,0,0-28.769-.022c-1.039.1-1.581-.062-2.017-1.109-.75-1.815-1.746-3.524-2.595-5.3A1.161,1.161,0,0,0,49.278.544,113.741,113.741,0,0,0,22.7,8.826,3.479,3.479,0,0,0,21.328,10C7.761,30.386-1.5,56.575.87,81.374c.168,1.768.271,3.554.542,5.31a2.8,2.8,0,0,0,.93,1.724A113.5,113.5,0,0,0,35.1,105.049c.867.278,1.376.2,1.877-.611,2.229-3.6,4.516-7.173,6.851-10.859-4.081-1.976-7.858-3.8-11.689-5.658,1.742-2.35,2.485-2.54,4.725-1.6,21.82,9.186,43.646,9.307,65.477.04,2.4-1.017,2.763-.937,4.776,1.449-1.918,1.01-3.759,2.046-5.658,2.957-1.874.908-3.81,1.691-5.995,2.646,1.947,3.191,3.74,6.277,5.669,9.274,1.8,2.792,1.863,2.77,4.992,1.716a112.428,112.428,0,0,0,30.859-15.986,2.823,2.823,0,0,0,.941-1.727,75.736,75.736,0,0,0,.37-14.313M55.141,68.392a11.319,11.319,0,0,1-16.158.384c-6.064-5.585-5.954-16.118.227-21.571,6.449-5.691,16.231-2.8,19.133,5.717a42.084,42.084,0,0,1,1.083,5.083,15.64,15.64,0,0,1-4.286,10.386m45.755-.007a11.355,11.355,0,0,1-16.356.223,15,15,0,0,1,.081-21.121c6.383-6.039,16.44-3.25,19.455,5.413a17.871,17.871,0,0,1,.688,2.723,19.783,19.783,0,0,1,.179,2.13A14.6,14.6,0,0,1,100.9,68.385" transform="translate(0.008 -0.006)" fill="#223695" stroke="#000" stroke-width="0" fill-rule="evenodd"/>
                </svg>
              </g-link >
              <div class="decor-line" v-in-viewport.once aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="125.099" height="38.699" viewBox="0 0 125.099 38.699">
                  <path id="Path_6785" data-name="Path 6785" d="M5597.9,4360l14.625-38.02h110.007" transform="translate(-5597.435 -4321.48)" fill="none" stroke="#000" stroke-width="1"/>
                </svg>
              </div>
              <div class="contacts__text animate-inside" v-in-viewport.once>
                <span>chat</span>
              </div>
            </div>
            <div class="twitter contacts__item">
              <g-link class="contacts__link" :to="this.twitter[0].options[0].link" >
                <svg xmlns="http://www.w3.org/2000/svg" width="117.228" height="94.912" viewBox="0 0 117.228 94.912">
                  <path id="twitter" d="M115.583,59.118A49.4,49.4,0,0,1,101.93,62.86a23.563,23.563,0,0,0,10.424-13.1A47.355,47.355,0,0,1,97.329,55.5,23.694,23.694,0,0,0,56.34,71.7a24.4,24.4,0,0,0,.549,5.4A67.071,67.071,0,0,1,8.047,52.32a23.7,23.7,0,0,0,7.282,31.67A23.4,23.4,0,0,1,4.623,81.071v.26a23.8,23.8,0,0,0,18.985,23.283,23.65,23.65,0,0,1-6.213.78,20.952,20.952,0,0,1-4.486-.4A23.921,23.921,0,0,0,35.051,121.5,47.612,47.612,0,0,1,5.671,131.6,44.383,44.383,0,0,1,0,131.278a66.709,66.709,0,0,0,36.351,10.634c43.6,0,67.443-36.12,67.443-67.429,0-1.047-.036-2.059-.087-3.063A47.272,47.272,0,0,0,115.583,59.118Z" transform="translate(0.271 -47.5)" fill="#223695" stroke="#000" stroke-width="0"/>
                </svg>
                </g-link>
                <div class="decor-line" v-in-viewport.once aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="108.651" height="38.19" viewBox="0 0 108.651 38.19">
                    <path id="Path_6786" data-name="Path 6786" d="M5781,4478.276l35.415,37.346h72.874" transform="translate(-5780.637 -4477.932)" fill="none" stroke="#000" stroke-width="1"/>
                  </svg>
                </div>
                <div class="contacts__text animate-inside" v-in-viewport.once>
                  <span>news</span>
                </div>
            </div>
            <div class="youtube contacts__item">
              <g-link class="contacts__link" :to="this.youtube[0].options[0].link">
                <svg xmlns="http://www.w3.org/2000/svg" width="142.955" height="101.199" viewBox="0 0 142.955 101.199">
                  <path id="youtube" d="M3.154,88.242a17.957,17.957,0,0,0,12.318,12.483c14.547,3.962,96.083,3.974,110.848,0,10.112-2.925,11.97-11.893,12.318-12.483,3.85-20.484,4.1-47.19-.177-70.434l.177,1.156A17.957,17.957,0,0,0,126.32,6.482c-14.352-3.9-96.1-4.045-110.848,0C5.359,9.412,3.5,18.375,3.154,18.964a190.867,190.867,0,0,0,0,69.278ZM56.729,75.134v-43L93.677,53.665Z" transform="translate(0.63 -3.003)" fill="#223695" stroke="#000" stroke-width="0"/>
                </svg>
              </g-link>
              <div class="decor-line" v-in-viewport.once aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="1" height="30.888" viewBox="0 0 1 30.888">
                  <path id="Path_6787" data-name="Path 6787" d="M6011.019,4318.5v30.888" transform="translate(-6010.519 -4318.5)" fill="none" stroke="#000" stroke-width="1"/>
                </svg>
              </div>
              <div class="animate-inside contacts__text" v-in-viewport.once>
                <span >videos</span>
              </div>
            </div>
            <div class="email contacts__item" :class="{active: showForm}">
              <button class="contacts__link" @click="showForm = !showForm">
                <svg xmlns="http://www.w3.org/2000/svg" width="137.213" height="103.16" viewBox="0 0 137.213 103.16">
                  <path id="envelope-solid" d="M123.443,64a12.77,12.77,0,0,1,7.662,22.986L73.215,130.4A8.54,8.54,0,0,1,63,130.4L5.108,86.986A12.77,12.77,0,0,1,12.77,64ZM57.891,137.215a17,17,0,0,0,20.432,0L136.213,93.8v55.337a17.042,17.042,0,0,1-17.027,17.027H17.027A17.034,17.034,0,0,1,0,149.133V93.8Z" transform="translate(0.5 -63.5)" fill="#223695" stroke="#000" stroke-width="0"/>
                </svg>
              </button>
              <div class="decor-line" v-in-viewport.once aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="168.208" height="36.791" viewBox="0 0 168.208 36.791">
                  <path id="Path_6788" data-name="Path 6788" d="M6252.691,4425.08h37.423l9.2-35.791H6420.9" transform="translate(-6252.691 -4388.79)" fill="none" stroke="#000" stroke-width="1"/>
                </svg>
              </div>
              <div class="contacts__text animate-inside" v-in-viewport.once>
                <span>email notifications</span>
              </div>
            </div>
        </div>
        <div class="form" :class="{'showForm': showForm}">
          <ContactsForm />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import contacts from '@/data/contact.yaml'
export default {
  components: { 
    ContactsForm: () => import("./utils/contactsForm.vue"),
  },

  data() {
    return {
      showForm: false,
    }
  },

  computed: {
    discord() {
        return contacts.filter(item => item.title.toLowerCase() === "discord");
    },
    twitter() {
        return contacts.filter(item => item.title.toLowerCase() === "twitter");
    },
    youtube() {
        return contacts.filter(item => item.title.toLowerCase() === "youtube");
    }
  }

}
</script>

<style scoped>
  .contacts {
    padding-top: 0 !important;
    background: var(--body-bg);
    border-top: 1px solid var(--color-darkness);
    border-bottom: 1px solid rgba(30, 30, 30, 0.2);
  }
  hr {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .contacts__container {
    padding: calc(var(--space) * 2);
  }

  .contacts__title {
    text-shadow: 1.8px 2px 0 var(--color-link-contacts);
    font-family: var(--font-family-code);
    text-align: left;
  }

  .contacts__wrapper {
    padding-top: 4rem;
    padding-bottom: 4rem;
    /* padding-left: 7rem; */
    padding-left: 11rem;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .contacts__items,
  .contacts__items-wrapper {
    display: flex;
    align-items: center;
    transform: translateX(0);
    transition: transform 1s ease-in-out;
  }

  .contacts__item {
    position: relative;
    margin-right: 4rem;
  }


   .contacts__item svg path {
    transition: fill 0.33s ease-in-out;
   }

  .contacts__item:hover .contacts__link svg path,
  .email.active.contacts__item .contacts__link svg path  {
    fill: var(--color-purple-light);
  }

  .contacts__item:hover .decor-line svg path,
  .email.active .decor-line svg path {
    stroke: var(--color-purple-light);
  }

  .contacts__item:hover .contacts__text,
  .email.active .contacts__text {
    color: var(--color-purple-light);
  }

  .contacts__link {
    display: inline-block;
  }

  .email .contacts__link {
    background-color: transparent;
    border: 1px solid transparent;
  }

  .email .contacts__link:hover {
    background-color: transparent;
    border: 1px solid transparent;
  }

  .contacts__text {
    font-weight: 300;
    font-family: var(--font-family-code);
    color: var(--color-text);
    transition: color 0.33s ease-in-out;
  }

  .contacts__text span {
    animation-duration: 2s;
  }

  .decor-line.in-viewport {
    fill: transparent;
    stroke-miterlimit:10;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: 4s DrawSvgPath ease-in-out forwards; 
  }

  .discord .contacts__text {
    position: absolute;
    top: -52px;
    right: calc(100% - 266px);
  }

  .discord .decor-line {
    position: absolute;
    top: -38px;
    left: calc(10% + 60px);
  }

  .twitter .contacts__text {
    position: absolute;
    bottom: -44px;
    right: calc(100% - 230px);
  }

  .twitter .decor-line {
    position: absolute;
    bottom: -39px;
    left: calc(10% + 39px);
  }

  .youtube .contacts__text {
    position: absolute;
    top: -77px;
    right: calc(100% - 106px);
  }

  .youtube .decor-line {
    position: absolute;
    top: -36px;
    left: calc(10% + 55px);
  }


  .email .contacts__text {
    position: absolute;
    top: -59px;
    right: calc(100% - 501px);
  }

  .email .decor-line {
    position: absolute;
    top: -42px;
    left: calc(10% + 65px);
  }


  .moveItems {
    transform: translateX(-100px)
  }

  .form {
    width: 100%;
    margin-top: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(200px);
    transform-origin: 100% 50%;
    transition: transform 1s ease-in-out, opacity 1s ease-in-out, visibility 1s ease-in-out;
  }

  .form.showForm {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50px);
  }

  .decor-line svg path{
    transition: stroke 0.33s ease-in-out;
  }

  .dark-theme .contacts {
    border-color: var(--color-lightness);
    border-bottom-color: rgba(255, 255, 255, 0.2);
  }

  .dark-theme .decor-line svg path {
    stroke: #fff;
  }


  @media screen and (max-width: 1560px) {
    .contacts__link svg {
      width: 100px;
    }
    .contacts__wrapper {
      position: relative;
      padding-left: 2rem;
      min-height: 485px;
      /* align-items: flex-end; */
    }

    /* .contacts__items-wrapper {
      margin-bottom: 8rem;
    } */

    .contacts__items {
      /* flex-direction: column; */
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .moveItems {
      transform: translateX(-10px)
    }

    .youtube .decor-line {
      top: -24px;
      left: calc(10% + 47px);
    }

    .youtube .contacts__text {
      top: -60px;
      right: calc(100% - 91px)
    }

    .form {
      position: absolute;
      width: 70%;
      right: 0;
      bottom: 0;
    }
  }

  @media screen and (max-width: 1216px) {
    .email .contacts__text {
      top: -60px;
      right: calc(100% - 281px);
      font-size: 1rem;
    }

    .email .decor-line {
      top: -33px;
    }
  }

  @media screen and (max-width: 955px) {

    .contacts__wrapper {
      flex-direction: column;
      align-items: center;
      justify-content: unset;
      min-height: 200px;
      transition: min-height 1s ease 1s;
      padding-bottom: 0;
    }

    .contacts__wrapper--withForm {
      min-height: 380px;
      transition: min-height 1s ease;
    }

    .contacts__items {
      align-items: center;
    }

    .email {
      padding: 0;
    }

    .decor-line,
    .contacts__text {
      display: none;
    }

    .contacts__items-wrapper {
      margin-bottom: 0;
    }

    .contacts__item {
      margin-right: 2rem;
    }

    .email {
      margin-right: 0;
    }
    
    .form {
      margin-top: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      transform: translateX(0) translateY(-50%);
    }

    .form.showForm {
      transform: translateX(0px) translateY(0px);
      transition-delay: 0.5s;
    }
  }

  @media screen and (max-width: 790px) {

    .contacts__items {
      padding-left: 10px;
    }

    .contacts__link svg {
      /* width: 60px; */
      width: 100%;
    }
  }

  @media screen and (max-width: 530px) {
    .contacts__container {
      padding:var(--space);
      padding-bottom: 0;
    }

    .contacts__link {
      width: 80%;
    }
    
    .contacts__wrapper {
      min-height: 100px;
      padding-top: 0;
      padding-left: 0;
    }

    .contacts__wrapper--withForm {
      min-height: 300px;
    }

    .contacts__items {
      align-items: center;
      margin-bottom: 0;
    }

    .contacts__items-wrapper {
      margin-bottom: 0;
    }

    .contacts__item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0;
      margin-bottom: 0;
    }

    .email .contacts__link {
      padding: 0.3rem;
    }
  }

  @media screen and (max-width: 425px) {
    .contacts__wrapper {
      align-items: flex-start;
    }
  }


</style>