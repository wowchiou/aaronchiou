import { lazy } from 'react';

const pathName = {
  signup: '/signup',
  signin: '/signin',
  signout: '/signout',
  error500: '/error500',
  error404: '/error404',
  contact: '/contact',
  play: '/play',
};

const routes = [
  {
    path: pathName.signup,
    component: lazy(() => import('../containers/Sign/SignUp/SignUp')),
  },
  {
    path: pathName.signin,
    component: lazy(() => import('../containers/Sign/SignIn/SignIn')),
  },
  {
    path: pathName.signout,
    component: lazy(() => import('../containers/Sign/SignOut/SignOut')),
  },
  {
    path: pathName.error500,
    component: lazy(() => import('../containers/Error/Error500')),
  },
  {
    path: pathName.error404,
    component: lazy(() => import('../containers/Error/Error404')),
  },

  // play routes
  {
    path: pathName.play + '/news',
    component: lazy(() => import('../containers/Play/News/News')),
  },
  {
    path: pathName.play + '/chatroom',
    component: lazy(() => import('../containers/Play/ChatRoom/ChatRoom')),
    validate: true,
  },
  {
    path: pathName.play + '/clock',
    component: lazy(() => import('../containers/Play/Clock/Clock')),
  },

  // home routes
  {
    path: '/',
    component: lazy(() => import('../containers/Home/Home')),
    routes: [
      {
        path: '/',
        component: lazy(() => import('../containers/About/About')),
        exact: true,
      },
      {
        path: pathName.contact,
        component: lazy(() => import('../containers/Contact/Contact')),
      },
      {
        path: pathName.play,
        component: lazy(() => import('../containers/Play/Play')),
      },
    ],
  },
];

export default routes;
