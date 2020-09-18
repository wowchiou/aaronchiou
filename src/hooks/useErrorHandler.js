import { useState, useEffect, useCallback } from 'react';

export default (httpInstance) => {
  const [error, setError] = useState(false);

  const reqInterceptor = httpInstance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      setError(false);
      return config;
    },
    (err) => {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  const resInterceptor = httpInstance.interceptors.response.use(
    (res) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return res;
    },
    (err) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      setError(err);
      return Promise.reject(err);
    }
  );

  const errorClearHandler = useCallback(() => {
    setError(false);
  }, []);

  useEffect(() => {
    return () => {
      httpInstance.interceptors.request.eject(reqInterceptor);
      httpInstance.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  return [error, errorClearHandler];
};
