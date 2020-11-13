<template>
    <div class="index">
        <!-- <el-amap vid="amapDemo"   class="amap-demo"> </el-amap> -->
         <el-amap vid="amapDemo" :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
               <el-amap-circle
                 v-for="(item,index) in circles"
                    :key="index"
                    :fillColor="item.color"
                    :center="item.center"
                    :radius="item.radius"
                    :strokeColor ="item.color"
                    :strokeOpacity="item.strokeOpacity" 
                    :strokeWeight="item.strokeWeight" 
                    >
                </el-amap-circle>
                <!--停车场点覆盖物-->
                 
                 <el-amap-marker v-for="(item, index) in parking" :key="item.id" :content="item.content" :position="item.position" :offset="item.offset" :vid="index"></el-amap-marker>
                <!--停车场文字-->
               <el-amap-marker v-for="(item, index) in parkingCarNum" :events="item.events" :extData="item" :key="item.id +index" :content="item.text" :position="item.position" :offset="item.offsetTxt" :vid="index"></el-amap-marker>
          <!--停车场信息-->
               <el-amap-marker v-for="(item, index) in parkingCarInfo"  :key="item.id + index*2" :content="item.text" :position="item.position" :offset="item.offset" :vid="index"></el-amap-marker>
         </el-amap>

    </div>
</template>

<script>
import {AMapManager,lazyAMapApiLoaderInstance} from 'vue-amap'
import { selfLocation } from './location.js'
import { Walking } from './walking.js'

let amapManager = new AMapManager()
export default {
    data() {
        const _this = this
        return {
            amapManager,
            self_location:[],
            map:null,
            zoom:18,
            center:[121.59996,31.197646],
            events:{
                init(o){
                    lazyAMapApiLoaderInstance.load().then(()=>{
                        _this.initMap()
                    })
                }
            },
            circles:[
                {
                   center:[0,0],
                   radius:4,
                   color:'#393e43',
                   strokeOpacity:'0.2',
                   strokeWeight:'30'
                }
            ],
            parkingAllData:{},
            parkingLocation:'',//当前停车场定位
            parking:[],
            parkingCarNum:[],
            parkingCarInfo:[]

        }
    },
    methods:{
        initMap(){
            this.map = amapManager.getMap()
            this.$emit('callComponentsFn',{
                function:'loadMap'
            })
            //自身定位
            this.locationFn()
        },
        onComplete(val){
                this.self_location = [val.position.lng,val.position.lat]
                this.circles[0].center = [val.position.lng,val.position.lat]
        },
        locationFn(){
             selfLocation({
                map:this.map,
                complete:(val)=>this.onComplete(val)
            })
        },
        //停车场方法
        parkingData(params){
            this.parking = params
            this.parkingCarNum = params
        },
        //获取线路规划函数
        getWalking(params){
            //步行路线规划
            this.parkingAllData = params
            let endLatlng = params.lnglat.split(',')
            this.parkingLocation = endLatlng
            Walking({
                map:this.map,
                position_start: this.self_location,
                position_end:endLatlng,
                complete:(val)=> this.handerWalking(val)
            })
        },
        handerWalking(val){
            //console.log(val)
            this.parkingCarInfo =[{
                position:this.parkingAllData.lnglat.split(','),
                offset:[-15,-54],
                text:`<div style="color:#fff;border-radius:100px;padding:0 20px;line-height:50px;height:50px;width:300px;font-size:16px;background-color:#34393f;">
                 <strong>${this.parkingAllData.carsNumber}</strong> 辆车 | 距离您 <strong>${val.routes[0].distance}</strong> 米
                </div>`
            }]

        }

    },
    mounted(){ 
        //初始化地图
        // lazyAMapApiLoaderInstance.load().then(()=>{
        //    this.map = new AMap.Map("amapDemo",{
        //        resizeEnable: true, //是否监控地图容器尺寸变化
        //        zoom:11, //初始化地图层级
        //        center: [116.397428, 39.90923] //初始化地图中心点
        //    })
        // })
    },
    watch:{
        "$store.state.Location.selfLocation":{
            handler(){
               this.locationFn()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.index{
    height: 100vh;
}
</style>


