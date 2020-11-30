<template>
     <el-form-item prop="code" :rules="rules">
       <button type="button" class="btn-code" @click="getCode" :disabled='disabled'>{{showMessage}}</button>
       <el-input v-model="code" placeholder="验证码" v-on:input = 'enterUsername'></el-input>
   </el-form-item>
</template>

<script>
import {validate_Phone} from '@/utils/validate'
import { GetCode} from '@/api/account.js' //获取验证码接口
export default {
    props:{
        regValue:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            disabled:true,
            code:'',
            showMessage:'获取验证码',
            rules:[
                { required: true, message:'验证码不能为空', trigger: 'blur'},
            ]
        }
    },
    methods:{
         enterUsername(){
            this.$emit('update:value',this.code)
        },
        getCode(){
            const requsetData ={
                username:this.regValue,
                module:'register'
            }
           GetCode(requsetData).then(res=>{
               this.$message.success(res.message)
               this.countDown()
           })
        },
        countDown(){
                let timer = null
                let second = 10
                this.showMessage = `倒计时${second}秒`;
                this.timer = setInterval(() => {
                    second--;
                    this.showMessage = `倒计时${second}秒`;
                    if(second <= 0) {
                    this.showMessage = `重新获取`;
                    // 启用按钮
                    this.disabled = false;
                    clearInterval(timer);
                    }
                }, 1000)
            }
    },
    watch:{
        regValue:{
            handler(newValue){
                this.disabled = newValue ? false : true
            }
        }
    }
}
</script>
