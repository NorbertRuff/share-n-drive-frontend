import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 4rem auto 3rem;
  grid-template-areas:
    "header header header"
    "MainContent MainContent MainContent"
    "footer footer footer";
`;

export const Error = styled.h1`
  color: red;
`;