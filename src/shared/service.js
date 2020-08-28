import axios from 'axios';

export const devBaseUrl = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
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
