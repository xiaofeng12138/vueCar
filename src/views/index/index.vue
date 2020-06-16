<template>
    <div class="index">
      <Car />
      <aMap />
      <Navbar />
      <!-- <div id="personalWrap"  :class="[showLeft ?'open':'']"> :class="{open:showLeft}"-->
      <div id="personalWrap" :class="{open:showLeft}">
          <router-view />
      </div>
    </div>
</template>

<script>
import aMap from '@/views/amap/index'
import Car from '@/views/car/index'
import Navbar from '@c/navbar'

export default {
    components:{aMap,Car,Navbar},
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
        transition: all .3s  ease 0s;
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s; 
        -o-transition: all .3s  ease 0s; 
        &.open{
            right: 0; 
        }
    }
    

}

</style>


