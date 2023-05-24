import { request } from '@umijs/max';

export async function queryUserList() {
  return request('/api/user');
}

export async function queryUserInfoById({ id }: { id: number }) {
  return request(`/api/user/${id}`, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('ranger_meta') || '',
    },
  });
}
export async function updateUserInfoById(id: string, data: any) {
  return request(`/api/user/${id}`, {
    method: 'POST',
    data,
  });
}
export async function deleteUserById(id: string) {
  return request(`/api/user/${id}`, {
    method: 'DELETE',
  });
}
