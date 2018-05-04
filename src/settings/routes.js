import Home from '../pages/Home';

const USER = () => ({
  api: 'https://jsonplaceholder.typicode.com/posts/1',
});

export default {
  home: {
    path: '/',
    component: Home,
  },
  about: {
    path: '/about',
    component: 'About',
    data: [USER],
  },
};
