import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logo/ac-logo-1.png';

const Logo = (props) => {
  return (
    <div className={`logo ${props.className}`}>
      <Link to="/" />
    </div>
  );
};

const LogoStyle = styled(Logo)`
  width: 15rem;
  a {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 34%;
    color: transparent;
    /* background-image: url(${logoImg}); */
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default LogoStyle;
