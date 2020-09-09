import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles, ResetStyles } from './GlobalStyles';

import Home from './containers/Home/Home';
import News from './containers/Play/News/News';

const playList = [
  {
    url: '/news',
    component: News,
  },
];

const App = ({ className, location, history }) => {
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
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

const AppStyle = styled(App)``;

export default AppStyle;
