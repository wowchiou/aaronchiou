import React from 'react';
import styled from 'styled-components';

const Button = ({ clicked, children, className }) => {
  return (
    <button className={className} onClick={clicked}>
      {children}
    </button>
  );
};

const ButtonStyle = styled(Button)`
  background-color: ${({ theme }) => theme.color.secondary};
  color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default ButtonStyle;
