import axios from "./config.js";


export const getCategoryData = () => {
  return axios.get('/categoryData') // 请求数据时传递id参数
}
