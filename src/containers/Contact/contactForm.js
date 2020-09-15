export default {
  name: {
    label: 'NAME：*',
    type: 'text',
    valid: {
      required: true,
      minLength: 2,
    },
    placeholder: 'Your Name',
    errMessage: '請填寫最少兩個字元的名字',
  },
  email: {
    label: 'MAIL*',
    type: 'email',
    valid: {
      required: true,
      pattern: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/,
    },
    placeholder: 'Your EMAIL',
    errMessage: '請檢查 mail 是否填寫與正確',
  },
  message: {
    label: 'MESSAGE：*',
    type: 'textarea',
    valid: {
      required: true,
    },
    placeholder: '',
    errMessage: '留言不能為空值',
  },
};
