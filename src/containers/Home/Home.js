import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navigation from '../../components/Navigation/Navigation';
import Index from '../Index/Index';
import Play from '../Play/Play';
import Contact from '../Contact/Contact';

const Home = ({ className, location, history }) => {
  // console.log(process.env.NODE_ENV);
  return (
    <div className={`home ${className}`}>
      <header className="home_header">
        <Navigation />
      </header>
      <main className="home_wrapper">
        <TransitionGroup
          className="transitionGroup"
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames: history.action === 'PUSH' ? 'app-push' : 'app-pop',
            })
          }
        >
          <CSSTransition
            classNames={history.action === 'PUSH' ? 'app-push' : 'app-pop'}
            key={location.pathname}
            timeout={500}
          >
            <Switch location={location}>
              <Route path="/play" component={Play} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact component={Index} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

const HomeStyle = styled(Home)`
  font-size: 2rem;
  position: relative;
  background-color: #222;
  height: 100vh;
  .home_header {
    display: inline-block;
    position: fixed;
    width: auto;
    top: 1rem;
    right: 1rem;
    box-sizing: border-box;
    z-index: 100;
  }
  .home_wrapper {
    position: relative;
  }
  .transitionGroup {
    position: relative;
    overflow: hidden;
  }

  /* transition group css start */
  .app-push-enter {
    opacity: 0.5;
    transform: translateX(100%);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  .app-push-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms ease;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
  }
  .app-push-exit {
    opacity: 1;
    transform: translateX(0);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
  }
  .app-push-exit-active {
    opacity: 0.5;
    transform: translateX(-100%);
    transition: all 0ms ease;
    overflow: inherit;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
  }
  .app-pop-enter {
    opacity: 0;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
  }
  .app-pop-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms ease;
    position: relative;
    top: 0;
    left: 0;
  }
  .app-pop-exit {
    opacity: 1;
    transform: translateX(0);
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
  }
  .app-pop-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0ms ease;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
  }
  /* transition group css end */
`;

export default withRouter(HomeStyle);
