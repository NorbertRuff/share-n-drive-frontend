import styled from "styled-components";


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
  background-color: var(--clr-primary-400);
`;
export const UserAvatar = styled.img`
  width: 30vw;
  height: 20vh;
  object-fit: contain;
`;
export const UserName = styled.div`
  grid-area: Name;
  text-align: center;
  font-size: 2rem;
  var(--ff-heading-bold);
`;

export const UserMenuItem = styled.div`
  text-align: right;
  font-size: 2rem;
  padding: 1rem;
  text-transform: uppercase;
  border: 2px solid var(--clr-primary-100);
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
