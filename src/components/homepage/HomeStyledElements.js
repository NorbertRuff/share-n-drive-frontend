import styled from "styled-components";
import hero from "../../assets/img/hero.jpg";

export const HomeContainer = styled.div`
  grid-area: content;
`;
export const HeroTitle = styled.h1`
  text-align: center;
  padding: 1rem;
`;
export const HeroSubTitle = styled.h2`
  text-align: center;
  padding: 1rem;
`;

export const HeroContainer = styled.div`
  background-image: url(${hero});
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FeaturedCarsContainer = styled.div`

`;
