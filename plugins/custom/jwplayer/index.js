import JWPlayer from './player'

export default {
    install(Vue, options = {}) {
        const {componentId = 'jwplayer'} = options
        let head = document.head || document.getElementsByTagName('head')[0]
        const script = document.createElement('script')
        script.src = `https://cdn.jwplayer.com/libraries/${options.key}.js`;
        script.async = true;
        //script.defer = true

        head.appendChild(script);
        script.onload = () => {
            Vue.prototype.$JwInstance = jwplayer;
        }
        Vue.component(componentId, JWPlayer);
    }
}
