import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import img_news from '../../assets/images/play/play-news.jpg';
import img_pokemonChat from '../../assets/images/play/play-pokemonChat.jpg';

const playList = [
  {
    img: img_news,
    date: '202008',
    url: '/news',
    title: 'news',
    skill: ['react', 'nodejs', 'scroll-snap-type'],
    type: 'self',
  },
  {
    img: img_pokemonChat,
    date: '202002',
    url: 'https://pokemon-chat.herokuapp.com/',
    title: 'pokemonchat',
    skill: ['JQUERY', 'socketio', 'nodejs'],
    type: 'blank',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
    type: 'self',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
    type: 'self',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/5.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'nodejs'],
    type: 'self',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
    type: 'self',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'NODEJS'],
    type: 'self',
  },
  {
    img: 'https://tympanus.net/Development/HoverEffectIdeas/img/5.jpg',
    date: '202008',
    url: '/playa',
    title: 'PLAYA',
    skill: ['JQUERY', 'CREATEJS', 'nodejs'],
    type: 'self',
  },
];

const Play = ({ className }) => {
  const { url } = useRouteMatch();

  const renderList = (list) => {
    return list.map((itm, idx) => {
      const content = (
        <div className="content">
          <p className="title">
            {itm.title.toUpperCase()}
            <span>{itm.date}</span>
          </p>
          <p className="text">
            {itm.skill.map((s) => (
              <span key={s}>{s.toUpperCase()}</span>
            ))}
          </p>
        </div>
      );

      // 判斷資料裡的type屬性對應需渲染route <link>還是普通<a>連結
      let link = '';
      if (itm.type === 'self') {
        link = (
          <Link
            className="link"
            to={`${url}${itm.url}`}
            style={{
              backgroundImage: `url(${itm.img})`,
            }}
          >
            {content}
          </Link>
        );
      } else if (itm.type === 'blank') {
        link = (
          <a
            className="link"
            style={{
              backgroundImage: `url(${itm.img})`,
            }}
            href={itm.url}
            target="_blank"
          >
            {content}
          </a>
        );
      }

      return (
        <Fade key={itm.title + idx} bottom>
          <li className="item">
            {link}
            <Fade right delay={100} duration={500}>
              <span className="deco" />
            </Fade>
          </li>
        </Fade>
      );
    });
  };

  return (
    <div className={`play ${className}`}>
      <ul className="list">{renderList(playList)}</ul>
    </div>
  );
};

const PlayStyle = styled(Play)`
  min-height: 100vh;
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8rem 0;
  overflow: hidden;
  .list {
    max-width: 1000px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: start;
    align-items: stretch;
    flex-wrap: wrap;
    padding-bottom: 0.5rem;
    @media ${({ theme }) => theme.device.mobile} {
      max-width: 480px;
      padding: 0 0.5rem 0.5rem 0;
    }
  }
  .item {
    width: 48%;
    max-width: 480px;
    height: 0;
    padding-bottom: 27%;
    position: relative;
    &:nth-child(even) {
      margin-left: calc(4% - 0.5rem);
    }
    &:nth-child(1n + 3) {
      margin-top: 4%;
    }
    @media ${({ theme }) => theme.device.upMobile} {
      &:hover {
        .link {
          background-position: top 10% left 10%;
        }
        .link::after {
          opacity: 1;
          transform: scale(1.3) rotate(45deg);
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
      padding-bottom: 56.25%;
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
  .deco {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    right: -0.5rem;
    bottom: -0.5rem;
    background-color: ${({ theme }) => theme.color.secondary};
    opacity: 0.9;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    padding: 3rem;
    color: #fff;
    overflow: hidden;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: top left;
    transition: 0.5s;
    @media ${({ theme }) => theme.device.mobile} {
      padding: 2rem;
    }
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
      /* border-radius: 50%; */
      border: 2px solid #fff;
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.2);
      opacity: 0;
      transition: 0.3s;
      transform: scale(0.8) rotate(20deg);
      @media ${({ theme }) => theme.device.mobile} {
        opacity: 1;
        width: 50%;
        height: 100%;
        max-width: 22rem;
        max-height: 30rem;
        transform: scale(1.3) rotate(45deg);
        bottom: -30%;
        right: -13%;
      }
    }
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
    transition: 0.3s;
    position: relative;
    z-index: 1;
    span {
      display: block;
      font-size: 2.4rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }
  }
  .text {
    position: absolute;
    bottom: 4rem;
    right: 3rem;
    font-size: 2.4rem;
    transform: translate(0, 50%);
    opacity: 0;
    transition: 0.5s;
    font-weight: 600;
    white-space: nowrap;
    @media ${({ theme }) => theme.device.mobile} {
      opacity: 1;
      transform: translate(0, 0);
      font-size: 2rem;
      bottom: 2rem;
      right: 1rem;
    }
    span {
      display: block;
      text-align: right;
      & + span {
        margin-top: 0.8rem;
      }
    }
  }
`;

export default PlayStyle;
