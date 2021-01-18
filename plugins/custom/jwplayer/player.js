let pid = 0

export default {
    props: {
        width: {
            type: String | Number,
            default: "100%"
        },
        aspectRatio: {
            type: String,
            default: "16:9"
        },
        videoId: {
            type: String
        }
    },
    render (h) {
        return h('div', [
            h('div', { attrs: { id: this.elementId }, ref:'player'})
        ])
    },
    template: '<div><div :id="elementId" ref="player"></div></div>',
    data () {
        pid += 1
        return {
            elementId: `jw-player-${pid}`,
            player: {}
        }
    },
    methods: {
        play() {
            this.player.play()
        },
        pause(){
            this.player.pause()
        },
        seekTo(time) {
            this.player.seek(time);
        },
        getPlaybackRate() {
            return this.player.getPlaybackRate()
        },
        getCurrentTime() {
            return Number(this.player.getCurrentTime().toFixed(2))
        },

    },
    async mounted() {
        let exp = Math.round(Date.now()/1000) + (60 * 60*3);
        let token = this.$utils.jwtSign({ payload : { resource: `/v2/media/${this.videoId}` , exp:exp}, key:"bQwYURR1s3Z7p865mjY9W5ND" })
        let vm = this;

        let parsedData = await fetch(`https://cdn.jwplayer.com/v2/media/${this.videoId}?token=${token}`);

        let data = await parsedData.json();

        vm.player = vm.$JwInstance(vm.elementId).setup({
            aspectratio: '16:9',
            playlist: data.playlist,
            preload:'auto'
        })

        vm.player.on("ready", () => {
            vm.$emit("ready", vm)
            // console.log("jw ready", vm.player)
        })

        vm.player.on("buffer", (e) => {
            vm.$emit("buffering")
            // console.log("jw buffering", e)
        })

        vm.player.on("play", (s) => {
            vm.$emit("playing")
            // console.log("jw playing", s)
        })
        vm.player.on("pause", () => {
            vm.$emit("paused")
            // console.log("jw pause")
        })
        vm.player.on("seek", (e) => {
            vm.$emit("seeked", Math.trunc(e.offset))
            // console.log("jw seeked", {seconds: Math.trunc(e.offset)})
        })
        vm.player.on("complete", () => {
            vm.$emit("ended")
            // console.log("jw ended")
        })
        vm.player.on("playbackRateChanged", (e) => {
            vm.$emit("playbackRate", e.playbackRate)
            // console.log("jw playbackRateChanged", e.playbackRate)
        })
        vm.player.on('fullscreen', (e) => {
            vm.$emit('fullscreen', e.fullscreen)
            // console.log("jw fullscreen", e)
        })

    },
    beforeDestroy() {
        if (this.player !== null) {
            //this.player.stop()
            //this.player.remove()
        }
        delete this.player
        this.$emit('destroy')
    }
}
