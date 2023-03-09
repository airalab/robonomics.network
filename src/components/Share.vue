<template>

  <ul class="ul-nostyle grid-3"  v-if="assets">
    <li class="share" :class="classes" v-for="(asset, key) in assets" :key="key" v-if="asset.title != 'Telegram chat'">
      <ShareItem :asset=asset />
    </li>
    <li v-if="allTelegrams[0].options" class="share " :class="classes" v-for="contact in allTelegrams[0].options" :key="contact.text">
      <TelegramItem v-if="allTelegrams" :asset="allTelegrams" :contact="contact"/>  
    </li>



  </ul>

</template>




<script>

import ShareItem from '~/components/ShareItem.vue'

export default {
  components: {
      ShareItem,
      TelegramItem: () => import('~/components/TelegramItem.vue'),
    },

  props: {
    assets: { type: Array, default: () => [] },
    classes: ''
  },

  computed: {
    allTelegrams() {
      return this.assets.filter(asset => asset.title === 'Telegram chat')
    }
  }

}
</script>

<style scoped>
  ul {
    max-width: 315px;
  }
  li {
    margin-bottom: 0;
  }

  li:hover {
    animation: bounce 1.5s ease infinite;
  }


  @keyframes bounce {
    0% {transform: translateY(5px);}
    50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }

  @media screen and (max-width: 1050px) {
    ul {
      max-width: 550px;
    }

    .grid-3 {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (max-width: 650px) {
    ul {
      max-width: 280px;
    }

    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
