<template>
  <li class="e-books__item">

    <g-link class="e-books__img" :to="gateway + book.options[0].link">
      <g-image :src="require('!!assets-loader!~/assets/images/'+book.img)" quality="75"/>
    </g-link>

    <div class="e-books__content">
      <div class="e-book__header">
        <span>{{ book.year }}</span>
        <h3> {{ book.title }} </h3>
      </div>
      <div class="e-books__links" v-if="!loading">
        <g-link
          v-for="link in book.options"
          :key="link.id"
          :to="booksLinks[link.name] || '#'"
        >
        {{ link.text }}
        </g-link>
      </div>
      <div v-else>
        <Spinner/>
      </div>
    </div>
    

  </li>
</template>

<script>
export default {

  components: {
    Spinner: () => import ('@/components/utils/LoaderSpin.vue')
  },

  props: {
    book: {
      type: Object,
      required: true
    },

    gateway: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      booksLinks: {},
      loading: true
    }
  },

  methods: {

    // Helper to fetch and check if a gateway link is working
    async fetchGateway(link) {
      try {
        const response = await fetch(link); 
        return response.ok;
      } catch {
        return false
      }
    },

    // Helper to build and save a book link to localStorage
    async checkLocalStorage(item, gateway) {
      const isGatewayWorking = await this.fetchGateway(gateway + item.link);

      const linkDetails = {
        link: isGatewayWorking ? gateway + item.link : item.static,
        date: new Date().toISOString(), // Save as ISO for better parsing
      };

      localStorage.setItem(item.name, JSON.stringify(linkDetails));
      return linkDetails;
      
    },

    async checkLink(item) {
      const storageItem = localStorage.getItem(item.name);

      if (storageItem) {
        const cachedBook = JSON.parse(storageItem);
        const today = new Date();
        const sevenDaysAgo = new Date(cachedBook.date);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() + 7);

        // If the cached date is older than 7 days, remove and update it
        if (today > sevenDaysAgo) {
          localStorage.removeItem(item.name);
          return (await this.checkLocalStorage(item, this.gateway)).link;
        }
        this.booksLinks[item.name] = cachedBook.link  // Return the cached link if it's still valid
      } else {
        // Save and return the link if it's not in localStorage
        this.booksLinks[item.name] = (await this.checkLocalStorage(item, this.gateway)).link;
      }
    },

    async resolveLinks() {
      // Fetch valid links for all book options and update booksLinks
      for (const option of this.book.options) {
        await this.checkLink(option);
      }

      this.loading = false
    },
  },

  async mounted() {
    // getting valid link for all book options
    await this.resolveLinks(); 
  }

}
</script>

<style scoped>

  .e-books__item {
    display: grid;
    font-family: var(--font-family);
    font-weight: 900;
    grid-template-columns: 1fr;
    /* gap: var(--space); */
    /* margin-bottom: calc(var(--space) * 0.6); */
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: inherit;
    font-size: calc(var(--base-font-size) * 0.9);
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  p {
    font-weight: 300;
    margin-bottom: calc(var(--space) * 0.5);
  }


  .e-books__content {
    max-width: 578px;
    width: 100%;
    margin: 0 auto;
    padding: calc(var(--space) * 0.3) calc(var(--space) * 0.75);
    background-color: var(--color-light);
  }
  .e-book__header  {
    display: flex;
    align-items: center;
  }

  .e-book__header span {
    display: inline-block;
    margin-right: calc(var(--space) * 0.5);
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 0.9);
  }

  [dir="rtl"]   .e-book__header span {
    margin-right: 0;
    margin-left: calc(var(--space) * 0.5);
  }

  .e-books__links {
    font-weight: 500;
    max-width: 186px;
    font-size: calc(var(--base-font-size) * 0.8);
  }

  .e-books__links a:not(:last-of-type) {
    margin-right: calc(var(--space) * 0.5);
  }


  .e-books__img {
    max-width: 578px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 980px) {
    /* .e-books__item {
      padding: var(--space);
      grid-template-columns: 1fr;
      border-bottom: 3px dotted var(--color-dark);
    } */

    .e-books__content {
      text-align: center;
    }

    .e-book__header {
      justify-content: center;
    }

    .e-books__links {
      max-width: unset;
    }
  }




</style>