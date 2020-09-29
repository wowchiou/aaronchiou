import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './containers/Home/Home';
import SignUp from './containers/Sign/SignUp/SignUp';
import SignIn from './containers/Sign/SignIn/SignIn';
import SignOut from './containers/Sign/SignOut/SignOut';
import Error500 from './containers/Error/Error500';
import Error404 from './containers/Error/Error404';
import News from './containers/Play/News/News';
import ChatRoom from './containers/Play/ChatRoom/ChatRoom';
import Clock from './containers/Play/Clock/Clock';

import { GlobalStyles, ResetStyles } from './style/GlobalStyles';
import withAuthHandler from './hoc/withAuthHandler';
import socket from './shared/socket';

// 連線 socket
socket.init('http://localhost:8080/test');

const routesList = [
  {
    url: '/news',
    comt: News,
    isAuth: false,
  },
  {
    url: '/chatroom',
    comt: ChatRoom,
    isAuth: true,
  },
  {
    url: '/clock',
    comt: Clock,
    isAuth: false,
  },
];

const App = ({ className }) => {
  const routes = routesList.map((list, idx) => {
    // 如 route 需要身分驗證則加入 authHandler hoc
    let comt = list.comt;
    if (list.isAuth) {
      comt = withAuthHandler(comt);
    }
    return (
      <Route key={list.url + idx} path={`/play${list.url}`} component={comt} />
    );
  });

  useEffect(() => {
    socket.get().on('connect', () => {
      console.log('connect server socket');
    });
  }, []);

  return (
    <div className={`app ${className}`}>
      <ResetStyles />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        {routes}
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/error500" component={Error500} />
        <Route path="/error404" component={Error404} />
        <Route path="/" component={Home} />
        <Redirect to="/error404" />
      </Switch>
    </div>
  );
};

const AppStyle = styled(App)``;

export default AppStyle;
