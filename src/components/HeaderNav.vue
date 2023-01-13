<template>
    
    <nav class="sidetext" :class="{'open': isOpen}">

        <div class="nav-toggler" tabindex="0" @click="isOpen = !isOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <ul class="nav-content">

            <li><g-link to="/white-paper-2022">{{$ts('White Paper 2022')}}</g-link></li>
            <li><g-link to="/timeline">{{$ts('Timeline')}}</g-link></li>
            <li><g-link to="/xrt">{{$ts('Tokenomics')}}</g-link></li>
            <li><g-link to="/kusama-slot">{{$ts('Parachain')}}</g-link></li>
            <li><g-link to="/papers">{{$ts('Science papers')}}</g-link></li>
            <li class="new-column"><g-link to="/books">{{$ts('Graphic books')}}</g-link></li>
            <li><g-link to="/logos-and-assets">{{$ts('Logo and assets')}}</g-link></li>
            <!-- <li><g-link to="/nft">NFT</g-link></li> -->
            <li ><g-link to="/blog">{{$ts('Blog')}}</g-link></li>
            <li><g-link to="/ambassador-program">{{$ts('Ambassador program')}}</g-link></li>
            <li><g-link to="/contact">{{$ts('Contacts')}}</g-link></li>

            <li class="new-column"><g-link to="https://wiki.robonomics.network">{{$ts('Wiki')}}</g-link></li>
            <li><g-link to="https://robonomics.academy">{{$ts('Academy')}}</g-link></li>
            <li><g-link to="https://github.com/airalab">{{$ts('Github')}}</g-link></li>
            <li><g-link to="https://dapp.robonomics.network/#/">{{$ts('Dapp')}}</g-link></li>

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
        z-index: 10;
        top: calc(var(--screen-padding-top) - -12px);
        left: 0;
        right: 0;
        bottom: calc(var(--screen-padding-bottom) - 1px);
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
        width: 30px;
        height: 27px;
        cursor: pointer;
        padding: 0.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .nav-toggler div {
        height: 3px;
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


    }

    @media screen and (max-width: 650px) {
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
