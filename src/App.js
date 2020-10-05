import React, { useEffect, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import Loading from './components/UI/Loading/Loading';

import { GlobalStyles, ResetStyles } from './style/GlobalStyles';
import withAuthHandler from './hoc/withAuthHandler';
import socket from './shared/socket';
import routes from './routes/routes';

// 連線 socket
socket.init('http://localhost:8080/test');

// toastify 提醒窗設定
const toastifyConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  draggable: true,
  pauseOnHover: true,
};

const App = ({ className }) => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    socket.get().on('connect', () => {
      console.log('connect server socket');
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className={`app ${className}`}>
        <ResetStyles />
        <GlobalStyles />
        <ToastContainer {...toastifyConfig} />
        <Switch>
          {routes.map((route, idx) => {
            return (
              <Route
                path={route.path}
                key={idx}
                render={(props) => {
                  const routeProps = {
                    routes: route.routes,
                    token: token,
                    ...props,
                  };

                  // 如route需要身分驗證
                  // 加入withAuthHandler HOC 身分授權檢查
                  return route.validate ? (
                    withAuthHandler(route.component)({
                      ...routeProps,
                    })
                  ) : (
                    <route.component {...routeProps} />
                  );
                }}
              />
            );
          })}
          <Redirect to="/error404" />
        </Switch>
      </div>
    </Suspense>
  );
};

const AppStyle = styled(App)``;

export default AppStyle;
