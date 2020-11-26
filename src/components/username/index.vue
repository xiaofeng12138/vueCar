<template>
    <el-form-item prop="username" :rules="[{ required: true, validator: validateUsername, trigger: 'change' }]">
       <el-input v-model="username" :placeholder="placeholder" v-on:input = 'enterUsername'></el-input>
    </el-form-item>
</template>

<script>
import {validate_Phone} from '@/utils/validate'
export default {
    props:{
        placeholder:{
            type:String,
            default:'手机号'
        }
    },
    data(){
        return{
            username:'',
        }
    },
    methods:{
        validateUsername(rule,value,callback){
            if(!this.username || this.username == ''){
                return callback(new Error('手机号不能为空'))
            } else if( !validate_Phone(this.username)){
              return callback(new Error('手机号格式不正确'))
            }else{
                callback()
            }
        },
        enterUsername(){
            let regValue = validate_Phone(this.username)? this.username:''
            this.$emit('update:value',regValue)
        }
    }
}
</script>
