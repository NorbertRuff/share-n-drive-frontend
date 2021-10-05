import React, {useEffect, useState} from 'react';
import {
    CompanyName,
    DropdownMenu,
    DropdownMenuItem,
    Logo,
    NavBarContainer,
    NavbarUser,
    UserButton,
    UserLogo
} from "./NavbarStyledElements";
import {FaUserCircle} from "react-icons/fa";



const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isToggled, setIsToggled] = useState('none');
    const [user, setUser] = useState()

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

    useEffect(() => {
        if (localStorage.getItem('username')) {
            setUser(localStorage.getItem('username'))
        }
    }, [user])

    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <CompanyName>Share&Drive</CompanyName>
            <div/>
            <NavbarUser>{
                user ? <UserButton to="/user" title="User">{user}</UserButton> :
                    <UserButton to="/register" title="UserControl">Login / Register</UserButton>}
            </NavbarUser>
            <UserLogo onClick={dropMenu}><FaUserCircle/>
                {showMenu ? (
                    <DropdownMenu>
                        <DropdownMenuItem to="/user" title="User">Profile</DropdownMenuItem>
                        <DropdownMenuItem to="/add-car" title="User">Add a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Share a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Calendar</DropdownMenuItem>
                        <DropdownMenuItem to="/" title="User">Logout</DropdownMenuItem>
                    </DropdownMenu>
                ) : null}


            </UserLogo>
        </NavBarContainer>
    );
};

export default NavBar;
