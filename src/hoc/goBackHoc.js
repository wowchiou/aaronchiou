import React from 'react';
import { withRouter } from 'react-router-dom';

const goBackHoc = (WrappedComponents) => {
  return withRouter((props) => {
    const goBackHandler = () => {
      if (props.history.action === 'PUSH') {
        props.history.goBack();
      } else {
        props.history.push('/play');
      }
    };

    return (
      <>
        <div
          style={{
            fontSize: '3rem',
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            color: '#fff',
            fontWeight: '600',
            cursor: 'pointer',
            paddingBottom: '0.05rem',
            borderBottom: '2px solid #fff',
            zIndex: '10',
          }}
          onClick={goBackHandler}
        >
          RETURN
        </div>
        <WrappedComponents {...props} />
      </>
    );
  });
};

export default goBackHoc;
