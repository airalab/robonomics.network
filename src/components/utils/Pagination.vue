<template>
  <Pager class="pagination" 
    :info="pageInfo"
    firstLabel=""
    lastLabel=""
    prevLabel=""
    nextLabel=""
  />
</template>

<script>
  import { Pager } from 'gridsome';
export default {
  
  components: {Pager},
  
  props: {
    pageInfo: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--space) 0;
  }

  .pagination a {
    color: var(--color-blue);
    text-decoration: none;
  }

  .pagination a:not(:last-child) {
    margin-right: 45px;
  }


  .pagination a.active {
    color: var(--color-dark);
  }

  .pagination a:hover {
    opacity: 0.5;
  }

  .pagination a[aria-label="Go to first page"],
  .pagination a[aria-label^="Go to last page"],
  .pagination a[aria-label^="Go to previous page."],
  .pagination a[aria-label^="Go to next page."]
   {
    font-family: 'customIcons';
    font-size: 1.5rem;
  }

  .pagination a[aria-label="Go to first page"],
  .pagination a[aria-label^="Go to previous page."]
  {
    color: var(--color-dark);
  }

  .pagination a[aria-label^="Go to last page"],
  .pagination a[aria-label^="Go to next page."] {
    display: inline-block;
    transform: scale(-1);
  }


  @media screen and (max-width: 480px) {
    .pagination a:not(:last-child) {
      margin-right: 25px;
    }
  }
</style>