import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GlobalStyles, ResetStyles } from './GlobalStyles';

import './transition-style.css';

import Navigation from './components/Navigation/Navigation';
import Index from './containers/Index/Index';
import Skill from './containers/Skill/Skill';
import Play from './containers/Play/Play';
import Contact from './containers/Contact/Contact';
import News from './containers/News/News';

const App = ({ className, location, history }) => {
  // console.log(process.env.NODE_ENV);
  return (
    <div className={`app ${className}`}>
      <ResetStyles />
      <GlobalStyles />
      <header className="app_header">
        <Navigation />
      </header>
      <main className="app_wrapper">
        {/* <TransitionGroup
          style={{ position: 'releative' }}
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames: history.action === 'PUSH' ? 'app-push' : 'app-pop',
            })
          }
        >
          <CSSTransition
            key={location.pathname}
            classNames={history.action === 'PUSH' ? 'app-push' : 'app-pop'}
            timeout={1000}
          > */}
        <Switch location={location}>
          <Route path="/skill" component={Skill} />
          <Route path="/play" component={Play} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Index} />
          <Redirect to="/" />
        </Switch>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </main>
    </div>
  );
};

const AppStyle = styled(App)`
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  .app_header {
    display: inline-block;
    position: fixed;
    width: auto;
    top: 1rem;
    right: 1rem;
    box-sizing: border-box;
    z-index: 100;
  }
  .app_wrapper {
    min-height: 100vh;
  }
`;

export default withRouter(AppStyle);
