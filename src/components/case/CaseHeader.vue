<template>
  <div>

    <MetaInfo
      :pageTitle = "caseRD[0].title"
      :pageDescription = "caseRD[0].description"
      :pageImage = "caseRD[0].metaImg ? caseRD[0].metaImg : '/website_cover_cases.png'"
    />

    <div class="cases__main-title title-with-bg blue">
        <h1><g-link to="/cases/">{{ $t('R&D cases') }}</g-link></h1>
    </div>

    <section class="case-page__header layout layout__wide">
      <div class="case-page__header-wrapper layout__text">
        <h1>{{ caseRD[0].title }}</h1>
        <div class="case-page__header-info">
          <div class="case-page__status" :class="{'progress': caseRD[0].progress === 'proceeding'}" />
          <div class="case-page__tags">
            <span 
              class="case-page__tag"
              v-for="tag in caseRD[0].tags"
              :key="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="case-page__intro italic-abstract" v-if="text">
          <p v-if="!withExtras">{{ text }}</p>
          <p v-else v-html="text"></p>
        </div>
      </div>
      <g-image immediate v-if="introImg" :src="require(`!!assets-loader!@/assets/images/cases/${introImg}`)" :alt="caseRD[0].title" />
    </section>

  </div>
</template>

<script>

import cases from '@/data/cases.yaml'

export default {

  props: {
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: false
    },
    introImg: {
      type: String,
      default: '',
      required: false
    },
    withExtras: {
      type: Boolean,
      default: false
    }
  },

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
  },

  computed: {
    caseRD() {
      return cases.filter(c => this.path.includes(c.path))
    }
  },

}
</script>

<style scoped>

.case-page__header {
  margin-top: 0;
  margin-bottom: calc(var(--space) * 2);
}

h1 {
  padding-top: 0;
  margin: calc(var(--space) * 0.5) 0;
  /* margin-top: calc(var(--gap) * 0.5); */
  font-family: var(--font-family);
  font-size: calc(var(--base-font-size) * 1.5);
  font-weight: 800;
  text-transform: unset;
  text-align: left;
}
.case-page__header-info {
  display: flex;
  align-items: center;
  margin-bottom: var(--space);
}

  .case-page__status {
    width: 22px;
    height: 22px;
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%23D9E021'/%3E%3Cg clip-path='url(%23clip0_476_905)'%3E%3Cpath d='M15.812 8.176C16.0631 8.41034 16.0631 8.7909 15.812 9.02524L10.6697 13.8245C10.4186 14.0588 10.0109 14.0588 9.75978 13.8245L7.18864 11.4249C6.93755 11.1905 6.93755 10.81 7.18864 10.5756C7.43972 10.3413 7.84749 10.3413 8.09858 10.5756L10.2158 12.5497L14.9039 8.176C15.155 7.94166 15.5627 7.94166 15.8138 8.176H15.8118H15.812Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_476_905'%3E%3Crect width='9' height='6' fill='white' transform='translate(7 8)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right;
    margin-right: calc(var(--space) * 0.6);
  }

  .case-page__status.progress {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%23F9C032'/%3E%3Cg clip-path='url(%23clip0_491_1690)'%3E%3Cpath d='M13.3994 8.85763H12.2069C11.7874 8.85763 11.4484 9.17679 11.4484 9.57183C11.4484 9.96688 11.7874 10.286 12.2069 10.286H15.2413C15.6609 10.286 15.9999 9.96688 15.9999 9.57183V6.71501C15.9999 6.31996 15.6611 6.0008 15.2413 6.0008C14.8215 6.0008 14.4827 6.31996 14.4827 6.71501V7.85774L14.0655 7.46492C11.9912 5.51202 8.62973 5.51202 6.55547 7.46492C4.48121 9.41783 4.48121 12.5827 6.55547 14.5356C8.62973 16.4885 11.9912 16.4885 14.0655 14.5356C14.3618 14.2566 14.3618 13.8035 14.0655 13.5245C13.7692 13.2455 13.2879 13.2455 12.9916 13.5245C11.51 14.9194 9.10859 14.9194 7.62697 13.5245C6.14536 12.1296 6.14536 9.86867 7.62697 8.47374C9.10859 7.07881 11.51 7.07881 12.9916 8.47374L13.3994 8.85763Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_491_1690'%3E%3Crect width='11' height='10' fill='white' transform='translate(5 6)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  .case-page__tag {
    display: inline-block;
    font-size: calc(var(--base-font-size) * 0.7);
    color: #999;
  }


  .case-page__tag::first-letter {
    text-transform: capitalize;
  }

  .case-page__tag:not(:last-child) {
    margin-right: calc(var(--space) * 0.3);
  }


  .case-page__intro p {
    margin-bottom: calc(var(--space) * 0.5);
  }

</style>