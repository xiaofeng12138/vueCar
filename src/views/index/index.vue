<template>
    <div class="index">
      <!-- <Car /> -->
      <aMap />
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
            if(userCon && !userCon.contains(e.target)){
                this.$router.push({name:'index'})
            }
        })
       
    },
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


