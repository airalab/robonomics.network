<template>
  <div class="post-card" :class="{'post-card--case': isCase}">
    <div class="post-card__header" v-if="!isCase">
      <g-image :alt="post.title" v-if="post.cover_image" class="post-card__image" :src="post.cover_image"/>
    </div>
    <g-link :to="post.done ? post.path : '/cases/'" v-if="isCase">
      <g-image :alt="post.title" v-if="isCase && post.cover_image" class="post-card__image" :src="require(`!!assets-loader!@/assets/images/cases/${post.cover_image}`)"/>
    </g-link>
    <div class="post-card__content">
      <g-link :to="post.done ? post.path : '/cases/'" v-if="isCase">
        <h4 class="post-card__title" v-html="$t(post.title)" />
      </g-link>
     <h4 v-if="!isCase" class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="$t(post.description)" />
      <span v-if="locale" class="post-card__locale">{{locale}}</span>
      <div class="post-card__cases-bottom" v-if="isCase">
      <div class="post-card__tags">
        <span 
          class="post-card__tag"
          v-for="tag in post.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>
      <div class="post-card__status" :class="{'progress': post.progress === 'proceeding'}" />
      </div>
    </div>
    <g-link v-if="!isCase"  class="post-card__link" :to="post.path">Link</g-link>
  </div>
</template>



<script>

export default {
  props: ['post', 'locale', 'isCase'],
}
</script>

<style scoped>
  .post-card {
    background-color: var(--color-light);
    position: relative;
    height: 100%;
  }

    .post-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }

    .post-card h4 {
      padding-top: calc(var(--space)/2);
      text-transform: none;
      font-weight: 500;
      letter-spacing: 0;
      text-align: left;
    }


    .post-card__link {
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

    .post-card__header {
      margin-bottom: calc(var(--space)/2);
    }
    .post-card__header img {
      display:block;
    }
    
    .post-card__content {
      padding-left: calc(var(--space)/2);
      padding-right: calc(var(--space)/2);
      padding-bottom: calc(var(--space)/2);
      font-size: 90%;
      text-align: left;
    }

     .post-card__content h4 {
        margin-bottom: calc(var(--space)/2);
      }
    

    .post-card__description {
      margin-bottom: 0;
      font-size: calc(var(--base-font-size)*0.9);
    }

    .post-card--case .post-card__description {
      margin-bottom: calc(var(--space)/2);
    }

    .post-card__locale {
      margin-top: 10px;
      display: block;
      text-align: right;
      font-weight: 600;
      font-style: italic;
    }

    /* for cases */
    /* .post-card--case {
      display: grid;
      grid-template-columns: subgrid;
    } */

    .post-card--case.in-progress {
      transform: none;
      box-shadow: none;
    }

    .post-card--case .post-card__header  {
      margin-bottom: 0;
      min-height: 194px;
    }

    .post-card--case .post-card__header img {
      height: 100%;
    }


    .post-card--case p {
      font-weight: 500;
      padding-bottom: 60px;
      /* margin-bottom: calc(var(--space) * 0.5); */
    }

    .post-card--case.in-progress a {
      cursor: default;
    }

    .post-card__cases-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 20px;
      width: 92%;
    }

    .post-card__status {
      width: 22px;
      height: 22px;
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
  
</style>