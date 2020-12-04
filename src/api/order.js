import service from "../utils/request";
/**
 * 租车订单
 */
export function orderList(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/orderList/`,
        data
    })
}


/**
 * 正在使用的订单
 */
export function CarsActivation(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/carsActivation/`,
        data
    })
}


/**
 * 取车
 */
export function CarsGet(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/carsGet/`,
        data
    })
}

/**
 * 取消
 */
export function CarsCancel(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/carsCancel/`,
        data
    })
}

/**
 * 还车
 */
export function CarsReturn(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/carsReturn/`,
        data
    })
}

export function CarsReturnS(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/carsReturnS/`,
        data
    })
}

/**订单详情*/
export function OrderDetailed(data){
    return service.request({
        method: "post",
        url: "/order/detailed/",
        data
    })
}




