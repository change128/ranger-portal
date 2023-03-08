import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import { useNavigate } from '@umijs/max';
import { Button } from 'antd';

export const CommonHeader: React.FC = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('web_token');
    navigate('/login');
  };
  return (
    <Layout.Header className={styles['header-wrapper']}>
      <div className={styles['header-content']}>
        <div
          className={styles['logo']}
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          logo
        </div>
        <div className={styles['avatar']}>头像</div>
        <Button onClick={logout}>登出</Button>
      </div>
    </Layout.Header>
  );
};
