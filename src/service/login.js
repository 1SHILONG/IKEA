import axios from "./config.js"

// 请求拦截
// 成功登录后拿到token 后续响应直接拿token鉴权即可
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  })
  
export const doLogin = (user, type) => {
  user.type = type // 判断登录 or 注册
  return axios.post('/login', user)
}