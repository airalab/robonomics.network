<template>
  <layout :title="$t('Read books')">

    <MetaInfo
      pageTitle="Books"
      pageImage="/website_cover_books.png"
    />

    <section class="layout layout__content e-books">
  
      <div class="layout__text books__abstract">
        <p>{{ $t("We think reading books can really open up your mind. Whether it's simple but smart ideas or more complex ones, books are the best way for your brain to soak it all in. You can grab our books for free and check out our list of recommended reads to dive into the exciting world of robotics!") }}</p>
      </div>

      <h2>{{ $t('Download books about Robonomics') }}</h2>

      <ul class="list-simple e-books__list grid-3 animate-inside in-viewport" v-in-viewport.once v-if="bookGateway">
        <BookItem v-for="book in books" :key="book.title" :book="book" :gateway="bookGateway"/>
      </ul>
      <div v-else>
        <Spinner/>
      </div>

    </section>

    <section class="layout books-recommendations layout__content">

      <h2>{{ $t('Open your mind [list of recommendations]') }}</h2>

      <ol v-if="books" class="list-simple books-recommendations__list" v-in-viewport.once>
        <li class="books-recommendations__item" v-for="rec in recs" :key="rec.id">
          <RecommendationItem :rec="rec"/>
        </li>
      </ol>

    </section>

    <section class="books-footer__container layout layout__text">
      <BooksFooter/>
    </section>

  </layout>
</template>

<script>
  import pingIPFS from 'ping-ipfs-gateway'
  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      BookItem: () => import('~/components/books/BookItem.vue'),
      RecommendationItem: () => import('~/components/books/RecommendationItem.vue'),
      BooksFooter: () => import('~/components/books/BooksFooter.vue'),
      Spinner: () => import ('@/components/utils/LoaderSpin.vue')
    },

    data() {
      return {
        bookGateway: '',
        books: [
        {
            title: this.$t("Robonomics R&D"),
            img: 'docs-book-5.png',
            year:' 2023 & 2024',
            options: [
              {
                link: 'QmaCXn8RdSdh4oxX3R5nzNSfoUPiLMLM4JmLSk1WnYi5ah',
                text: 'EN',
                id: 0,
                static: 'https://static.robonomics.network/docs/book-2023-2024/robonomics.network-book-2023-2024-en.pdf',
                name: 'book2023-2024en'
              },
              {
                link: 'Qmd8sSoGokc1UeAbbAfmEPJTubWEpWGetYGyj9MCpwmE42',
                text: 'RU',
                id: 1,
                static: 'https://static.robonomics.network/docs/book-2023-2024/robonomics.network-book-2023-2024-ru.pdf',
                name: 'book2023-2024ru'
              }
            ]
          },
          {
            title: this.$t("R&D 18-28"),
            img: 'docs-book-4.png',
            year: '2022',
            options: [
              {
                link: 'QmZK64M7M31mkMsDd8yQa1dfX4a4KeDCyaUMsTuzsKq6LC',
                text: 'EN',
                id: 0,
                static: 'https://static.robonomics.network/docs/book-2022/robonomics.network-book-2022-en.pdf',
                name: 'book2022en'
              },
              {
                link: 'QmNsiaWWFw4ZoqAnW5vuTXNz2jwYBu7ShyXSYqU1uNDjrF',
                text: 'RU',
                id: 1,
                static: 'https://static.robonomics.network/docs/book-2022/robonomics.network-book-2022-ru.pdf',
                name: 'book2022ru'
              }
            ]
          },
          {
            title: this.$t("R&D 1-17"),
            img: 'docs-book-3.png',
            year: "2021",
            options: [
              {
                link: 'QmRHvtsEViqHFN6Mt66p9o5MvvzB2H5uvfMTi8maAnLmfi',
                text: 'EN',
                id: 0,
                static: 'https://static.robonomics.network/docs/book-2021-cases/Robonomics.network-r-n-d-cases-2021-en.pdf',
                name: 'book2021en'
              },
              {
                link: 'QmUbQTQknKLuDB8SmJF9pUhkTPdJbXp5ghDwp7oXwwDb9V',
                text: 'RU',
                id: 1,
                static: 'https://static.robonomics.network/docs/book-2021-cases/Robonomics.network-r-n-d-cases-2021-ru.pdf',
                name: 'book2021ru'
              },
              {
                link: 'QmU8CFPD9bQheKJhKdyAZ11GNhuqHKPok5Tu8bUrNjCZtg',
                text: 'ES',
                id: 2,
                static: 'https://static.robonomics.network/docs/book-2021-cases/Robonomics.network-r-n-d-cases-2021-en.pdf',
                name: 'book2021es'
              }
            ]
          },
          {
            title: this.$t("Robot economics"),
            img: 'docs-book-2.png',
            year: "2018",
            options: [
              {
                link: 'QmQ3k8p9SQS5wjovPcjUtQceRZZ6nv3Eqirt1vVQ2wP2JL',
                text: 'EN',
                id: 0,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-2-2018/robonomics.network-book-the-economy-of-robots-2-2018-en.pdf',
                name: 'book2018en'
              },
              {
                link: 'QmUqNnzdZnic61UYTuKT9EzBNzMW6jc5uHSFk4Xzd3iM93',
                text: 'RU',
                id: 1,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-2-2018/robonomics.network-book-the-economy-of-robots-2-2018-ru.pdf',
                name: 'book2018ru'
              },
              {
                link: 'QmXhWarATZNTy3CweoVAdy4aTMrGMCsipo3gPSWVsUyQW6',
                text: 'IT',
                id: 2,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-2-2018/robonomics.network-book-the-economy-of-robots-2-2018-it.pdf',
                name: 'book2018it'
              }
            ]
          },
          {
            title: this.$t("Robot economics"),
            img: 'docs-book-1.png',
            year: "2017",
            options: [
              {
                link: 'QmWue3YfuZvuRvgcNb4vZuheX9TaZ9E1b8aCdxSoaGTbVN',
                text: 'EN',
                id: 0,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-1-2017/robonomics.network-book-the-economy-of-robots-1-2017-en.pdf',
                name: 'book2017en'
              },
              {
                link: 'QmUjBPgDzmHFHiDkQAG93szJQguiZiowm9sedFMhPfQP4y',
                text: 'RU',
                id: 1,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-1-2017/robonomics.network-book-the-economy-of-robots-1-2017-ru.pdf',
                name: 'book2017ru'
              },
              {
                link: 'QmTp3srjo3r1L2TKpAEGFafjdzSCTKJT9kkBEkCQDEF6tz',
                text: 'DE',
                id: 2,
                static: 'https://static.robonomics.network/docs/book-the-economy-of-robots-1-2017/robonomics.network-book-the-economy-of-robots-1-2017-de.pdf',
                name: 'book2017de'
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
          },
          {
            title: 'Cybernetics : Control and Communication in the Animal and the Machine',
            author: 'Norbert Wiener',
            link: 'https://duckduckgo.com/?q=Cybernetics+%3A+Control+and+Communication+in+the+Animal+and+the+Machine+–2nd.+ed+Norbert+Wiener&t=h_&ia=web',
            id: 1,
          },
          {
            title: 'Research works from Institute of Cybernetics',
            author: 'V.M. Glushkov',
            link: 'https://duckduckgo.com/?q=Research+works+from+Institute+of+Cybernetics+V.M.+Glushkov&ia=webn',
            id: 2,
          },
          {
            title: 'Human Action',
            author: 'Ludwig von Mises',
            link: 'https://mises.org/library/human-action-0',
            id: 3,
          },
          {
            title: 'Do androids dream of electric sheep?',
            author: 'Philip K. Dick',
            link: 'https://duckduckgo.com/?q=Do+androids+dream+of+electric+sheep%3F+Philip+K.+Dick&t=h_&ia=web',
            id: 4,
          },
          {
            title: 'Autofac',
            author: 'Philip K. Dick',
            link: 'https://duckduckgo.com/?q=Autofac+Philip+K.+Dick&t=h_&ia=web',
            id: 5,
          },
          {
            title: 'The Bicentennial Man',
            author: 'Isaac Asimov',
            link: 'https://duckduckgo.com/?q=The+bicentennial+man++Isaac+Asimov&t=h_&ia=web',
            id: 6,
          },
          {
            title: 'Marionettes Inc.',
            author: 'Ray Bradbury',
            link: 'https://duckduckgo.com/?q=Marionettes+Inc.+Ray+Bradbury&t=h_&ia=web',
            id: 7,
          }
        ]
      }
    },

    async created() {
      this.bookGateway = await pingIPFS(
        [
          'https://gw.crust-gateway.xyz/ipfs/',
          'https://gw.crust-gateway.com/ipfs/',
          'https://gateway.pinata.cloud/ipfs/',
          'https://ipfs.io/ipfs/'
        ]
      )

      if(!this.bookGateway) {
        this.bookGateway = 'https://gw.crust-gateway.xyz/ipfs/'
      }
    }
  }
</script>


<style scoped>

  .e-books {
    margin-bottom: calc(var(--space) * 4);
  }


  h2 {
    text-align: left;
    font-family:var(--font-family);
    font-weight: 900;
    text-transform: none;
    letter-spacing: 0;
  }

  .books__abstract {
    font-weight: 500;
    font-style: italic;
    margin-bottom: calc(var(--space) * 4);
  }

  .books-recommendations__item {
    background-color: var(--color-light);
  }

  .books-recommendations__item:not(:last-of-type) {
    margin-bottom: calc(var(--space) * 0.5);
  }

  .books-recommendations h2 {
    margin-bottom: calc(var(--space) * 0.8);
  }

  .books-footer__container {
    max-width: 586px;
  }

</style>
