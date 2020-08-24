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
  color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  font-family: 'Noto Sans TC';
  cursor: pointer;
  letter-spacing: 1.2px;
`;

export default ButtonStyle;
