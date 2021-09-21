import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --ff-heading-normal: "Freight_Text_Medium", serif;
    --ff-heading-bold: "Freight_Text_Bold", cursive;
    --ff-heading-light: "Freight_Text_Light", cursive;

    --ff-body-normal: "BasisGrotesquePro_Regular", serif;
    --ff-body-bold: "BasisGrotesquePro_Bold", cursive;
    --ff-body-light: "BasisGrotesquePro_Light", cursive;

    --clr-primary-100: #9dace0;
    --clr-primary-200: #6d7db4;
    --clr-primary-300: #4f5c8d;
    --clr-primary-400: #2f3b64;
    --clr-primary-500: #131b3a;

    --fs-base: 1rem;
    --clr-accent: #85ff9e;

    --clr-tertiary: #f148fb;
    --clr-tertiary-500: #662269;

    --clr-light: #fff;
    --clr-dark: #000;

    --clr-gradient: radial-gradient(var(--clr-tertiary-500),
    var(--clr-primary-400),
    var(--clr-primary-500));
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: var(--ff-heading-normal);
    background-color: var(--clr-primary-100);
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;
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

export default GlobalStyle;