import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { onSignout } from '../../../store/actions/index';

const SignOut = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('ACToken');
    dispatch(onSignout());
  }, [onSignout]);

  return (
    <div className={`signout ${className}`}>
      <div className="wrap">
        <h1>您已正確登出網站！</h1>
        <Link className="link" to="/">
          返回首頁
        </Link>
      </div>
    </div>
  );
};

const SignOutStyle = styled(SignOut)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 900;
  }
  .link {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    display: block;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 0.2rem;
    transition: 0.3s;
    font-size: 2.4rem;
    margin-top: 2rem;
    @media ${({ theme }) => theme.device.upMobile} {
      &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;

export default SignOutStyle;
