import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthHandler = (WrappedComponents) => {
  return (props) => {
    console.log(props.history);
    !props.token && props.history.push('/signin');
    return (
      <>
        {/* {!props.token && <Redirect to="/signin" />} */}
        <WrappedComponents {...props} />
      </>
    );
  };
};

export default withAuthHandler;
