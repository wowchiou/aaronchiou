import React from 'react';
import { connect } from 'react-redux';

const authHandler = (WrappedComponents) => {
  return connect(mapStateToProps)((props) => {
    const { token, history } = props;
    if (!token) {
      history.push('/signin');
    }
    return (
      <>
        <WrappedComponents {...props} />
      </>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default authHandler;
