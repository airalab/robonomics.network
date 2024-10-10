<template>
    
    <nav class="sidetext" :class="{'open': isOpen}">

        <div class="nav-toggler" tabindex="0" @click="isOpen = !isOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div  class="nav-content">
            <Navigation/>
            <Contacts withoutGap/>
        </div>

    </nav>
</template>

<style scoped>

    /* nav {
        font-size: 75% !important;
    } */

    nav:not(.open) .nav-content li {
        white-space: nowrap;
    }

    .nav-content {
        display: none;
        position: fixed;
        z-index: 1012;
        top: var(--screen-padding-top);
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        /* padding: var(--space); */
        padding-top: calc(var(--space)*2);
        transform: translateX(-20px);
        opacity: 0;
        animation: navContent 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        overflow-y: auto;
        text-align: left;
    }

    .nav-content .navigation__layout {
        margin-bottom: var(--space);
    }

    ul, li {
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0 calc(var(--space)*0.35) calc(var(--space)*0.35);
        letter-spacing: 0;
        font-weight: 400;
    }

    /* li:first-child {
        margin-top: calc(var(--space)*0.5);
    } */

    li a {
        color: var(--color-dark);
        text-decoration: none;
    }

    .nav-toggler {
        width: 42px;
        height: 37px;
        cursor: pointer;
        padding: 0.55rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid transparent;
    }

    .nav-toggler div {
        height: 3.5px;
        width: 100%;
        background-color: var(--color-dark);  
        border-radius: 5px;
    }

    .nav-toggler div:not(:last-child) {
        margin-bottom: 2px;
    }

    .open  .nav-content {
        display: block;
        /* display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        gap: var(--space) */
    }

    .open .nav-toggler div {
        transform-origin: 50% 62%;
        transition: 0.1s linear all;
    }
    
    .open .nav-toggler div:nth-child(1) {
        transform: rotate(45deg);
        position: relative;
        top: calc(50% - 1px)
    }

    .open .nav-toggler div:nth-child(2) {
        display: none;
    }

    .open .nav-toggler div:nth-child(3) {
        transform: rotate(135deg);
        position: relative;
        top: calc(-44% + 0.5px);
    }

    .nav-content > li:not(:last-child) {
        margin-bottom: calc(var(--space) * 0.5);
    }

    .nav__item {
        display: flex;
        flex-direction: column;
        gap: calc(var(--space) * 0.8);
        font-family: var(--font-family);
        font-weight: 500;
        font-size: var(--base-font-size);
    }

    .nav__item--icon {
        gap: var(--space);
    }

    .nav__link-with-icon {
        padding: calc(var(--space) * 0.5);
        min-height: 92px;
        display: flex;
        align-items: center;
        font-size: var(--base-font-size);
        font-weight: 500;
        letter-spacing: 1px;
        background-position: 20px;
        background-size: 40px 40px;
        background-repeat: no-repeat;
        color: var(--color-dark);
        border: 1px solid var(--color-dark);
        text-transform:uppercase;
    }

    .nav__link-with-icon:hover {
        border: 1px solid var(--color-blue);
    }

    .nav__link-with-icon svg {
        margin-right: calc(var(--space) * 0.5);
    }

    .nav__link-with-icon svg path {
        fill: var(--color-dark);
    }

    .nav__link-with-icon--devices svg path {
        stroke: var(--color-dark);
        fill: none;
    }
    
    .nav__link-with-icon:hover svg path {
        fill: var(--color-blue);
    }

    .nav__link-with-icon--devices:hover svg path {
        stroke: var(--color-blue);
        fill: none;
    }

    .nav__item-header {
        display: flex;
        justify-content: space-between;
    }

    .nav__item-header--links {
        display: flex;
        flex-direction: column;
        gap: calc(var(--space) * 0.4);
    }

    .nav__item-footer {
        display: flex;
        flex-direction: column;
        gap: calc(var(--space) * 0.4);
        padding: calc(var(--space) * 0.7);
        background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0.999999C15 0.447715 14.5523 -5.74472e-07 14 -8.27353e-07L5 -2.65626e-08C4.44772 -3.63737e-07 4 0.447715 4 1C4 1.55228 4.44772 2 5 2L13 2L13 10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10L15 0.999999ZM1.70711 14.7071L14.7071 1.70711L13.2929 0.292893L0.292893 13.2929L1.70711 14.7071Z' fill='black'/%3E%3C/svg%3E%0A");
        background-position: top 10px right 10px;
        border: 1px solid var(--color-dark);
        background-repeat: no-repeat;
    }

    .nav__item-footer-link {
        /* padding-left: calc(var(--space) * 0.5); */
        display: flex;
        align-items: center;
        background-position: 10px 2px;
        background-size: 22px 22px;
        background-repeat: no-repeat;
        color: var(--color-dark);
    }

    .nav__item-footer-link svg {
        margin-right: calc(var(--space) * 0.5);
    }

    .nav__item-footer-link svg path {
        fill: var(--color-dark);
    }

    .nav__item-footer-link:hover svg path {
        fill: var(--color-blue);
    }

    @keyframes navContent {
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media screen and (max-width: 950px) {
        .open .nav-content {
            grid-template-columns: repeat(2, 1fr);
        }

        .nav-toggler {
            width: 38px;
            height: 32px;
        }


        .nav-toggler div {
            height: 3px;
        }

        
    }

    @media screen and (max-width: 510px) {
        .open .nav-content {
            grid-template-columns: 1fr;
            justify-items: start;
        }

        .new-column {
            margin-top: calc(var(--space) * 2);
        }
    }


</style>

<script>
    export default {

        components: { 
            Navigation: () => import ('../Navigation.vue'),
            Contacts: () => import ('../footer/Contacts.vue')
        },

        data() {
            return {
                isOpen: false,
            }
        },


        mounted() {

            // Close all opened details on body click
            document.body.onclick = (e) => {
                const current = e.target.parentNode; //save clicked element to detect if it is our current detail

                document.body.querySelectorAll('nav:not(.open) details')
                    .forEach((e) => {
                       if(e !== current){ //we need this condition not to break details behavior
                           e.open = false
                       }
                })

            }

        }
    }
</script>
