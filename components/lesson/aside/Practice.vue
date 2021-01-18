<template>

    <section class="asideBlock">

        <div class="asideBlock_titleBlock">

            <h3 class="asideBlock_title">Практика:</h3>

            <span class="asideBlock_title_tooltip">

                <fa-icon class="asideBlock_title_tooltip_icon" :icon="['fac', 'tooltip-icon']" />

            </span>

        </div>

        <section class="asidePractice">

            <practice-item/>

            <practice-item/>

            <button class="asidePractice_go">ПРИСТУПИТЬ</button>

            <button class="asidePractice_knowMore">ПОДРОБНОСТИ</button>


        </section>



    </section>

</template>
<script>
    import PracticeItem from "./items/PracticeItem";

    export default {
        components: {PracticeItem}
    }
</script>
