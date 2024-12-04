<template>
  <div class="footer-form">
    <div class="footer-form-content">
      <h3>{{ $t('Robo Newsletter') }}</h3>
      <gsp-form :gscriptID="gscript" :siteKey="siteKey">
        <input
          required 
          name="email"
          class="block"
          :class="{'sent': result === 'success'}"
          type="email" 
          :placeholder="$t('Your email')" 
          data-gsp-name="Email" 
          :data-gsp-data="data_email" 
          v-model="data_email"
          :disabled="result === 'success'"
        >

        <input       
          type="hidden" 
          placeholder="Location" 
          data-gsp-name="Location" 
          :data-gsp-data="location" 
          v-model="location"
        />

        <div class="google-sheets-form__actions">
          <rb-button @click="onSubmit" v-if="result !== 'success'" block :disabled="result === 'error' || result === 'wait'">
            <span class="contacts__form-btn-text" v-if="result !== 'wait'">{{$t('Email me')}}</span>
            <span class="isLoading contacts__form-btn-text" v-else>{{$t('Adding you to our special list...')}}</span>
            <span  v-if="result === 'wait'" class="spinner">
              <Spinner/>
            </span>
          </rb-button >
          <rb-button block disabled v-else class="button-success contacts__form-btn-text">{{$t('Nice, you are in the list')}}</rb-button>
          <div v-if="result === 'error'" class="error">{{$t('Something went  wrong. Try again later')}}</div>
        </div>

        <span class="contacts__form-agreement">
          {{ $t('By clicking on the button “Email me” you agree to receive regular emails from Robonomics.') }}
        </span>
      </gsp-form>
    </div>
  </div>
</template>

<script>
export default {
    components: {
      Spinner: () => import ('@/components/utils/spinner.vue')
    },
    

  data() {
    return {
      data_email: '',
      result: this.$response,
      interval: null,
      location: '',
      userId: '',
      userData: '',
      gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
      siteKey: process.env.GRIDSOME_RECAPTCHA,
    }
  },

  methods: {

    onSubmit() {

      if(!this.data_email) {
        return
      }

      if(this.data_email.includes('testing@example')) {
        window.stop();
        return
      }

      if(this.data_email.includes('@')) {
        this.interval = setInterval(() => {
          this.result = this.$response
          console.log(this.$response)
        }, 1000)
      }

      if (this.$response === 'success' || this.$response === 'error') {
        clearInterval(this.interval)
      }

    }

  },

  watch: {

    'result': function(old, curr) {
      if(old === 'success' || old === 'error') {
        clearInterval(this.interval)
      }
    }
  },

  async mounted() {
    this.location = 'https://robonomics.network' + this.$route.path;
  }

}
</script>

<style scoped>

   .footer-form {
    text-align: center;
    width: 100%;
   }

   .footer-form-content {
    text-align: left;
    display: inline-block;
    background: url('~@/assets/images/contacts__decor.webp') no-repeat 0 100%;
    background-size: 284px 364px;
    padding-left: calc(284px + var(--space));
    min-height: 364px;
    margin-left: -384px;
   }


   @media screen and (width < 1000px) {
    .footer-form-content {
      margin-left: 0;
    }
   }

   @media screen and (width < 480px) {
    .footer-form-content {
      background-position: -100px 0;
      padding-left: 184px;
    }
   }

   .footer-form-content h3 {
    margin-top: 0;
    margin-bottom: calc(var(--space) * 0.5);
    text-align: left;
   }

  .footer-form form {
    max-width: 294px;
    width: calc(100% - var(--space));
  }

  .google-sheets-form__actions {
    margin-bottom: 18px;
  }

  .google-sheets-form__actions button {
    display: flex;
    text-align: center;
  }

  .button-success {
    background-color: var(--rb-color-green);
  }

  .contacts__form-btn-text {
    font-family: var(--font-family);
    font-weight: 700;
  }

  .error {
    margin-top: 20px;
  }

  .spinner {
    order: -1;
    /* margin-left: 10px; */
  }

  .spinner svg{
    width: 40px;
    height: 30px;
  }

  .isLoading {
    width: 100%;
    font-size: 1rem;
  }

  .contacts__form-agreement {
    display: block;
    padding-bottom: calc(var(--space) * 2);
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 300;
    color: var(--color-dark);
  }


  @media screen and (max-width: 680px) {
    .contacts__form-wrapper {
      align-items: center;
      padding-left: 0;
    }

    .contacts__form-decor  {
      width: 280px;
      margin-right: 0;
      margin-left: -25px;
    }

    .contacts__form-agreement {
      margin-top: calc(var(--space) * 0.5);
      font-size: 11px;
    }
  }

  @media screen and (max-width: 510px) {
    
    .contacts__form-btn-text {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 395px) {
    .contacts__form-decor  {
      width: 220px;
      height: 300px;
      margin-right: 0;
    }
  }


</style>