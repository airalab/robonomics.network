<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Privacy policy'"
    />

    <div class="layout__content">
      <h1>Privacy policy</h1>
    </div>

    <div class="layout__content layout__text hyphens">
      
      <h2 id="email-form">For email subscriptions</h2>
      <p>By submitting any email subscription form on the website https://robonomics.network, you agree to send admins of the website following personal information: email address.</p>
      <p>Information that you provide to us is used by us only for newsletters. You can unsubscribe from the newsletter at any time by clicking on the link in the letter or by writing email on webmaster@robonomics.network</p>
      <p>We use newsletters only to inform you about any Robonomics network news. There are no third party advitisements in our newsletters. Please, do not reply to the newsletters and keep in mind, that we are not asking any personal information in email.</p>
    </div>

  </layout>
</template>

<script>

  import MetaInfo from '~/components/MetaInfo.vue'

  export default {
    components: {
      MetaInfo
    }
  }
</script>
