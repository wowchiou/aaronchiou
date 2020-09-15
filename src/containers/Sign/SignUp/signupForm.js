export default {
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
