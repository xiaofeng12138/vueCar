<template>
    <div class="navbar">
        <ul>
            <li><i class="icon icon-help"></i></li>
            <li><i class="icon icon-search"></i></li>
            <li>
                <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
            </li>
            <li><i class="icon icon-location"></i></li>
            <li><i class="icon icon-user"></i></li>
        </ul>
    </div>
</template>
<script>
export default {
    
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
  .select-car-btn{
      margin: 0 10px;
      display: inline-block;
      line-height: 84px;
      width: 260px;
      height: 84px;
      border-radius: 100px;
      color: #fff;
      text-align: center;
      font-size: 26px;
      font-weight: 300;
      background-color: $color_main ;
  }
}
</style>


