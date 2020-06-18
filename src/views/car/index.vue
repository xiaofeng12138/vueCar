<template>
    <div class="cars-wrap">
        <div class="cars-wrap-swiper">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide> <Carlist propsHeight = "820px"/></swiper-slide>
                    <swiper-slide> <Carlist /></swiper-slide>
                    <swiper-slide> <Carlist /></swiper-slide>
                    <swiper-slide> <Carlist /></swiper-slide>
                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>
<script>
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
                }
            }
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>


