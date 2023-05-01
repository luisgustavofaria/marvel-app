import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: radial-gradient(circle, #ed1d24, #800000);
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-family: 'Marvel', sans-serif;
  }

  p {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  
`;
