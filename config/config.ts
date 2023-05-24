import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: routes,
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
    },
  },
});
