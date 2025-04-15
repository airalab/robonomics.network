<template>
  <div>
    <div class="cases__banner layout layout__content">
      <!-- tags -->
      <div class="cases-tags">
        <span class="cases__small-text">{{ $tr('By interest:') }}</span>
        <div class="cases-tags__wrapper">
          <div class="cases__tag" :key="tag" :class="{ active: currTags.includes(tag) }" @click="activateTag(tag)"
            v-for="tag in tags">
            <span> {{ tag }} </span>
            <span v-if="currTags.includes(tag)" class="delete-tag"></span>
          </div>
        </div>
      </div>

      <!-- filters -->
      <div class="cases-filter">
        <div class="cases-filter__option">
          <span class="cases__small-text">{{ $tr('Sort by progress:') }}</span>
          <select v-model="caseProgress">
            <option value="any progress">{{ $tr('Any progress') }}</option>
            <option value="complete">{{ $tr('Complete') }}</option>
            <option value="proceeding">{{ $tr('Proceeding') }}</option>
          </select>
        </div>
        <div class="cases-filter__option">
          <span class="cases__small-text">{{ $tr('Sort by time:') }}</span>
          <select v-model="caseDate">
            <option value="recent">{{ $tr('Recent') }}</option>
            <option value="earliest">{{ $tr('Earliest') }}</option>
          </select>
        </div>
      </div>
    </div>

    <ul v-if="filteredCases.length > 0" class="layout blog_grid text-center cases__wrapper list-simple">
      <li class="cases__item" v-for="caseItem in filteredCases" :key="caseItem.id">
        <div class="post-card oldy post-card--case" :class="{ 'in-progress': !caseItem.done }">
          <a :href="caseItem.done ? '/' + caseItem.path + '/' : '/cases/'" target="_blank"
            aria-label="learn more about the case">
            <img v-if="caseItem.cover_image" alt={caseItem.title} class="post-card__image"
              :src="`/images/cases/${caseItem.cover_image}`"
              loading="lazy" />
          </a>
          <div class="post-card__content">
            <a :href="caseItem.done ? '/' + caseItem.path + '/' : '/cases/'" target="_blank"
              aria-label="learn more about the case">
              <h4 class="post-card__title" v-html="caseItem.title" />
            </a>

            <p class="post-card__description" v-html="caseItem.description" />
            <div class="post-card__cases-bottom">
              <div class="post-card__tags">
                <span v-for="tag in caseItem.tags" :key="tag" class="post-card__tag">
                  {{ tag }}
                </span>
              </div>
              <div :class="['post-card__status', { 'progress': caseItem.progress === 'proceeding' }]" />
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- Show more button -->
    <button 
      class="btn-show-more" 
      @click="nextPage" 
      v-if="!tagsArrayLength ? filteredCases.length !== cases.length : filteredCases.length !== tagsArrayLength"
      :disabled="isLoading || noMorePosts">
      <div v-if="isLoading" class="spinner"></div>
      <span v-if="isLoading">Loading...</span>
      <span v-else>{{$tr('Show more')}}</span>
    </button>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { translateVue as $tr } from '../../assets/scripts/utils/translate';

const props = defineProps({
  items: {
    type: Array,
    default: []
  },
})

// Computed properties
const cases = computed(() => props.items.cases);

// Data variables using ref()
const caseDate = ref('recent');
const caseProgress = ref('any progress');
const currTags = ref([]);
const tags = ref(['All', ...new Set(cases.value.flatMap(item => item.tags.map(tag => tag.toLowerCase())))]);
const currentPage = ref(1);
const visible = ref(9);
const showNext = ref(3);
const tagsArrayLength = ref(null);
const isLoading = ref(false);  // Loading state
const noMorePosts = ref(false);  // To disable button if there are no more posts

const filteredCases = computed(() => {
  let filtered = [];

  // Filter cases based on the selected tags
  if (currTags.value.length) {
    cases.value.forEach((cs) => {
      const caseContainsTag = (tag) => cs.tags.includes(tag);
      if (currTags.value.some(caseContainsTag)) {
        filtered.push(cs);
      }
    });
    tagsArrayLength.value = filtered.length;
  } else {
    tagsArrayLength.value = null;
  }

  // Apply further filters based on the selected date and progress
  if (filtered.length) {
    filtered = filterProgress(filterDate(filtered));
  } else {
    filtered = filterProgress(filterDate(cases.value));
  }

  // Paginate the filtered cases
  return currentPage.value === 1
    ? filtered.slice(0, currentPage.value * visible.value)
    : filtered.slice(0, showNext.value * (currentPage.value - 1) + visible.value);
});

// Methods
function filterDate(cases) {
  return caseDate.value === 'recent'
    ? cases.sort((a, b) => new Date(b.updated) - new Date(a.updated))
    : cases.sort((a, b) => new Date(a.created) - new Date(b.created));
}

function filterProgress(cases) {
  if (caseProgress.value !== 'any progress') {
    const first = cases.filter((caseR) => caseR.progress && !caseR.progress.indexOf(caseProgress.value));
    const last = cases.filter((caseR) => caseR.progress && caseR.progress.indexOf(caseProgress.value));
    return [...first, ...last];
  }
  return cases;
}

function activateTag(tag) {
  if (!currTags.value.includes(tag) && tag !== 'all') {
    currTags.value.push(tag);
  } else {
    currTags.value = currTags.value.filter((t) => t !== tag);
  }

  if (tag === 'all') {
    currTags.value = [];
  }
}

function nextPage() {
  if (isLoading.value || noMorePosts.value) return;  // Prevent further clicks while loading or when no more posts are available
  
  isLoading.value = true;

  // Simulate network request for loading new posts (you can replace this with actual API calls)
  setTimeout(() => {
    if (filteredCases.value.length === cases.value.length) {
      noMorePosts.value = true;  // Disable "Show more" button if no more posts
    }

    currentPage.value++;
    isLoading.value = false;
  }, 500); // Simulate a loading delay (adjust as necessary)
}
</script>

<style scoped>
.cases__banner {
  padding-top: calc(var(--space) * 2);
  padding-bottom: calc(var(--space) * 2);
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cases__item {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

/* tags */

.cases-tags {
  max-width: 997px;
  width: 100%;
  margin-right: var(--space);
}

.cases-tags__wrapper {
  text-align: left;
}

.cases-tags .cases__small-text {
  display: block;
  text-align: left;
}

.cases__tag {
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
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7' stroke='%232E49D2' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M1 7L7 1' stroke='%232E49D2' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 8px 8px;
  background-position: 6px 11px;
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
  flex-shrink: 0;
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
  background-size: 14px;
}

.btn-show-more {
  position: relative;
  padding: 20px 40px;
  color: var(--color-blue);
  background-color: transparent;
  font-family: var(--font-family);
  font-weight: 500;
  text-transform: none;
  box-shadow: none;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn-show-more:hover {
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--color-blue);
  opacity: 0.8;
}

.spinner {
  content: url("data:image/svg+xml,%3Csvg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_521_35981)'%3E%3Cpath d='M11.1638 6.36886L10.1333 7.89662C9.77071 8.43422 9.9011 9.15411 10.4251 9.50756C10.9491 9.86101 11.6654 9.71223 12.0281 9.17463L14.6504 5.2869C15.013 4.7493 14.8826 4.02941 14.3586 3.67596L10.5691 1.11994C10.0451 0.766485 9.32899 0.914957 8.96617 1.45286C8.60335 1.99077 8.73394 2.71035 9.25796 3.0638L10.7737 4.08621L9.89212 4.26932C5.50908 5.17967 2.60405 9.48655 3.40191 13.8915C4.19977 18.2964 8.39778 21.128 12.7808 20.2176C17.1639 19.3073 20.0689 15.0004 19.271 10.5955C19.1571 9.96621 18.5561 9.56084 17.9299 9.69089C17.3038 9.82094 16.8879 10.4375 17.0019 11.0668C17.5718 14.2131 15.4965 17.2899 12.3657 17.9402C9.23497 18.5904 6.23597 16.5676 5.66607 13.4212C5.09617 10.2748 7.17148 7.19806 10.3022 6.54781L11.1638 6.36886Z' fill='%232949D3'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_521_35981'%3E%3Crect width='17' height='16' fill='white' transform='translate(0.114563 14.5737) rotate(-56)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  position: absolute;
  top: calc(var(--space) / 1.6);
  right: 2px;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

/* Button styles */
.btn-show-more[disabled] {
  opacity: 0.5;
  pointer-events: none;
}


/* case card */
.post-card--case .post-card__description {
  margin-bottom: calc(var(--space)/2);
}

.post-card--case.in-progress {
  transform: none;
  box-shadow: none;
  opacity: 0.6;
  filter: grayscale(100%);
  pointer-events: none;
}

.post-card--case .post-card__header {
  margin-bottom: 0;
  min-height: 194px;
}

.post-card--case .post-card__header img {
  height: 100%;
}


.post-card--case p {
  font-weight: 500;
  padding-bottom: 60px;
}

.post-card__cases-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 88%;
}

.post-card__status {
  width: 40px;
  height: 25px;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%23D9E021'/%3E%3Cg clip-path='url(%23clip0_476_905)'%3E%3Cpath d='M15.812 8.176C16.0631 8.41034 16.0631 8.7909 15.812 9.02524L10.6697 13.8245C10.4186 14.0588 10.0109 14.0588 9.75978 13.8245L7.18864 11.4249C6.93755 11.1905 6.93755 10.81 7.18864 10.5756C7.43972 10.3413 7.84749 10.3413 8.09858 10.5756L10.2158 12.5497L14.9039 8.176C15.155 7.94166 15.5627 7.94166 15.8138 8.176H15.8118H15.812Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_476_905'%3E%3Crect width='9' height='6' fill='white' transform='translate(7 8)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right;
}

.post-card__status.progress {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%23F9C032'/%3E%3Cg clip-path='url(%23clip0_491_1690)'%3E%3Cpath d='M13.3994 8.85763H12.2069C11.7874 8.85763 11.4484 9.17679 11.4484 9.57183C11.4484 9.96688 11.7874 10.286 12.2069 10.286H15.2413C15.6609 10.286 15.9999 9.96688 15.9999 9.57183V6.71501C15.9999 6.31996 15.6611 6.0008 15.2413 6.0008C14.8215 6.0008 14.4827 6.31996 14.4827 6.71501V7.85774L14.0655 7.46492C11.9912 5.51202 8.62973 5.51202 6.55547 7.46492C4.48121 9.41783 4.48121 12.5827 6.55547 14.5356C8.62973 16.4885 11.9912 16.4885 14.0655 14.5356C14.3618 14.2566 14.3618 13.8035 14.0655 13.5245C13.7692 13.2455 13.2879 13.2455 12.9916 13.5245C11.51 14.9194 9.10859 14.9194 7.62697 13.5245C6.14536 12.1296 6.14536 9.86867 7.62697 8.47374C9.10859 7.07881 11.51 7.07881 12.9916 8.47374L13.3994 8.85763Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_491_1690'%3E%3Crect width='11' height='10' fill='white' transform='translate(5 6)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.post-card__tag {
  display: inline-block;
  font-size: calc(var(--base-font-size) * 0.7);
  color: #999;
}


.post-card__tag::first-letter {
  text-transform: capitalize;
}

.post-card__tag:not(:last-child) {
  margin-right: calc(var(--space) * 0.3);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
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
    margin-right: 0;
    margin-bottom: calc(var(--space) * 0.5);
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