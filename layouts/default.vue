<template>
    <section class="root">

        <header-component/>
        <sidebar-component/>
        <content-layout>
            <nuxt/>
        </content-layout>
        <footer-component/>

    </section>
</template>

<script>

    import HeaderComponent from '@cmp/layouts/Header'
    import ContentLayout from '@cmp/layouts/Content'
    import SidebarComponent from '@cmp/layouts/Sidebar'
    import FooterComponent from "@cmp/layouts/Footer.vue"

    export default {
        components: {
            FooterComponent,
            SidebarComponent,
            HeaderComponent,
            ContentLayout,
        },
    }

</script>
