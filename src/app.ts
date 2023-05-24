// 运行时配置

import { RequestConfig } from '@umijs/max';

// import api from '@/services/meta';

import { redirect2login } from '@/utils';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  username?: string;
  userId?: number;
}> {
  // const token = localStorage.getItem('ranger_meta');
  // 验证token
  // if (location.pathname === '/login' || location.pathname === '/register') {
  //   if (token) {
  //     location.href = '/dashboard';
  //   }
  // } else if (!token) {
  //   redirect2login('token无效');
  // } else {
  //   const data = await api.AuthController.getCurrentUser();
  //   if (data.state === 'fail') {
  //     redirect2login(data.msg);
  //     return { username: '' };
  //   }
  //   return { username: data.data.username, userId: data.data.userId };
  // }
  return { username: '' };
}

export const request: RequestConfig = {
  errorConfig: {
    errorHandler: (error: any) => {
      if (error.response.status === 401) {
        redirect2login(error.response.data.msg);
      }
    },
  },
};
