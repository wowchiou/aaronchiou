import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useErrorHandler from '../hooks/useErrorHandler';
import { toast } from 'react-toastify';

import Modal from '../components/UI/Modal/Modal';
import ModalDefault from '../components/UI/Modal/ModalDefault';

const withErrorHandler = (WrappedComponents, axios) => {
  return withRouter((props) => {
    const { history } = props;
    const [error, clearError] = useErrorHandler(axios);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      if (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // 只要 status code 不是 200 系列的皆會進來
          switch (error.response.status) {
            case 400:
              setShowModal({
                head: '錯誤',
                body: error.response.data.message,
                footer: [{ text: '確認', clicked: () => setShowModal(false) }],
              });
              break;
            case 500:
              toast.error(error.response.data.message);
              clearError();
              break;
            default:
              break;
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // 沒有錯誤回應時會進來
          console.log(error.request);
          toast.error('系統沒有回應，請稍後再試！');
          clearError();
        } else {
          // Something happened in setting up the request that triggered an Error
          // 例如伺服器尚未啟動時會進來
          // console.log('Error', error.message);
          toast.error('系統發生問題，請稍後再試！');
          clearError();
          history.push('/error500');
        }
      }
    }, [error]);

    return (
      <>
        {showModal && (
          <Modal show={showModal} clicked={() => setShowModal(false)}>
            <ModalDefault {...showModal} />
          </Modal>
        )}
        <WrappedComponents {...props} />
      </>
    );
  });
};

export default withErrorHandler;
