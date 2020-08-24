import React from 'react';
import styled from 'styled-components';

const Backdrop = (props) => {
  const { show, clicked, className } = props;

  const classes = ['backdrop', className];
  show ? classes.push('show') : classes.push('hide');

  return <div className={classes.join(' ')} onClick={clicked}></div>;
};

const BackdropStyle = styled(Backdrop)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default BackdropStyle;
