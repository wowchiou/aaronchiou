import React from 'react';
import styled from 'styled-components';

const NewsCard = (props) => {
  const { className, urlToImage, title, description, publishedAt, url } = props;
  return (
    <div
      className={`newsCard ${className}`}
      style={{ backgroundImage: `url('${urlToImage}')` }}
    >
      <a
        href={url}
        target="_blank"
        className="content"
        rel="noopener noreferrer"
      >
        <div className="wrap">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <div className="note">
            <span className="date">{publishedAt}</span>
            <span>觀看全文...</span>
          </div>
        </div>
      </a>
    </div>
  );
};

const NewsCardStyle = styled(NewsCard)`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    height: 35vh;
    scroll-snap-align: start;
  }
  .content {
    position: absolute;
    top: 5rem;
    right: 5rem;
    background-color: #111;
    color: #ccc;
    width: 60rem;
    padding: 3rem;
    line-height: 1.33;
    font-size: 1.6rem;
    letter-spacing: 1px;
    transition: 0.3s;
    @media ${({ theme }) => theme.device.upMobile} {
      &:hover {
        background-color: #fff;
        .title,
        .description {
          color: #000;
        }
      }
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
      padding: 0;
      display: flex;
      align-items: flex-end;
      .wrap {
        padding: 2rem;
        width: 100%;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.9) 0%,
          rgba(0, 0, 0, 0.5) 40%,
          rgba(0, 0, 0, 0) 100%
        );
        /* background-color: rgba(0, 0, 0, 0.5); */
      }
    }
  }
  .title {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 0rem;
    }
  }
  .description {
    & > span {
      color: #666;
      font-size: 0.13rem;
      margin-left: 0.5rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
  }
  .note {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    @media ${({ theme }) => theme.device.mobile} {
      margin-top: 0.5rem;
      color: #ccc;
    }
  }
`;

export default NewsCardStyle;
