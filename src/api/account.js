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


