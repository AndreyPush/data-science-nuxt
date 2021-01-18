<template>
    <!--TODO course this-->
</template>

<script>
    import {SET_COURSES_MUTATION} from "~/constants/mutations-type";
    import {GET_COURSES} from "~/constants/getters-types";

    export default {
        name: "course",
        //middleware: 'isAuth',
        scrollToTop: true,
        head() {
            return {
                title: `Skill-Branch | ${this.title}`,
            }
        },
        computed:{
            title(){
                return "title from course info"
            }
        }
    }
</script>
