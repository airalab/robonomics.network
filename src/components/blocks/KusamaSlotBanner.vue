<template>
    <Card :icon="'/icons/icon-future.png'">

    <h3>{{$ts('Want to be a part of the future?')}}</h3>

    <template v-if="$locale=='en'">
      Head over to the <g-link to="/kusama-slot/">Robonomics Crowdloan page</g-link> or the <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">Kusama Portal</g-link> and support us building the infrastructure for the Smart Robotic grid of tomorrow!🦾
    </template>

    <template v-if="$locale=='ru'">
      Воспользуйтесь <g-link to="/kusama-slot/">страницей краудлоан кампании</g-link> или <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">порталом Kusama</g-link> и поддержите построение умной инфраструктуры для роботов!🦾
    </template>

    </Card>
</template>

<script>
export default {
    components: {
      Card: () => import("~/components/TextCard.vue")
    }
}
</script>
