import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
    min-width: 360px; // обязательно!!!!
  }

  section {
    padding: 100px 0;

    @media ${theme.media.mobile} {
      padding: 80px 0;
    }
  }


  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }

section:nth-of-type(odd) {
  background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) {
  background-color: ${theme.colors.secondaryBg};
}

h3 {

  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
}

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}
`
