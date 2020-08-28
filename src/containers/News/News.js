import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getNews } from '../../shared/service';
import NewsCard from '../../components/NewsCard/NewsCard';

const News = () => {
  const [news, setNews] = useState([]);

  const getNewsHandler = async () => {
    try {
      const res = await getNews();
      const resData = res.data.data;
      console.log(resData);
      const newsCards = resData.articles.map((news) => {
        return <NewsCard key={news.title} {...news} />;
      });
      setNews(newsCards);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNewsHandler();
  }, []);

  return <div>{news}</div>;
};

const NewsStyle = styled(News)``;

export default NewsStyle;
