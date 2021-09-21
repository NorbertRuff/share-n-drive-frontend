import styled from "styled-components";

export const FeaturedSingleElementContainer = styled.div`
  display: grid;
  font-family: var(--ff-body-bold);
  grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "thumbnail brand title . category"
    "thumbnail . carType fuelType ."
    "thumbnail bodyType seatNumber . price";
  justify-content: center;
  height: 100%;
  width: 70vw;
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
export const CarType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: carType;
`;
export const Brand = styled.div`
  border-bottom: 2px solid var(--clr-primary-300);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: brand;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: price;
`;
