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
    </div>
</template>

<script>
import aMap from '@/views/amap/index'
import Car from '@/views/car/index'
import Navbar from '@c/navbar'
import Login from './login'
import {GetParking} from '@/api/parking'
import { constants } from 'zlib';
export default {
    components:{aMap,Car,Navbar,Login},
    data() {
        return {
          
        }
    },
    computed: {
        showLeft(){
            const routerPath = this.$route.name;
            return routerPath === 'index' ? false:true
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
    methods:{
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

</style>


