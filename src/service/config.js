import axios from 'axios'

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/0a6c301b03c11f31fd61a5e2a6442b22/ikea'
// axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
// use  拦截 
// 结果后， 最外层data 自动脱落
// 请求拦截
// axios.interceptors.request.use()
// 响应拦截
// 一次配置， 不用在data.data
axios.interceptors.response.use((res) => {
    // console.log(res)
    return res.data
})

export default axios