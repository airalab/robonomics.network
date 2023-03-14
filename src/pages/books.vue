<template>
  <layout>

    <MetaInfo
      pageTitle = "Nav Books"
      pageImage = "/website_cover_books.png"
    />


    <div class="title-with-bg">
      <h1><span>Our library</span></h1>
    </div>


    <section class="layout layout-narrow e-books">

      <h2>Free E-Books</h2>

      <ul class="ul-nostyle  e-books__list animate-inside in-viewport" v-in-viewport.once>
        <BookItem v-for="book in books" :key="book.title" :book="book"/>
      </ul>

    </section>

    <section class="books-recommendations">

      <div class="layout layout-narrow">
        
        <h2>Our recommendations</h2>

        <p>
          We recommend these books if you want to become more involved, inspired, and self-educated in robotics, advance in the field, and understand the economics behind it. You can download or purchase these books from other sources.
        </p>
        
      </div>


      <ul v-if="books" class="grid-4 ul-nostyle books-recommendations__list animate-inside" v-in-viewport.once>
        <li class="books-recommendations__item" v-for="rec in recs" :key="rec.id">
          <RecommendationItem :rec="rec"/>
        </li>
      </ul>

    </section>

  </layout>
</template>

<script>

  import books from '@/data/books.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      BookItem: () => import('~/components/BookItem.vue'),
      RecommendationItem: () => import('~/components/RecommendationItem.vue'),
    },

    data() {
      return {
        recs: [
          {
            title: 'The Nature of the Firm',
            author: 'R. H. Coase',
            link: 'https://onlinelibrary.wiley.com/doi/full/10.1111/j.1468-0335.1937.tb00002.x',
            id: 0,
            color: '#CD76FF'
          },
          {
            title: 'Cybernetics : Control and Communication in the Animal and the Machine –2nd. ed',
            author: 'Norbert Wiener',
            link: 'https://duckduckgo.com/?q=Cybernetics+%3A+Control+and+Communication+in+the+Animal+and+the+Machine+–2nd.+ed+Norbert+Wiener&t=h_&ia=web',
            id: 1,
            color: '#0CCFD6'
          },
          {
            title: 'Research works from Institute of Cybernetics',
            author: 'V.M. Glushkov',
            link: 'https://scholar.google.com/citations?user=qLh-leEAAAAJ&hl=en',
            id: 2,
            color: '#F126BF'
          },
          {
            title: 'Human Action',
            author: 'Ludwig von Mises',
            link: 'https://mises.org/library/human-action-0',
            id: 3,
            color: '#F74873'
          },
          {
            title: 'Do androids dream of electric sheep?',
            author: 'Philip K. Dick',
            link: 'https://duckduckgo.com/?q=Do+androids+dream+of+electric+sheep%3F+Philip+K.+Dick&t=h_&ia=web',
            id: 4,
            color: '#0CD6BE'
          },
          {
            title: 'Autofac',
            author: 'Philip K. Dick',
            link: 'https://duckduckgo.com/?q=Autofac+Philip+K.+Dick&t=h_&ia=web',
            id: 5,
            color: '#9865F7'
          },
          {
            title: 'The bicentennial man',
            author: 'Isaac Asimov',
            link: 'https://duckduckgo.com/?q=The+bicentennial+man++Isaac+Asimov&t=h_&ia=web',
            id: 6,
            color: "#93D012"
          },
          {
            title: 'Marionettes Inc.',
            author: 'Ray Bradbury',
            link: 'https://duckduckgo.com/?q=Marionettes+Inc.+Ray+Bradbury&t=h_&ia=web',
            id: 7,
            color: '#0C8DD6'
          }
        ]
      }
    },

    computed: {
      books () {
        return books
      }
    }
  }
</script>


<style scoped>

  .e-books {
    margin-bottom: calc(var(--space) * 4);
  }

  .layout-narrow {
    max-width: 950px;
  }

  h2 {
    text-align: left;
  }

  .books-recommendations .layout-narrow {
    margin-bottom: var(--space);
  }

  .books-recommendations h2 {
    margin-bottom: calc(var(--space) * 0.3);
  }

  .books-recommendations p {
    font-weight: 300;
    font-style: italic;
  }

  .books-recommendations__list {
    max-width: calc(1024px + var(--space) * 2);
    margin: 0 auto;
    padding: 0 var(--space);
  }

  @media screen and (max-width: 990px) {
    .books-recommendations__list  {
      grid-template-columns: repeat(3,1fr);
    }
  }

  @media screen and (max-width: 780px) {
    .books-recommendations__list  {
      grid-template-columns: repeat(2,1fr);
      align-items: center;
      justify-items: center;
    }
  }

  @media screen and (max-width: 570px) {
    .books-recommendations__list {
      grid-template-columns: 1fr;
    }
  }

</style>
