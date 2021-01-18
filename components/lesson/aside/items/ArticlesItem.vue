<template>
    <div class="asideNecessaryArticles_item">

        <nuxt-link :to="setup.data.link" class="asideNecessaryArticles_item_top">

            <fa-icon class="asideNecessaryArticles_item_icon" :icon="['fac', 'link']" />

            <span class="asideNecessaryArticles_item_title">{{setup.data.title}}</span>

        </nuxt-link>

        <div class="asideNecessaryArticles_item_bottom">

            <div class="asideNecessaryArticles_item_value">

                <button class="asideNecessaryArticles_item_value_change">

                    <svg class="asideNecessaryArticles_item_value_icon" width="8" height="5" viewBox="0 0 8 5"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L7 1" stroke="#9CA9BA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>

                <span class="asideNecessaryArticles_item_value_countDislikes">{{setup.meta.disLikes}}</span>

                <span class="asideNecessaryArticles_item_value_countLikes">{{setup.meta.likes}}</span>

                <button class="asideNecessaryArticles_item_value_change">

                    <svg class="asideNecessaryArticles_item_value_icon" width="8" height="5" viewBox="0 0 7 5"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.800781 4L3.50078 1L6.20078 4" stroke="#9CA9BA" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>

                </button>

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        name: 'necessary-articles-item',
        props: {
            setup: {
                type: Object,
                required: true
            }
        }
    }
</script>
