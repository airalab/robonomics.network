<template>

    <select v-if="$localesList" tabindex="0" @change="changelocale($event)">
  
      <template v-for="(item,key) in $localesList">
        <option v-bind:key="key" :selected="item == $locale" v-bind:value="item">
          <!-- <template v-if="item == 'en'">English</template>
          <template v-if="item == 'ru'">Русский</template> -->
          {{item}}
        </option>
      </template>

    </select>

</template>

<style scoped>
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2.21 11.44'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Слой_1' data-name='Слой 1'%3E%3Crect class='cls-1' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='4.62' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='9.23' width='2.21' height='2.21'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 8px 15px;
    background-position: 34px 10px;
    padding: 0.4rem 0.6rem;
    padding-right: 1rem;
    font-size: 80%;
    color: #fff;
    text-transform: uppercase;
    background-color: #1E1E1E;
    border: 1px solid transparent;
  }

  @media screen and (max-width: 1650px) {
    select {

      background-size: 8px 15px;
      background-position: 34px 9px;

    }
  }

  @media screen and (max-width: 1005px) {
    select {
      background-size: 5px 12px;
      background-position: 30px 9px;
    }
  }
</style>

<script>

export default {

  methods: {
    changelocale(event) {

        console.log(event.target.value)

        // get chosen locale
        let lang = event.target.value

        //update locale in options
        this.$setLocale(lang)

        //redirect to page with chosen locale
        let newpath = this.$tp(this.$route.path, lang)
        // this.$router.push(newpath) < - this doesn't work for some reason
        window.location.href = newpath

    }
  }

}

</script>