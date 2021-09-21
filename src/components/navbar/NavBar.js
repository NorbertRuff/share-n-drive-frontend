import React from 'react';


import {Logo, NavBarContainer, NavLinks, UserLogo} from "./NavbarStyledElements";

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <div/>
            <NavLinks>links</NavLinks>
            <UserLogo />
        </NavBarContainer>
    );
};

export default NavBar;
