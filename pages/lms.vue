<template>
    <nuxt-child/>
</template>

<script>
    import {GET_THEME} from "@const/getters-types";

    export default {
        name: "lms",
        head() {
            return {
                link: [
                    {
                        rel: "stylesheet",
                        href: `/css/themes/${this.$store.getters[GET_THEME]}.css`
                    }
                ]
            };
        },
    }
</script>