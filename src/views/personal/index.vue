<template>
    <div class="user-wrap">
        <div class="user-info">
            <img src="../../assets/images/icon.jpg" alt="">
            <div class="meta">
                <h4 class="name">760811650@qq.com</h4>
                <span>驾驶信誉分 <strong>0</strong></span>
            </div>
        </div>
        <ul class="group-link">
            <router-link to=''>
                <i class="icon icon-user-1"></i>我的账户
            </router-link>
            <router-link to=''>
                <i class="icon icon-user-2"></i>租车订单
            </router-link>
            <router-link to=''>
                <i class="icon icon-user-3"></i>实名认证
            </router-link>
            <router-link to=''>
               <i class="icon icon-user-4"></i>安全设置
            </router-link>
            <router-link to=''>
               <i class="icon icon-user-1"></i>帮助中心
            </router-link>
        </ul>
        <button class="logout">退出</button>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

