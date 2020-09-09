import React from 'react';
import styled from 'styled-components';

import CanvasText from '../../components/CanvasText/CanvasText';
import personalPhoto from '../../assets/images/ac-photo.jpg';

const Index = ({ className }) => {
  return (
    <div className={`index ${className}`}>
      {/* <CanvasText /> */}
      <div className="index_content">
        <div className="index_text">
          <p>
            Hi, I'm <span>Aaron Chiou,</span>
          </p>
          <p>
            a <span>front-end developer</span> based in Taipei, Taiwan.
          </p>
          <p>Welcome to my website, feel free to visit it.</p>
          <p>Hope you enjoy and have fun.</p>
        </div>
      </div>
    </div>
  );
};

const IndexStyle = styled(Index)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #efefef;
  .index_content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 5rem;
    transform: translate(0, -50%);
  }
  @media ${({ theme }) => theme.device.mobile} {
    .index_content {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
    }
  }
  .index_text {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    p {
      line-height: 1.7;
    }
    span {
      color: ${({ theme }) => theme.color.secondary};
      vertical-align: baseline;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    .index_text {
      font-size: 2.5rem;
    }
  }
  .index_pic {
    max-width: 300px;
    position: relative;
    top: 2rem;
    img {
      width: 100%;
    }
  }
`;

export default IndexStyle;
