<template>

    <section class="asideBlock" :class="{'asideBlock--have-expand':computedHaveExpanded}">

        <div class="asideBlock_titleBlock">

            <h3 class="asideBlock_title">Необходимые статьи:</h3>

        </div>

        <recycle-scroller
                class="asideNecessaryArticles"
                :class="{'asideNecessaryArticles--opened':all}"
                :items="recycleArray"
                :item-size="recycleItemHeight"
                v-slot="{ item, index }"
                :style="{'max-height': `${computedRecycleHeight}px`}"
                ref="list"
        >

            <necessary-articles-item :setup="item" :key="index"/>

        </recycle-scroller>

        <button class="asideBlock_all" @click="showAll" v-if="items.length>iter">

            <span class="asideBlock_all_content">{{all?'Скрыть':'показать'}} все</span>

            <svg class="asideBlock_all_icon" :class="{'asideBlock_all_icon--rotated':all}" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.71587 5L10.4317 1" stroke="#1C0E43" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </button>

    </section>

</template>
<script>
    import NecessaryArticlesItem from "./items/ArticlesItem";

    export default {
        components: {NecessaryArticlesItem},
        data: ()=>({
            iter: 3,
            all: false,
            recycleItemHeight: 88,
            items: [
                {
                    id: 0,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 1,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 2,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 3,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 4,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 5,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 6,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 7,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 8,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 9,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 10,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 11,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 12,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 13,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
                {
                    id: 14,
                    data: {
                        title: '7 полезных советов для тех кто использует рум',
                        link: '/',
                    },
                    meta: {
                        likes: 11,
                        disLikes: -1
                    }
                },
            ]
        }),
        computed: {
            computedHaveExpanded(){
                return this.items.length+1 > 3
            },
            recycleArray(){
                return this.all?this.items.slice(0, this.items.length-1):this.items.slice(0, this.iter)
            },
            computedRecycleHeight(){
                return this.iter<=3
                    ?this.recycleItemHeight*this.iter
                    :this.recycleItemHeight*10
            }
        },
        methods: {
            showAll(){
                this.iter = this.iter<=3?10:3;
                this.all = !this.all;
            }
        },
    }
</script>
