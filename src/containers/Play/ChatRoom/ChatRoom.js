import React, { useEffect } from 'react';
import styled from 'styled-components';

import GoBack from '../../../components/UI/GoBack/GoBack';
import Button from '../../../components/UI/Button/Button';

import socket from '../../../shared/socket';

const ChatRoom = ({ className }) => {
  const emitMessageHanlder = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    socket.get().on('io test', (data) => {
      console.log(data);
    });

    socket.get().on('socket test', (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className={`chatRoom ${className}`}>
      <GoBack />
      <div className="wrap">
        <div className="side_bar">
          <div className="title">CHAT ROOM</div>
          <Button className="add_friend">新增朋友</Button>
          <ul className="friends">
            <li className="active">
              <span>聊天廣場</span>
            </li>
            <li>
              <span>friend 1</span>
            </li>
            <li>
              <span>friend 2</span>
            </li>
            <li>
              <span>friend 3</span>
            </li>
          </ul>
        </div>
        <div className="chat">
          <div className="message"></div>
          <form className="input_box">
            <input type="text" placeholder="請輸入訊息..." />
            <Button clicked={emitMessageHanlder}>送出</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ChatRoomStyle = styled(ChatRoom)`
  height: 100vh;
  min-width: 100rem;
  overflow-y: hidden;
  .wrap {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    padding: 2rem 2rem 8rem;
  }
  .side_bar {
    width: 30%;
    max-width: 30rem;
    text-align: center;
    border-right: 1px solid ${({ theme }) => theme.color.secondary};
    padding-right: 2rem;
    .title {
      color: ${({ theme }) => theme.color.secondary};
      font-weight: 900;
      font-size: 3.6rem;
    }
    .add_friend {
      margin: 1rem 0;
      width: 100%;
    }
    .friends {
      color: #fff;
      font-size: 2rem;
      li {
        line-height: 2.4;
        cursor: pointer;
        user-select: none;
        &.active {
          background-color: rgba(255, 255, 255, 0.3);
        }
        span {
          display: block;
        }
        &:first-child {
          border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
        }
        &:not(.active):hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:active {
          & span {
            transform: scale(0.98);
          }
        }
      }
    }
  }
  .chat {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    padding-left: 2rem;
    .message {
      flex: 1;
    }
  }
  .input_box {
    display: flex;
    justify-content: center;
    align-items: stretch;
    input {
      flex: 1;
      margin-right: 1rem;
    }
  }
`;

export default ChatRoomStyle;
