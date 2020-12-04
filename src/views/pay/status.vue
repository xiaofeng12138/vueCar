<template>
    <div class="user-container">
        <Back column="安全设置" />
        <div class="text-center color-white lh-40">
            <h4><strong>订单号</strong></h4>
            <p>{{order_no}}</p>
        </div>
        <div class="blank-40"></div>
        <div><el-button type="warning" round class="button-block"><strong @click="goPay">去支付</strong></el-button></div>
        <div class="blank-20"></div>
        <div><el-button type="primary" round class="button-block"><strong>完成支付</strong></el-button></div>
    </div>
</template>
<script>

import {OrderStatus } from '@/api/amount.js'
import { setInterval } from 'timers';
export default {
    name: "PayStatus",
    components: {},
    data(){
        return {
            timer:null,
            order_no:localStorage.getItem('order_no')
        }
    },
    beforeMount(){
        this.queryOraderStatus()
        // this.setInter()
    },
    methods: {
        //获取订单支付状态函数
        orderStatus(){
             let requestData ={
                order_no:this.order_no
            }
           return OrderStatus(requestData).then(res=>{
                const status = res.data.status
                return status
            })
        },

        async queryOraderStatus(){
           const status = await this.orderStatus()
           this.goOrder(status)
        },
        //去支付函数
        async goPay(){
           const status = await this.orderStatus()
           this.goOrder(status)
        },
        // setInter(){
        //     this.timer = setInterval(()=>{
        //         this.orderStatus()
        //     },3000)
        // },
        goOrder(status){
            if(status == 'success'){
                    // clearInterval(this.timer)
                    this.$router.replace({
                        path:'PayResult',
                        query:{
                            status
                        }
                    })
                }
        }
    }
}
</script>
<style lang="scss">
</style>