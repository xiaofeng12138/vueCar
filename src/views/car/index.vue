<template>
    <div class="index-wrap">
       <section class="cars-item">
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车  5座</p>
            </header>
            
       </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        go(){
            this.$router.push('/user')
        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>


