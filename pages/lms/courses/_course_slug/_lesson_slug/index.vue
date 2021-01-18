<template>

    <section class="pageBody_wrapper">

        <main class="main" v-if="setup">
            <!--<player :videoId="videoId" width="100%"/>-->
            <!--<player :videoId="videoId2" width="100%" playerType="jw-player"/>-->
            <lesson-video :setup="setup"></lesson-video>
            <lesson-node></lesson-node>
            <!--<lesson-master-class/>-->


        </main>

        <aside class="aside">

            <aside-practice />
            <aside-sources />
            <aside-necessary-articles />
            <aside-speakers />
            <aside-members />
            <aside-studying />

        </aside>

    </section>

</template>

<script>
    import {SET_COURSES_MUTATION} from "~/constants/mutations-type";
    import {GET_COURSES} from "~/constants/getters-types";
    import lessonVideo from '@cmp/lesson/LessonVideo';
    import lessonNode from '@cmp/lesson/LessonNode';
    import lessonMasterClass from '@cmp/lesson/LessonMasterClass';
    import asidePractice from '@cmp/lesson/aside/Practice';
    import asideSources from '@cmp/lesson/aside/Resources';
    import asideNecessaryArticles from '@cmp/lesson/aside/Articles';
    import asideSpeakers from '@cmp/lesson/aside/Speakers';
    import asideMembers from '@cmp/lesson/aside/Members';
    import asideStudying from '@cmp/lesson/aside/Studying';
    import Player from "@cmp/reuse/Player.vue";

    export default {
        name: "lesson",
        //middleware: 'isAuth',
        scrollToTop: true,
        head() {
            return {
                title: `Skill-Branch | ${this.title}`,
            }
        },
        components:{
            Player,
            lessonVideo,
            lessonNode,
            lessonMasterClass,
            asidePractice,
            asideSources,
            asideNecessaryArticles,
            asideSpeakers,
            asideMembers,
            asideStudying
        },
        computed:{
            title(){
                return "title from lesson info"
            }
        },
        data:()=>{
            return{
                videoId:"gbi3yCxCFEM",
                videoId2:"yrpuNY0u",
                setup: null/*{
                    availableIndex: 0,
                    description: "Какова наша цель и для чего все это. Разбор основных вопросов и правил курса – как авторизоваться на платформе, как проходит проверка домашних заданий, что необходимо знать и как подготовиться к первому практическому заданию, какие инструменты должны быть установлены. Напутственное слово. Первое практическое задание",
                    isPrivate: false,
                    nextSlug: "kotlin-in-practice",
                    poster: "/uploads/courses/5d07c1089efacf00118e7e7a/5d07c1089efacf00118e7e7b/lessonPoster_single_1568631258987.JPG",
                    prevSlug: null,
                    title: "Вводное занятие. Организационные вопросы. Первое домашнее задание",
                    totalLessons: 9,
                    transcriptions: [],
                    videoId: "CB_n7RGTTa8",
                }*/
            }
        },
        created() {
            const vm = this;
            fetch('/lesson.json').then(r=>{
                r.json().then(resp=>{
                    vm.setup = resp.content;
                    //console.log(resp)
                })
            })
        }
    }
</script>
