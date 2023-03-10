<template>
  <layout>

    <MetaInfo
      pageTitle = "Nav Contact"
    />

    <div class="title-with-bg">
      <h1><span>Community & Contacts</span></h1>
    </div>

    <section class="layout grid-2">

      <div class="contact__form">
        <div class="contact__form-img">
          <h3 class="show-mobile">Get latest updates</h3>
          <g-image class="hide-dark"  src="~/assets/images/contacts-boy.png" alt="boy"/>
          <g-image class="show-dark" src="~/assets/images/contacts-boy-dark.png" alt="boy"/>
          <div class="contact__form-img--lines">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
            <span class="line-5"></span>
            <span class="line-6"></span>
            <span class="line-7"></span>
          </div>
        </div>
        <gsp-form class="contacts__form oldy" :gscriptID="gscript" :captchaID="recaptchaSitekey">
            <h3>Get latest updates</h3>
            <label class="contacts__label">
              <input
                required 
                name="email" 
                class="contacts__input" 
                :class="{'sent': result === 'success'}"
                type="email" 
                data-gsp-name="Email" 
                :data-gsp-data="data_email" 
                v-model="data_email"
                :disabled="result === 'success'"
              >
              <span>Your email</span>
            </label>

            <label class="contacts__label">
              <textarea
                name="comment" 
                class="contacts__textarea" 
                :class="{'sent': result === 'success'}"
                data-gsp-name="Comment" 
                :data-gsp-data="data_comment" 
                v-model="data_comment"
                :disabled="result === 'success'"
              />
              <span>Tell us something if you want</span>
            </label>

  
            <div class="google-sheets-form__actions">
              <button @click="onSubmit" v-if="result !== 'success'" class="button large"  :disabled="result === 'error' || result === 'wait'">
                <span v-if="result !== 'wait'">Submit</span>
                <span class="isLoading" v-else>Adding you to our special list...</span>
                <span class="spinner">
                  <Spinner v-if="result === 'wait'"/>
                </span>
              </button>
              <button disabled v-else class="button button-success">Nice, you are in the list</button>
              <div v-if="result === 'error'" class="error">Something went  wrong :( Try again later</div>
            </div>
          </gsp-form>
      </div>
      
      <div class="contact__wrapper">
        <share :assets="contact" :allTelegrams="allTelegrams"/>
      </div>

    </section>

  </layout>
</template>


<script>

  import contact from '@/data/contact.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      Spinner: () => import ('@/components/utils/spinner.vue'),
      share: () => import('~/components/Share.vue'),
    },

    data() {
      return {
        data_email: '',
        data_comment: '',
        result: this.$response,
        interval: null,
        recaptchaSitekey: process.env.GRIDSOME_RECAPTCHA,
        gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
      }
    },

    computed: {
      contact () {
        return contact
      },

      allTelegrams() {
        return this.contact.filter(asset => asset.title === 'Telegram chat')
      }
    },

    methods: {

      onSubmit() {


        this.interval = setInterval(() => {
          this.result = this.$response
          console.log(this.$response)
        }, 1000)

        if (this.$response === 'success' || this.$response === 'error') {
          clearInterval(this.interval)
        }

      },

    },

    watch: {

      'result': function(old, curr) {
        if(old === 'success' || old === 'error') {
          clearInterval(this.interval)
        }
      }
    }
  }
</script>

<style scoped>

  .layout {
    /* max-width: 1040px;
    grid-template-columns: 2fr 1fr; */

    max-width: 1240px;
    grid-template-columns: 2fr 1fr;
    gap: calc(var(--space) * 2.5);
  }

  .show-mobile {
    display: none;
  }

  .show-dark {
    display: none;
  }

  .contact__form {
    position: relative;
    min-height: 560px;
    height: 100%;
  }

  .contact__form-img {
    position: absolute;
    max-width: 290.61px;
    max-height: 325.93px;
    bottom: -40px;
    left: 63px;
  }

  .contact__form-img--lines {
    position: absolute;
    bottom: 102px;
    right: 4px;
    transform: rotate(180deg) scaleX(-1);
  }

  .contact__form-img--lines span {
    display: block;
    margin-top: 5px;
    height: 1px;
    background-color: #000;
    border-radius: 4px;
    opacity: 0;
    animation: FadeOut 2s infinite linear;
  }

  .dark-theme .contact__form-img--lines span {
    background-color: #5F7AF6;
  }

  .contact__form-img--lines .line-1 {
    width: 5px;
  }

.contact__form-img--lines .line-2 {
    width: 10px;
    animation-delay: 0.2s;
  }

  .contact__form-img--lines .line-3 {
    width: 18px;
    animation-delay: 0.4s;
  }

  .contact__form-img--lines .line-4 {
    width: 25px;
    animation-delay: 0.8s;
  }

  .contact__form-img--lines .line-5 {
    width: 34px;
    animation-delay: 1.2s;
  }

  .contact__form-img--lines .line-6 {
    width: 40px;
    animation-delay: 1.6s;
  }

  .line-7 {
    width: 48px;
    animation-delay: 3.6s;
  }
  

  .contacts__form {
    position: absolute;
    top: 0;
    right: var(--space);
    max-width: 406px;
    width: 100%;
    background-color: #fff;
    
  }

  .contacts__form h3 {
    text-align: left;
    color: #000;
  }

  .contacts__input,
  .contacts__textarea {
    padding: calc(var(--space) * 0.6);
    margin-bottom: var(--space);
    font-size: var(--base-font-size);
    font-family: inherit;
    font-weight: 500;
    color: #214FDA;
    background-color: #fff;
    border: 1px solid #000;
    width: 100%;
  }

  .dark-theme .contacts__input {
    border: 1px solid #000;
  }

  .contacts__textarea {
    resize: none;
  }

  .contacts__label {
    position: relative;
    display: block;
    height: 100%;
  }

  .contacts__label span {
    position: absolute;
    padding: 0;
    top: 5px;
    left:  calc(var(--space) * 0.5);
    font-size: calc(var(--base-font-size) * 0.6);
    font-family: var(--font-family-code);
    font-weight: 500;
    color: #000;
    transition: color 0.33s ease-in-out, opacity 0.33s ease-in-out, visibility 0.33s ease-in-out;
  }

  .contacts__label .contacts__input:focus + span,
  .contacts__label .contacts__textarea:focus + span   {
    color: #214FDA;
  } 

  .contacts__label .contacts__textarea:focus + span  {
    opacity: 0;
    visibility: hidden;
  } 

  .contacts__textarea:focus,
  .contacts__input:focus {
    border: 1px solid var(--color-blue);
  }
  
  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #214FDA;
  }

  .button:hover {
    background-color: var(--color-green);
  }

  .spinner {
    order: -1;
    margin-left: 10px;
  }

  .spinner svg{
    width: 40px;
    height: 30px;
  }

  .isLoading {
    font-size: 1.2rem;
  }

  .dark-theme .show-dark {
    display: block;
  }

  .dark-theme .hide-dark {
    display: none;
  }

  @media screen and (max-width: 1660px) {
    .contact__form-img {
      bottom: -7px;
    }
  }


  @media screen and (max-width: 1250px) {
    .layout {
      gap: var(--space);
    }

    .contact__form-img {
      left: 5px;
    }
  }




  @media screen and (max-width: 1050px) {

    .layout {
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
    }



    .contact__form {
      width: 100%;
    }

    .contacts__form {
      max-width: unset;
      width: calc(100% - 220px);
      right: 0;
    }

    .contact__form-img {
      bottom: -7px;
      left: 0;
    }
  }

  @media screen and (max-width: 1002px) {
    .contact__form-img {
      bottom: 40px;
      left: -30px;
    }
  }

  @media screen and (max-width: 650px) {

    .show-mobile {
      display: block;
      position: absolute;
      right: calc(100% - 322px);
      top: 40px;
    }

    .contact__form {
      min-height: unset;
    }

    .contacts__form {
      position: static;
      border: none;
      box-shadow: none;
      background-color: transparent;
      width: 100%;
      padding: 18px;
    }

    .contacts__form h3 {
      display: none;
    }

    .contact__form-img {
      position: static;
      width: 109.67px;
      height: 123px;
    }

    .contact__form-img--lines {
      top: 54px;
      left: 77px;
      bottom: unset;
      right: unset;
      transform: rotate(180deg) scaleX(-1) scale(0.5);
    }
  }

  @media screen and (max-width: 395px) {
    .show-mobile {
      left: 65px;
      right: unset;
    }
  }

</style>
