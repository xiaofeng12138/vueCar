export function formatCarAttr(val){
    if(!val){ return ''}
    return JSON.parse(val)
}

export function formartDate(params){
    const date = new Date(params)
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hours = date.getHours()
    const min = date.getMinutes()
    let sec = date.getSeconds()
    sec = sec < 10 ? '0'+ sec : sec;
    return `${year}-${month}-${day}  ${hours}:${min}:${sec}`
}

export function getCarAttrKey(params){
   if(!params.data){ return ''}
   const data = formatCarAttr(params.data)
   if(data[params.parantKey] && data[params.parantKey][params.childKey]){
       return data[params.parantKey][params.childKey]
   }
   return ''
}