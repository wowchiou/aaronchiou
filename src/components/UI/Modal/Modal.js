import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = (props) => {
  const { clicked, className, children } = props;
  const globalModal = window.document.getElementById('global-modal');

  const modalCloseHandler = (e) => {
    e.target.classList.forEach((cl) => {
      if (cl === 'modal' || cl === 'wrap') {
        clicked();
      }
    });
  };

  const modal = (
    <div className={`modal ${className}`} onClick={modalCloseHandler}>
      <div className="closeBtn" onClick={clicked}>
        <span></span>
        <span></span>
      </div>
      <div className="wrap">
        <div className="container">{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, globalModal);
};

const ModalStyle = styled(Modal)`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(2, 2, 2, 0.8);
  position: relative;
  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.color.secondary};
    cursor: pointer;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 0.4rem;
      background-color: #fff;
      &:first-child {
        transform: translate(-50%, -50%) rotateZ(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotateZ(-45deg);
      }
    }
  }
  .wrap {
    max-width: 80rem;
    width: 90%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .container {
    background-color: rgba(2, 2, 2, 0.8);
    border: 2px solid ${({ theme }) => theme.color.secondary};
    width: 100%;
    padding: 3rem;
    font-size: 2rem;
    margin: 7.5rem 0;
  }
`;

export default ModalStyle;
