<template>
    
    <nav class="sidetext" :class="{'open': isOpen}">

        <div class="nav-toggler oldy dark" tabindex="0" @click="isOpen = !isOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="nav-content">

            <details>
                <summary>{{$ts('Nav Learn')}}</summary>
                <ul class="oldy dark">
                    <li><g-link to="/intro">{{$ts('Intro')}}</g-link></li>
                    <li><g-link to="/vision">Vision</g-link></li>
                    <li><g-link to="/architecture">Architecture</g-link></li>
                    <li><g-link to="https://robonomics.academy">Academy</g-link></li>
                </ul>
            </details>

            <details>
                <summary>{{$ts('Nav Use')}}</summary>
                <ul class="oldy dark">
                    <li><g-link to="https://wiki.robonomics.network">Wiki</g-link></li>
                    <li><g-link to="https://github.com/airalab/robonomics/releases">GitHub</g-link></li>
                    <li><g-link to="https://dapp.robonomics.network">Dapp</g-link></li>
                </ul>
            </details>

            <details>
                <summary>{{$ts('Nav Tokenomics')}}</summary>
                <ul class="oldy dark">
                    <li><g-link to="/xrt">XRT</g-link></li>
                    <li><g-link to="/kusama-slot">{{$ts('Kusama slot')}}</g-link></li>
                </ul>
            </details>

            <details>
                <summary>{{$ts('Nav Community')}}</summary>
                <ul class="oldy dark">
                    <!-- <li><g-link to="/community/wallpapers">Wallpapers</g-link></li> -->
                    <li><g-link to="/ambassador-program">{{$ts('Ambassador program')}}</g-link></li>
                    <li><g-link to="/papers">{{$ts('Nav Papers')}}</g-link></li>
                    <li><g-link to="/books">{{$ts('Nav Books')}}</g-link></li>
                    <li><g-link to="/contact">{{$ts('Nav Contact')}}</g-link></li>
                    <li><g-link to="/blog">{{$ts('Blog')}}</g-link></li>
                    <li><g-link to="/jobs">{{$ts('Jobs')}}</g-link></li>
                </ul>
            </details>
        </div>

    </nav>
</template>

<style scoped>

    nav {
        font-size: 75% !important;
    }

    summary {
        cursor: pointer;
    }

    nav:not(.open) .nav-content > details {
        display: inline-block;
        position: relative;
    }

    nav:not(.open) .nav-content > details:not(:last-child) {
        margin-right: var(--space);
    }

    nav:not(.open) .nav-content > details > ul {
        position: absolute;
        top: calc(var(--space) * 1.2);
        left: 0;
    }

    nav:not(.open) .nav-content li {
        white-space: nowrap;
    }

    details>summary {
        list-style: none;
        position: relative;
    }

    summary::-webkit-details-marker {
        display: none
    }

    summary::before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3.535' height='6.07' viewBox='0 0 3.535 6.07'%3E%3Cg id='Line_arrow_simple' data-name='Line arrow simple' transform='translate(0.707 0.707)'%3E%3Cpath id='Path_15' data-name='Path 15' d='M1246.738,26.138l2.328,2.328-2.328,2.328' transform='translate(-1246.738 -26.138)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E");
        position: absolute;
        top: -2px;
        left: -7px;
    }

    details[open] summary:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6.07' height='3.535' viewBox='0 0 6.07 3.535'%3E%3Cpath id='Path_15' data-name='Path 15' d='M1246.738,26.138l2.328,2.328-2.328,2.328' transform='translate(31.501 -1246.031) rotate(90)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/svg%3E");
        top: -3px;
    }

    .dark-theme summary::before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3.535' height='6.07' viewBox='0 0 3.535 6.07'%3E%3Cg id='Line_arrow_simple' data-name='Line arrow simple' transform='translate(0.707 0.707)'%3E%3Cpath id='Path_15' data-name='Path 15' d='M1246.738,26.138l2.328,2.328-2.328,2.328' transform='translate(-1246.738 -26.138)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E ");
    }

    .dark-theme details[open] summary:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6.07' height='3.535' viewBox='0 0 6.07 3.535'%3E%3Cpath id='Path_15' data-name='Path 15' d='M1246.738,26.138l2.328,2.328-2.328,2.328' transform='translate(31.501 -1246.031) rotate(90)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/svg%3E ");
    }

    .dark-theme .oldy {
        background-color: #7A7B81;
        border: 1px solid #000;
        box-shadow: 0.2rem 0.2rem 0 #000;
    }

    .dark-theme .oldy li a {
        color: #75FBFD;
    }

    .dark-theme .oldy li a:hover {
        color: #a1a2f2;
    }

    ul, li {
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0 calc(var(--space)*0.35) calc(var(--space)*0.35);
        text-transform: none;
        letter-spacing: 0;
        font-weight: bold;
        text-transform: uppercase;
    }

    li:first-child {
        margin-top: calc(var(--space)*0.5);
    }

    li a[target=_blank]:after {
        content: "↗";
        margin-left: 0.1rem;
        font-size: 140%;
        line-height: 0;
    }

    li a {
        font-weight: 400;
        color: var(--color-dark);
        text-decoration: none;
        text-transform: capitalize;
    }

    .nav-toggler {
        width: 30px;
        height: 27px;
        cursor: pointer;
        padding: 0.3rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
    }

    .nav-toggler div {
        height: 2px;
        width: 100%;
        background-color: var(--color-dark);  
    }

    @media screen and (max-width: 950px) {
        .nav-content summary {
            font-size: 0.9rem;
        }

        .nav-content summary::before {
            top: -1px;
        }
    }

    @media screen and (max-width: 660px) {
        .nav-toggler { display: flex; }
        .nav-content { display: none; }

        .nav-content {
            position: fixed;
            z-index: 10;
            top: calc(var(--screen-padding-top) - -12px);
            left: 0;
            right: 0;
            bottom: calc(var(--screen-padding-bottom) - 1px);
            background-color: var(--color-light);
            padding: var(--space);
            font-size: calc(var(--base-font-size) * 0.9);
            transform: translateX(-20px);
            opacity: 0;
            animation: navContent 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        }

        .nav-content summary {
            font-size: 1.5rem;
        }

        .dark-theme .nav-content {
            background-color: var(--body-bg);
        }

        .open .nav-content {
            display: block;
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
            top: calc(-50% + 1px)
        }

        @keyframes navContent {
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .nav-content > details:not(:last-child) {
            margin-bottom: var(--space);
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
