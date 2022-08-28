<template>
  <form class="contacts__form" @submit.prevent="onSubmit">
    <input
      required 
      name="email" 
      class="contacts__input" 
      :class="{'sent': isSent}"
      type="email" 
      placeholder="Your email" 
      data-gsp-name="Email" 
      :data-gsp-data="data_email" 
      v-model="data_email"
      :disabled="isSent"
    >

    <vue-recaptcha
      ref="invisibleRecaptcha"
      @verify="onVerify"
      size="invisible"
      :sitekey="recaptchaSitekey">
    </vue-recaptcha>

    <div class="google-sheets-form__actions">
      <button v-if="!isSent" class="button large"  :disabled="error">
        <span v-if="!isLoading">Want emails from robonomics</span>
        <span class="isLoading" v-else>Adding you to our special list...</span>
        <span class="spinner">
          <Spinner v-if="isLoading"/>
        </span>
      </button>
      <button disabled v-else class="button button-success">Nice, you are in the list</button>
      <div v-if="error" class="error">{{errorMessage}}</div>
    </div>
  </form>
</template>

<script>
export default {
    components: {
      VueRecaptcha: () => import("vue-recaptcha"),
      Spinner: () => import ('@/components/utils/spinner.vue')
    },

  metaInfo: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        body: true
      }
    ]
  },

  data() {
    return {
    data_email: '',
    isSent: false,
    isLoading: false,
    error: false,
    errorMessage: '',
    // recaptchaSitekey: process.env.GRIDSOME_RECAPTCHA
    gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
    recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost
    }
  },

  methods: {

    onSubmit: async function () {
      if (this.data_email === '') {
        this.error = true;
        this.errorMessage = 'Please, type in your email';
        return
      }
      this.$refs.invisibleRecaptcha.execute();
    },

    onVerify: async function() {
      let response = '' ;
      const data = document.querySelectorAll('[data-gsp-data]');

      this.isSent = false;
      this.isLoading = false;
      this.error = false;

      data.forEach(function(item) {
        if (response != '') {
          response += '&'
        }
        response += encodeURIComponent(item.dataset.gspName) + '=' + encodeURIComponent(item.dataset.gspData)
      });

      const fullResponse ='Location=' + encodeURIComponent('https://robonomics.network' + this.$route.path) + '&' + response;
      
      try {
        await this.$gspPostForm(this.gscript, fullResponse);

        this.isLoading = false;
        this.isSent = true;
        this.error = false;

      } catch(e) {
        this.isSent = false;
        this.isLoading = false;
        this.error = true;
        this.errorMessage = e.message
        console.log(e.message);
      }
    }
  },

  watch: {
    'data_email': function(curr, old) {
      if (curr !== '') {
        this.error = false;
      }
    }
  }

}
</script>

<style scoped>
  form {
    position: relative;
    font-family: var(--font-family-code);
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
    background-color: var(--color-green);
  }

  .button::disabled {
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
    background-color: var(--color-green);
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