import axios from 'axios'
import { refreshToken } from '../api/user'
import store from '../store'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/',
  outTime: 5000
})

// // 请求拦截器
// request.interceptors.request.use(
//   function (config) {
//     const { user } = store.state
//     if (user && user.token) {
//       config.headers.Authorization = `Bearer ${user.token}`
//     }
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response
  },
  async function (err) {
    if (err.response.status === 401) {
      try {
        const { data } = await refreshToken()
        store.user.token = data.data.token
        store.commit('setUser', store.user)
        console.log('更新了token')
      } catch (err) {
        store.commit('setUser', {})
        window.location.href = '/#/login'
        return Promise.reject(err)
      }
    } else {
      this.$store.commit('setUser', null)
      window.location.href = '/#/login'
      return Promise.reject(err)
    }
  }
)

export default request
