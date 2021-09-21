import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 3rem auto 5rem;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;