<template>
  <layout :title="$t('Contacts')">

    <MetaInfo
      pageTitle = "Contacts"
      pageImage = "/website_cover_contacts.png"
    />

    <div class="layout layout__text">
      <ul class="list-links">
        <li class="oldy oldy__link" v-for="item in contactlist" :key="item.title" :to="item.link">
            <div class="icon" v-html="item.svg" aria-hidden="true"/>
            <g-link :to="item.link"><b>{{ $t(item.text) }}</b></g-link>
        </li>
      </ul>
    </div>

  </layout>
</template>


<script>

  import contacts from '@/data/contact.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
    },

    data() {
      return {
        showcontacts: ['X', 'Discord', 'Telegram Traders', 'Youtube']
      }
    },

    computed: {
      contactlist() {
        let l = [];

        this.showcontacts.forEach(c => {
          contacts.forEach(i => {
            if(c === i.title) {
              l.push(i);
            }
          })
        });

        return l;
      }
    }

  }
</script>

<style scoped>
.list-links li {
  display: flex;
  gap: var(--space);
  align-items: center;
}

.list-links a {
    font-variation-settings: var(--font-flex-bold);
    margin-bottom: calc(var(--space) * 0.2);
    color: var(--text-color);
}

.icon {
  width: 50px;
}
</style>