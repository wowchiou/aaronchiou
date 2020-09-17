import * as actionType from '../type';

const initState = {
  token: localStorage.getItem('ACToken'),
  errorMessage: null,
  loading: false,
  redirectPath: '/',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        errorMessage: null,
        loading: false,
      };
    case actionType.AUTH_FAIL:
      return {
        ...state,
        errorMessage: action.error,
        loading: false,
      };
    case actionType.AUTH_CLEAR:
      return {
        ...state,
        errorMessage: null,
        loading: false,
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        redirectPath: '/',
      };
    default:
      return state;
  }
};

export default authReducer;
