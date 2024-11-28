<template>
    <ul class="list-links">
      <li class="oldy" v-for="item in contactlist" :key="item.title" :to="item.link">
          <div v-html="item.svg" aria-hidden="true"/>
          <div>
              <g-link :to="item.link"><b>{{ $t(item.title) }}</b></g-link>
              <span>{{ $t(item.text) }}</span>
          </div>
      </li>
    </ul>
</template>

<script>

import contacts from '@/data/contact.yaml'

export default {
    data() {
      return {
        showcontacts: ['Github', 'X', 'Youtube', 'Discord']
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

.list-links {
    background: var(--rb-color-green-accent);
    display: grid;
    gap: var(--space);
    grid-template-columns: repeat(4, 1fr);
    line-height: 1.2;
    padding: var(--space) var(--layout-sidepadding);
}

.list-links li {
    display: grid;
    gap: calc(var(--space) * 0.5);
    grid-template-columns: .6fr 3fr;
}

.list-links li:not(:last-child) {
    margin-bottom: 0;
}

.list-links svg {
    display: block;
    width: 100%;
}

.list-links svg path {
    fill: var(--text-color) !important;
}

.list-links a {
    text-transform: uppercase;
    font-variation-settings: var(--font-flex-bold);
    margin-bottom: calc(var(--space) * 0.2);
    color: var(--text-color)
}

@media screen and (width < 1000px) {
    .list-links {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (width < 460px) {
    .list-links {
        grid-template-columns: 1fr;
    }

    .list-links li {
        grid-template-columns: 0.4fr 3fr;
    }
}

/* - Socials */

</style>