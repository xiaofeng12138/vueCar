<template>
    <div class="safe-wrap">
        <Back>
            <template v-slot = "navHeader">
               <router-link to="/login" style="color:#fff;opacity:0.4;cursor:pointer">登录</router-link>
            </template>
        </Back>
        <div class="cars-form-ui">
            <el-form ref="form" :model="form">
              <Username  :value.sync = "form.username" />
              <PasswordVue :value.sync = "form.password" :ConfirmPsd = "form.passwordConfirm" />
              <PasswordConfirm :value.sync = "form.passwordConfirm" :passWord = "form.password"  />
              <Code :regValue ="form.username" :value.sync = "form.code" />
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="btn-block">确认</el-button>
            </el-form-item>
            </el-form>
            <!-- <div style="text-align:right" >
                <router-link to="/forget" style="color:#fff;opacity:0.4;cursor:pointer;">忘记密码</router-link>
            </div> -->
        </div>
    </div>
</template>
<script>
import Username from '@c/username/index'
import Code from '@c/countdown/index'
import PasswordVue from '@c/username/password'
import PasswordConfirm from '@c/username/passwordConfirm'
export default {
    components:{Username,Code,PasswordVue,PasswordConfirm},
    data(){
        return {
            form: {
                 username: '',
                 code:'',
                 password:'',
                 passwordConfirm:''
                }
       }
    },
    methods: {
      onSubmit() {
         this.$refs['form'].validate((valid) => {
          if (valid) {
            this.ForgetFn()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        ForgetFn(){
          const requsetData ={
            username:this.form.username,
            password:this.form.password,
            code:this.form.code
          }
        this.$store.dispatch('Account/forgetAction',requsetData).then((res)=>{
              this.$message.success(res.message)
              this.$router.push({name:'Login'})
          }).catch((err)=>{
            return err
          })
        }
    },
  
}
</script>
<style lang="scss" scoped>
.safe-wrap{
    padding: 0 30px;
}
</style>

