import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const ModalDefault = (props) => {
  const { head, body, footer, className } = props;
  return (
    <div className={`modalDefault ${className}`}>
      <div className="head">{head}</div>
      <div className="body">{body}</div>
      <div className="footer">
        {footer.map((btn) => (
          <Button key={btn.text} clicked={btn.clicked} disabled={btn.disabled}>
            {btn.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

const ModalDefaultStyle = styled(ModalDefault)`
  line-height: 1.33;
  .head {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.secondary};
    padding-bottom: 2rem;
  }
  .body {
    padding-bottom: 2rem;
    font-size: 2rem;
  }
  .footer {
    button + button {
      margin-left: 2rem;
    }
  }
`;

export default ModalDefaultStyle;
