import styled from "styled-components";
import hero from "../../assets/img/hero.jpg";


export const HomeContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeroTitle = styled.h1`
  font-family: var(--ff-heading-light);
  background-color: white;
  text-align: center;
  font-size: 6rem;
  padding: 1rem;
`;
export const HeroSubTitle = styled.h2`
  font-family: var(--ff-heading-bold);
  text-align: center;
  padding: 1rem;
  background-color: white;
`;

export const HeroContainer = styled.div`
  background-image: url(${hero});
  width: 100%;  
  height: 35vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FeaturedCarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  border: 1px solid black;
  background-color: white;
  margin: 3rem;
  color: black; 
`;
export const FilterCars = styled.div`
  display: grid;
  margin: 3rem;
  background-color: white;
  color: black;
  grid-template-columns: 20vw 1fr;
  grid-template-rows: 1fr 3fr 3fr;
  grid-template-areas: 
    "heroTitle heroTitle heroTitle"
    "FilterButtons FilteredItems FilteredItems"
    "FilterButtons FilteredItems FilteredItems";
`;
export const FilterButtons = styled.div`
  grid-area:FilterButtons;
`;

export const FeaturedSingleElementContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterHeroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: heroTitle;
  font-size: 3rem;

`;


export const FilterOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 1rem;
`;

export const FilteredCarsContainer = styled.div`
  padding: 1rem;
  margin:1rem;
  display: flex;
  grid-area: FilteredItems;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 50vh;

`;
