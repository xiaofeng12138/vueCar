<template>
    <div class="safe-wrap">
          <Back>
            <template v-slot = "navHeader">
               <router-link to="/login" style="color:#fff;opacity:0.4;cursor:pointer">登录</router-link>
            </template>
        </Back>
        <div class="cars-form-ui">
            <el-form ref="form" :model="form">
            <el-form-item >
                <el-input v-model="form.name" placeholder="原始密码"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="form.name" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="form.name" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item >
                <button type="button" class="btn-code">获取验证码</button>
                <el-input v-model="form.name" placeholder="验证码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="btn-block">确认</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {
            name: '',
           
            }
       }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style lang="scss" scoped>
.safe-wrap{
    padding: 0 30px;
}
</style>

