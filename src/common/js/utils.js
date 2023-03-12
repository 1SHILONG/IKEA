/** 
 * js 通用函数的封装
 *  
*/
const ADDRESS_KEY = '__address__';
const LOGS = 'logs';
const DETAILID = 'detailId';

const getLocal = (key) => {
  return localStorage.getItem(key)
}

const setLocal = (key, value) => {
 localStorage.setItem(key, value)
}

export {
  getLocal,
  setLocal,
  ADDRESS_KEY,
  LOGS,
  DETAILID
}