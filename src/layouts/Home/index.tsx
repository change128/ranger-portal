import React from 'react';
import { Outlet } from '@umijs/max';
import { Layout } from 'antd';
import { CommonSider } from '@/components/Layout';
import bizRules from '@/../config/routes';

const homeRoute = bizRules.find(
  (item) => item.path === '/' && item.component === '@/layouts/Basic',
)?.routes?.[0]?.routes;

const Home: React.FC = () => {
  const menuList = [
    { label: '用户管理', key: 'grid', path: '/user' },
    { label: '任务管理', key: 'list', path: '/task' },
    { label: '组件管理', key: 'component', path: '/component' },
  ];

  console.log(homeRoute);
  const menuList3 = (homeRoute || []).map((item) => {
    if (!item.display) return false;
    return {
      label: item.name,
      key: item.path,
      path: item.path,
    };
  });
  return (
    <Layout>
      <CommonSider menuList={menuList3} />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
