import Vue from 'vue'
import JWPlayer from './custom/jwplayer'
const playerKey = "wDIjA3kY"

Vue.use(JWPlayer, {componentId:'jw-player', key:playerKey});
