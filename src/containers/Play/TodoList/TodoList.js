import React from 'react';
import styled from 'styled-components';

import goBackHoc from '../../../hoc/goBackHoc';

const TodoList = ({ className }) => {
  return (
    <div className={className}>
      <p>慕雲</p>
      <div className="box">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/3hxx7dN8XMw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>

      <p style={{ paddingTop: '5rem' }}>yt提供</p>
      <div className="box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3hxx7dN8XMw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

const TodoListStyle = styled(TodoList)`
  p {
    font-size: 3rem;
    color: #fff;
  }
  .box {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default goBackHoc(TodoListStyle);
