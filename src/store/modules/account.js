import { Register,Login,Forget} from '@/api/account.js' 

import {setAccountToken,setAccountUsername,getAccountToken,getAccountUsername,removeAccountToken,removeAccountUsername} from '@/utils/accountCookie'

const state = {
    accountToken:'' || getAccountToken(),
    accountUsername:"" || getAccountUsername()
}
const getters = {}
const mutations = {
   SET_TOKEN(state,value){
       state.accountToken = value
   },
   SET_USERNAME(state,value){
    state.accountUsername = value
},

}
const actions = {
    //用户注册方法
    registerAction(context,requsetData){
       return new Promise((resolve,reject)=>{
            Register(requsetData).then(res=>{resolve(res)})
        }).catch(error=>{reject(error)})
    },

    //用户登录方法
    loginAction(context,requsetData){
        return new Promise((resolve,reject)=>{
            Login(requsetData).then(res=>{
                setAccountToken(res.data.token)
                setAccountUsername(res.data.username)
                context.commit('SET_TOKEN',res.data.token)
                context.commit('SET_USERNAME',res.data.username)
                resolve(res)
            })
         }).catch(error=>{reject(error)})
     },

      //用户忘记密码方法
     forgetAction(context,requsetData){
        return new Promise((resolve,reject)=>{
            Forget(requsetData).then(res=>{
                resolve(res)
            })
         }).catch(error=>{reject(error)})
     },

       //用户退出
    logoutAction(context,requsetData){
        return new Promise((resolve,reject)=>{
            removeAccountToken()
            removeAccountUsername()
            context.commit('SET_TOKEN','')
            context.commit('SET_USERNAME','')
            resolve()
         }).catch(error=>{reject(error)})
     }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
