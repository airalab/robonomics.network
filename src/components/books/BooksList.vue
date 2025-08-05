<template>
  <div class="books__list">
    <h2>{{ $tr('Download books about Robonomics') }}</h2>

    <ul
      v-if="gateway"
      class="list-simple grid-3 animate-inside in-viewport"
    >
      <BooksItem
        v-for="book in books"
        :key="book.id"
        :book="book"
        :gateway="gateway"
      />
    </ul>

   <div v-else>
     <Spinner />
   </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as ipfsSmartGateway from 'ipfs-smart-gateway';
import BooksItem from './BooksItem.vue';
import Spinner from '../utils/LoaderSpin.vue';

import { translateVue as $tr} from "../../assets/scripts/utils/translate";

const books = [
  { 
    id:0,
    title: $tr("Almanac"),
    img: 'docs-book-6.webp',
    year:'2024>>2025',
    options: [
      {
        link: 'QmZhbgDPFXbZUb419zt6firGHGcRTF1Bu6BsK7qTKsffQh',
        text: 'EN',
        id: 0,
        static: 'https://static.robonomics.network/docs/book-2024-2025/Robonomics.network-Almanac-2024-en.pdf',
        name: 'book2024-2025en'
      },
      {
        link: 'QmSQZsMLfBCYPAXKHGGbzH5U56W3v5RZt55hbBnG8qEmL9',
        text: 'RU',
        id: 1,
        static: 'https://static.robonomics.network/docs/book-2024-2025/Robonomics.network-Almanac-2024-ru.pdf',
        name: 'book2024-2025ru'
      }
    ]
  },
  { 
    id: 1,
    title: $tr("Robonomics R&D"),
    img: 'docs-book-5.webp',
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
    id: 2,
    title: $tr('R&D 18-28'),
    img: 'docs-book-4.webp',
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
    id: 3,
    title: $tr('R&D 1-17'),
    img: 'docs-book-3.webp',
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
    id: 4,
    title: $tr('Robot economics'),
    img: 'docs-book-2.webp',
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
    id: 5,
    title: $tr('Robot economics'),
    img: 'docs-book-1.webp',
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
];

ipfsSmartGateway.configure({
  stopOnFirstSuccess: true,
  persistStorage: false,
  timeout: 3000
});

ipfsSmartGateway.setUserGateways([
  'https://gw.crust-gateway.xyz',
  'https://gw.crust-gateway.com',
  'https://gateway.pinata.cloud',
  'https://ipfs.io',
]);

const gateway = ref(null);

onMounted(async () => {
  try {
    await ipfsSmartGateway.checkGateways({ cid: 'QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C' });
    const picked = ipfsSmartGateway.getPickedGateway();
    gateway.value = picked || 'https://gw.crust-gateway.xyz/ipfs/';
  } catch (e) {
    console.error("❌ Gateway fetch failed. Using fallback.", e);
  }
});
</script>


<style scoped>
  .books__list div {
    display: flex;
    margin: 0 auto;
  }
</style>
