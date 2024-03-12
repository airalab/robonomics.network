<template>

  <div class="select-wrapper" :class="{'bigGap': locale !== 'en'}">
    <select aria-label="choose preferably language" v-if="$localesList" tabindex="0" @change="onSelectChange($event)">
  
      <template v-for="(item,key) in $localesList">
        <option v-bind:key="key" :selected="item == locale" v-bind:value="item">
          <!-- <template v-if="item == 'en'">English</template>
          <template v-if="item == 'ru'">Русский</template> -->
          {{item}}
        </option>
      </template>

    </select>
    <span v-if="locale !== 'en'">AI</span>
  </div>

</template>

<style scoped>
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2.21 11.44'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23000;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg data-name='Слой 1'%3E%3Crect class='cls-1' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='4.62' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='9.23' width='2.21' height='2.21'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 8px 15px;
    background-position: 34px 10px;
    padding: 0.4rem 0.6rem;
    padding-right: 1rem;
    font-size: 80%;
    color: var(--color-dark);
    text-transform: uppercase;
    background-color: var(--header-bg);
    border: 1px solid var(--color-dark);
  }

  .select-wrapper {
    position: relative;
  }

  .bigGap {
    margin-right: calc(var(--space) * 1.2) !important;
  }

  .select-wrapper span{
    position: absolute;
    top: 2px;
    right: -20px;
    width: 25px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--base-font-size) * 0.6);
    color: var(--color-light);
    background-color: var(--color-dark);
    z-index: -1;
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

  @media screen and (max-width: 460px) {
    
    .bigGap {
      margin-right: calc(var(--space) * 1.6) !important;
    }
  }

  /* dark theme */

  .dark-theme select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2.21 11.44'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg data-name='Слой 1'%3E%3Crect class='cls-1' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='4.62' width='2.21' height='2.21'/%3E%3Crect class='cls-1' y='9.23' width='2.21' height='2.21'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>

<script>

export default {

  data() {
    return {
      locale: 'en'
    }
  },

  computed: {
    locales() {
      return locales
    }
  },

  methods: {

    resolveI18n() {
      let locale = this.locale
      this.$setI18n({
        locale,
      })
    },

    initPath() {
      if(localStorage.getItem('locale') ) {
        this.locale = localStorage.getItem('locale');
      }  
    },

    onSelectChange(e) {
      this.$setLocale(e.target.value)
      let newpath = this.$tp(this.$route.path, e.target.value);
      window.location.href = newpath;
    },
    },

    mounted() {
      this.initPath();
      this.resolveI18n();
    }

  }

</script>