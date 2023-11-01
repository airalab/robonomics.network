<template>
    <div class="form" :class="'status-'+status">
        <form @submit.prevent="onSubmit" >
            <label class="label">
                <span>{{$t('Your email')}}:</span>
                <input type="email" v-model="email" name="email" required/>
            </label>

            <label><input type="checkbox" name="agreement" required/> {{$t('I agree to receive emails')}}</label>
            <div>
                <rbnet-button>{{$t('Send')}}</rbnet-button>
            </div>
        </form>

        <div class="form-message">{{$t('Thanks, your application has been sent!')}}</div>
    </div>
</template>

<style scoped>

    form {
        display: block;
        max-width: calc(var(--w-content) * 0.7) !important;
        font-family: var(--font-family-code);
    }

    input[type="checkbox"] {
        width: var(--space);
        height: var(--space);
    }

    input[type="checkbox"]:checked:after {
        font-size: 150%;
    }

    input:not([type='checkbox'],[type='submit']), textarea {
        border: 0;
        display: block;
        width: 100%;
        padding: 0;
        background: transparent;
    }

    textarea {
        min-height: 100px;
    }

    input[type='submit'], button {
        width: 100%;
        padding-top: var(--space);
        padding-bottom: var(--space);
    }

    .label, label {
        display: block;
        margin-bottom: var(--space);
    }

    .label {
        border: 1px solid var(--border-color);
        padding: calc(var(--space) * 0.2) calc(var(--space) * 0.5) calc(var(--space) * 0.5);
        transition: 0.4s all ease;
    }

    .label span {
        color: var(--color-gray-mid);
    }

    .label:focus-within {
      border-color: var(--color-blue);
    }

    .label:focus-within span {
        line-height: 1;
        color: var(--color-blue);
        font-weight: bold;
        transition: 0.2s all ease-in;
    }

    .status-wait form, .status-ok form {
        filter: grayscale(1);
        pointer-events: none;
    }

    .status-ok form {
        opacity: 0.3;
    }

    .form .form-message {
        max-width: calc(var(--w-content) * 0.7) !important;
        text-align: center;
        color: var(--color-green);
        font-size: 120%;
        font-weight: bold;
        margin-top: var(--space);
        display: none;
    }

    .form.status-ok .form-message {
        display: block;
    }
</style>

<script>
export default {

  metaInfo: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        body: true
      }
    ]
  },

  props: {
      comment: ''
  },

  data () {
    return {
      email: null,
      status: 'none',
    }
  },

  methods: {

    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },

    onVerify: function (response) {
      if(response) {
          
        this.status = 'wait'

        let request = ''

        if(this.email){
          request = 'email=' + encodeURIComponent(this.email) + '&locale=' + encodeURIComponent(this.$locale) + '&comment=' + encodeURIComponent(this.comment)
        }

        if (this.$PostGoogleSheets(request)){
          const o = this
          setTimeout(function(){
            o.status = 'ok'
          }, 1500);
        } else{
          this.status = 'error'
        }
      }
    }

  }
}
</script>