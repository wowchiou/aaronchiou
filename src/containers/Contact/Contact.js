import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { apiPostSendMail } from '../../shared/service';
import ReactLoading from 'react-loading';

import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ModalDefault from '../../components/UI/Modal/ModalDefault';

const Contact = ({ className }) => {
  const { handleSubmit, register, errors, watch, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState(null);

  const closeModalHandler = () => {
    setModalStatus(null);
  };

  const sendHandler = async (data) => {
    setLoading(true);
    try {
      const res = await apiPostSendMail(data);
      reset();
      setModalStatus({
        head: '信件寄出成功',
        body: 'mail 已寄出，感謝您的來信，我將盡速回信於您！',
        footer: [{ text: '確認', clicked: closeModalHandler }],
      });
      setLoading(false);
    } catch (err) {
      setModalStatus({
        head: '信件寄出錯誤',
        body: 'mail 尚未寄出，請稍後再試！',
        footer: [{ text: '確認', clicked: closeModalHandler }],
      });
      setLoading(false);
    }
  };

  return (
    <div className={`contact ${className}`}>
      {modalStatus && (
        <Modal show={modalStatus} clicked={closeModalHandler}>
          <ModalDefault {...modalStatus} />
        </Modal>
      )}
      <div className="contact_wrap">
        <div className="contact_group">
          <h1>CONTACT ME</h1>
          <p>
            If you'd like to make an enquiry, please feel free to get in touch,
            and I will respond as soon as possible.
          </p>
          <p>
            If you prefer to contact me directly, send your Email to:
            <a href="mailto:wowchiou@gmail.com">wowchiou@gmail.com</a>
          </p>
        </div>
        <div className="contact_group">
          <form onSubmit={handleSubmit(sendHandler)}>
            <ContactForm register={register} errors={errors} watch={watch} />
            <div className="btns">
              <Button disabled={loading}>SEND</Button>
              {loading && (
                <ReactLoading
                  type="spin"
                  color="#fff"
                  height="3.5rem"
                  width="3.5rem"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactStyle = styled(Contact)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4rem;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
  .contact_wrap {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 90%;
    max-width: 800px;
    margin: auto;
    @media ${({ theme }) => theme.device.mobile} {
      display: block;
      max-width: 500px;
      padding: 7rem 0;
    }
  }
  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
  p {
    font-size: 2rem;
    margin-top: 1rem;
    line-height: 1.2;
  }
  a {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 600;
    font-size: 2rem;
  }
  .contact_group:first-child {
    max-width: 300px;
    padding-right: 2rem;
    border-right: 2px dotted ${({ theme }) => theme.color.secondary};
    @media ${({ theme }) => theme.device.mobile} {
      padding-right: 0;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      max-width: 100%;
      border-right: none;
      border-bottom: 2px dotted ${({ theme }) => theme.color.secondary};
    }
  }
  .contact_group:last-child {
    padding-left: 2rem;
    flex: 1;
    @media ${({ theme }) => theme.device.mobile} {
      padding-left: 0;
    }
  }
  .btns {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    button {
      margin-right: 1rem;
    }
  }
`;

export default ContactStyle;
