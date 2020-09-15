import * as actionType from '../type';
import { signup, signin } from '../../shared/service';

export const actions = {
  start: () => {
    return {
      type: actionType.AUTH_START,
    };
  },
  success: (token) => {
    return {
      type: actionType.AUTH_SUCCESS,
      token,
    };
  },
  fail: (error) => {
    return {
      type: actionType.AUTH_FAIL,
      error,
    };
  },
  out: () => {
    return {
      type: actionType.AUTH_LOGOUT,
    };
  },
};

export const onSignup = (data) => {
  return async (dispatch) => {
    dispatch(actions.start());
    try {
      const res = await signup(data);
      const token = res.data.token;
      localStorage.setItem('ACToken', token);
      dispatch(actions.success(token));
    } catch (error) {
      console.log(error.response);
      dispatch(actions.fail(error));
    }
  };
};

export const onSignin = (data) => {
  return async (dispatch) => {
    dispatch(actions.start());
    try {
      const res = await signin(data);
      const token = res.data.token;
      localStorage.setItem('ACToken', token);
      dispatch(actions.success(token));
    } catch (error) {
      console.log(error.response);
      dispatch(actions.fail(error));
    }
  };
};

export const onSignout = () => {
  return (dispatch) => {
    localStorage.removeItem('ACToken');
    dispatch(actions.out());
  };
};
