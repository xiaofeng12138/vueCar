<template>
    <div class="index">
      <Car ref="carss" />
      <aMap ref="amap" @callComponentsFn = 'callComponentsFn'/>
      <Navbar />
      <!-- <div id="personalWrap"  :class="[showLeft ?'open':'']"> :class="{open:showLeft}"-->
      <div id="personalWrap" :class="{open:showLeft}">
          <router-view />
      </div>
      <Login />
      <div class="car_active" v-if="order_no">
          <router-link :to="{path:'/orderDetailed',query:{order_no:order_no}}" class="color-white" >正在使用车辆</router-link>
      </div>
       <div class="car_parking" v-if="carStatus && carStatus.order_status =='RETURN'">
           停车场ID:
          <el-button v-for="(item,index) in parkingId" :key="index" :type="parkingIdd == item ? 'primary': ''" size="mini" @click="parkingIdd = item">{{item}}</el-button>
      </div>

      <div class="car_button" v-if="order_no">
          <el-button @click="GetCar" type="primary" size="mini" v-if="carStatus && carStatus.order_status =='WAIT'">取车</el-button>
          <el-button @click="ReturnCars" type="primary" size="mini" v-if="carStatus && carStatus.order_status =='RETURN'" >还车</el-button>
          <el-button @click="ReturnSCars" type="primary" size="mini" v-if="carStatus && carStatus.order_status =='RETURN'" >还车停车场</el-button>
          <el-button @click="CancelCars" type="primary" size="mini" v-if="carStatus && carStatus.order_status =='WAIT'">取消</el-button>
      </div>
    </div>
</template>

<script>
import aMap from '@/views/amap/index'
import Car from '@/views/car/index'
import Navbar from '@c/navbar'
import Login from './login'
import {GetParking} from '@/api/parking'
import { CarsActivation ,CarsGet,CarsCancel,CarsReturn,CarsReturnS} from '@/api/order.js'
export default {
    components:{aMap,Car,Navbar,Login},
    data() {
        return {
           carStatus:{},
           order_no:'',
           parkingIdd:''
        }
    },
    computed: {
        showLeft(){
            const routerPath = this.$route.name;
            return routerPath === 'index' ? false:true
        },
        parkingId(){
            return this.$store.state.Location.parkId
        }
    },
    // watch:{
    //     "$route":{
    //         handler(newValue){
    //             console.log(newValue.name)
    //             let pathName = newValue.name
    //             this.showLeft = pathName === 'index' ? false:true
    //         }
    //     }
    // }

    mounted(e) {
        //判断点击的内容是否在弹窗范围内 
        document.addEventListener('mouseup',e=>{
            let userCon = document.getElementById('personalWrap');
            let carListWrap = document.getElementsByClassName('cars-wrap')[0]

            //关闭车辆列表
             if(carListWrap && !carListWrap.contains(e.target)){
                let isReqest = this.$store.state.App.isRequestList
                console.log(isReqest)
                if(!isReqest){
                    this.$store.commit('App/SET_ISCLICKLIST',false)
                }
               //this.$store.commit('App/SET_ISCLICKLIST',false)
            }

            //关闭个人中心
            if(userCon && !userCon.contains(e.target)){
                const routerName = this.$route.name
                if(routerName === 'index'){ return false}
                this.$router.push({name:'index'})
            }
        })
       
    },
    beforeMount(){
        this.getCarStatus()
    },
    methods:{
        ReturnSCars(){
            CarsReturnS(
                {
                    order_no:this.order_no,
                    cars_id:this.carStatus.cars_id,
                    parking_id:this.parkingIdd
                }
                ).then(res=>{
               this.$message.success(res.message)
               this.getCarStatus()
           }) 
        },
        GetCar(){
           CarsGet({order_no:this.order_no,cars_id:this.carStatus.cars_id}).then(res=>{
               this.$message.success(res.message)
               this.getCarStatus()
           }) 
        },
        CancelCars(){
            CarsCancel({order_no:this.order_no,cars_id:this.carStatus.cars_id}).then(res=>{
               this.$message.success(res.message)
               this.order_no = ''
               this.carStatus = {}
               this.getCarStatus()
           }) 
        },

        ReturnCars(){
             CarsReturn({order_no:this.order_no,cars_id:this.carStatus.cars_id}).then(res=>{
               this.$message.success(res.message)
               this.order_no = ''
               this.carStatus = {}
               this.getCarStatus()
           }) 
        },
        //子组件调用父组件的方法
        callComponentsFn(params){
            params.function && this[params.function]()
        },
        loadMap(){
            const _that = this
            GetParking().then((res)=>{
                const data =res.data.data
                data.forEach((item)=>{
                    item.content = "<img src='"+require('@/assets/images/parking_location_img.png')+"' />",
                    item.position = item.lnglat.split(','),
                    item.offset = [-35,-60],
                    item.offsetTxt = [-30,-55],
                    item.text = `<div style="width:60px;color:#fff;text-align:center;line-height:50px;font-size:20px;height:60px">${item.carsNumber}</div>`,
                    item.events = {
                        click:(e)=>{
                           this.$store.commit('App/SET_ISREQUESTLIST',true)
                           this.walkFn(e)
                           this.gettt(e)
                        }
                    }
                })
                this.$refs.amap.parkingData(data)
                let parkId = data.map((item)=>item.id)
                this.$store.commit('Location/SET_PARKID',parkId) //存储停车场id
            })
        },
        walkFn(e){
            let data = e.target.getExtData()
            // console.log(e.target.getExtData().lnglat.split(','))
            this.$refs.amap.savaData({
                key:'parkingAllData',
                value:data
            })
            this.$refs.amap.getWalking(data.lnglat.split(','))
        },
        gettt(e){
            let data = e.target.getExtData()
            this.$refs.carss.getList(data)
        },
        //获取使用车辆使用状态
        getCarStatus(){
            CarsActivation().then(res=>{
                console.log(res)
                let data = res.data
                this.carStatus = data
                if(data){
                     this.order_no = data.order_no
                } 
                console.log(this.order_no)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.index{
    #personalWrap{
        position: fixed;
        right: -600px;
        top: 0;
        width:410px;
        z-index: 10;
        height: 100vh;
        background-color: #34393f;
        @include webkit(transition,all .3s  ease 0s);
        @include webkit(box-shadow,-5px 0 38px 0 rgba( 0,0,0,.4));
        &.open{
            right: 0; 
        }
    }
}
.car_active{
    height: 30px;
    width: 150px;
    background-color: green;
    color: #fff;
    position: fixed;
    top: 20px;
    left: 20px;
    border-radius: 10px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.car_button{
    position: fixed;
    top: 90px;
    left: 20px;
     height: 30px;
    width: 300px;
    margin-top: 20px;
}
.car_parking{
    position: fixed;
    top: 60px;
    left: 20px;
     height: 30px;
     margin-bottom: 20px;
}

</style>


