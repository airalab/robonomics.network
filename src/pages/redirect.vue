<template>
    <div>This page has moved to a {{ $context.redirect }}. Automatic redirecting</div>
</template>

<script>
export default {
  metaInfo() {
        return {
            // title: `Redirecting to https://robonomics.network/${this.$context.redirect}`,
            meta: [
                {
                    'http-equiv': 'refresh',
                    content: `0; url="${this.$context.redirect}"`
                }
            ],

            link: () => [
                {
                    rel: 'canonical',
                    href: `https://robonomics.network/${this.$context.redirect}`,
                    id: 'canonical',
                },
            ],
        }
  }
}
</script>