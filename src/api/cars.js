import service from "../utils/request";
/**
 * 获取停车场
 */
export function GetCarsList(data={}){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/cars/`,
        data
    })
}


/**
 * 获取租赁类类型
 */
export function GetCarsLease(data={}){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/lease/`,
        data
    })
}

