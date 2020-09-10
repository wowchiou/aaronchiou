import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles, ResetStyles } from './GlobalStyles';

import Home from './containers/Home/Home';
import News from './containers/Play/News/News';
import TodoList from './containers/Play/TodoList/TodoList';
import SignUp from './containers/Sign/SignUp/SignUp';
import SignIn from './containers/Sign/SignIn/SignIn';

const playList = [
  {
    url: '/news',
    component: News,
  },
  {
    url: '/todolist',
    component: TodoList,
  },
];

const App = ({ className }) => {
  // console.log(process.env.NODE_ENV);
  const PlayRoute = playList.map((list, idx) => (
    <Route
      key={list.url + idx}
      path={`/play${list.url}`}
      component={list.component}
    />
  ));

  return (
    <div className={`app ${className}`}>
      <ResetStyles />
      <GlobalStyles />
      <Switch>
        {PlayRoute}
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

const AppStyle = styled(App)``;

export default AppStyle;
