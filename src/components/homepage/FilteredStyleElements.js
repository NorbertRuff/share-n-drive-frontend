import styled from "styled-components";

export const FilteredCarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1vw;
  grid-area: FilteredItems;
  background-color: var(--clr-primary-200);
  width: 100%;
`;


export const FilterCarsMainContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
  color: black;
`;

export const FilterButtonsContainer = styled.div`
  background-color: var(--clr-primary-100);
  display: flex;
  justify-content: space-between;
  height: max-content;
`;

export const FilterOptions = styled.div`
  background-color: var(--clr-primary-100);
  width: auto;
  display: ${({display}) => display};

`;

export const FilterCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  cursor: pointer;
  background-color: var(--clr-primary-100);
  font-size: 3rem;

  :hover {
    color: var(--clr-primary-500);
  }
`;


export const FilterHeroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-family: var(--ff-heading-light);
  background-color: var(--clr-primary-300);
  text-align: center;
  padding: 1rem;
  color: var(--clr-primary-500);

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
export const FilterOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  min-width: 20vw;
`;

export const FilterOptionLabel = styled.h2`
`;

export const CarCard = styled.div`
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin: 1rem;
  border: 2px solid var(--clr-dark);
  min-width: 300px;

  :hover, :focus-within {
    box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px,
    rgba(6, 24, 44, 0.65) 0 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0 1px 0 inset;
    transform: translateY(-10px);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover ${CardDetails}, :focus-within ${CardDetails} {
    background-color: var(--clr-primary-300);
  }

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  height: max-content;
`;

export const CardThumbnail = styled.div`
  background-image: url("${(props) => props.img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 20vh;
  object-fit: contain;
`;

export const CardTitle = styled.div`
  color: var(--clr-primary-200);
`;

export const CardSubTitle = styled.div`
  color: var(--clr-primary-500);
  font-size: 1.3rem;
`;
export const AddBookingButton = styled.button`
  cursor: pointer;
  color: var(--clr-primary-500);
  font-size: 1.3rem;
  padding: 0.2rem;
  margin: 0.5rem;

  :hover, :focus-within {
    color: var(--clr-primary-100);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

