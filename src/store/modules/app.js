
const state = {
    routerName:'',
    isClickCarList:true,
    isRequestList:false
}
const getters = {}
const actions  = {}
const mutations = {
    SET_ROUTER_NAME(state,value){
        console.log(value)
        state.routerName = value
    },
    SET_ISCLICKLIST(state,value){
        state.isClickCarList = value
    },
    SET_ISREQUESTLIST(state,value){
        state.isRequestList = value
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
