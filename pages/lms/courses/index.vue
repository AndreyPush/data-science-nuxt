<template>
    <!--TODO courses this-->
</template>

<script>
    import {SET_COURSES_MUTATION} from "~/constants/mutations-type";
    import {GET_COURSES} from "~/constants/getters-types";

    export default {
        name: "courses",
        //middleware: 'isAuth',
        scrollToTop: true,
        head() {
            return {
                title: "Skill-Branch | Все курсы",
            }
        },
        computed: {
            courses() {
                return this.$store.getters[GET_COURSES];
            },
        }
    }
</script>
