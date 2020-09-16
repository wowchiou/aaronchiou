import React from 'react';
import styled from 'styled-components';

import GoBack from '../../../components/UI/GoBack/GoBack';

const TodoList = ({ className }) => {
  return (
    <div className={className}>
      <GoBack />
      this todo list page
    </div>
  );
};

const TodoListStyle = styled(TodoList)``;

export default TodoListStyle;
