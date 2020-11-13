let geolocation = null
export function selfLocation(params){
     //自动定位
     if(!geolocation){
         geolocation = new AMap.Geolocation({
             showMarker:false,
             showButton:false,
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            // buttonPosition:'RB',    //定位按钮的停靠位置
            // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        });

     }
    
    params.map.addControl(geolocation);
    geolocation.getCurrentPosition();
    if(params.complete && typeof params.complete === 'function'){
        AMap.event.addListener(geolocation,'complete',params.complete)  //返回定位成功信息
    }
   
}


