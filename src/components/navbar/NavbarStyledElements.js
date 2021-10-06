import styled from "styled-components";
import {NavLink} from "react-router-dom";
import MainLogo from "../../assets/img/logo2.png"


export const Logo = styled(NavLink)`
  background-image: url(${MainLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 4rem;
  width: auto;
  margin: 0 1rem;

`;

export const NavbarUser = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const UserButton = styled(NavLink)`
  font-size: 1.3rem;
  font-family: var(--ff-body-bold);
`;

export const CompanyName = styled.div`
  font-family: var(--ff-heading-bold);
  color: var(--clr-primary-200);
  //-webkit-text-stroke: 1px var(--clr-primary-500);
  display: flex;
  text-transform: uppercase;
  font-size: 2rem;
  justify-content: flex-start;
  align-items: center;
  text-shadow: 2px 2px 4px rgba(30, 30, 30, 1);
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: var(--clr-primary-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const DropdownMenuItem = styled(NavLink)`
  font-size: 1.5rem;
  padding: 0.4rem;
  font-family: var(--ff-heading-bold);
`;

export const LogOutButton = styled.div`
  font-size: 1.5rem;
  padding: 0.4rem;
  font-family: var(--ff-heading-bold);
`;

export const UserLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  cursor: pointer;
  border: 1px solid var(--clr-primary-200);
  background-color: var(--clr-primary-300);
  margin: 0 10px;
  border-radius: 50px;
`;

export const NavbarAvatar = styled.img`
  height: 3.8rem;


`;

export const NavBarContainer = styled.div`
  grid-area: header;
  max-height: 100%;
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 3fr 1fr 80px;
  align-items: center;
  background-color: var(--clr-primary-400);
  border-bottom: 3px solid var(--clr-primary-400);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;