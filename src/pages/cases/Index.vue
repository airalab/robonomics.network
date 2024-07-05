<template>
  <layout>

    <MetaInfo
      pageTitle = "Cases"
      :pageDescription = "$static.metadata.siteDescription"
      :pageImage = "'/website_cover_cases.png'"
    />

    <div class="cases-top">

      <div class="cases__main-title title-with-bg">
        <h1><span>{{ $t('R&D cases') }}</span></h1>
      </div>
      <div>
        <p>{{$t('Robonomics is 100% open-source, secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control. Anyone can build services with Robonomics.')}}</p>
        <p>{{$t('Below a list of our  proven applications of modern robotics technologies.')}}</p>
        </div>
    </div>

    

    <section class="cases">

      <div class="cases__banner layout layout__content">
        <!-- tags -->
        <div class="cases-tags">
          <span class="cases__small-text">{{$t('By interest:')}}</span>
          <div class="cases-tags__wrapper">
            <div 
              class="cases__tag"  
              :key="tag"
              :class="{active: currTags.includes(tag)}"
              @click="activateTag(tag)" 
              v-for="tag in tags" 
            >
              <span> {{ tag }} </span>
              <span v-if="currTags.includes(tag)" class="delete-tag"></span>
            </div>
           
          </div>
        </div>
        <!-- filters -->
        <div class="cases-filter">
          <div class="cases-filter__option">
            <span class="cases__small-text">{{$t('Sort by progress:')}}</span>
            <select v-model="caseProgress">
              <option value="any progress">{{$t('Any progress')}}</option>
              <option value="complete">{{$t('Complete') }}</option>
              <option value="proceeding">{{$t('Proceeding')}}</option>
            </select>
          </div>
          <div class="cases-filter__option">
            <span class="cases__small-text">{{$t('Sort by time:')}}</span>
            <select v-model="caseDate">
              <option value="recent">{{$t('Recent')}}</option>
              <option value="earliest">{{$t('Earliest')}}</option>
            </select>
          </div>
        </div>
      </div>


      <ul v-if="filteredCases.length > 0" class="layout blog_grid text-center cases__wrapper list-simple">
        <li class="cases__item" v-for="caseR in filteredCases"
        :key="caseR.id"> 
          <PostCard 
            :post="caseR" 
            :isCase="true"
            :class="{'in-progress': !caseR.done}"
          />
        </li>
      </ul>

      <rb-button class="btn-show-more" @click="nextPage" v-if="!tagsArrayLength ? this.filteredCases.length !== this.cases.length : this.filteredCases.length !== tagsArrayLength">{{$t('Show more') }}</rb-button>

    </section>

  </layout>
</template>

<static-query>
  query {
    metadata {
      siteName,
      siteDescription
    }
  }
</static-query>

<script>

export default {
  

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    PostCard: () => import('~/components/PostCard.vue'),
    Abstract: () => import('~/components/TextAbstract.vue'),
  },

  data() {
    return {
      caseDate: 'recent',
      caseProgress: 'any progress',
      // currTag: 'all',
      currTags: [],
      tags: ['all', 'smart home', 'carbon footprint offsetting', 'robotics', 'ethereum', 'polkadot ecosystem', 'sensors', 'data storage', 'smart service'],
      currentPage: 1,
      visible: 9,
      showNext: 3,
      tagsArrayLength: null,
      cases: [
        {
          id: 0,
          title: this.$t('Fronius Solar.web integration with Home Assistant'),
          description: this.$t('Collaboration with real estate developer on Cyprus for tracking the daily distribution, consumption and offsetting any excess carbon footprint.'),
          path: 'cases/fronius-solar-web',
          cover_image: 'fronius-solar-web.png',
          metaImg: '/website_cover_fronius_solar_web.png',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-12-31',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-07-14',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['smart home', 'carbon footprint offsetting'],
          done: true
        },
        {
          id: 1,
          title: this.$t('Robonomics Middleware Framework for ROS 2'),
          description: this.$t('One of our goals in developing this case is to turn Robonomics into ROS 2 Middleware.This will allow us to use Robonomics on Substrate to create an dapp that can run ROS 2 right from the browser!'),
          path: 'cases/rust-for-ros2',
          cover_image: 'rust-ros2.jpg',
          metaImg: '/website_cover_rust_ros2.png',
          // progress field needs for "sort by progress" filter
          progress: 'proceeding',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-08-08',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-07-12',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics'],
          done: true
        },
        {
          id: 2,
          title: this.$t('Eisenkoch, the robot chef'),
          description: this.$t('Real case fot the robot equipped with two waffle irons and baking 6 waffles at the same time in 5-7 minutes.'),
          path: 'cases/eisenkoch',
          cover_image: 'eisenkoch.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-03-27',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-03-27',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics', 'polkadot ecosystem', 'smart service'],
          done: false
        },
        {
          id: 3,
          title: this.$t('Blockchain-powered smart coffee machine'),
          description: this.$t('Robonomics coffee - is a smart coffee machine integrated in Robonomics Network. This project aims to show Robonomics potential in the IoT sphere by a real-world example.'),
          path: 'cases/blockchain-coffee-machine',
          cover_image: 'blockchain-coffee.jpg',
          metaImg: '/website_cover_coffee-machine.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-02-11',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-02-11',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['smart service', 'polkadot ecosystem'],
          done: true
        },
        {
          id: 4,
          title: this.$t('Water environmental inspector'),
          description: '',
          path: 'cases/water-inspector',
          cover_image: 'water-inspector.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-01-16',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-01-16',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics', 'polkadot ecosystem', 'sensors', 'data storage'],
          done: false
        },
        {
          id: 5,
          title: this.$t('Air monitoring network'),
          description: '',
          path: 'cases/air-monitoring-network',
          cover_image: 'air-monitoring.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'proceeding',
          // created field needs for "sort by date" filter (for earliest option)
          // created: '2022-01-03'
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-01-03',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['polkadot ecosystem', 'sensors', 'data storage'],
          done: false
        },
        {
          id: 6,
          title: this.$t('Production quality control platform “Feecc”'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'feecc.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'proceeding',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2021-05-06',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2022-05-06',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['polkadot ecosystem', 'data storage', 'smart service'],
          done: false
        },
        {
          id: 7,
          title: this.$t('Backup and archiving service for robotics companies'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'robotic-companies.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2021-04-18',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2022-04-18',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics', 'polkadot ecosystem', 'data storage'],
          done: false
        },
        {
          id: 8,
          title: this.$t('Public lab with Boston Dynamics Spot'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'spot.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'proceeding',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2021-11-05',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2022-11-05',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics', 'polkadot ecosystem', 'ethereum', 'smart service'],
          done: false
        },
        {
          id: 9,
          title: this.$t('Autonomous telescope service'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'telescope.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2022-06-02',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2022-12-17',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['robotics', 'polkadot ecosystem', 'smart service'],
          done: false
        },
        {
          id: 10,
          title: this.$t('Smart home secure remote control and backup service'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'smart-home.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'proceeding',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2021-01-21',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2023-02-15',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['polkadot ecosystem', 'smart home', 'data storage'],
          done: false
        },
        {
          id: 11,
          title: this.$t('Blockchain as quality control system for chemistry'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'blockchain-chemistry.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2020-12-09',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2022-10-15',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['ethereum', 'smart service', 'data storage'],
          done: false
        },
        {
          id: 12,
          title: this.$t('Real CO2 emissions reduction with blockchain-proven certificates'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'emissions.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2020-08-22',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2021-04-11',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['ethereum', 'smart service', 'carbon footprint offsetting'],
          done: false
        },
        {
          id: 13,
          title: this.$t('Robot-artist Gaka-Chu'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'gakachu.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2020-03-19',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2021-05-06',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['ethereum', 'smart service'],
          done: false
        },
        {
          id: 14,
          title: this.$t('Demo “Get the weather of Fuji mountain”'),
          description: '',
          path: 'cases/quality-control-platform-feecc',
          cover_image: 'fuji.jpg',
          // progress field needs for "sort by progress" filter
          progress: 'complete',
          // created field needs for "sort by date" filter (for earliest option)
          created: '2020-02-17',
          // updated field needs for "sort by date" filter (for recent option)
          updated: '2021-03-17',
          // tags field needs for "sort by interest" filter
          // use lowerCase
          tags: ['ethereum', 'smart service'],
          done: false
        }
      ]
    }
  },

  computed: {
    // cases() {
    //   return cases;
    // },

    filteredCases() {
      let filtered = [];

      if(this.currTags.length) { 
        this.cases.forEach((cs) => {

        const caseContainsTag = (tag) => {
            return cs.tags.indexOf(tag) != -1;
          }
          if(this.currTags.some(caseContainsTag)) {
            filtered.push(cs);
          }
        })
        this.tagsArrayLength = filtered.length;
      } else {
        this.tagsArrayLength = null;
      }

        if(filtered.length) {
          filtered = this.filterProgress(this.filterDate(filtered))
        } else {
          const filterCases = () => {
            return this.filterProgress(this.filterDate(this.cases))
          }
          filtered.push(...filterCases())
        }

      return this.currentPage === 1 ? filtered.slice(0, this.currentPage * this.visible) : filtered.slice(0, this.showNext * (this.currentPage - 1) + this.visible)
    },

    // totalPages() {
    //     return Math.ceil(this.cases.length / this.visible)
    // }
  },

  methods: {

    filterDate(cases) {
      if(this.caseDate === 'recent') {
        return cases.sort((a, b) => new Date(b.updated) - new Date(a.updated))
      } else {
        return cases.sort((a, b) => new Date(a.created) - new Date(b.created))
      }
    },

    filterProgress(cases) {
      if(this.caseProgress !== 'any progress') {
        const first = cases.filter(caseR => caseR.progress && !caseR.progress.indexOf(this.caseProgress))
        const last = cases.filter(caseR => caseR.progress && caseR.progress.indexOf(this.caseProgress))

        return [...first, ...last]
      } else {
        return cases;
      }
    },

    activateTag(tag) {
      if(!this.currTags.includes(tag) && tag !== 'all') {
        this.currTags.push(tag)
      } else {
        this.currTags = this.currTags.filter(t => t !== tag);
      }

      if(tag === 'all') {
        this.currTags = [];
      }
    },

    nextPage() {
      console.log(this.currentPage)
      if(this.filteredCases.length !== this.cases.length) this.currentPage++;
      // if(this.currentPage < this.totalPages) this.currentPage++;
    }
  },

}
</script>

<style scoped>
  .cases {
    margin-top: 0;
    text-align: center;
  }

  .cases-top {
    display: flex;
    padding-right: calc(var(--space) * 2);
  }

  .cases__main-title {
    max-width: 340px;
    margin-right: 2rem;
  }

  .cases-top p {
    align-self: flex-end;
    font-weight: 300;
    font-style: italic;
    max-width: 910px;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
  }

  .cases-top p:first-of-type {
    padding-top: calc(var(--space) * 2);
  }

  .cases__banner {
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 2);
  }

  .cases__item{
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }

  .cases__item .in-progress {
    opacity: 0.6;
    filter: grayscale(100%);
  }
  .cases__banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* tags */

  .cases-tags {
    max-width: 997px;
    width: 100%;
  }

  .cases-tags__wrapper {
    text-align: left;
  }

  .cases-tags .cases__small-text {
    display: block;
    text-align: left;
  }

  .cases__tag{
    display: inline-block;
    color: var(--color-blue);
    cursor: pointer;
  }

  .cases__tag.active {
    font-weight: 500;
    color: var(--color-dark);
  }

  .cases__tag::first-letter {
    text-transform: capitalize;
  }

  .cases__tag:not(:last-of-type) {
    margin-right: calc(var(--space) * 0.8);
  }

  .delete-tag {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7' stroke='%232E49D2' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M1 7L7 1' stroke='%232E49D2' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: 8px 8px;
    background-position: left;
  }

  /* tags end */

  /* filter */
  .cases-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .cases-filter b {
    margin-right: var(--space);
  }

  .cases-filter__option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: calc(var(--space) * 0.2) calc(var(--space) * 0.5);
    font-family: var(--font-family);
    color: var(--color-dark);
    background-color: var(--color-light);
    border: 1px solid var(--color-dark);
  }

  .cases-filter__option:first-of-type {
    margin-right: calc(var(--space) * 0.3);
  }

  /* filter end */

  .cases__small-text {
    font-weight: 300;
    font-size: calc(var(--base-font-size) * 0.9);
  }

  .cases-filter__option select {
    background-color: transparent;
    border: transparent;
    padding: 0;
    padding-right: calc(var(--space) * 2);
    font-family: var(--font-family);
    font-weight: 400;
    color: var(--color-dark);
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.33224 8.75071C6.93646 9.34483 6.06354 9.34483 5.66776 8.75072L1.04032 1.80442C0.597597 1.13984 1.07402 0.25 1.87256 0.25L11.1274 0.25C11.926 0.25 12.4024 1.13984 11.9597 1.80442L7.33224 8.75071Z' fill='black'/%3E%3C/svg%3E");
  }
  .btn-show-more {
    position: relative;
    padding: 20px 40px;
    /* padding-right: calc(var(--space) * 1.2); */
    color: var(--color-blue);
    background-color: transparent;
    font-family: var(--font-family);
    font-weight: 500;
    text-transform: none;
    box-shadow: none;
    border: 1px solid transparent;
  }

  .btn-show-more::after {
    content: url("data:image/svg+xml,%3Csvg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_521_35981)'%3E%3Cpath d='M11.1638 6.36886L10.1333 7.89662C9.77071 8.43422 9.9011 9.15411 10.4251 9.50756C10.9491 9.86101 11.6654 9.71223 12.0281 9.17463L14.6504 5.2869C15.013 4.7493 14.8826 4.02941 14.3586 3.67596L10.5691 1.11994C10.0451 0.766485 9.32899 0.914957 8.96617 1.45286C8.60335 1.99077 8.73394 2.71035 9.25796 3.0638L10.7737 4.08621L9.89212 4.26932C5.50908 5.17967 2.60405 9.48655 3.40191 13.8915C4.19977 18.2964 8.39778 21.128 12.7808 20.2176C17.1639 19.3073 20.0689 15.0004 19.271 10.5955C19.1571 9.96621 18.5561 9.56084 17.9299 9.69089C17.3038 9.82094 16.8879 10.4375 17.0019 11.0668C17.5718 14.2131 15.4965 17.2899 12.3657 17.9402C9.23497 18.5904 6.23597 16.5676 5.66607 13.4212C5.09617 10.2748 7.17148 7.19806 10.3022 6.54781L11.1638 6.36886Z' fill='%232949D3'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_521_35981'%3E%3Crect width='17' height='16' fill='white' transform='translate(0.114563 14.5737) rotate(-56)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    position: absolute;
    top: calc(var(--space) / 1.6);
    right: 2px;
    width: 24px;
    height: 24px;
  }

  .btn-show-more:hover {
    background-color: transparent;
    border: 1px solid transparent;
    color: var(--color-blue);
  }

  .btn-show-more:hover::after {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }
  
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}


  @media screen and (max-width: 850px) {
    .cases__banner {
      padding-top: 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .cases-tags {
      margin-bottom: calc(var(--space) * 0.5);
    }

    .cases-top  {
      flex-direction: column;
      margin-bottom: var(--space);
    }

    .cases__main-title {
      max-width: unset;
    }

    .cases-top p{
      padding: 0 var(--space);
    }
  }

  @media screen and (max-width: 480px) {
    .cases-filter {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .cases-filter__option:first-of-type {
      margin-bottom: var(--space);
    }
  }
</style>