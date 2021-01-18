import container from './container'

let pid = 0

export default {
    name: 'YoutubeEmbed',
    props: {
        width: {
            type: String | Number,
            default: "100%"
        },
        aspectRatio: {
            type: String,
            default: "16:9"
        },
        playerVars: {
            type: Object,
            default: () => ({autoplay: 0, time: 0})
        },
        videoId: {
            type: String
        },
        mute: {
            type: Boolean,
            default: false
        },
        host: {
            type: String,
            default: 'https://www.youtube.com'
        }
    },
    render(h) {
        return h('div', {attrs: {class:'videoPlayer_container'}}, [
            h('div', {attrs: {id: this.elementId}, ref: "player"})
        ])
    },
    template: '<div class="videoPlayer_container"><div :id="elementId" ref="player"></div></div>',
    watch: {
        width: 'setSize',
        aspectRatio: 'setSize',
        videoId: 'update',
        mute: 'setMute',
        unsetFullscreen: 'unsetPlayerFullscreen'
    },
    data() {
        pid += 1
        return {
            elementId: `youtube-player-${pid}`,
            player: {}
        }
    },
    methods: {
        setSize() {
            this.player.setSize(this.width, this.$refs.player.clientWidth / this.fAspectRatio)
        },
        setMute(value) {
            if (value) {
                this.player.mute()
            } else {
                this.player.unMute()
            }
        },
        update(videoId) {
            const name = `${this.playerVars.autoplay ? 'load' : 'cue'}VideoById`
            if (this.player.hasOwnProperty(name)) {
                this.player[name](videoId)
            } else {
                setTimeout(function () {
                    this.update(videoId)
                }.bind(this), 100)
            }
        },
        play() {
            this.player.playVideo()
        },
        pause(){
            this.player.pauseVideo()
        },
        seekTo(time) {
            this.player.seekTo(time, true);
        },
        getPlaybackRate() {
            return this.player.getPlaybackRate()
        },
        getCurrentTime() {
            return Number(this.player.getCurrentTime().toFixed(2))
        },
    },
    computed: {
        fAspectRatio() {
            let w = parseInt(this.aspectRatio.split(':')[0])
            let h = parseInt(this.aspectRatio.split(':')[1])
            return w / h
        }
    },
    mounted() {



        container.register((YouTube) => {
            const {width, playerVars, videoId, host} = this;

            this.player = new YouTube.Player(this.elementId, {
                height: '100%',
                width: '100%',
                playerVars,
                videoId,
                host,
                events: {
                    onReady: (event) => {
                        this.setMute(this.mute)
                        this.$emit('ready', event)
                    },
                    onStateChange: (event) => {
                        if (event.data !== -1) {
                            this.$emit(container.events[event.data], event);
                        }
                    },
                    onError: (event) => {
                        this.$emit('error', event)
                    },
                    onPlaybackRateChange: (event) => {
                        this.$emit('playbackRate', event.data)
                    }
                }
            });
        });
    },
    beforeDestroy() {
        if (this.player !== null && this.player.destroy) {
            this.player.destroy()
        }
        delete this.player
    }
}
