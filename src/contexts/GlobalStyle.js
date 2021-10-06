import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
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

  .rec.rec-slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .rec.rec-carousel {
    width: 80vw;
  }

  .rec.rec-carousel-item {
  }

  .rec.rec-slider-container:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px,
    rgba(6, 24, 44, 0.65) 0 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0 1px 0 inset;
    border-radius: 10px;
  }

  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    background-color: var(--clr-dark);
  }

  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  button.rec-dot_active {
    background-color: var(--clr-primary-300);
    box-shadow: 0 0 1px 3px var(--clr-primary-200);
  }

  .rec.rec-arrow,
  .rec.rec-arrow-left,
  .rec.rec-arrow-right,
  .rec.rec-arrow-left:enabled,
  .rec.rec-arrow-right:enabled,
  .rec.rec-arrow-right:visited {
    background-color: var(--clr-primary-300);
    box-shadow: 0 0 1px 3px var(--clr-primary-200);
  }

  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: var(--clr-primary-400);
    box-shadow: 0 0 1px 3px var(--clr-primary-400);
  }

`;

export default GlobalStyle;