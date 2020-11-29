export default [
  {
    path: '/home',
    name: 'home',
    icon: 'smile',
    component: './Home',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
