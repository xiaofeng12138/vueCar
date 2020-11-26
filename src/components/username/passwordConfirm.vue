<template>
    <el-form-item prop="passwordConfirm" :rules="[{ required: true, validator: validateUsername, trigger: 'change' }]">
       <el-input  type="password"  id="confirmPsd" v-model="passwordConfirm" :placeholder="placeholder" v-on:input = 'enterPasswordConfirm'></el-input>
    </el-form-item>
</template>

<script>
import {validate_password} from '@/utils/validate'
export default {
    props:{
        placeholder:{
            type:String,
            default:'确认密码'
        },
          passWord:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            passwordConfirm:'',
        }
    },
    methods:{
        validateUsername(rule,value,callback){
            if(this.passWord == ''){
                callback()
            }
            if(!this.passwordConfirm || this.passwordConfirm == ''){
                return callback(new Error('确认密码不能为空'))
            } else if(this.passWord && this.passWord !== this.passwordConfirm){
              return callback(new Error('两次输入密码不一致'))
            }else{
                callback()
            }
        },
        enterPasswordConfirm(){
            let regValue = validate_password(this.passwordConfirm)? this.passwordConfirm:''
            this.$emit('update:value',regValue)
        }
    },
    
    watch:{
        passWord:{
            handler(newValue){
                console.log(newValue)
                if(newValue == this.passwordConfirm){
                const dom = document.getElementById('confirmPsd').querySelector('.el-form-item__error')
                    if(dom){
                       dom.style.display = 'none'
                    }
                }
                
            }
        }
    }
}
</script>
