<template>
    <div class="car" @click="go">
        这是一个车辆展示的页面
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
.car{
    position: fixed;
    top: 0;
    left: 47%;
    z-index: 100;
}
</style>


