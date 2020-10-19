import axios, { AxiosRequestConfig } from 'axios'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import { message } from 'antd'

// const baseURL = serverRuntimeConfig.BASE_URL || publicRuntimeConfig.BASE_URL

// console.log('baseURL=', baseURL)
console.log('ffff')
const service = axios.create({
  baseURL: 'https://i.loyep.com/api',
  withCredentials: true,
  timeout: 2000,
})

console.log('request init')

// request interceptor
// service.interceptors.request.use(
//   (config) => {
//     // do something before request is sent
//     // eslint-disable-next-line no-debugger
//     return config
//   },
//   (error) => {
//     // do something with request error
//     return Promise.reject(error)
//   }
// )

// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//    */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   (response) => {
//     return response
//   },
//   (error) => {
//     return error
//   }
// )

export default function fetch(options: AxiosRequestConfig): Promise<any> {
  // if (options.useToken) {
  //   options.headers = {
  //     Authorization: 'Bearer ' + window.localStorage.getItem('Token'),
  //   }
  // }
  // console.log('baseURL', baseURL)
  // console.log('url=', options.url)
  // options.url = join(String(baseURL), String(options.url))
  return new Promise((resolve, reject) => {
    // options.url = pathJoin(options.url)
    service(options)
      .then((response) => {
        const { data, status } = response
        const success = status === 200 || status === 304 ? true : false
        if (!success && typeof window !== 'undefined') {
          message.error(data.message)
        }
        if (status === 401) {
          window.localStorage.removeItem('Token')
          window.localStorage.removeItem('userName')
        }
        console.log('response', response)
        resolve({
          success: success,
          ...data,
        })
      })
      .catch((error) => {
        if (typeof window !== 'undefined') {
          message.info(error || 'Network Error')
        }
        console.log('error', error)
        reject()
      })
  })
}
