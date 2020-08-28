import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = ({ className }) => {
  return (
    <ul className={`navigation ${className}`}>
      <NavigationItem link="/" exact>
        About
      </NavigationItem>
      <NavigationItem link="/skill">Skill</NavigationItem>
      <NavigationItem link="/play">Play</NavigationItem>
      <NavigationItem link="/news">News</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  );
};

const NavigationStyle = styled(Navigation)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  li {
    position: relative;
  }
  li + li {
    margin-left: 2rem;
  }
  li .active {
    color: ${({ theme }) => theme.color.secondary};
  }
  li:not(:first-child)::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 0;
    padding-bottom: 1.5rem;
    transform: rotateZ(10deg) translate(-100%, -50%);
    top: 50%;
    left: -1rem;
    background-color: ${({ theme }) => theme.color.primary};
  }
  li:active {
    -webkit-text-stroke: 1px;
    -webkit-text-fill-color: transparent;
  }
`;

export default NavigationStyle;
