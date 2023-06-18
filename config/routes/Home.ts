export type IRouteType = {
  name: string;
  path: string;
  component: string;
  routes?: IRouteType[];
  extendsInfo?: any;
  key?: string;
  display?: boolean;
};

export default [
  {
    path: '',
    component: '@/layouts/Home',
    routes: [
      {
        key: 'dashboard',
        name: '首页',
        path: 'dashboard',
        component: '@/pages/Dashboard',
        display: false,
      },
      {
        name: '用户管理',
        path: 'user',
        component: '@/pages/UserManager',
        key: 'user',
        display: true,
      },
      {
        name: '任务管理',
        path: 'task',
        component: '@/pages/TaskManager',
        key: 'task',
        display: true,
      },
      {
        name: '组件预览',
        path: 'component',
        component: '@/pages/Component',
        key: 'component',
        display: true,
      },
      {
        name: '配置管理',
        path: 'configManager',
        component: '@/pages/ConfigManager',
        key: 'configManager',
        display: true,
      },
      {
        name: '面试相关',
        path: 'interview',
        component: '@/pages/Interview',
        key: 'interview',
        display: true,
      },
    ],
  },
] as IRouteType[];
