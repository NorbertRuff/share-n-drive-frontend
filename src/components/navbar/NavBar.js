import React, {useState} from 'react';
import {DropdownMenu, Logo, NavBarContainer, NavLinkContainer, NavLinks, UserLogo} from "./NavbarStyledElements";


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isToggled, setIsToggled] = useState('none');


    const dropMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else if (isToggled) {
            setIsToggled('none');
            setShowMenu(true);
        } else {
            setShowMenu(true);
        }
    };


    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <div/>
            <NavLinkContainer>
                <NavLinks to="/cars" title="Cars">Link to somewhere</NavLinks>
                <NavLinks  to="/user" title="Cars">User</NavLinks>
            </NavLinkContainer>
            <UserLogo onClick={dropMenu}>
                {showMenu ? (
                    <DropdownMenu>
                        <li>Profile</li>
                        <li>Rent a car</li>
                        <li>Share a car</li>
                        <li>calendar</li>
                    </DropdownMenu>
                ) : null}


            </UserLogo >
        </NavBarContainer>
    );
};

export default NavBar;
