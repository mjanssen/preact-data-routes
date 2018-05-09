import { USER, POST, COMPANY_DATA } from './data';
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
  contact: {
    path: '/contact',
    component: 'Contact',
    data: [USER, COMPANY_DATA],
  },
};
