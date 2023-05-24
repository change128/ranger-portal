import { request } from '@umijs/max';

export const login = async (data: any) => {
  return request('/api/login', {
    method: 'POST',
    data,
  });
};

export const register = async (data: any) => {
  return request('/api/register', {
    method: 'POST',
    data,
  });
};

export const getCurrentUser = async () => {
  return request('/api/current', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('ranger_meta') || '',
    },
  });
};
