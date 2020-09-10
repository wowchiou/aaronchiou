import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  ::selection {
    background: ${({ theme }) => theme.color.orange};
    color: #fff;
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.color.orange};
    color: #fff;
  }
  html {
    font-size: 62.5%;
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 50%;
    }
  }
  body {
    font-family: 'Noto Sans TC';
    color: ${({ theme }) => theme.color.primary};
    background-color: #efefef;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
  }
  img, span {
    vertical-align: middle;
  }
  input[type=text],
  input[type=email],
  input[type=phone],
  input[type=number],
  textarea {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    background-color: transparent;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.8rem;
    letter-spacing: 0.5px;
    display: block;
    width: 100%;
    border-radius: 0.2rem;
    font-family: 'Noto Sans TC';
    outline: none;
    &:focus {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.primary};
    font-size: 2rem;
    font-family: 'Noto Sans TC'
  }
  :-ms-input-placeholder{
    color: ${({ theme }) => theme.color.primary};
    font-size: 2rem;
    font-family: 'Noto Sans TC'
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.primary};
    font-size: 2rem;
    font-family: 'Noto Sans TC'
  }
  label {
    font-size: 2rem;
    display: block;
  }
  #global-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100vh;
    overflow: auto;
    z-index: 900;
  }
`;
