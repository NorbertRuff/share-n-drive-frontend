import React, {useEffect, useState} from 'react';
import {
    CompanyName,
    DropdownMenu,
    DropdownMenuItem,
    Logo,
    LogOutButton,
    NavbarAvatar,
    NavBarContainer,
    NavbarUser,
    UserButton,
    UserLogo
} from "./NavbarStyledElements";
import {FaUserCircle} from "react-icons/fa";
import AvatarPic from "../../assets/img/avatar.png";


const NavBar = (props) => {
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
    }, [props.user])

    let logo;
    if (user) {
        logo = <NavbarAvatar src={AvatarPic}/>;
    } else {
        logo = <FaUserCircle/>;
    }

    function logout() {
        if (localStorage.getItem('username') && localStorage.getItem('token')) {
            localStorage.removeItem('username')
            localStorage.removeItem('token')
            setUser()
        }
    }

    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <CompanyName>Share&Drive</CompanyName>
            <div/>
            <NavbarUser>{
                user ? <UserButton to="/user" title="User">{user}</UserButton> :
                    <UserButton to="/register" title="UserControl">Login / Register</UserButton>}
            </NavbarUser>
            <UserLogo onClick={dropMenu}>
                {showMenu && user ? (
                    <DropdownMenu>
                        <DropdownMenuItem to="/user" title="User">Profile</DropdownMenuItem>
                        <DropdownMenuItem to="/add-car" title="User">Add a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Share a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Calendar</DropdownMenuItem>
                        <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
                    </DropdownMenu>
                ) : null}
                {logo}
            </UserLogo>
        </NavBarContainer>
    );
};

export default NavBar;
