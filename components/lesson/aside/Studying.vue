<template>

    <section class="asideBlock">

        <div class="asideBlock_titleBlock">

            <h3 class="asideBlock_title">Что изучается:</h3>

        </div>

        <section class="asideStudying">

            <aside-studying-item v-for="i in 3" :key="i"/>

        </section>

    </section>

</template>
<script>
    import AsideStudyingItem from "./items/StudyingItem";

    export default {
        components: {AsideStudyingItem}
    }
</script>
