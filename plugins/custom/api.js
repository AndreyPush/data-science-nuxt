
export default (axios) => {
    return {
        login: function ({name, password}) {
            return axios.post('/api/v1/login', {name, password})
        },
        logout: function () {
            return axios.post('/api/v1/user/logout')
        }
    }
}
