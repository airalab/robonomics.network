<template>
  <form class="devices-shop__form"  @submit.prevent="addToList">
    <rbInput 
      class="devices-shop__item"
      :text="$t('Your email')" 
      name="Email" 
      type="email"
      :model="email" 
      @changeInputValue="changeInputValue" 
    />
    <rb-button :disabled=error v-if="!success" buttonstyle="flat" buttoncolor="black" block> 
      <span>{{ $t('Notify me') }}</span>
      <Spinner v-if="loading" class="spinner"/>
    </rb-button>
    <rb-button class="success" disabled v-if="success" buttonstyle="flat" buttoncolor="green" block> {{ $t('You are on the list!') }} </rb-button>
    <span class="error" v-if="error">{{ $t('Something went wrong. Try again later') }}</span>
  </form>
</template>

<script>
export default  {  

  components: {
    rbInput: () => import('~/components/rbInput.vue'),
    Spinner: () => import('~/components/utils/spinner.vue'),
  },

  data() {
    return {
      email: '',
      key: process.env.GRIDSOME_UNISENDER_KEY,
      token: process.env.GRIDSOME_TG_TOKEN,
      listID: process.env.GRIDSOME_UNISENDER_LIST_ID,
      chatID: process.env.GRIDSOME_TG_CHAT_ID,
      success: false,
      error: false,
      loading: false,
    }
  },

  methods: {
    changeInputValue(value) {
      this.email = value;
    },

    async sendTGNotification(text) {

      const telegramUrl = `https://api.telegram.org/bot` + this.token + `/sendMessage?`;

      const payload = {
          "chat_id" : this.chatID,
          "text" : text,
          "parse_mode" : "HTML",
        };

      const params = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      };

      await fetch(telegramUrl, params);
    },
    

    async addToList() {

      this.loading = true;

      const unisenderAPI = `https://api.unisender.com/ru/api/subscribe?format=json&api_key=${this.key}&list_ids=${this.listID}&fields[email]=${this.email}&double_optin=3&tags=devices`;


      try {
        await fetch(unisenderAPI);
        this.success = true;
        this.loading = false;
      } catch (error) {
        this.success = true;
        this.loading = false;
      } finally {
        this.sendTGNotification(`${this.email} requested notification about device`)
      };
    }
  }
}
</script>

<style scoped>

.devices-shop__form {
  margin-top: calc(var(--space) * 0.5);
  display: flex;
  flex-direction: column;
}

.devices-shop__form button {
  margin-top: calc(var(--space) * 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  font-family: var(--base-font-size);
  font-size: calc(var(--base-font-size) * 0.8);
  font-weight: 600;
  background-color: #000;
}

.devices-shop__form button.success {
  filter: none;
  border: none;
  background-color: var(--rb-color-green);
}


.devices-shop__form svg{
    margin:  0  !important;
    width: 40px;
    height: 30px;
  }

.error {
  margin-top: var(--space);
  text-transform: uppercase;
  font-family: var(--font-family-code);
  color: var(--color-red);
  letter-spacing: 1px;
}

</style>