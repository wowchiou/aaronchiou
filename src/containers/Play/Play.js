import React from 'react';
import styled from 'styled-components';

const Play = ({ className }) => {
  return <div className={className}>This is Play page!</div>;
};

const PlayStyle = styled(Play)`
  min-height: 100vh;
  background-color: #00559930;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default PlayStyle;
