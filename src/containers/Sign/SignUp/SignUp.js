import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormBuilder from '../../../components/FormBuilder/FormBuilder';
import Button from '../../../components/UI/Button/Button';

const SignUp = ({ className }) => {
  const { handleSubmit, register, errors, watch, reset } = useForm();

  const SIGNUP_FORM = {
    email: {
      label: 'MAIL',
      type: 'email',
      valid: {
        required: true,
        pattern: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/,
      },
      placeholder: 'MAIL帳號',
      errMessage: '請檢查 MAIL 帳號是否填寫與正確',
    },
    password: {
      label: 'PASSWORD',
      type: 'password',
      valid: {
        required: true,
        minLength: 6,
      },
      placeholder: '最少6個字元密碼',
      errMessage: '請填寫最少6個字元的密碼',
    },
    confirm_password: {
      label: 'CONFIRM PASSWORD',
      type: 'password',
      valid: {
        required: true,
        minLength: 6,
      },
      placeholder: '再次確認密碼',
      errMessage: '輸入密碼錯誤',
    },
  };

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={`signUp ${className}`}>
      <div className="wrap">
        <div className="title">註冊</div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormBuilder
            formData={SIGNUP_FORM}
            register={register}
            errors={errors}
            watch={watch}
          />
          <div className="btns">
            <Button>確認註冊</Button>
            <Link className="signin" to="/signin">
              登入
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignUpStyle = styled(SignUp)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 100vh;
  .wrap {
    max-width: 500px;
    width: 90%;
    margin: 8rem 0;
    animation: slide-right 0.5s linear;
    @keyframes slide-right {
      0% {
        transform: translate(20%, 0);
        opacity: 0;
      }
      70% {
        transform: translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  .btns {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .signin {
    font-size: 1.6rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid;
    transition: 0.3s;
    &:hover {
      color: #6198e2;
    }
  }
`;

export default SignUpStyle;
