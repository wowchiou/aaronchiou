import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error500 = ({ className }) => {
  return (
    <div className={`error500 ${className}`}>
      <div className="wrap">
        <h1>錯誤代碼：500</h1>
        <p>抱歉！伺服器似乎發生問題，請稍後再試。</p>
        <p>造成您的不便，請見諒！</p>
        <Link className="link" to="/">
          返回首頁
        </Link>
      </div>
    </div>
  );
};

const Error500Style = styled(Error500)`
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
  p {
    font-size: 2rem;
    color: #fff;
    margin-top: 1rem;
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

export default Error500Style;
