import styled from "styled-components";
import {NavLink} from "react-router-dom";
import MainLogo from "../../assets/img/logo.png"
import UserLogoPic from "../../assets/img/user.png"


export const Logo = styled(NavLink)`
  background-image: url(${MainLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 50%;
  margin: 1rem;

`;

export const NavbarUserName = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
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
`;

export const UserLogo = styled.div`

  padding: 1rem;
  background-image: url(${UserLogoPic});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  cursor: pointer;
`;

export const NavBarContainer = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 4fr 0.5fr 0.5fr;
  align-items: center;
  background-color: var(--clr-primary-400);
  border-bottom: 3px solid var(--clr-primary-400);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;