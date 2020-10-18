// import { AxiosResponse }  from 'axios';
import fetch from '../utils/fetch';

export const fetchPostList = (params: any) => {
  return fetch({
    method: 'get',
    url: '/post',
    params,
  });
};

export const fetchPost = (params: any) => {
  const { slug, ...others } = params || {}
  return fetch({
    method: 'get',
    url: `/post/${slug}`,
    params: others
  })
}