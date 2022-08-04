import axios from 'axios' // 引入axios
import config from './config.js' // 引入配置文件

const instance = axios.create({
  baseURL: config.baseUrl.dev,
  timeout: 60000
})

instance.defaults.headers.post['Content-Type'] = 'application/json';
// 请求拦截器
instance.interceptors.request.use(function (config) {
  let token=localStorage.getItem('token');
  if(token){
    config.headers.Authorization = 'Bearer '+token;
  }
  console.log('发请求之前', config)
  return config
}, function (error) {
  console.log('请求错误', error)
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  console.log('得到的响应数据', response)
  if(response.data.code){
    if(response.data.code!=200){
      return Promise.reject(response.data.message)
    }else{
      return response
    }
  }else{
    return response
  }
}, function (error) {
  console.log('响应错误', error)
  return Promise.reject(error)
})

// get请求
export function get (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: data
      })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// post请求
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
