import React from 'react';
import styled from 'styled-components';

const Skill = ({ className, history }) => {
  const handlePop = () => {
    history.goBack();
  };

  return (
    <div className={className}>
      This is Skill page!
      <div onClick={handlePop}>go back</div>
    </div>
  );
};

const SkillStyle = styled(Skill)`
  background-color: #ff000020;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;

  div {
    position: absolute;
    bottom: 30%;
    cursor: pointer;
  }
`;

export default SkillStyle;
