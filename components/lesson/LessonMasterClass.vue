<template>

  <section class="lesson_masterClass" :style="{'padding-top': `${currentPadding}px`}" :class="{'lesson_masterClass--opened' : opened}" ref="lessonMasterClass">

    <div class="lesson_masterClass_video" :style="{'height': currentPadding?(currentPadding+'px'):'auto'}" :class="{'lesson_masterClass_video--active' : opened}">
      <player :setup="setupObject"></player>
    </div>

    <div class="lesson_masterClass_data" :class="{'lesson_masterClass_data--active' : opened}">

      <h3 class="lesson_masterClass_title">1. Тема урока</h3>

      <p class="lesson_masterClass_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.</p>

      <div class="lesson_masterClass_sources" v-if="opened">

        <h3 class="lesson_masterClass_title">Исходники для мастер-класса</h3>

        <ul class="lesson_masterClass_sources_list">
          <li class="lesson_masterClass_sources_item">

            <nuxt-link class="lesson_masterClass_sources_item_lnk" to="/">

              <svg class="lesson_masterClass_sources_item_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" d="M15 7.36v.644a7 7 0 1 1-4.151-6.398, M15 2.404L8 9.411l-2.1-2.1"></path>
              </svg>

              <span class="lesson_masterClass_sources_item_title">Презентация</span>

            </nuxt-link>

          </li>
          <li class="lesson_masterClass_sources_item">

            <nuxt-link class="lesson_masterClass_sources_item_lnk" to="/">

              <svg class="lesson_masterClass_sources_item_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" d="M15 7.36v.644a7 7 0 1 1-4.151-6.398, M15 2.404L8 9.411l-2.1-2.1"></path>
              </svg>

              <span class="lesson_masterClass_sources_item_title">Презентация</span>

            </nuxt-link>

          </li>
        </ul>

      </div>

      <div class="lesson_masterClass_duration">

        <svg class="lesson_masterClass_duration_icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#FF7777" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 4.5V9L12 10.5" stroke="#FF7777" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span class="lesson_masterClass_duration_val">00:12 Длительность</span>

      </div>


      <button class="lesson_masterClass_more" @click="toggleOpened">

        <span class="lesson_masterClass_more_contentWrapper">
          <span class="lesson_masterClass_more_content">{{opened?"Свернуть":"Развернуть"}}</span>
        </span>

        <span class="lesson_masterClass_more_iconWrapper">
          <svg v-if="!opened" class="lesson_masterClass_more_icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM364 64h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V96H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 236v124c0 13.3-10.7 24-24 24H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 448H24c-13.3 0-24-10.7-24-24V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"></path>
          </svg>

          <svg v-if="opened" class="lesson_masterClass_more_icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v116H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h116v116c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12zm224 0V320h116c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z"></path>
          </svg>
        </span>

      </button>

    </div>

  </section>

</template>
<script>
  import Player from '@cmp/reuse/Player';

  export default {
    data: ()=>({
      setupObject: {
        id: '6drE96o1',
        private: false,
        master: true,
        type: 'jwplayer',
        data: {
          poster: 'poster.png',
          title: 'Material Design, RecyclerView. Работа со списками'
        }
      },
      opened: false,
    }),
    computed:{
      currentPadding(){
        return this.opened
          ?(this.$refs.lessonMasterClass.scrollWidth*9/16+30)
          :0
      }
    },
    components:{
      Player,
    },
    methods: {
      toggleOpened(){

        this.opened = !this.opened;

        setTimeout(()=>{ this.$emit('resizeVideo', this.opened) }, 50)

      },
    }
  }

</script>
