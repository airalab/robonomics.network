<template>
  <div class="contacts__form-wrapper">
    <g-image class="contacts__form-decor" alt="" src="~/assets/images/contacts__decor.png" aria-hidden="true"/>
    <gsp-form class="contacts__form" :gscriptID="gscript" :siteKey="siteKey">
      <input
        required 
        name="email" 
        class="contacts__input" 
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
        By clicking on the button “Email me” you agree to receive regular emails from Robonomics. 
      </span>
    </gsp-form>
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

  .contacts__form-wrapper {
    position: relative;
    display: flex;
    align-items: flex-end;
    /* padding-right: var(--space); */
    padding: 0 var(--space);
  }

  .contacts__form-decor {
    /* position: absolute; */
    width: 284px;
    height: 364px;
    margin-right: 50px;
    /* top: 0;
    left: 0; */
  }

  .contacts__form {
    max-width: 294px;
    width: 100%;
  }

  .google-sheets-form__actions button {
    display: flex;
    text-align: center;
  }

  .button-success {
    background-color: var(--rb-color-green);
  }

  .contacts__input {
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 5px;
    font-family: var(--font-family);
    font-weight: 700;
    border: 1px solid var(--color-dark);
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .contacts__input::placeholder {
    color: var(--color-dark);
  }

  .contacts__input.sent {
    background-color: var(--rb-color-green-accent) !important;
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
    margin-top: var(--space);
    padding-block: var(--space);
    font-family: var(--font-family);
    font-weight: 400;
    color: #757171;
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

    .contacts__input {
      font-size: 12px;
    }

    .contacts__input::placeholder {
      font-size: 12px;
    }

    .contacts__form-agreement {
      margin-top: calc(var(--space) * 0.5);
      font-size: 11px;
    }
  }

  @media screen and (max-width: 395px) {
    .contacts__form-decor  {
      width: 220px;
      height: 300px;
      margin-right: 0;
    }

    .contacts__form-btn-text {
      font-size: 16px;
    }
  }


</style>