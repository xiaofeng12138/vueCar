import service from "../utils/request";
/**
 * 获取充值列表
 */
export function AmountList(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/amount/`,
        data
    })
}

export function Pay(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/pay/`,
        data
    })
}

/**
 * 查询订单状态
 */
export function OrderStatus(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/orderStatus/`,
        data
    })
}





