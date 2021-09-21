import styled from "styled-components";


export const HomeContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeroTitle = styled.h1`
  font-family: var(--ff-heading-light);
  background-color: var(--clr-primary-300);
  text-align: center;
  font-size: 4rem;
  padding: 1rem;
  color: var(--clr-primary-500);
`;
export const HeroSubTitle = styled.h2`
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  color: black;
`;
export const FilterCars = styled.div`
  display: grid;
  margin: 3rem 0;
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


export const FilterHeroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: heroTitle;
  font-size: 3rem;
  font-family: var(--ff-heading-light);
  background-color: var(--clr-primary-300);
  text-align: center;
  padding: 1rem;
  color: var(--clr-primary-500);

`;


export const FilterOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 1rem;
`;

export const FilteredCarsContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  grid-area: FilteredItems;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--clr-primary-100);
  height: 50vh;

`;
