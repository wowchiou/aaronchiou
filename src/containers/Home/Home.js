import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navigation from '../../components/Navigation/Navigation';

const Home = (props) => {
  const { className, location, history, routes, token } = props;

  const signBtn = token ? (
    <Link to="/signout" className="sign">
      登出
    </Link>
  ) : (
    <Link to="/signin" className="sign">
      登入
    </Link>
  );

  return (
    <div className={`home ${className}`}>
      <header className="home_header">
        <Navigation />
        {signBtn}
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
              {routes.map((route, idx) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  key={idx}
                  routes={route.routes}
                  render={(props) => {
                    return <route.component {...props} />;
                  }}
                />
              ))}
              <Redirect to="/error404" />
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
  height: 100%;
  .home_header {
    display: flex;
    position: fixed;
    width: auto;
    top: 1rem;
    right: 1rem;
    box-sizing: border-box;
    z-index: 100;
    justify-content: flex-end;
    align-items: center;
    .sign {
      margin-left: 2rem;
      border: 1px solid ${({ theme }) => theme.color.secondary};
      display: block;
      padding: 0.5rem 1.5rem;
      color: #fff;
      border-radius: 0.2rem;
      transition: 0.3s;
      font-size: 1.6rem;
      cursor: pointer;
      @media ${({ theme }) => theme.device.upMobile} {
        &:hover {
          background-color: ${({ theme }) => theme.color.secondary};
        }
      }
    }
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

export default HomeStyle;
