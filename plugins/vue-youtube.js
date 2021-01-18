import Vue from 'vue'
import VueYouTubeEmbed from './custom/youtube'

// if(process.browser) {
Vue.use(VueYouTubeEmbed, {componentId:'youtube-player'});
// }
