<template>
    <div class="safe-wrap">
        <Back>
            <template v-slot = "navHeader">
               <router-link to="/register" style="color:#fff;opacity:0.4;cursor:pointer">注册</router-link>
            </template>
        </Back>
        <div class="cars-form-ui">
            <el-form ref="form" :model="form">
              <Username  :value.sync = "form.username" />
              <PasswordVue :value.sync = "form.password" :ConfirmPsd = "form.passwordConfirm" />
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="btn-block">确认</el-button>
            </el-form-item>
            </el-form>
            <div style="text-align:right" >
                <router-link to="/forget" style="color:#fff;opacity:0.4;cursor:pointer;">忘记密码</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Username from '@c/username/index'
import PasswordVue from '@c/username/password'

export default {
    components:{Username,PasswordVue},
    data(){
        return {
            form: {
                  username: '',
                  password:'',
                 }
               }
    },
    methods: {
      onSubmit() {
         this.$refs['form'].validate((valid) => {
          if (valid) {this.loginFn()} 
          else {console.log('error submit!!'); return false;}
        });
      },
       loginFn(){
          const requsetData ={
            username:this.form.username,
            password:this.form.password,
          }
          this.$store.dispatch('account/loginAction',requsetData).then((res)=>{
             this.$message.success(res.message)
             this.$router.push({name:'index'})
          }).catch((err)=>{
            return err
          })
        }
    }
}
</script>
<style lang="scss" scoped>
.safe-wrap{
    padding: 0 30px;
}
</style>

