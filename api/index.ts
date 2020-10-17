// import { AxiosResponse }  from 'axios';
import fetch from '../utils/fetch';

export const fetchPostList = (params: any) => {
  return fetch({
    method: 'get',
    url: '/post',
    params,
  });
};