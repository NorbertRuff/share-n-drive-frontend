import styled from "styled-components";

export const FilteredCarsContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1vw;
  grid-area: FilteredItems;
  border: 1px solid var(--clr-primary-100);

`;
export const FilteredSingleElementContainer = styled.div`
  margin: 1rem;
  border: 1px solid var(--clr-primary-100);

`;


export const FilterCars = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: grid;
  margin: 3rem 0;
  background-color: white;
  color: black;
  grid-template-columns: 20vw 1fr;
  grid-template-areas: 
    "heroTitle heroTitle heroTitle"
    "FilterButtons FilteredItems FilteredItems"
    "FilterButtons FilteredItems FilteredItems";
`;
export const FilterButtons = styled.div`
  grid-area: FilterButtons;
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

export const CarCard = styled.div`
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);

  :hover, :focus-within {
    transform: translateY(-10px);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  min-width: 30vw;
  border: 3px solid var(--clr-primary-300);
`;

export const CardThumbnail = styled.div`
  background-image: url("${(props) => props.img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 30vh;
  object-fit: contain;
`;

export const CardTitle = styled.div`
  color: var(--clr-primary-200);
`;

export const CardDetails = styled.div`
  text-align: center;
  top: 0;
  width: auto;
  padding: 1rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--clr-primary-100);
`;