import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const Contact = ({ className }) => {
  const { handleSubmit, register, errors, watch } = useForm();

  const formBuilder = {
    name: {
      label: 'NAME：*',
      type: 'text',
      valid: {
        required: true,
        min: 2,
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

  const formHtml = Object.keys(formBuilder).map((data, idx) => (
    <Input
      label={data.label}
      type={data.type}
      placeholder={data.placeholder}
      register={register({ ...data.valid })}
      errors={errors}
      errMessage={data.errMessage}
    />
  ));

  console.log(formHtml);

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
            {formHtml}
            {/* <div className="input_wrap">
              <label>NAME：*{errors.name && <span>此欄位是必須的</span>}</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                ref={register({ required: true })}
              />
            </div>
            <div className="input_wrap">
              <label>
                EMAIL：*
                {errors.mail && <span>請檢查 mail 是否填寫與正確</span>}
              </label>
              <input
                name="mail"
                type="email"
                placeholder="Your Mail"
                ref={register({
                  required: true,
                  pattern: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/,
                })}
              />
            </div>
            <div className="input_wrap">
              <label>
                MESSAGE：*{errors.message && <span>此欄位是必須的</span>}
              </label>
              <textarea
                name="message"
                ref={register({
                  required: true,
                })}
              />
            </div> */}
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
  .contact_wrap {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 90%;
    max-width: 800px;
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
  }
  .contact_group:last-child {
    padding-left: 2rem;
    flex: 1;
  }
`;

export default ContactStyle;
