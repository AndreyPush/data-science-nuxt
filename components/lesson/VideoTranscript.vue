<template>

    <div class="videoTranscript">

        <h4 class="videoTranscript_head">Видео транскрипт</h4>

        <div class="videoTranscript_itemsWrapper">

            <div
                    :style="{'max-height': computedExpandHeight}"
                    :class="{'videoTranscript_items--haveExpand': computedHaveExpand, 'videoTranscript_items--hasExpand': computedHasExpand}"
                    class="videoTranscript_items"
            >
                <video-transcript-item
                        v-for="(item, index) in setup"
                        :key="index"
                        :currentTime="currentTime"
                        :start="item.start"
                        :end="item.end"
                        :title="item.title"
                        :isPlay="isPlaying"
                        @changeCurrentTime = "setCurrentTime"
                        @seekAndPlay = "seekAndPlay"
                        @togglePlayState="togglePlayState"
                ></video-transcript-item>

            </div>

            <button v-if="computedHasExpand" class="videoTranscript_showAll" @click="showAllItems">
                <span class="videoTranscript_showAll_content">{{expanded?'Скрыть':'Показать'}} все</span>

                <fa-icon class="videoTranscript_showAll_icon" :class="{'videoTranscript_showAll_icon--rotated':expanded}" :icon="['fac', 'down-arrow']" />

            </button>

        </div>

    </div>

</template>

<script>

    import videoTranscriptItem from './videoTranscriptItem/TranscriptItem';

    const ITEMS_TO_SHOW = 5;

    export default {
        name: "VideoTranscript",
        components: {
            videoTranscriptItem
        },
        props: {
            setup: {
                type: Array,
                required: true
            },
            isPlaying: {
                default: false,
                required: true,
                type: Boolean
            },
            seekedTo: {
                default: 0,
                type: Number,
            },
            playbackRate: {
                default: 1,
                type: Number,
            },
        },
        data: ()=>({
            currentTime: 0,
            timerInst: null,
            expanded: false,
            iter: 5,
            transcriptItemHeight: 70,
        }),
        watch: {
            isPlaying(val){
                if(val) this.play()
                else this.pause()
            },
            seekedTo(val){
                this.presetTime(val);
            }
        },
        computed: {
            computedHaveExpand() {
                return this.setup.length > this.iter
            },
            computedHasExpand() {
                return this.setup.length > ITEMS_TO_SHOW;
            },
            computedExpandHeight(){
                return this.iter*this.transcriptItemHeight + 'px'
            }
        },
        methods: {
            showAllItems(){
                this.iter = this.iter<=ITEMS_TO_SHOW?10:ITEMS_TO_SHOW;
                this.expanded = !this.expanded;
            },
            presetTime(value){

                clearTimeout(this.timerInst);
                this.currentTime = value;
                this.timerTick();

            },
            setCurrentTime(value){

                this.currentTime = Number(value);

                this.$emit('seekTo', Number(value))

            },
            seekAndPlay(value){


                this.$emit('seekAndPlay', Number(value));

                clearTimeout(this.timerInst);
                this.currentTime = Number(value);
                this.timerTick();

            },
            play(){
                clearTimeout(this.timerInst);
                this.timerTick();
            },
            pause(){
                clearTimeout(this.timerInst);
            },
            togglePlayState(){

                this.$emit(this.isPlaying?'pause':'play');

            },
            timerTick(){

                let vm = this;

                console.log(vm.playbackRate);

                vm.timerInst = setTimeout(()=>{
                    if(vm.isPlaying){
                        vm.currentTime += (1*vm.playbackRate);
                        vm.timerTick()
                    }
                }, 1000);

            }
        }
    }

</script>
