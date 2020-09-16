import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './containers/Home/Home';
import News from './containers/Play/News/News';
import TodoList from './containers/Play/TodoList/TodoList';
import SignUp from './containers/Sign/SignUp/SignUp';
import SignIn from './containers/Sign/SignIn/SignIn';
import SignOut from './containers/Sign/SignOut/SignOut';

import { GlobalStyles, ResetStyles } from './style/GlobalStyles';
import authHandler from './hoc/authHandler';

const routesList = [
  {
    url: '/news',
    comt: News,
    isAuth: false,
  },
  {
    url: '/todolist',
    comt: TodoList,
    isAuth: true,
  },
];

const App = ({ className }) => {
  const routes = routesList.map((list, idx) => {
    // 如 route 需要身分驗證則加入 authHandler hoc
    let comt = list.comt;
    if (list.isAuth) {
      comt = authHandler(comt);
    }
    return (
      <Route key={list.url + idx} path={`/play${list.url}`} component={comt} />
    );
  });

  return (
    <div className={`app ${className}`}>
      <ResetStyles />
      <GlobalStyles />
      <Switch>
        {routes}
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

const AppStyle = styled(App)``;

export default AppStyle;
