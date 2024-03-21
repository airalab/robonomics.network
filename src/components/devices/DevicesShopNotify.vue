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
    <rb-button v-if="!success" buttonstyle="flat" buttoncolor="black" block> {{ $t('Notify me') }} </rb-button>
    <rb-button disabled v-if="success" buttonstyle="flat" buttoncolor="green" block> {{ $t('You are on the list!') }} </rb-button>
  </form>
</template>

<script>



export default  {  

  components: {
    rbInput: () => import('~/components/rbInput.vue'),
  },

  data() {
    return {
      email: '',
      key: process.env.GRIDSOME_UNISENDER_KEY,
      listID: process.env.GRIDSOME_UNISENDER_LIST_ID,
      success: false
    }
  },

  methods: {
    changeInputValue(value) {
      this.email = value;
    },

    async addToList() {
      const unisenderAPI = `https://api.unisender.com/ru/api/subscribe?format=json&api_key=${this.key}&list_ids=${this.listID}&fields[email]=${this.email}&double_optin=3&tags=devices`;

      let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');


      try {
        await fetch(unisenderAPI)
      } catch (error) {
        console.log(error)
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
  font-family: var(--base-font-size);
  font-size: calc(var(--base-font-size) * 0.8);
  font-weight: 600;
  background-color: #000;
}

</style>