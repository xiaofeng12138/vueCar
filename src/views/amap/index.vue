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
         </el-amap>

    </div>
</template>

<script>
import {AMapManager,lazyAMapApiLoaderInstance} from 'vue-amap'
import { selfLocation } from './location.js'
let amapManager = new AMapManager()
export default {
    data() {
        const _this = this
        return {
            amapManager,
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
                this.circles[0].center = [val.position.lng,val.position.lat]
        },
        locationFn(){
             selfLocation({
                map:this.map,
                complete:(val)=>this.onComplete(val)
            })
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
                console.log(77777777)
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


