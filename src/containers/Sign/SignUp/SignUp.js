import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import FormBuilder from '../../../components/FormBuilder/FormBuilder';
import Button from '../../../components/UI/Button/Button';
import GoBack from '../../../components/UI/GoBack/GoBack';

import { axiosAC } from '../../../shared/service';
import withErrorHandler from '../../../hoc/withErrorHandler';
import { onSignup } from '../../../store/actions/index';
import SIGNUP_FORM from './signupForm';

const SignUp = (props) => {
  const { className, onSignup, loading, token } = props;
  const { handleSubmit, register, errors, watch } = useForm();

  console.log('signup');

  return (
    <div className={`signUp ${className}`}>
      {token && <Redirect to="/" />}
      <GoBack />
      <div className="wrap">
        <div className="title">註冊</div>
        <form onSubmit={handleSubmit(onSignup)}>
          <FormBuilder
            formData={SIGNUP_FORM}
            register={register}
            errors={errors}
            watch={watch}
          />
          <div className="btns">
            <div className="btns_wrap">
              <Button disabled={loading}>確認註冊</Button>
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
            <Link className="signin" to="/signin">
              登入
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (data) => dispatch(onSignup(data)),
  };
};

const SignUpStyle = styled(SignUp)`
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SignUpStyle, axiosAC));

// export default connect(mapStateToProps, mapDispatchToProps)(SignUpStyle);
