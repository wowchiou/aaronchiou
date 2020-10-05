import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';

import NewsCard from './NewsCard/NewsCard';
import GoBack from '../../../components/UI/GoBack/GoBack';
import Loading from '../../../components/UI/Loading/Loading';

import { getNews } from '../../../shared/service';
import { axiosAC } from '../../../shared/service';
import withErrorHandler from '../../../hoc/withErrorHandler';

const initState = {
  loading: false,
  news: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEWS_START':
      return {
        ...state,
        loading: true,
      };
    case 'NEWS_DONE':
      return {
        loading: false,
        news: action.news,
      };
    case 'NEWS_FAIL':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const News = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getNewsHandler = async () => {
    try {
      dispatch({ type: 'NEWS_START' });
      const res = await getNews();
      const resData = res.data.data;
      const newsCards = resData.articles.map((news) => {
        return <NewsCard key={news.title} {...news} />;
      });
      dispatch({ type: 'NEWS_DONE', news: newsCards });
    } catch (err) {
      dispatch({ type: 'NEWS_FAIL' });
    }
  };

  useEffect(() => {
    getNewsHandler();
  }, []);

  return (
    <>
      <div className={`news ${className}`}>
        {state.loading && <Loading />}
        <GoBack />
        {state.news}
      </div>
    </>
  );
};

const NewsStyle = styled(News)`
  background-color: #222;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default withErrorHandler(NewsStyle, axiosAC);
