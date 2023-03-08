import homeRoutes from './Home';

export default [
  { path: '/', redirect: 'dashboard' },
  { path: '/', component: '@/layouts/Basic', routes: homeRoutes },
  { path: '/register', component: '@/pages/AuthManager' },
  { path: '/login', component: '@/pages/AuthManager' },
];
