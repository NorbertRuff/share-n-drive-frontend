import React, {useEffect, useState} from 'react';
import {
    CompanyName,
    DropdownMenu,
    DropdownMenuItem,
    Logo,
    NavBarContainer,
    NavbarUserName,
    UserLogo
} from "./NavbarStyledElements";
import {dataHandler} from "../../services/Data_handler";


const NavBar = () => {
    const baseUrl = "http://localhost:8080/share-n-drive/customer/5";
    const [showMenu, setShowMenu] = useState(false);
    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const dropMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        dataHandler._api_get(baseUrl, setUser, setError)
    }, [])
    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <CompanyName>Share&Drive</CompanyName>
            <div/>
            <NavbarUserName>{!error ? "" : user.userName}</NavbarUserName>
            <UserLogo onClick={dropMenu}>
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
