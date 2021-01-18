import api from '~/plugins/custom/api'

export default (ctx, inject) => {
    // Inject `api` key
    // -> app.$api
    // -> this.$api in vue components
    // -> this.$api in store actions/mutations
    inject("api", api(ctx.app.$axios))
}
