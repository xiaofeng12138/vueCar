<template>
    <div >
        <section class="cars-item" @click="showDetail">
            <header>
                <h4 class="cars-logo">
                    <img :src="data.imgUrl" :alt="data.carsMode">
                    <span class="name">{{data.carsMode}}</span>
                </h4>
                <p class="cars-attr">
                    {{data.carsAttr | energyTypes}}   {{data.carsAttr | settingNumber}} 座
                   </p>
            </header>
            <div class="cars-content">
                <div class="info">
                    <div>
                        <h4 class="cars-number">{{data.carsNumber}}</h4>
                        <div>
                            <ul class="cars-electric" :class="data.oil | engryFn">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p class="distance">
                                <sub>约</sub>
                                <strong>{{data.countKm}}</strong>
                                <sub>KM</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img :src="data.carsImg" alt="">
            </div>
            <footer>
                <a href="javascript:void(0)" class="parking">{{data.parkingName}}</a>
            </footer>
            
       </section>
        <section class="cars-item  cars-detailed" :style="'height:'+ propsHeight" v-if="show_cars_detail">
            <h4 class="column">{{data.parkingName}}
                <i class="close" @click="close"></i>
            </h4>

            <header>
                <h4 class="cars-logo">
                     <img :src="data.imgUrl" :alt="data.carsMode">
                    <span class="name">{{data.carsMode}}</span>
                </h4>
                <p class="cars-attr"> {{data.carsAttr | energyTypes}}   {{data.carsAttr | settingNumber}} 座</p>
            </header>
            <img :src="data.carsImg" alt="" style="width:100%;margin-bottom:10px">
            <div class="clearfix">
                <div class="fs-24 f-l">{{data.carsNumber}}</div>
                <p class="distance f-r">
                    <sub>约</sub>
                    <strong>{{data.countKm}}</strong>
                    <sub>KM</sub>
                </p> 
            </div>    
            <div class="car-electric-box">
                <div class="clearfix" style="position:relative">
                    <span class="e-high" :style="`width:${Math.round(data.oil/10)*10}%`"></span>
                    <span class="e-bg"></span>
                </div>
            </div> 
            <p class="t-a info"> 取车支付12.0元，项目补贴12元</p>     
            <ul class="cars-type-list" >
                <li :class="chooseId == item.carsLeaseTypeId ? 'checked':''" v-for="(item,index) in  carsLeaseArray" @click="choosePrice(item)">
                    <h4 class="name">{{item.carsLeaseTypeName}}</h4>
                    <span class="price">{{item.price}}元</span>
                </li>
            </ul>    
            <div class="clause">
                 <h4 class="clause-content">参保《全面保证服务》用车更放心</h4>
                 <i class="choose current"></i>
            </div> 
             <a href="javascript: void(0);" class="select-car-btn " v-xf="'xiaofeng'" @click="useCar">预约车辆</a>
        </section>
    </div>
</template>

<script>
import {getCarAttrKey} from '@/utils/format.js'
import {GetCarsLease} from '@/api/cars.js'
import {ConfirmCars} from '@/api/account.js'
import { setTimeout } from 'timers';
export default {
    props:{
        data:{
            type:Object,
            default:()=>({})
        }
    },
    filters:{
        engryFn(e){
             let data = Math.round(e/10)
             return `active-li-${data}`
        },
        energyTypes(val){
           return getCarAttrKey({
                data:val,
                parantKey:'basics',
                childKey:'engry_type'
            })
        },
        settingNumber(val){
            return getCarAttrKey({
                data:val,
                parantKey:'carsBody',
                childKey:'seating_number'
            })
        }
    },
    data(){
        return{
            show_cars_detail:false,
            propsHeight:0,
            timer:null,
            carsLeaseArray:[],
            chooseId:'',
            userToken:this.$store.state.Account.accountToken,
            messType:this.$store.state.Config.messageType,
            //车辆信息校验数据组
            car_checkArray:['check_real_name','check_cars','gilding','illegalAmount'],
        }
    },
    methods:{
        //预约用车事件
        useCar(){
            !this.userToken ? this.$router.push({name:'Login'}):''
            if(!this.chooseId){
                this.$message.error('请先选择租车类型')
                return false
            }
            let requestData ={
                cars_id:this.data.id,
                cars_lease_type_id:this.chooseId
            }
            ConfirmCars(requestData).then(res=>{
                let data = res.data
                const key = data ? Object.keys(data):[]
                if(key && key.length > 0){
                    if(this.car_checkArray.includes(key[0])){
                        let message = ''
                        let msg = this.messType[key[0]].msg
                        if(msg){message = msg}
                        this.$confirm(message,'提示',{
                            confirmButtonText:'确定',
                            cancelButtonText:'取消',
                            type:'warning'
                        }).then(()=>{
                        let router = this.messType[key[0]].router
                        if(router){
                            this.$router.push(
                                {
                                    name:router,
                                    query:{
                                        type:this.messType[key[0]].type
                                    }
                                })
                        }
                        }).catch(err=>{
                            return false
                        })
                    return false
                    }
                 }else{
                    this.$message.success(res.message)
                    setTimeout(()=>{
                        this.$router.go(0)
                    },1500)
                 }
            })
            
        },
        //价格选择函数
        choosePrice(item){
            this.chooseId = item.carsLeaseTypeId
        },
        //展开车辆详情
       showDetail(){
         const view_height = document.documentElement.clientHeight || document.body.clientHeight
         const ViewHeight = view_height - 140
         this.show_cars_detail = true
         if(this.timer){clearTimeout(this.timer)}
         this.timer = setTimeout(()=>{
             this.propsHeight = `${ViewHeight}px`
             clearTimeout(this.timer)
         },10)
         this.getCarLeaseFn()
       },
       close(){
         this.show_cars_detail = false
         this.propsHeight = '0px'
       },
       //获取租赁类型函数
       getCarLeaseFn(){
           let requestId ={
               carsId:this.data.id
           }
           GetCarsLease(requestId).then(res=>{
               this.carsLeaseArray = res.data.data
           })
       }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>


