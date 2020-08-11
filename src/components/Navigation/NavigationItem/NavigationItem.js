import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  const { link, exact, children } = props;
  return (
    <li className="navigationItem">
      <NavLink to={link} exact={exact} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
