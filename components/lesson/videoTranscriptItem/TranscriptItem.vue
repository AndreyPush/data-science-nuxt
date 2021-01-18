<template>

    <div class="videoTranscript_item" ref="sample">

        <div class="videoTranscript_item_track" ref="track" :class="{'videoTranscript_item_track--onlyTrace' : !isPlay||!isActive}"></div>

        <div class="videoTranscript_item_pointer" ref="pointer">
            <span class="videoTranscript_item_pointer_time" ref="pointerText">00:00</span>
        </div>

        <div
                class="videoTranscript_item_body"
                @mousemove.stop="moveHandler"
                @mouseenter.stop="showHandler"
                @mouseleave.stop="hideHandler"
                @click.self.stop="setCurrentTime"
        >

            <div class="videoTranscript_item_leftSide">

                <button class="videoTranscript_item_playControl" @click.stop="togglePlayState">

                    <fa-icon v-if="isPlay&&isActive" :icon="['fac', 'pause']" class="fac videoTranscript_item_playControl_icon" />

                    <fa-icon v-else :icon="['fac', 'play']" class="fac videoTranscript_item_playControl_icon" />

                </button>

                <span class="videoTranscript_item_title">{{title}}</span>

            </div>

            <div class="videoTranscript_item_rightSide">

                <span class="videoTranscript_item_time">{{parseTime(start, end)}}</span>

            </div>

        </div>

    </div>

</template>

<script>

    export default {
        name: "TranscriptItem",
        props: {
            start: {
                type: Number,
                default: 0,
                required: true,
            },
            end: {
                type: Number,
                default: 0,
                required: true
            },
            title: {
                type: String,
                required: true,
            },
            currentTime: {
                type: Number,
                default: 0,
                required: true
            },
            isPlay: {
                type: Boolean,
                required: true
            }
        },
        data: ()=>({
            isActive: false,
            trackPos: 0,
        }),
        watch: {
            currentTime(){
                this.moveTrack()
            },
            trackPos(val){
                if(val>0&&val<100){
                    this.isActive = true
                }
                else{
                    this.isActive = false;
                }
            }
        },
        methods: {
            parseTime(start, end) {

                const diff = end - start;

                return this.$utils.parseTimeFromSeconds(diff);

            },
            showHandler() {
                let th = this;

                let show = function () {
                    th.$refs.pointer.style.transition = 'none';
                    th.$refs.pointer.style.opacity = 1;
                };

                show = this.$utils.debounce(show, 50);

                show();

            },
            hideHandler() {
                let th = this;

                let hide = function () {
                    th.$refs.pointer.style.transition = 'opacity 0.2s linear';
                    th.$refs.pointer.style.opacity = 0;
                    th.$refs.pointer.style.setProperty('--time', '00:00')
                };

                hide = this.$utils.debounce(hide, 50);

                hide();

            },
            moveTrack(){

                let vm = this;
                const track = vm.$refs.track;

                let pos, diff, computedPos;


                if(vm.currentTime<=vm.start){
                    computedPos = 0;
                }
                else if(vm.currentTime>=vm.end){
                    computedPos = 100;
                }
                else{
                    pos = vm.currentTime - vm.start;
                    diff = vm.end - vm.start;
                    computedPos = pos / diff * 100;
                }

                track.style.setProperty('--transcriptionPositionX', `${computedPos}%`);

                vm.trackPos = computedPos;

            },
            moveHandler() {

                this.$refs.sample.style.setProperty('--x', `${event.layerX}px`);


                let percent = event.layerX / this.$refs.sample.clientWidth * 100;

                let diff = this.end - this.start;

                this.$refs.pointerText.textContent = this.$utils.parseTimeFromSeconds(parseInt(diff / 100 * percent));

                if (this.$refs.sample.clientWidth - 120 < event.layerX) {
                    this.$refs.pointerText.classList.add('videoTranscript_item_pointer_time--leftSide');
                }
                else {
                    this.$refs.pointerText.classList.remove('videoTranscript_item_pointer_time--leftSide');
                }

            },
            setCurrentTime(event){

                let vm = this;
                let compPos, timeDiff, compTime;

                compPos = event.layerX/vm.$refs.sample.clientWidth;

                timeDiff = vm.end - vm.start;

                compTime = vm.start + (timeDiff * compPos);

                vm.$emit('changeCurrentTime', compTime.toFixed(2));

            },
            togglePlayState() {

                let vm = this;

                if(vm.start>vm.currentTime || vm.end<=vm.currentTime){
                    vm.$emit('seekAndPlay', vm.start);
                }
                else{
                    vm.$emit('togglePlayState');
                }

            }
        },
    }

</script>
