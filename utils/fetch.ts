import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
  baseURL: 'https://i.loyep.com/api',
  // baseURL: process.env.BASE_URL || 'http://localhost:3001',
  withCredentials: true,
  timeout: 10000
});

export default async function fetch(options: any): Promise<any> {
  if (options.useToken) {
    options.headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('Token'),
    };
  }

  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        const { data, status } = response;
        const success = (status === 200 || status === 304) ? true : false;
        if (!success && typeof window !== 'undefined') {
          message.error(data.message);
        }
        if (status === 401) {
          window.localStorage.removeItem('Token');
          window.localStorage.removeItem('userName');
        }
        resolve({
          success: success,
          ...data,
        });
      })
      .catch(error => {
        if (typeof window !== 'undefined') {
          message.info(error || 'Network Error');
        }
        reject();
      });
  })
}