import React, {useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuItem,
    Logo,
    NavBarContainer,
    NavLinkContainer,
    NavLinks,
    UserLogo
} from "./NavbarStyledElements";


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
                {/*<NavLinks to="/user" title="user">Profile</NavLinks>*/}
            </NavLinkContainer>
            <UserLogo onClick={dropMenu}>
                {showMenu ? (
                    <DropdownMenu>
                        <DropdownMenuItem  to="/user" title="User">Profile</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User" >Rent a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Share a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">calendar</DropdownMenuItem>
                        <DropdownMenuItem to="/" title="User">calendar</DropdownMenuItem>
                    </DropdownMenu>
                ) : null}


            </UserLogo >
        </NavBarContainer>
    );
};

export default NavBar;
