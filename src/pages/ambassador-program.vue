<template>
    <layout>
        <MetaInfo
            :pageTitle = "$ts('Robonomics Ambassador Program')"
            :pageDescription = "$ts('Robonomics team invites you to contribute to the development and promotion of Robonomics in the international arena for cooperation.')"
            pageImage = "/website_cover_ambassador.jpg"
            pageImageHeight = "650"
        />

        <section id="banner" class="section__solid section__blue">
            <div>
                <h1 class="layout">{{$ts('Robonomics Ambassador Program')}}</h1>

                <div class="text-center layout layout__text">
                    <p class="text-small"><i class="label-red">{{$ts('Latest update')}}: 23-04-2022</i></p>

                    <section class="text-abstract text-little">
                        <p><b>{{$ts('For all passionate about Robonomics and inspired by web3.')}}</b></p>
                        <p>{{$ts('Robonomics team invites you to contribute to the development and promotion of Robonomics in the international arena for cooperation.')}}</p>
                    </section>
                </div>

                <div class="grid-4 animate-inside layout" v-in-viewport.once>
                    <Card back="darkblue" shadow="dark">
                        <h4>{{$ts('Learn')}}</h4>
                        <p class="text-little">{{$ts('Theory & practice from Robonomics')}}</p>
                    </Card>

                    <Card back="darkblue" shadow="dark">
                        <h4>{{$ts('Make content')}}</h4>
                        <p class="text-little">{{$ts('Documentation, instructions,  tutorials, Localization, scientific papers')}}</p>
                    </Card>

                    <Card back="darkblue" shadow="dark">
                        <h4>{{$ts('Communicate')}}</h4>
                        <p class="text-little">{{$ts('Online and offline (meetups, conferences, social networks, collaborations)')}}</p>
                    </Card>

                    <Card back="darkblue" shadow="dark">
                        <h4>{{$ts('Get rewards')}}</h4>
                        <p class="text-little">{{$ts('XRT reward every month, extra bonuses and gifts for top 5 ambassadors')}}</p>
                    </Card>
                </div>

                <section class="layout text-center animate-inside" v-in-viewport.once>
                    <Button color="violet" link="#steps" anchor>
                        <img class="button-icon" aria-hidden="true" src="../assets/images/hand-hi.png" />
                        Get your role, ambassador
                    </Button>
                </section>

            </div>
        </section>

        <section id="steps" class="section__solid section__darkgray">
            <div id="steps-i"><img aria-hidden="true" src="../assets/images/ambassadors.png" /></div>
            <div class="layout">
                <h2>How to become an ambassador?</h2>
            </div>

            <section class="layout layout__text">
                <list class="animate-inside" v-in-viewport.once>
                    <list-item color="green">
                        <h3 class="no-margins">Tell us more about you</h3>
                        <g-link class="uppercase text-little" to="https://docs.google.com/forms/d/1i4z1uRrxxpa05d567Xg6QPfv3ptQHVgWuXiJAilg06g/">Fill out the questionnaire</g-link>
                    </list-item>

                    <list-item color="gray">
                        <h3 class="no-margins">Start</h3>
                        <p class="uppercase text-little">Wait for your invitation to the special Discord chat for ambassadors</p>
                    </list-item>
                </list>
            </section>

            <p class="layout layout__text tip text-center">The number of participants in the program is limited</p>
        </section>

        <section class="layout layout__text section-wide animate-inside" v-in-viewport.once>
            <h2 class="text-left">{{$ts('For content makers')}}</h2>

            <b>What you may do:</b><br/>
            <ul class="list-simple">
                <li>1) work with technical documentation, instructions and tutorials;</li>
                <li>2) translate content into your native language;</li>
                <li>3) make scientific papers based on Robonomics technologies;</li>
                <li>4) popularize ideas of Robonomics.</li>
            </ul>

            <b>How:</b><br/>
            <ul class="list-simple">
                <li>1) make pull requests on Github for <g-link to="https://github.com/airalab/robonomics.network">website</g-link> or <g-link to="https://wiki.robonomics.network/docs/contributing/">wiki</g-link> ;</li>
                <li>2) discuss what we need to translate in ambassador chat;</li>
                <li>3) create video and text content, try to make it unique for your followers;</li>
                <li>4) share progress with other ambassadors and team.</li>
            </ul>
        </section>

        <hr class="no-margins"/>

        <section class="layout layout__text section-wide animate-inside" v-in-viewport.once>
            <h2 class="text-left">{{$ts('For community helpers')}}</h2>

            <b>What you may do:</b><br/>
            <ul class="list-simple">
                <li>1) organize local offline meetups and hackathons based on Robonomics technologies;</li>
                <li>2) participate in thematic conferences on behalf of Robonomics;</li>
                <li>3) work online with community: online meetups and hackathons, chat administration, forum moderation, various social networks;</li>
                <li>4) communicate with other projects for collaboration.</li>
            </ul>

            <b>How:</b><br/>
            <ul class="list-simple">
                <li>1) make your suggestion in ambassador’s chat;</li>
                <li>2) get merchandise if needed for offline events;</li>
                <li>3) share progress with other ambassadors and team.</li>
            </ul>
        </section>

        <hr class="no-margins"/>

        <section class="layout layout__text section-wide animate-inside" v-in-viewport.once>
            <h4>Get all our support and visual materials in ambassador’s chat</h4>
            <section class="layout text-center animate-inside" v-in-viewport.once>
                <Button color="violet" link="#steps" anchor>
                    <img class="button-icon" aria-hidden="true" src="../assets/images/hand-hi.png" />
                    Get your role, ambassador
                </Button>
            </section>
        </section>

    </layout>
</template>

<static-query>
query {
  metadata {
    discord
  }
}
</static-query>

<script>
    import Parallax from 'parallax-js'

    export default {
        components: {
            Card: () => import('~/components/TextCard.vue'),
            MetaInfo: () => import("~/components/MetaInfo.vue"),
            Button: () => import("~/components/Button.vue"),
            List: () => import("~/components/blocks/List.vue"),
            ListItem: () => import("~/components/blocks/ListItem.vue"),
        },

        mounted() {
            var scene = document.getElementById('parallax');
            var parallaxInstance = new Parallax(scene);
        },
    }
</script>


<style scoped>
    h1 {
        margin-bottom: 0;
    }

    #banner, #steps {
        font-family: var(--font-family-code);
    }

    #banner .grid-4 .card {
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .button-icon {
        max-height: 50px;
        vertical-align: middle;
    }

    #banner {
        padding-bottom: 120px;
    }

    #steps {
        padding-top: 150px;
        position: relative;
    }

    #steps-i {
        overflow: hidden;
        position: absolute;
        top: -80px;
        left: 0;
        width: 100%;
        height: 200px;
        text-align: center;
    }

    #steps-i img {
        width: 800px;
        max-width: 800px;
    }

    .tip {
        text-transform: uppercase;
        color: var(--color-gray-mid)
    }

    a {
        text-decoration: none;
    }

    h2 {
        font-weight: 400;
    }


    @media screen and (min-width: 430px) {
       .button {
            padding-top: 0.2rem !important;
            padding-bottom: 0.2rem !important;
        }
    }

    @media screen and (max-width: 430px) {

        .button {
            display: block;
        }

        .button-icon {
            display: none;
        }
    }
</style>