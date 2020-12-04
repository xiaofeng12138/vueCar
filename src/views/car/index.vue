<template>
    <div class="cars-wrap" v-if="dataArray && dataArray.length > 0">
        <div class="cars-wrap-swiper" >
                <swiper class="swiper" :options="swiperOption" >
                    <swiper-slide v-for="(item,index) in dataArray" :key="index" > <Carlist :data ="item" /></swiper-slide>
                    <!-- <swiper-slide> <Carlist /></swiper-slide>
                    <swiper-slide> <Carlist /></swiper-slide>
                    <swiper-slide> <Carlist /></swiper-slide> -->
                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>
<script>
//API接口
import {GetCarsList} from '@/api/cars'
import Carlist from '@/components/carlist'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components:{Carlist,Swiper,SwiperSlide},
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            },
            dataArray:[],
        }
    },
    methods:{
         getList(e){
            let parkingId = e.id
            GetCarsList({parkingId}).then(res=>{
                let data = res.data.data
                data && ( this.dataArray = data)
                this.$store.commit('App/SET_ISREQUESTLIST',false)
            })

        }
    },
    watch:{
         "$store.state.App.isClickCarList":{
             handler(newValue){
                 if(!newValue){this.dataArray = []}
                  this.$store.commit('App/SET_ISCLICKLIST',true)
             }
         }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>


