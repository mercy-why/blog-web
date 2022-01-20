import { IRouterConfig } from 'ice';
import Layout from './Layouts';
import Home from '@/pages/Home';
import Article from '@/pages/Article';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home/:account',
        component: Home,
      },
      {
        path: '/article/:id',
        component: Article,
      },
    ],
  },
];

export default routerConfig;
