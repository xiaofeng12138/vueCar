
const state = {
   messageType:{
       check_real_name:{
           msg:'您未实名认证，请先实名认证',
           router:'Authentication',
           type:'identity'
       },
       check_cars:{
           msg:'您未上传驾驶证，请先上传驾驶证，审合通过后便可租车',
           router:'Authentication',
           type:'drive'
       },
       gilding:{
           msg:"您还没交押金，请先押金哦",
           router:'Recharge',
           type:'gilding'
       },
       illegalAmount:{
           msg:'您的预缴违章金额小于200，请先预缴违章金额',
           router:'Recharge',
           type:'illegal'
       }
   },
   orderStatus:{
    WAIT:{
        zh:'待取车'
    }, 
    OVERTIME:{
        zh:'超时'
    },
    OVER:{
        zh:'完成'
    },
    CANCEL:{
        zh:'取消'
    },
    RETURN:{
        zh:'待还车'
    },
   }
}
const getters = {}
const actions  = {}
const mutations = {}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
