<template>
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
        <span v-if="result !== 'wait'">{{$t('Want emails from robonomics')}}</span>
        <span class="isLoading" v-else>{{$t('Adding you to our special list...')}}</span>
        <span class="spinner">
          <Spinner v-if="result === 'wait'"/>
        </span>
      </rb-button >
      <rb-button block disabled v-else class="button-success">{{$t('Nice, you are in the list')}}</rb-button>
      <div v-if="result === 'error'" class="error">{{$t('Something went  wrong. Try again later')}}</div>
    </div>
  </gsp-form>
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
  form {
    position: relative;
  }

  /* .google-sheets-form__actions {
    padding-right: 7px;
    padding-bottom: 6px;
  } */


  .button-success {
    background-color: var(--rb-color-green);
  }

  .contacts__input {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 5px;
    font-weight: 300;
    border: 1px solid var(--color-dark);
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .contacts__input.sent {
    background-color: var(--color-green) !important;
  }

  .error {
    margin-top: 20px;
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


</style>