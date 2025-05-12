<template>
  <section class="section">
    <div class="layout" v-if="images && images.length">
      <div class="gallery grid grid-4">
        <div v-for="img in images" :key="img.filename" class="gallery-item">
          <div class="image-wrapper">
            <Loader />
            <a :href="img.url" :download="img.filename" target="_blank">
              <img
                :src="img.url"
                :alt="img.filename"
                loading="lazy"
                @load="hideLoader($event)"
              />
            </a>
          </div>
        </div>
      </div>

      <nav class="pagination" v-if="totalPages > 1">
        <a
          v-for="pageNum in totalPages"
          :key="pageNum"
          :href="getPageLink(pageNum)"
          :class="{ active: pageNum === currentPage }"
        >
          {{ pageNum }}
        </a>
      </nav>
    </div>

    <div class="layout text-center" v-else>
      No images were loaded...
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loader from '../utils/LoaderSpin.vue';

const images = ref([]);
const totalPages = ref(0);
const currentPage = ref(1);
const limit = 50;
const basePath = '/cases/lugano-2025/gallery';

const getPageFromUrl = () => {
  const path = window.location.pathname;
  const match = path.match(/\/page\/(\d+)/);
  return match ? Number(match[1]) : 1;
};

const getPageLink = (pageNum) => {
  return pageNum === 1 ? basePath + '/' : `${basePath}/page/${pageNum}/`;
};

const hideLoader = (e) => {
  const loader = e.target.parentElement.previousElementSibling;
  if (loader) loader.style.display = 'none';
};

const fetchImages = async () => {
  currentPage.value = getPageFromUrl();
  const res = await fetch(`https://media-roseman.robonomics.network/api/files?limit=${limit}&page=${currentPage.value}`);
  const data = await res.json();
  const result = data.result;

  totalPages.value = result.totalPages;
  images.value = result.files.map((file) => ({
    url: `https://plum-relevant-hamster-134.mypinata.cloud/ipfs/${file.cid}`,
    filename: file.filename,
    timestamp: file.timestamp,
  }));
};

onMounted(fetchImages);
</script>

<style scoped>
.gallery-item {
  position: relative;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  text-align: center;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item img {
  height: auto;
  display: block;
}

.image-wrapper {
  min-height: 40px;
  position: relative;
}

.pagination {
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
  justify-content: center;
}

.pagination a {
  padding: 0.3rem 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: color 0.33s ease-in-out, border 0.3s ease-in-out;
}

.pagination a:hover {
  color: var(--color-blue);
  border: 1px solid var(--color-blue);
}

.pagination a.active {
  font-weight: 700;
  background: var(--rb-color-green-accent);
}
</style>
