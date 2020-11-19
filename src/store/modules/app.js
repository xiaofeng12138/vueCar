const state ={
    isClickCarList:true,
    isRequestList:false
}
const mutations ={
    SET_ISCLICKLIST(state,value){
        state.isClickCarList = value
    },
    SET_ISREQUESTLIST(state,value){
        state.isRequestList = value
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