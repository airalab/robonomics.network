<template>
  <li v-if="book && book.options"  class="e-books__item">
    <a
      class="e-books__img"
      :href="resolvedOptions.length && resolvedOptions[0].finalUrl"
      aria-label="check the book"
      target="_blank"
    >
      <img :src="`/images/books/${book.img}`" :alt="book.title" loading="lazy" />
    </a>

    <div class="e-books__content">
      <div class="e-book__header">
        <span>{{ book.year }}</span>
        <h3>{{ book.title }}</h3>
      </div>
      <div>
        <Spinner v-if="loading" />
        <div v-else class="e-books__links">
          <a
            v-for="opt in resolvedOptions"
            :key="opt.name"
            :href="opt.finalUrl"
            target="_blank"
          >
            {{ opt.text }}
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Spinner from '../utils/LoaderSpin.vue';

const props = defineProps({
  book: Object,
  gateway: String
});

const loading = ref(true);
const resolvedOptions = ref([]);

const TIMEOUT_MS = 15_000;
const MAX_CACHE_AGE = 3 * 24 * 3600 * 1_000;

const fetchGateway = async (url, timeout = TIMEOUT_MS) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      cache: 'no-store',
      signal: controller.signal
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
};

const resolveLinks = async () => {
  const results = await Promise.all(
    props.book.options.map(async (opt) => {
      const url = props.gateway + opt.link;
      const ok = await fetchGateway(url);
      const finalUrl = ok ? url : opt.static;

      localStorage.setItem(
        opt.name,
        JSON.stringify({ link: finalUrl, date: new Date().toISOString() })
      );

      return { ...opt, finalUrl };
    })
  );

  resolvedOptions.value = results;
};

onMounted(async () => {
  await resolveLinks();
  loading.value = false;

});
</script>

<style scoped>
  
.e-books__item {
  display: grid;
  font-family: var(--font-family);
  font-weight: 900;
  grid-template-columns: 1fr;
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

.e-books__content {
  max-width: 578px;
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--space) * 0.3) calc(var(--space) * 0.75);
  background-color: var(--color-light);
}

.e-book__header {
  display: flex;
  align-items: center;
}

.e-book__header span {
  display: inline-block;
  margin-right: calc(var(--space) * 0.5);
  font-weight: 600;
  font-size: calc(var(--base-font-size) * 0.9);
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
