<template>
    <el-form-item prop="password" :rules="[{ required: true, validator: validateUsername, trigger: 'change' }]">
       <el-input  type="password" id="password" v-model="password" :placeholder="placeholder" v-on:input = 'enterPassword'></el-input>
    </el-form-item>
</template>

<script>
import {validate_password} from '@/utils/validate'
export default {
    props:{
        placeholder:{
            type:String,
            default:'密码'
        },
        ConfirmPsd:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            password:'',
        }
    },
    methods:{
        validateUsername(rule,value,callback){
            // if(this.ConfirmPsd == ''){
            //    return callback()
            // }
            if(!this.password || this.password == ''){
                return callback(new Error('密码不能为空'))
            } else if( !validate_password(this.password)){
              return callback(new Error('密码格式不正确'))
            }else if(this.ConfirmPsd && this.ConfirmPsd  !== this.password ){
              return callback(new Error('两次输入不一致'))
            }else{
                callback()
            }
        },
        enterPassword(){
            let regValue = validate_password(this.password)? this.password:''
            this.$emit('update:value',regValue)
        }
    },
    watch:{
        ConfirmPsd:{
            handler(newValue,oldValue){
                if(newValue == this.password){
                const dom = document.getElementById('password').querySelector('.el-form-item__error')
                    if(dom){
                       dom.style.display = "none"
                    }
                }
                
            }
        }
    }
}
</script>
