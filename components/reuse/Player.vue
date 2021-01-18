<template>

    <section class="videoPlayer" :style="`height: ${playerHeight}px`" ref="playerWrapper">
        <div :style="{'visibility':!isPlaying?'visible':'hidden'}" class="videoPlayer_pad">
            <div class="videoPlayer_poster" :style="{'background-image':`url(/img/poster.png)`}"></div>
            <button class="videoPlayer_playBtn" @click="play">
                <img class="videoPlayer_playBtn_icon" :src="require('@imgs/play.svg')">
            </button>
        </div>
        <div class="videoPlayer_wrapper">
            <component
                    :is="playerType"
                    :videoId="videoId"
                    @ready="isReady"
                    @paused="paused"
                    @playing="playing"
                    @seeked="seeked"
                    @playbackRate="playbackRateChange"
                    @playerFullscreen="playerFullscreen"
                    ref="player"
            />
        </div>
    </section>

</template>

<script>

    let watermark = null;

    const watermarkRepeatMin = 5 * 1000;
    const watermarkRepeatMax = 10 * 1000;
    const watermarkDelayMin = 30 * 1000;
    const watermarkDelayMax = 60 * 1000;
    let watermarkDuration = 0;

    export default {
        name: 'Player',
        props: {
            playerType: {
                type: String,
                default: "youtube-player" //jw-player
            },
            isPrivate: false,
            videoId: {
                type: String,
                required: true
            },
            poster: {
                type: String,
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
        },
        data: () => ({
            playerHeight: 0,
            fullscreen: false,
            playerPaused: true,
            openedMaster: false,
            intervalWater: null,
        }),
        watch: {
            isPlaying(val) {

                if (val) {

                    this.play();

                    if(this.isPrivate) this.startWatermark();

                }
                else {

                    this.pause();

                    if (this.intervalWater && this.isPrivate) {

                        clearInterval(this.intervalWater);
                        this.intervalWater = null;

                    }

                }

            },
            seekedTo(val){
                this.seekTo(val);
            }
        },
        methods: {
            isReady(){

            },
            startWatermark() {
                let vm = this;

                let rnd = vm.$utils.getRandomFromTo(watermarkRepeatMin, watermarkRepeatMax);
                watermarkDuration = rnd;

                if (this.intervalWater) {
                    clearInterval(vm.intervalWater)
                }

                this.intervalWater = setTimeout(function tick() {
                    vm.createWatermark();
                    let rnd2 = vm.$utils.getRandomFromTo(watermarkDelayMin, watermarkDelayMax);
                    vm.intervalWater = setTimeout(tick, rnd2)
                }, rnd)
            },
            createWatermark() {

                let vm = this;

                let w = vm.fullscreen?window.innerWidth:vm.$refs.playerWrapper.clientWidth;
                let h = vm.fullscreen?window.innerHeight:vm.$refs.playerWrapper.clientHeight;

                let x = vm.$utils.getRandomFromTo(0, w);
                let y = vm.$utils.getRandomFromTo(0, h);
                let rndX = vm.$utils.getRandomFromTo(0, w);
                let rndY = vm.$utils.getRandomFromTo(0, h);

                let e1 = Math.random();
                let e2 = Math.random();
                let e3 = Math.random();
                let e4 = Math.random();


                let textnode = document.createElement("div");
                textnode.innerHTML = this.videoId;
                textnode.style = "position: absolute; top:" + y + " px; left:" + x + " px; color:#fff; opacity:0.1; z-index:9999999; font-size:12px"
                textnode.animate([
                    // keyframes
                    {top: y + 'px', left: x + 'px'},
                    {top: rndY + 'px', left: +rndX + 'px'}
                ], {
                    // timing options
                    duration: watermarkDuration,
                    iterations: 1,
                    easing: "cubic-bezier(" + e1 + ", " + e2 + ", " + e3 + ", " + e4 + ")"
                });
                if (vm.isPrivate) {
                    vm.$refs.player.$el.childNodes[0].appendChild(textnode)
                }

                setTimeout(() => {
                    if (vm.isPrivate) {
                        vm.$refs.player.$el.childNodes[0].removeChild(textnode)
                    }
                }, watermarkDuration);

            },
            play() {

                if(!this.isPlaying){
                    this.$emit('play');
                }

                this.$refs.player.play();

                this.$emit('syncTime', this.$refs.player.getCurrentTime());

            },
            pause() {
                if(this.isPlaying){
                    this.$emit('pause');
                }
                this.$refs.player.pause();

                this.$emit('syncTime', this.$refs.player.getCurrentTime());

            },
            playing(){
                if(!this.isPlaying){
                    this.$emit('play');
                }
            },
            paused(){
                this.$emit('pause')
            },
            seekTo(time) {
                this.$refs.player.seekTo(time);
            },
            seeked(time) {
                //console.log("seeked", time)
            },
            playbackRateChange(rate) {
                this.$emit('playbackRateChanged', rate)
            },
            playerFullscreen(){
                this.fullscreen = !this.fullscreen
            }
        },
        mounted(){
            this.playerHeight = this.$refs.playerWrapper.clientWidth*9/16;
        }
    }

</script>
