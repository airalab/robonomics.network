<template>
    <Card :icon="'/icons/icon-future.png'">

    <h3>{{$ts('Want to be a part of the future?')}}</h3>

    <template v-if="$locale=='en'">
      Head over to the <g-link to="/kusama-slot/">Robonomics Crowdloan page</g-link> or the <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">Kusama Portal</g-link> and support us building the infrastructure for the Smart Robotic grid of tomorrow! 🦾
    </template>

    <template v-if="$locale=='ru'">
      Воспользуйтесь <g-link to="/kusama-slot/">страницей краудлоан кампании</g-link> или <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">порталом Kusama</g-link> и поддержите построение умной инфраструктуры для роботов! 🦾
    </template>

    <template v-if="$locale=='zh'">
      请前往 <g-link to="/kusama-slot/">Robonomics众贷页面</g-link> 或 <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">Kusama门户网站</g-link> ，支持我们为未来的智能机器人电网建设基础设施！🦾
    </template>

    <template v-if="$locale=='es'">
      Diríjase a la <g-link to="/kusama-slot/">página de Préstamos colectivos de Robonomics</g-link> o al <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">Portal de Kusama</g-link> y ayúdenos a construir la infraestructura para la red robótica inteligente del mañana. 🦾
    </template>

    <template v-if="$locale=='ko'">
      <g-link to="/kusama-slot/">Robonomics 크라우드론 페이지</g-link> 또는 <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan">Kusama 포털</g-link> 로 이동하여 미래의 스마트 로봇 그리드를 위한 인프라 구축을 지원해주세요! 🦾
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
