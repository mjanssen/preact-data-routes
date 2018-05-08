import { USER, POST } from './data';
import Home from '../pages/Home';

export default {
  home: {
    path: '/',
    component: Home,
  },
  about: {
    path: '/about',
    component: 'About',
    data: [USER, POST],
  },
};
