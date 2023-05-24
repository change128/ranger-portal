import { message } from 'antd';
export const redirect2login = (msg?: string) => {
  if (msg) {
    message.warning(msg + ',请重新登录');
  }

  localStorage.removeItem('ranger_meta');
  location.href = '/login';
};
