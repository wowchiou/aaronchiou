import axios from 'axios';

export const axiosAC = axios.create({
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
  const response = await axiosAC.post('/feed/postSendMail', data);
  return response;
};

// get news data
export const getNews = async () => {
  const response = await axiosAC.get('/feed/getNews');
  return response;
};

// 註冊
export const signup = async (data) => {
  const response = await axiosAC.post('/feed/signup', data);
  return response;
};

// 登入
export const signin = async (data) => {
  const response = await axiosAC.post('/feed/signin', data);
  return response;
};
