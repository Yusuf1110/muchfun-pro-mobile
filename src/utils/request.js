import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/',
  outTime: 5000
})

export default request
