import React from 'react';
import { Outlet } from '@umijs/max';
import { Layout } from 'antd';
import { CommonSider } from '@/components/Layout';
import styles from './index.less';

const Home: React.FC = () => {
  const menuList = [
    { label: '用户管理', key: 'grid', path: '/user' },
    { label: '任务管理', key: 'list', path: '/task' },
  ];
  return (
    <Layout>
      <CommonSider menuList={menuList} />
      <Layout.Content className={styles['main-content']}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
