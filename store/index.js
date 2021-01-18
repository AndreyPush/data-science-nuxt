export const state = () => ({
    theme: 'light'
})

export const mutations = {
    applyTheme(state, {theme = "light"}) {
        state.theme = theme
    },

    toggleTheme(state) {
        state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
}

export const getters = {
    getTheme: state => state.theme
}