<template>

  <div class="select-wrapper" :class="{'bigGap': locale !== 'en' && !translated}">
    <select aria-label="choose preferably language" v-if="$localesList" tabindex="0" @change="onSelectChange($event)">
  
      <template v-for="(item,key) in $localesList">
        <option v-bind:key="key" :selected="item == locale" v-bind:value="item">
          <!-- <template v-if="item == 'en'">English</template>
          <template v-if="item == 'ru'">Русский</template> -->
          {{item}}
        </option>
      </template>

    </select>
    <span v-if="locale !== 'en' && !translated">AI</span>
  </div>

</template>

<style scoped>
  select {
    background-image: url("data:image/svg+xml,%3Csvg width='4' height='21' viewBox='0 0 4 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.58449 0H0.92643C0.414777 0 0 0.414777 0 0.92643V2.58449C0 3.09615 0.414777 3.51092 0.92643 3.51092H2.58449C3.09615 3.51092 3.51093 3.09615 3.51093 2.58449V0.926431C3.51093 0.414777 3.09615 0 2.58449 0Z' fill='black'/%3E%3Cpath d='M2.58449 8.33789H0.92643C0.414777 8.33789 0 8.75267 0 9.26432V10.9224C0 11.434 0.414777 11.8488 0.92643 11.8488H2.58449C3.09615 11.8488 3.51093 11.434 3.51093 10.9224V9.26432C3.51093 8.75267 3.09615 8.33789 2.58449 8.33789Z' fill='black'/%3E%3Cpath d='M2.58449 16.6758H0.92643C0.414777 16.6758 0 17.0906 0 17.6022V19.2603C0 19.7719 0.414777 20.1867 0.92643 20.1867H2.58449C3.09615 20.1867 3.51093 19.7719 3.51093 19.2603V17.6022C3.51093 17.0906 3.09615 16.6758 2.58449 16.6758Z' fill='black'/%3E%3C/svg%3E%0A");
    background-size: 4px;
    background-position: 1px 8px;
    padding: 0.35rem 0.6rem;
    padding-right: 1rem;
    font-family: var(--font-family);
    font-size: 80%;
    font-variation-settings: var(--font-flex-bold);
    color: var(--color-dark);
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid transparent;
    height: 100%;
  }

  .select-wrapper {
    position: relative;
  }

  .select-wrapper span{
    position: absolute;
    top: 2px;
    right: -5px;
    width: 25px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--base-font-size) * 0.6);
    font-weight: 600;
    color: var(--color-dark);
    z-index: -1;
  }


  @media screen and (max-width: 940px) {
    select {
      background-size: 3px;
      background-position: 2px 7px;
    }
  }

</style>

<script>

export default {

  props: {
    translated: {
      type: Boolean,
      default: false
    }
  },

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