import styled from "styled-components";


export const HomeContainer = styled.div`
  grid-area: MainContent;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeroTitle = styled.h1`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: var(--ff-heading-light);
  background-color: var(--clr-primary-300);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 4rem;
  padding: 1rem;
  color: var(--clr-primary-500);
`;
export const HeroSubTitle = styled.h2`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ff-heading-bold);
  text-align: center;
  background-color: var(--clr-light);
  padding: 1rem;
`;

export const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FeaturedCarsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  color: black;
`;


