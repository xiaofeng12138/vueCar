
let walking = null

//步行导航功能
export function Walking(params){
    if(!walking){
        walking = new AMap.Walking({
            map: params.map,
        }); 
    }
    
    //根据起终点坐标规划步行路线
    walking.search(params.position_start, params.position_end, function(status, result) {

        if(params.complete && typeof params.complete === 'function'){
            params.complete(result)
        }
    
        // // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        // if (status === 'complete') {
        //     // console.log('绘制步行路线完成')
        //     // console.log(result)
        // } else {
        //     // console.log('步行路线数据查询失败' + result)
        // } 
    })

}
