import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = (props) => {
  const { clicked, className, children } = props;

  // 點擊跳窗空白處關閉跳窗
  const modalCloseHandler = (e) => {
    e.target.classList.forEach((cl) => {
      if (cl === 'modal' || cl === 'wrap') {
        clicked();
      }
    });
  };

  // 跳窗外框樣式碼
  const modal = (
    <div className={`modal ${className}`} onClick={modalCloseHandler}>
      <div className="wrap">
        <div className="container">
          <div className="closeBtn" onClick={clicked}>
            <span></span>
            <span></span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );

  // 指定傳送門位置
  const globalModal = window.document.getElementById('global-modal');

  return createPortal(modal, globalModal);
};

const ModalStyle = styled(Modal)`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(2, 2, 2, 0.8);
  position: relative;
  animation: model-fade 0.5s forwards;
  @keyframes model-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .closeBtn {
    position: absolute;
    bottom: 100%;
    right: -2px;
    width: 3.5rem;
    height: 3.5rem;
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
    border: 2px solid ${({ theme }) => theme.color.secondary};
    width: 100%;
    padding: 3rem;
    font-size: 2rem;
    margin: 7.5rem 0;
    animation: model-slideDown 0.5s forwards;
    @keyframes model-slideDown {
      0% {
        transform: translate(0, -10%);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;

export default ModalStyle;
