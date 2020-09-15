import axios from 'axios';

export const devBaseUrl = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://aaronchiou-back-end.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('ACToken'),
  },
});

// send email
export const apiPostSendMail = async (data) => {
  const response = await devBaseUrl.post('/feed/postSendMail', data);
  return response;
};

// get news data
export const getNews = async () => {
  const response = await devBaseUrl.get('/feed/getNews');
  return response;
};

// 註冊
export const signup = async (data) => {
  const response = await devBaseUrl.post('/feed/signup', data);
  return response;
};

// 登入
export const signin = async (data) => {
  const response = await devBaseUrl.post('/feed/signin', data);
  return response;
};
