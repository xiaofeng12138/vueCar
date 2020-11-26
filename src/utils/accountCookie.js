import Cookies from "js-cookie";
// 变量
const accountToken = "accountToken";
const accountUsername = "accountUsername";

// 获取token
export function getAccountToken(){ return Cookies.get(accountToken); }
// 写入token
export function setAccountToken(value){ return Cookies.set(accountToken, value); }
// 删除token
export function removeAccountToken(){ return Cookies.remove(accountToken); }
// 写入userName
export function setAccountUsername(value){ return Cookies.set(accountUsername, value); }
// 获取userName
export function getAccountUsername(){ return Cookies.get(accountUsername); }
// 删除userName
export function removeAccountUsername(){ return Cookies.remove(accountUsername); }

