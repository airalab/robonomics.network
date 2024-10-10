<template>
  <section class="section section__solid contacts" :class="{'withGap': withGap}" dir="ltr">

    <!-- <ContactsForm /> -->

    <div class="contacts__container grid-4">
      <Item v-for="item in items" 
        :key="item.id"
        :link="item.link"
        :title="item.title"
        :text="item.text"
        :img="item.img"
      />
    </div>

  </section>
</template>

<script>
  import contacts from '@/data/contact.yaml'
export default {
  components: { 
    // ContactsForm: () => import("../utils/contactsForm.vue"),
    Item: () => import ('./ContactsItem.vue'),
  },

  props: {
    withGap: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      items: [
        {
          id: 0,
          title: 'github',
          text: 'The best way to check open-source project.',
          link: contacts.filter(item => item.title.toLowerCase() === "github"),
          img: 'contacts__github.svg'
        },
        {
          id: 1,
          title: 'x',
          text: 'Follow for latest news and updates.',
          link: contacts.filter(item => item.title.toLowerCase() === "twitter"),
          img: 'contacts__twitter.svg'
        },
        {
          id: 2,
          title: 'youtube',
          text: 'Useful, serious, cute videos, teasers etc.',
          link: contacts.filter(item => item.title.toLowerCase() === "youtube"),
          img: 'contacts__youtube.svg'
        },
        {
          id: 3,
          title: 'discord',
          text: 'Chat with us and each other.',
          link: contacts.filter(item => item.title.toLowerCase() === "discord"),
          img: 'contacts__discord.svg'
        },
      ]
    }
  }
}
</script>

<style scoped>

  .contacts {
    padding-top: 0 !important;
    padding-bottom: 0;
    background-color: transparent;
    /* border-top: 1rem solid var(--color-light); */
  }

  .contacts__container {
    position: relative;
    margin-top: -12px;
    padding: var(--space) calc(var(--space) * 0.5);
    gap: calc(var(--space) * 2);
    color: var(--color-dark);
    background-color: var(--rb-color-green-accent);
    z-index: 10;
  }


  @media screen and (max-width: 1200px) {
    .contacts__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 680px) {
    .contacts__container {
      padding: calc(var(--space) * 2) calc(var(--space) * 0.5);
      grid-template-columns: 1fr;
    }
  }


</style>