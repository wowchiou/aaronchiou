import React from 'react';
import styled from 'styled-components';

const Contact = ({ className }) => {
  return <div className={className}>This is Contact page!</div>;
};

const ContactStyle = styled(Contact)`
  background-color: #ffff0020;
  min-height: 100vh;
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

export default ContactStyle;
