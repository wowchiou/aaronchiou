import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  ::selection {
	background: #FF8000;
	color: #fff;
}
::-moz-selection {
	background: #FF8000;
	color: #fff;
}

  html {
    font-size: 62.5%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    html {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Noto Sans TC';
    margin: 0;
    background-color: #efefef;
    color: ${({ theme }) => theme.color.primary};
  }

  ul,ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
  }

  img, span {
    vertical-align: middle;
  }
`;
