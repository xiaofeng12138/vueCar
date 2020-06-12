<template>
    <div class="index">
      <Car />
      <!-- <Personal /> -->
      <aMap />
      <div id="personalWrap"  :class="[showLeft ?'open':'']">
          <router-view />
      </div>
    </div>
</template>

<script>
import aMap from '@/views/amap/index'
import Car from '@/views/car/index'
import Personal from '@/views/personal/index'
import { constants } from 'zlib';
export default {
    components:{aMap,Car,Personal},
    data() {
        return {
            showLeft:false
        }
    },
    watch:{
        "$route":{
            handler(newValue){
                console.log(newValue.name)
                let pathName = newValue.name
                this.showLeft = pathName === 'index' ? false:true
            }
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
        z-index: 101;
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


