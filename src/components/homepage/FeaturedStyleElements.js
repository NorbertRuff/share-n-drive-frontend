import styled from "styled-components";

export const FeaturedSingleElementContainer = styled.div`
  display: grid;
  font-family: var(--ff-body-bold);
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas: 
    "thumbnail title title title title title"
    "thumbnail bodyType fuelType transmissionType rating carType"
    "thumbnail seatNumber doors color licence carType"
    "thumbnail price price price price price";
  justify-content: center;
  width: 100%;
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
  font-size: 1.4rem;
  font-family: var(--ff-heading-normal);
  color: red;
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
export const Color = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: color;
`;
export const Licence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: licence;
`;

export const BodyType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: bodyType;
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
  text-align: center;
  grid-area: price;
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
`;
export const Doors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: doors;
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: rating;
`;
export const TransmissionType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: transmissionType;
`;
