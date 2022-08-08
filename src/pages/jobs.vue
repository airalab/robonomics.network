
<template>
  <layout>

    <MetaInfo :pageTitle="$ts('Jobs')" />

    <section class="layout layout__text hyphens">
      <h1>{{ $ts('Jobs') }}</h1>
      <h2>{{ $ts('Who we are') }}</h2>
      <p>{{ $ts('Robonomics is an open source platform for IoT applications. We support a new generation of Internet technologies (web3), which implement the exchange of technical and economic information in the form of atomic transactions between user applications, Internet of Things services and complex robotics.') }}</p>
      <p>{{ $ts('We are always looking for like-minded people who want to develop in the Robonomics team. Below you will see open vacancies.') }}</p>

      <div v-if="$page.jobs.edges.length === 0" class="align-center layout">
        <blockquote>{{ $ts('No available jobs') }}</blockquote>
      </div>

      <div class="jobs">
        <div class="job-card" v-for="edge in $page.jobs.edges" :key="edge.node.id">
          <h3>{{ edge.node.title }}</h3>
          <g-link class="job-card__link" :to="edge.node.path">Link</g-link>
        </div>
      </div>
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


<page-query>
query($locale: String!) {

  jobs: allJob(filter: { published: { eq: true }, locale: { eq: $locale } }) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        path
        employmentOption
      }
    }
  }
}

</page-query>

<script>

export default {
  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
  },
}
</script>

<style scoped>
.jobs {
  display: grid;
  grid-gap: var(--space);
}

.job-card {
  background-color: var(--color-light);
  padding: var(--space);
  padding-bottom: calc(var(--space) / 2);
  padding-top: calc(var(--space) * 1.25);
  position: relative;
}

.job-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.job-card h3 {
  color: var(--color-link);
}

.job-card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>
