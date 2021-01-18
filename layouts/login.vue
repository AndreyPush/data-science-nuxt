<template>
    <section class="root login-layout">
        <sidebar/>
        <content>
            <nuxt/>
        </content>
        <footer/>
    </section>
</template>

<script>


    import Header from '@cmp/layouts/Header'
    import Content from '@cmp/layouts/Content'
    import Sidebar from '@cmp/layouts/Sidebar'
    import Footer from "@cmp/layouts/Footer.vue"

    export default {
        components: {
            Header,
            Content,
            Sidebar,
            Footer
        }
    }

</script>
