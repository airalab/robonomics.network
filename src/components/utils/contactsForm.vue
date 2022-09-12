<template>
  <gsp-form class="contacts__form" :gscriptID="gscript" :captchaID="recaptchaSitekey">
    <input
      required 
      name="email" 
      class="contacts__input" 
      :class="{'sent': result === 'success'}"
      type="email" 
      placeholder="Your email" 
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
      <button @click="onSubmit" v-if="result !== 'success'" class="button large"  :disabled="result === 'error'">
        <span v-if="result !== 'wait'">Want emails from robonomics</span>
        <span class="isLoading" v-else>Adding you to our special list...</span>
        <span class="spinner">
          <Spinner v-if="result === 'wait'"/>
        </span>
      </button>
      <button disabled v-else class="button button-success">Nice, you are in the list</button>
      <div v-if="result === 'error'" class="error">Something went  wrong :( Try again later</div>
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
    recaptchaSitekey: process.env.GRIDSOME_RECAPTCHA,
    gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
    // recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost
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
  },

  mounted() {
    this.location = 'https://robonomics.network' + this.$route.path;
  }

}
</script>

<style scoped>
  form {
    position: relative;
    font-family: var(--font-family-code);
  }

  .google-sheets-form__actions {
    padding-right: 7px;
    padding-bottom: 6px;
  }



  .button {
    width: 100%;
    padding: 1.5rem 0.8rem;
    display: flex;
    align-items: center;
    box-shadow: 6px 6px 0 #000;
    color: #000;
    background-color: var(--color-link-contacts) ;
    transition: background-color 0.33s ease-in-out;
  }

  .button:hover {
    background-color: var(--color-blue-mid);
  }

  .button-success {
    background-color: var(--color-green) !important;
  }

  .button:disabled {
    opacity: 1;
    filter: none;
  }

  .contacts__input {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 2rem;
    font-weight: 300;
    border: 1px solid var(--color-light);
    font-family: var(--font-family-code);
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