// export default {
//   path: 'groups',
//   name: '团队',
//   component: '@/layouts/Group',
// };

export default {
  path: '/',
  component: '@/layouts/Basic',
  routes: [{ name: '欢迎页', path: 'groups', component: '@/layouts/Group' }],
};
