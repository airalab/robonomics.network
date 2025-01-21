<template>
    <layout>
        <div class="redirect oldy">{{ $t('This page has moved to a') }} <a :href="redirect">{{ $static.metadata.home + redirect }}</a>. {{ $t('Automatic redirecting') }}</div>
    </layout>
</template>

<static-query>
query {
  metadata {
    home
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    if (!this.redirect) {
        return {}; // Do not add meta info if no redirection is needed
    }

        return {
            // title: `Redirecting to https://robonomics.network/${this.redirect}`,
            meta: [
                {
                    'http-equiv': 'refresh',
                    content: `0; url="${this.redirect}"`
                }
            ],

            link: () => [
                {
                    rel: 'canonical',
                    href: `${this.$static.metadata.home}${this.redirect}`,
                    id: 'canonical',
                },
            ],
        }
  },

  computed: {
      redirect(){
        const target = this.$context.redirect;

        if (target && this.$route.path !== target) {
            return target;
        }
            return null;
        }
  },

  mounted() {
    if(this.$context.redirect.includes('blog')) {
        this.$setLocale('en')
    }
  }
}
</script>

<style scoped>
    .redirect {
        min-height: 100vh;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }
</style>

