import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useErrorHandler from '../hooks/useErrorHandler';
import { toast } from 'react-toastify';

const withErrorHandler = (WrappedComponents, axios) => {
  return withRouter((props) => {
    const [error, clearError] = useErrorHandler(axios);

    useEffect(() => {
      if (error && error.status === 500) {
        toast.error(error.data.message);
        clearError();
        props.history.push('/error500');
      }
    }, [error]);

    return (
      <>
        <WrappedComponents {...props} />
      </>
    );
  });
};

export default withErrorHandler;
