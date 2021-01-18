<template>

    <div class="content">

        <h2 class="content_title">Material Design, RecyclerView. Работа со списками</h2>

        <section class="lessonVideo">

            <div class="lessonVideo_progress">

                <div class="lessonVideo_progress_ahead">

                    <div class="lessonVideo_progress_data">

                        <p class="lessonVideo_progress_value">100/500</p>

                    </div>

                    <div class="lessonVideo_progress_behaviors">

                        <button class="lessonVideo_progress_behavior">

                            <fa-icon class="lessonVideo_progress_behavior_icon" :icon="['fac', 'prev-lesson']" />

                        </button>

                        <button class="lessonVideo_progress_behavior">

                            <span class="lessonVideo_progress_behavior_content">Вперед</span>

                            <fa-icon class="lessonVideo_progress_behavior_icon" :icon="['fac', 'next-lesson']" />


                        </button>

                    </div>

                </div>

                <div class="lessonVideo_progress_bar">
                    <div class="lessonVideo_progress_bar_trace" style="width: 24%"></div>
                </div>

            </div>

            <div class="lessonVideo_body">

                <player
                        :videoId="setup.videoId"
                        :playerType="playerType"
                        :poster="setup.poster"
                        :isPrivate="setup.isPrivate"
                        :isPlaying="isPlaying"
                        :seekedTo="seekedTo"
                        @play="play"
                        @pause="pause"
                        @syncTime="seekTo"
                        @playbackRateChanged="changePlayBackRate"
                        width="100%" />
            </div>

            <span class="lessonVideo_status">Доступный</span>

            <p class="lessonVideo_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum cumque distinctio dolor enim, illum impedit in itaque magni minus necessitatibus officiis possimus qui, repudiandae temporibus tenetur veritatis voluptatibus. Tempore.</p>

            <video-transcript
                    :setup="setup.transcriptions"
                    :isPlaying="isPlaying"
                    :seekedTo="seekedTo"
                    :playbackRate="playbackRate"
                    @play="play"
                    @pause="pause"
                    @seekTo="seekTo"
                    @seekAndPlay="seekAndPlay"
            />
        </section>

    </div>

</template>

<script>
    import Player from '@cmp/reuse/Player';
    import videoTranscript from '@cmp/lesson/VideoTranscript';

    export default {
        props: {
            setup: {
                type: Object,
                required: true,
            }
        },
        data: () => ({
            isPlaying: false,
            seekedTo: 0,
            playbackRate: 1,
            syncTimeProcess: false,
        }),
        computed: {
            playerType(){
                return this.setup.isPrivate?'jw-player':'youtube-player'
            }
        },
        components: {
            Player,
            videoTranscript
        },
        methods: {
            play(){
                this.isPlaying = true;
            },
            pause(){
                this.isPlaying = false;
            },
            seekTo(value){
                this.seekedTo = value;
            },
            seekAndPlay(value){

                let vm = this;

                if(!vm.isPlaying){
                    vm.isPlaying = true;
                    setTimeout(()=>{
                        vm.seekedTo = value;
                    }, 50)
                }
                else{
                    vm.seekedTo = value;
                }

            },
            changePlayBackRate(value){
                this.playbackRate = value;
            },
        },
        created() {


        }
    }

</script>
