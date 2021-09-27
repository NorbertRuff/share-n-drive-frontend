import styled from "styled-components";

export const FeaturedSingleElementContainer = styled.div`
  display: grid;
  font-family: var(--ff-body-bold);
  grid-template-columns: 1.5fr 0.8fr 0.5fr 0.5fr 0.8fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "thumbnail title title brand carType"
    "thumbnail category . fuelType price"
    "thumbnail category bodyType seatNumber price";
  justify-content: center;
  height: 100%;
  padding: 1rem;
`;
export const Thumbnail = styled.img`
  object-fit: cover;
  max-width: 30vw;
  height: 100%;
  grid-area: thumbnail;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: title;
  font-size: 2rem;
  border-bottom: 2px solid var(--clr-primary-300);
`;

export const GridTitle = styled.h2`
  color: var(--clr-primary-400);
`;
export const GridTitleStrong = styled.h2`
  font-size: 2rem;
  font-family: var(--ff-heading-normal);
  color: var(--clr-primary-400);
`;
export const CarType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: carType;
`;
export const FuelType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: fuelType;
`;
export const BodyType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: bodyType;
`;
export const Category = styled.div`
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: category;
`;
export const SeatNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: seatNumber;
`;
export const Price = styled.div`
  font-size: 2rem;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: price;
`;
