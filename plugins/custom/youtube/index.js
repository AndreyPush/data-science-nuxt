import container from './container'
import YouTubePlayer from './player'

export {YouTubePlayer}

export default {
    install(Vue, options = {}) {
        container.Vue = Vue
        YouTubePlayer.ready = YouTubePlayer.mounted
        const {componentId = 'youtube'} = options

        Vue.component(componentId, YouTubePlayer)

        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            const tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/player_api'
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

            window.onYouTubeIframeAPIReady = function () {
                container.YT = YT
                const {PlayerState} = YT

                container.events[PlayerState.ENDED] = 'ended'
                container.events[PlayerState.PLAYING] = 'playing'
                container.events[PlayerState.PAUSED] = 'paused'
                container.events[PlayerState.BUFFERING] = 'buffering'
                container.events[PlayerState.CUED] = 'cued'

                container.Vue.nextTick(() => {
                    container.run()
                })
            }
        }
    }
}

