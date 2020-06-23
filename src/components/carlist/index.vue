<template>
    <div >
        <section class="cars-item">
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车  5座</p>
            </header>
            <div class="cars-content">
                <div class="info">
                    <div>
                        <h4 class="cars-number">粤 B745N8</h4>
                        <div>
                            <ul class="cars-electric active-li-8">
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
                                <strong>600</strong>
                                <sub>KM</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img src="../../assets/images/pic001.jpg" alt="">
            </div>
            <footer>
                <a href="javascript:void(0)" class="parking">某某停车场</a>
            </footer>
            
       </section>
        <section class="cars-item  cars-detailed" :style="'height:'+ propsHeight">
            <h4 class="column">某某停车场
                <i class="close"></i>
            </h4>

            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车  5座</p>
            </header>
            <img src="../../assets/images/pic001.jpg" alt="" style="width:100%">
            <div class="clearfix">
                <div class="fs-24 f-l">粤 B745N8</div>
                <p class="distance f-r">
                    <sub>约</sub>
                    <strong>600</strong>
                    <sub>KM</sub>
                </p> 
            </div>    
            <div class="car-electric-box">
                <div class="clearfix" style="position:relative">
                    <span class="e-high" style="width:80%"></span>
                    <span class="e-bg"></span>
                </div>
            </div> 
            <p class="t-a info"> 取车支付12.0元，项目补贴12元</p>     
            <ul class="cars-type-list">
                <li class="checked">
                    <h4 class="name">日租车</h4>
                    <span class="price">300元/天</span>
                </li>
                 <li>
                    <h4 class="name">日租车</h4>
                    <span class="price">300元/天</span>
                </li>
                 <li>
                    <h4 class="name">日租车</h4>
                    <span class="price">300元/天</span>
                </li>
                 <li>
                    <h4 class="name">日租车</h4>
                    <span class="price">300元/天</span>
                </li>
            </ul>    
            <div class="clause">
                 <h4 class="clause-content">参保《全面保证服务》用车更放心</h4>
                 <i class="choose current"></i>
            </div> 
             <a href="javascript: void(0);" class="select-car-btn " v-xf="'xiaofeng'">预约车辆</a>
       </section>
    </div>
</template>

<script>
export default {
    props:{
        propsHeight:{
            type:String,
            default:'257px'
        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>


