import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  }

  body {

  }

  html {
    scroll-behavior: smooth;
  }


  * {
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  a:active,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;