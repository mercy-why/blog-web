import { request } from 'ice';
import { Key } from 'react';

export const getBlogList = (params: { currentPage?: Number; pageSize?: Number; account: string }) => {
  return request({
    url: '/blogHomePage/list',
    method: 'get',
    params,
  });
};

export const getById = (params: { id: Key }) => {
  return request({
    url: '/blogHomePage/getById',
    method: 'get',
    params,
  });
};
