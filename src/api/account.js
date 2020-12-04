import service from "../utils/request";
/**
 * 获取验证码
 */
export function GetCode(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/account/code/`,
        data
    })
}


/**
 * 注册
 */
export function Register(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/account/register/`,
        data
    })
}

/**
 * 注册
 */
export function Login(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/account/login/`,
        data
    })
}

/**
 * 忘记密码
 */
export function Forget(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/account/forget/`,
        data
    })
}

/**
 * 用户租车接口
 */
export function ConfirmCars(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/confirmCars/`,
        data
    })
}



