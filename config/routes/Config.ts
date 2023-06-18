export default [
  {
    path: '',
    component: '@/layouts/Home',
    routes: [
      {
        name: '配置管理',
        path: 'configManager',
        component: '@/pages/ConfigManager',
      },
    ],
  },
];
