<template>
    <div class="navbar">
        <ul>
            <li><i class="icon icon-help i-width-44"></i></li>
            <li><i class="icon icon-search i-width-44"></i></li>
            <li>
                <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
            </li>
            <li @click="location"><i class="icon icon-location i-width-44"></i></li>
            <li @click="goUser"><i class="icon icon-user i-width-44"></i></li>
        </ul>
    </div>
</template>
<script>

import {getAccountToken} from '@/utils/accountCookie'
export default {
    data() {
        return {
        }
    },
    methods: {
        goUser(){
            this.$router.push({
                name:getAccountToken()?'User':'Login'
            })
        },
        location(){
            this.$store.commit('Location/SET_LOCATION')
        }
    },
    
}
</script>
<style lang="scss" scoped>
.navbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  ul{
      li{
          display: inline-block
      }
      .icon{
          margin: 0 17px;
          vertical-align: middle;
          cursor: pointer;
      }
  }
  
}
</style>


