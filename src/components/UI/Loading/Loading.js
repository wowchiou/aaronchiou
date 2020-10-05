import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Loading = ({ className }) => {
  return (
    <div className={`loading ${className}`}>
      <ReactLoading
        type="spin"
        color="#60dabd"
        height="3.5rem"
        width="3.5rem"
      />
    </div>
  );
};

const LoadingStyle = styled(Loading)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingStyle;
