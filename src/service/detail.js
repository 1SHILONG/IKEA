import axios from "./config.js";


export const getDetailData = (id) => {
  return axios.get('/detailData', {params: { id: id}}) // 请求数据时传递id参数
}
