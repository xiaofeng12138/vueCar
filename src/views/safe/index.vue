<template>
    <div class="safe-wrap">
        <Back column ='安全设置'/>
        <ul class="group-link">
            <router-link to='/password' class="arrow">
               修改登录密码
            </router-link>
            <router-link to='/capital' class="arrow">
                设置资金密码
            </router-link>
            <router-link to='' class="arrow">
               绑定手机号
            </router-link>
            <router-link to='/bank' class="arrow">
              绑定银行卡
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.safe-wrap{
    padding: 0 30px;
}
</style>

