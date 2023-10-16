<template>
    <div class="author layout layout__text_small" v-if="author==='@ensrationis'">
        <span>By:</span>
        <g-link to="https://twitter.com/EnsRationis">@ensrationis</g-link>
        <g-link to="https://twitter.com/EnsRationis"><g-image quality="75" src="~/assets/images/avatars/Sergey-Lonshakov.jpg" /></g-link>
    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            default: null
        }
    },
    // components: {
    //   Card: () => import("~/components/TextCard.vue")
    // }
}
</script>

<style scoped>
    .author > * {
        display: inline-block;
        vertical-align: middle;
    }

    .author > *:not(:last-child) {
        margin-right: var(--space);
    }

    img {
        max-width: 60px;
        border-radius: 30px;
    }
</style>