import styled from "styled-components";
import React from "react";


export const UserProfileContainer = styled.div`
  grid-area: MainContent;
  display: flex;
  flex-direction: column;
`;

export const UserProfileDetails = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: var(--clr-primary-200);
  margin: 2rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 0.6fr 2fr;
  width: 80vw;
  justify-content: space-between;
  align-items: start;
  justify-items: stretch;
  grid-template-areas:
    "Avatar Name Name"
    "Avatar Details Details"
    "Menu Details Details";
`;

export const UserAvatarDiv = styled.div`
  grid-area: Avatar;
  height: 100%;
  background-color: var(--clr-primary-400);
  cursor: pointer;
`;
export const UserAvatar = styled.img`
  width: 30vw;
  height: 20vh;
  object-fit: contain;
`;

export const UserMenuItem = styled.div`
  text-align: right;
  font-size: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  border: 2px solid var(--clr-primary-100);
  cursor: pointer;
`;
export const UserMenu = styled.div`
  grid-area: Menu;
  background-color: var(--clr-primary-300);

`;
export const UserMenuItemTitle = styled.div`
  font-size: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary-100);

`;
export const Details = styled.div`
  grid-area: Details;
`;

export const UserCars = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1vw;
  background-color: var(--clr-primary-300);
  margin: 3rem;

`;

export const UserCalendar = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: var(--clr-primary-300);
  height: 30vh;
  margin: 3rem;
`;

export const BookedSingleElement = styled.div`
  display: grid;
  font-size: 1rem;
  font-family: var(--ff-body-bold);
  border: 4px solid var(--clr-dark);
  gap: 2rem;
  background-color: var(--clr-primary-200);
  grid-template-areas: 
    "thumbnail title title title carType carType delete"
    "thumbnail bodyType fuelType transmissionType rating price delete"
    "thumbnail seatNumber doors color licence price delete"
    "thumbnail booking booking booking booking booking delete";
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  margin: 10px;

  h2 {
    font-size: 1.5rem;
  }
`;


export const BookingThumbnail = styled.img`
  object-fit: cover;
  max-width: 400px;
  height: 100%;
  grid-area: thumbnail;
`;
export const BookingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: title;
  font-size: 2rem;
  border-bottom: 2px solid var(--clr-primary-300);
`;

export const GridTitle = styled.h2`
  font-size: 2rem;
  width: 6vw;
  text-align: center;
  color: var(--clr-primary-400);
`;


export const BookingColorIcon = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--clr-dark);
  background-color: ${({color}) => color};
  border-radius: 100%;
`;


export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3rem;
  border: 1px solid var(--clr-dark);
  border-radius: 100%;
  width: 50px;
  height: 50px;
  grid-area: delete;
  background-color: var(--clr-primary-400);
`;


export const BookingCarType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: carType;
`;
export const BookingFuelType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: fuelType;
`;
export const BookingColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: color;
`;
export const BookingLicence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: licence;
`;

export const BookingBodyType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: bodyType;
`;
export const BookingSeatNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: seatNumber;
`;
export const BookingPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-area: price;
`;

export const BookingDoors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-area: doors;
`;
export const BookingRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-area: rating;
`;
export const BookingTransmissionType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-area: transmissionType;
`;
export const BookingGridTitleStrong = styled.h2`
  font-size: 1.2rem;
  font-family: var(--ff-heading-normal);
  color: var(--clr-primary-400);
`;

export const BookingDateContainer = styled.div`
  grid-area: booking;
  display: flex;
  gap: 2rem;
  background-color: var(--clr-primary-300);
  padding: 1rem;
`;

export const From = styled.div``;
export const To = styled.div``;
export const UserName = styled.div``;
export const BookedCarsByOthersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

`;