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
    url: encodeURI(`/post/${slug}`),
    params: others
  })
}

export const fetchCategory = (params: any) => {
  const { slug, ...others } = params || {}
  return fetch({
    method: 'get',
    url: encodeURI(`/category/${slug}`),
    params: others
  })
}