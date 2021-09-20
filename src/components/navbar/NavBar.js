import React from 'react';


import {Logo, LogoContainer, NavBarContainer, NavLinks, UserLogo} from "./NavbarStyledElements";

const NavBar = () => {
    return (
        <NavBarContainer>
            <LogoContainer to="/" title="Home">
                <Logo data-testid="logo">logo</Logo>
            </LogoContainer>
            <NavLinks>links</NavLinks>
            <UserLogo>User</UserLogo>
        </NavBarContainer>
    );
};

export default NavBar;
