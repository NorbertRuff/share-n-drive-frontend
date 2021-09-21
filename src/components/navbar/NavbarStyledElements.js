import styled from "styled-components";
import {NavLink} from "react-router-dom";
import MainLogo from "../../assets/img/logo.png"
import UserLogoPic from "../../assets/img/user.png"


export const Logo = styled(NavLink)`
  background-image: url(${MainLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  margin: 1rem;
`;

export const NavLinks = styled.div``;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 10vh;
  background-color: #61dafb;
  width: 8vw;
  height: 10vw;
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
  grid-template-columns: 10% auto 10% 10%;
  align-items: center;
  background-color: white;
  border-bottom: 3px solid var(--clr-primary-200);
`;