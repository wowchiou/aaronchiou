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
    className,
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
            autoComplete="on"
          />
        );
    }
  };

  const inputContent = inputRenderer();

  return (
    <div className={`input_wrap ${className}`}>
      <label>
        {label}
        {errors[name] && <span>{errMessage}</span>}
      </label>
      {inputContent || <p>Something was wrong!</p>}
    </div>
  );
};

const InputStyle = styled(Input)`
  &:not(:first-child) {
    margin-top: 1.5rem;
  }
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
    letter-spacing: 1.3px;
  }
`;

export default InputStyle;
