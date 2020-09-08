import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../transition-style.css';

import Navigation from '../../components/Navigation/Navigation';
import Index from '../Index/Index';
import Skill from '../Skill/Skill';
import Play from '../Play/Play';
import Contact from '../Contact/Contact';
import News from '../News/News';

const Home = ({ className, location, history }) => {
  // console.log(process.env.NODE_ENV);
  return (
    <div className={`home ${className}`}>
      <header className="home_header">
        <Navigation />
      </header>
      <main className="home_wrapper">
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
          {/* <Route path="/skill" component={Skill} /> */}
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

const HomeStyle = styled(Home)`
  font-size: 2rem;
  position: relative;
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
    min-height: 100vh;
  }
`;

export default withRouter(HomeStyle);
