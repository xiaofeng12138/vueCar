<template>
    <div class="user-wrap">
        <div class="user-info">
            <img src="../../assets/images/icon.jpg" alt="">
            <div class="meta">
                <h4 class="name">{{userName}}</h4>
                <span>驾驶信誉分 <strong>0</strong></span>
            </div>
        </div>
        <ul class="group-link">
            <router-link to='/my' class="arrow">
                <i class="icon icon-user-1"></i>我的账户
            </router-link>
            <router-link to='/order' class="arrow">
                <i class="icon icon-user-2"></i>租车订单
            </router-link>
            <router-link to='/authentication' class="arrow">
                <i class="icon icon-user-3"></i>实名认证
            </router-link>
            <router-link to='/safe' class="arrow">
               <i class="icon icon-user-4"></i>安全设置
            </router-link>
            <router-link to='' class="arrow">
               <i class="icon icon-user-1"></i>帮助中心
            </router-link>
        </ul>
        <button class="logout" @click="logout">退出</button>

    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:this.$store.state.Account.accountUsername
        }
    },
    methods:{
        logout(){
             this.$store.dispatch('Account/logoutAction').then(res=>{
                 this.$router.push({name:'index'})
             })
        }
    },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

