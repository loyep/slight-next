import axios from 'axios'
import { message } from 'antd'
import { join } from 'path'

const baseURL = process.env.BASE_URL;
const pathJoin = (url: string ) => join(baseURL as string, url)

const service = axios.create({
  withCredentials: true,
  timeout: 30000,
})

console.log('request init');

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    console.warn('request=', JSON.stringify(config))
    return config
  },
  (error) => {
    // do something with request error
    console.warn(error) // for debug
    return Promise.reject(error)
  }
)
export default async function fetch(options: any): Promise<any> {
  // if (options.useToken) {
  //   options.headers = {
  //     Authorization: 'Bearer ' + window.localStorage.getItem('Token'),
  //   }
  // }
  return new Promise((resolve, reject) => {
    options.url = pathJoin(options.url)
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
