export default [
  {
    path: '',
    component: '@/layouts/Home',
    routes: [
      {
        name: '欢迎页',
        path: 'dashboard',
        component: '@/pages/Dashboard',
      },
      { name: '用户管理', path: 'user', component: '@/pages/UserManager' },
      { name: '任务管理', path: 'task', component: '@/pages/TaskManager' },
    ],
  },
];
