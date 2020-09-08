import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

import { getNews } from '../../shared/service';
import NewsCard from '../../components/NewsCard/NewsCard';

const News = ({ className }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewsHandler = async () => {
    try {
      setLoading(true);
      const res = await getNews();
      const resData = res.data.data;
      const newsCards = resData.articles.map((news) => {
        return <NewsCard key={news.title} {...news} />;
      });
      setNews(newsCards);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsHandler();
  }, []);

  return (
    <div className={`news ${className}`}>
      {loading && (
        <div className="loading">
          <ReactLoading
            type="spin"
            color="#60dabd"
            height="3.5rem"
            width="3.5rem"
          />
        </div>
      )}
      {news}
    </div>
  );
};

const NewsStyle = styled(News)`
  background-color: #fff;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .loading {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default NewsStyle;
