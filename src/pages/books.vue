<template>
  <layout>

    <MetaInfo
      pageTitle = "Books"
      pageImage = "/website_cover_books.png"
    />


    <div class="title-with-bg">
      <h1><span>{{ $t('Our library') }}</span></h1>
    </div>


    <section class="layout layout-narrow e-books">

      <h2>{{ $t('Free E-Books') }}</h2>

      <ul class="list-simple e-books__list animate-inside in-viewport" v-in-viewport.once>
        <BookItem v-for="book in books" :key="book.title" :book="book"/>
      </ul>

    </section>

    <section class="books-recommendations">

      <div class="layout layout-narrow">
        
        <h2>{{ $t('Our recommendations') }}</h2>

        <p>
          {{ $t('We recommend these books if you want to become more involved, inspired, and self-educated in robotics, advance in the field, and understand the economics behind it. You can download or purchase these books from other sources.') }}
        </p>
        
      </div>


      <ul v-if="books" class="grid-4 list-simple books-recommendations__list animate-inside" v-in-viewport.once>
        <li class="books-recommendations__item" v-for="rec in recs" :key="rec.id">
          <RecommendationItem :rec="rec"/>
        </li>
      </ul>

    </section>

  </layout>
</template>

<script>

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      BookItem: () => import('~/components/BookItem.vue'),
      RecommendationItem: () => import('~/components/RecommendationItem.vue'),
    },

    data() {
      return {
        books: [
          {
            title: this.$t("R&D, 2022"),
            description: this.$t('Updated use cases for connected robots within web3 technologies.'),
            img: 'docs-book-4.png',
            options: [
              {
                link: 'https://crustipfs.info/ipfs/QmZK64M7M31mkMsDd8yQa1dfX4a4KeDCyaUMsTuzsKq6LC',
                text: 'English',
                id: 0
              },
              {
                link: 'https://crustipfs.info/ipfs/QmNsiaWWFw4ZoqAnW5vuTXNz2jwYBu7ShyXSYqU1uNDjrF',
                text: 'Русский',
                id: 1
              }
            ]
          },
          {
            title: this.$t("R&D, 2021"),
            description: this.$t('17 use cases for connected robots within Polkadot and Ethereum.'),
            img: 'docs-book-3.png',
            options: [
              {
                link: 'https://crustipfs.info/ipfs/QmRHvtsEViqHFN6Mt66p9o5MvvzB2H5uvfMTi8maAnLmfi',
                text: 'English',
                id: 0
              },
              {
                link: 'https://crustipfs.info/ipfs/QmUbQTQknKLuDB8SmJF9pUhkTPdJbXp5ghDwp7oXwwDb9V',
                text: 'Русский',
                id: 1
              },
              {
                link: 'https://crustipfs.info/ipfs/QmU8CFPD9bQheKJhKdyAZ11GNhuqHKPok5Tu8bUrNjCZtg',
                text: 'Español',
                id: 2
              }
            ]
          },
          {
            title: this.$t("Book «Robot economics», 2018"),
            description: this.$t('Here, we are explaining the idea of a cyber-physical system, how it can assist with scaling manufacturing, and what to do about the liabilities of robots.'),
            img: 'docs-book-2.png',
            options: [
              {
                link: 'https://crustipfs.info/ipfs/QmQ3k8p9SQS5wjovPcjUtQceRZZ6nv3Eqirt1vVQ2wP2JL',
                text: 'English',
                id: 0
              },
              {
                link: 'https://crustipfs.info/ipfs/QmUqNnzdZnic61UYTuKT9EzBNzMW6jc5uHSFk4Xzd3iM93',
                text: 'Русский',
                id: 1
              },
              {
                link: 'https://crustipfs.info/ipfs/QmXhWarATZNTy3CweoVAdy4aTMrGMCsipo3gPSWVsUyQW6',
                text: 'Italiano',
                id: 2
              }
            ]
          },
          {
            title: this.$t("Book «Robot economics», 2017"),
            description: this.$t("The baseline here is that free economic principles are enough for living in an automated world. Robots can be our friends, and we don't need centralization to make it comfortable and reliable."),
            img: 'docs-book-1.png',
            options: [
              {
                link: 'https://crustipfs.info/ipfs/QmWue3YfuZvuRvgcNb4vZuheX9TaZ9E1b8aCdxSoaGTbVN',
                text: 'English',
                id: 0
              },
              {
                link: 'https://crustipfs.info/ipfs/QmUjBPgDzmHFHiDkQAG93szJQguiZiowm9sedFMhPfQP4y',
                text: 'Русский',
                id: 1
              },
              {
                link: 'https://crustipfs.info/ipfs/QmTp3srjo3r1L2TKpAEGFafjdzSCTKJT9kkBEkCQDEF6tz',
                text: 'Deutsch',
                id: 2
              }
            ]
          }
        ],
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
