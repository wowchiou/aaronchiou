import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';

import FormBuilder from '../../../components/FormBuilder/FormBuilder';
import Button from '../../../components/UI/Button/Button';
import GoBack from '../../../components/UI/GoBack/GoBack';

import { axiosAC } from '../../../shared/service';
import withErrorHandler from '../../../hoc/withErrorHandler';
import SIGNIN_FORM from './signinForm';
import { onSignin } from '../../../store/actions/index';

const SignIn = (props) => {
  const { className, history, token } = props;
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, watch } = useForm();

  console.log(history);

  useEffect(() => {
    // 如有 token 且從外部連結進入登入頁，跳回首頁
    // 如有 token 且是從內部連結進入，返回上一頁
    if (token) {
      if (history.action === 'POP') {
        history.push('/');
      } else {
        history.goBack();
      }
    }
  }, [token]);

  return (
    <div className={`signIn ${className}`}>
      <GoBack />
      <div className="wrap">
        <div className="title">登入</div>
        <form onSubmit={handleSubmit((data) => dispatch(onSignin(data)))}>
          <FormBuilder
            formData={SIGNIN_FORM}
            register={register}
            errors={errors}
            watch={watch}
          />
          <div className="btns">
            <div className="btns_wrap">
              <Button disabled={loading}>確認登入</Button>
              {loading && (
                <ReactLoading
                  className="loading"
                  type="spin"
                  color="#fff"
                  height="3.5rem"
                  width="3.5rem"
                />
              )}
            </div>
            <Link className="signup" to="signup">
              註冊
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignInStyle = styled(SignIn)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 100vh;
  .wrap {
    max-width: 50rem;
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
    .btns_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .loading {
        margin-left: 1rem;
      }
    }
  }
  .signup {
    font-size: 1.6rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid;
    transition: 0.3s;
    &:hover {
      color: #6198e2;
    }
  }
`;

export default withErrorHandler(SignInStyle, axiosAC);
