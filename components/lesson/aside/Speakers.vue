<template>

    <section class="asideBlock" :class="{'asideBlock--have-expand':computedHaveExpanded}">

        <div class="asideBlock_titleBlock">

            <h3 class="asideBlock_title">Спикеры и менторы:</h3>

        </div>

        <recycle-scroller
                class="asideSpeakers"
                :class="{'asideNecessaryArticles--opened':all}"
                :items="recycleArray"
                :item-size="recycleItemHeight"
                v-slot="{ item, index }"
                :style="{'max-height': `${computedRecycleHeight}px`}"
                ref="list"
        >

            <aside-speakers-item :setup="item" :key="index"/>

        </recycle-scroller>

        <nuxt-link class="asideSpeakers_overalRating" to="/">ОБЩИЙ РЕЙТИНГ</nuxt-link>

        <button class="asideBlock_all" @click="showAll" v-if="items.length>iter">

            <span class="asideBlock_all_content">{{all?'Скрыть':'показать'}} все</span>

            <fa-icon class="asideBlock_all_icon" :class="{'asideBlock_all_icon--rotated':all}" :icon="['fac', 'down-arrow']" />

        </button>

    </section>

</template>
<script>
    import AsideSpeakersItem from "./items/SpeakersItem";

    export default {
        components: {AsideSpeakersItem},
        data: ()=>({
            iter: 3,
            all: false,
            recycleItemHeight: 102,
            items: [
                {
                    id: 0,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 15,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 2,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 3,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 4,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 5,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 6,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 7,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 8,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 9,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 10,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
                },
                {
                    id: 11,
                    name: 'Константин Константинов',
                    role: 'Author',
                    points: 1350
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
        }
    }
</script>
