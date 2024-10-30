<template>

  <ul class="list-simple grid-3"  v-if="assets && allTelegrams.length">
    <li class="share" :class="classes" v-for="(asset, key) in assets" :key="key" v-if="asset.defaultTitle != 'Telegram chat'">
      <ShareItem :asset=asset>
        <div v-html="asset.rawSvg">
        </div>
      </ShareItem>
    </li>
    <li  class="share " :class="classes" v-for="contact in allTelegrams[0].options" :key="contact.text">
      <TelegramItem v-if="allTelegrams" :asset="allTelegrams" :contact="contact">
        <div v-html="allTelegrams[0].rawSvg">
        </div>
      </TelegramItem>  
    </li>



  </ul>

</template>




<script>

export default {
  components: {
      ShareItem : () => import('~/components/contacts/ShareItem.vue'),
      TelegramItem: () => import('~/components/contacts/TelegramItem.vue'),
    },

  props: {
    assets: { type: Array, default: () => [] },
    classes: '',
    allTelegrams: { type: Array, default: () => [] },
  },

  mounted() {
    console.log(this.$props.assets)
    console.log(this.$props.allTelegrams)
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
    animation: bounce 1s ease forwards;
  }


  @keyframes bounce {
    0% {transform: translateY(5px);}
    50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
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
