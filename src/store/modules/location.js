const state ={
    selfLocation:true
}
const mutations ={
    SET_LOCATION(state){
        state.selfLocation = !state.selfLocation
    }
}
const actions ={}
const getters ={}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}