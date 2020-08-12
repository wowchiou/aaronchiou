import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    errors,
    errMessage,
    register,
  } = props;

  const inputRenderer = () => {
    switch (type) {
      case 'textarea':
        return <textarea name={name} ref={register} />;
      case 'select':
        return <select></select>;
      default:
        return (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            ref={register}
          />
        );
    }
  };

  const inputContent = inputRenderer();

  return (
    <div>
      <label>
        {label}
        {errors && <span>{errMessage}</span>}
      </label>
      {inputContent || <p>Something was wrong!</p>}
    </div>
  );
};

const InputStyle = styled(Input)`
  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  textarea {
    height: 20rem;
  }
  span {
    color: ${({ theme }) => theme.color.orange};
    font-size: 1.4rem;
    margin-left: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    opacity: 0.6;
  }
`;

export default InputStyle;
