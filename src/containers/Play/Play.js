import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const playList = [
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/5.jpg',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'nodejs'],
  },
];

const Play = ({ className }) => {
  const { url } = useRouteMatch();
  return (
    <div className={`play ${className}`}>
      <ul className="list">
        {playList.map((itm, idx) => (
          <li key={itm.title} className="item">
            <Link
              className="link"
              to={`${url}${itm.url}`}
              style={{
                backgroundImage: `url(${itm.img})`,
              }}
            >
              <div class="content">
                <p class="title">{itm.title.toUpperCase()}</p>
                <p class="text">
                  {itm.skill.map((s) => (
                    <span key={s}>{s.toUpperCase()}</span>
                  ))}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PlayStyle = styled(Play)`
  min-height: 100vh;
  /* background-color: #00559930; */
  background-color: #222;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8rem 0;
  .list {
    max-width: 1000px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: start;
    align-items: stretch;
    flex-wrap: wrap;
    @media ${({ theme }) => theme.device.mobile} {
      max-width: 480px;
    }
  }
  .item {
    width: 48%;
    max-width: 480px;
    height: 0;
    padding-bottom: 36%;
    position: relative;
    &:nth-child(even) {
      margin-left: 4%;
    }
    &:nth-child(1n + 3) {
      margin-top: 4%;
    }
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      right: -0.5rem;
      bottom: -0.5rem;
      background-color: ${({ theme }) => theme.color.secondary};
      opacity: 0.9;
    }
    @media ${({ theme }) => theme.device.upMobile} {
      &:hover {
        .link {
          background-position: top 10% left 10%;
        }
        .link::after {
          opacity: 1;
          transform: scale(1);
        }
        .text {
          opacity: 1;
          transform: translate(0, 0);
        }
        .title {
          transform: translate(-2%, -2%);
        }
      }
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      padding-bottom: 75%;
      &:nth-child(even) {
        margin-left: 0;
      }
      &:nth-child(1n + 3) {
        margin-top: 0;
      }
      &:not(:first-child) {
        margin-top: 5%;
      }
    }
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    padding: 5rem;
    color: #fff;
    overflow: hidden;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: top left;
    transition: 0.5s;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(100, 100, 100, 0.4);
      z-index: 0;
    }
    &::after {
      content: '';
      position: absolute;
      width: 30rem;
      height: 30rem;
      bottom: -10rem;
      right: -10rem;
      border-radius: 50%;
      border: 2px solid #fff;
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.2);
      opacity: 0;
      transition: 0.3s;
      transform: scale(0.8);
      @media ${({ theme }) => theme.device.mobile} {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
    transition: 0.3s;
    position: relative;
    z-index: 1;
  }
  .text {
    position: absolute;
    width: 30%;
    bottom: 4rem;
    right: 3rem;
    font-size: 2.4rem;
    transform: translate(0, 50%);
    opacity: 0;
    transition: 0.5s;
    font-weight: 600;
    @media ${({ theme }) => theme.device.mobile} {
      opacity: 1;
      transform: translate(0, 0);
    }
    span {
      display: block;
      text-align: right;
      & + span {
        margin-top: 0.5rem;
      }
    }
  }
`;

export default PlayStyle;
