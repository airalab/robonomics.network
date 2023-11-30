<template>
    
    <nav class="sidetext" :class="{'open': isOpen}">

        <div class="nav-toggler" tabindex="0" @click="isOpen = !isOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <ul class="nav-content">

            <li><g-link to="/white-paper">{{$t('White Paper 2022')}}</g-link></li>
            <li><g-link to="/timeline">{{$t('Timeline')}}</g-link></li>
            <li><g-link to="/xrt">{{$t('Tokenomics')}}</g-link></li>
            <li><g-link to="/kusama-slot">{{$t('Parachain')}}</g-link></li>
            <li><g-link to="/papers">{{$t('Science papers')}}</g-link></li>
            <li class="new-column"><g-link to="/shop">{{$t('Shop')}}</g-link></li>
            <li><g-link to="/books">{{$t('Books')}}</g-link></li>
            <li><g-link to="/logos-and-assets">{{$t('Logo and assets')}}</g-link></li>
            <li><g-link to="/wallpapers">{{ $t('Wallpapers') }}</g-link></li>
            <li><g-link to="/nft">NFT</g-link></li>
            <li><g-link to="/cases">{{ $t('Cases') }}</g-link></li>
            <li><g-link to="/devices">{{$t('Devices')}}</g-link></li>
            <li ><g-link to="/blog">{{$t('Blog')}}</g-link></li>
            <li><g-link to="/ambassador-program">{{$t('Ambassador program')}}</g-link></li>
            <li><g-link to="/contact">{{$t('Contacts')}}</g-link></li>

            <li class="new-column"><g-link to="https://wiki.robonomics.network">{{$t('Wiki')}}</g-link></li>
            <li><g-link to="https://robonomics.academy">{{$t('Academy')}}</g-link></li>
            <li><g-link to="https://github.com/airalab">{{$t('Github')}}</g-link></li>
            <li><g-link to="https://dapp.robonomics.network/#/">{{$t('Dapp')}}</g-link></li>

        </ul>

    </nav>
</template>

<style scoped>

    nav {
        font-size: 75% !important;
    }

    nav:not(.open) .nav-content li {
        white-space: nowrap;
    }

    .nav-content {
        display: none;
        position: fixed;
        z-index: 1012;
        top: calc(var(--screen-padding-top) - -3px);
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-light);
        padding: var(--space);
        padding-top: calc(var(--space)*2);
        transform: translateX(-20px);
        opacity: 0;
        animation: navContent 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        overflow-y: auto;
        text-align: left;
    }

    ul, li {
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0 calc(var(--space)*0.35) calc(var(--space)*0.35);
        letter-spacing: 0;
        font-weight: 400;
        font-family: var(--font-family-code);
    }

    /* li:first-child {
        margin-top: calc(var(--space)*0.5);
    } */

    li a[target=_blank]:after {
        content: "↗";
        margin-left: 0.1rem;
        font-size: 140%;
        line-height: 0;
    }

    li a {
        font-size: var(--base-font-size);
        color: var(--color-dark);
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav-toggler {
        width: 37px;
        height: 37px;
        cursor: pointer;
        padding: 0.45rem 0.35rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid var(--color-dark);
    }

    .nav-toggler div {
        height: 2.5px;
        width: 100%;
        background-color: var(--color-dark);  
    }


    .dark-theme .nav-content {
        background-color: var(--body-bg);
    }

    .open .nav-content {
        display: block;
        columns: 3;
    }

    .open .nav-toggler div {
        transform-origin: 50% 50%;
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
        top: calc(-50% + 2px)
    }

    .nav-content > li:not(:last-child) {
        margin-bottom: calc(var(--space) * 0.5);
    }

    @keyframes navContent {
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media screen and (max-width: 950px) {
        .open .nav-content {
            columns: 2;
        }


        .nav-toggler {
            width: 30px;
            height: 30px;
        }


    }

    @media screen and (max-width: 510px) {
        .open .nav-content {
            columns: 1;
            text-align: left;
        }

        .new-column {
            margin-top: calc(var(--space) * 2);
        }
    }


</style>

<script>
    export default {

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

            // document.querySelector('.nav-toggler').addEventListener('click', function(){
            //     document.body.querySelector('nav').classList.toggle('open');
            // });

        }
    }
</script>
