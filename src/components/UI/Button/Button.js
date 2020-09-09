import React from 'react';
import styled from 'styled-components';

const Button = React.memo(({ clicked, children, className }) => {
  return (
    <button className={`button ${className}`} onClick={clicked}>
      {children}
    </button>
  );
});

const ButtonStyle = styled(Button)`
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  color: #fff;
  outline: none;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  font-family: 'Noto Sans TC';
  cursor: pointer;
  letter-spacing: 1.2px;
  transition: 0.3s;
  border-radius: 0.2rem;
  &:active {
    opacity: 0.5;
  }
`;

export default ButtonStyle;
