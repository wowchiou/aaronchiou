import React from 'react';
import styled from 'styled-components';

const Button = React.memo(({ clicked, disabled, children, className }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={clicked}
      disabled={disabled ? 'disabled' : false}
    >
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
  &:hover {
    background-color: #6af1d1;
  }
  &:active {
    opacity: 0.5;
  }
  &[disabled='disabled'],
  &:disabled {
    background-color: #ccc;
  }
`;

export default ButtonStyle;
