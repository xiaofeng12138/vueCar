
const state = {
    routerName:''
}
const getters = {}
const mutations = {
    SET_ROUTER_NAME(state,value){
        console.log(value)
        state.routerName = value
    }
}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
