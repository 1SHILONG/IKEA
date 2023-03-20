/** 
 * js 通用函数的封装
 *  
*/
// 配置常量
const ADDRESS_KEY = '__address__';
const LOGS = '__logs__';
const DETAILID = '__detailId__';
const TOKEN = '__token__';
// 读取本地存储
const getLocal = (key) => {
  return localStorage.getItem(key)
}
// 设置本地存储
const setLocal = (key, value) => {
 localStorage.setItem(key, value)
}

const deleteLocal = (key) => {
  localStorage.removeItem(key)
}

export {
  getLocal,
  setLocal,
  deleteLocal,
  ADDRESS_KEY,
  LOGS,
  DETAILID,
  TOKEN
}