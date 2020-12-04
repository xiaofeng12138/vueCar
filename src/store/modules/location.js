const state ={
    selfLocation:true,
    parkId:[]
}
const mutations ={
    SET_LOCATION(state){
        state.selfLocation = !state.selfLocation
    },
    SET_PARKID(state,value){
        console.log(value)
        state.parkId = value
    },
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