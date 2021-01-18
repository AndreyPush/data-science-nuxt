<template>
    <div class="asidePractice_container">

        <div class="asidePractice_titleBlock" @click="toggleOpened">

            <h4 class="asidePractice_title">Мультиплатформенность</h4>

            <fa-icon class="asidePractice_togglerIcon" :class="{'asidePractice_togglerIcon--opened':opened}" :icon="['fac', 'down-arrow']" />

        </div>

        <transition name="slide">
            <div class="asidePractice_descriptionWrapper" v-if="opened">

                <p class="asidePractice_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            </div>
        </transition>

        <div class="asidePractice_meta">

            <div class="asidePractice_meta_time">

                <fa-icon class="asidePractice_meta_time_icon" :icon="['fac', 'clock']" />

                <span class="asidePractice_meta_time_value">1:20</span>

            </div>

            <div class="asidePractice_meta_points">

                <span class="asidePractice_meta_points_content">+10</span>

                <fa-icon class="asidePractice_meta_points_icon" :icon="['fac', 'skill-points']" />

            </div>

        </div>

    </div>
</template>
<script>

    export default {
        name: 'practice-item',
        data: ()=>({
           opened: false
        }),
        methods: {
            toggleOpened(){
                this.opened = !this.opened;
            }
        }
    }

</script>

<style>

    .slide-enter-active {
        transition: all .3s ease;
    }
    .slide-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-enter, .slide-leave-to
        /* .slide-leave-active до версии 2.1.8 */ {
        transform: translateY(-10px);
        opacity: 0;
    }

</style>
