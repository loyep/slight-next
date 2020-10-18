import axios from 'axios'
import { message } from 'antd'

const service = axios.create({
  baseURL: '/api',
  // baseURL: process.env.BASE_URL || 'http://localhost:3001',
  withCredentials: true,
  timeout: 30000,
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    console.log('request=', JSON.stringify(config))
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
export default async function fetch(options: any): Promise<any> {
  if (options.useToken) {
    options.headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('Token'),
    }
  }

  return new Promise((resolve, reject) => {
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
        resolve({
          success: success,
          ...data,
        })
      })
      .catch((error) => {
        if (typeof window !== 'undefined') {
          message.info(error || 'Network Error')
        }
        reject()
      })
  })
}
