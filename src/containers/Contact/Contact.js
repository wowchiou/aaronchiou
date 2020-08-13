import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Button from '../../components/UI/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = ({ className }) => {
  const { handleSubmit, register, errors, watch } = useForm();

  const sendHandler = () => {
    console.log('button clicked');
  };

  return (
    <div className={`contact ${className}`}>
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
            <Button clicked={sendHandler}>SEND</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactStyle = styled(Contact)`
  background-color: #ff990050;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4rem;
  position: absolute;
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
`;

export default ContactStyle;
