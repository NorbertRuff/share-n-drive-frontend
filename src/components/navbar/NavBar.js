import React, {useContext, useState} from 'react';
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
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";

import AvatarPic1 from "../../assets/img/avatars/avatar1.png";
import AvatarPic2 from "../../assets/img/avatars/avatar2.png";
import AvatarPic3 from "../../assets/img/avatars/avatar3.png";
import AvatarPic4 from "../../assets/img/avatars/avatar4.png";
import AvatarPic5 from "../../assets/img/avatars/avatar5.png";
import AvatarPic6 from "../../assets/img/avatars/avatar6.png";
import AvatarPic7 from "../../assets/img/avatars/avatar7.png";
import AvatarPic8 from "../../assets/img/avatars/avatar8.png";
import AvatarPic from "../../assets/img/avatar.png";
import {UserContext} from "../../contexts/UserContext";
import {FaUserCircle} from "react-icons/fa";

const getAvatar = userAvatar => {
    switch (userAvatar) {
        case 1:
            return <NavbarAvatar src={AvatarPic1}/>;
        case 2:
            return <NavbarAvatar src={AvatarPic2}/>;
        case 3:
            return <NavbarAvatar src={AvatarPic3}/>;
        case 4:
            return <NavbarAvatar src={AvatarPic4}/>;
        case 5:
            return <NavbarAvatar src={AvatarPic5}/>;
        case 6:
            return <NavbarAvatar src={AvatarPic6}/>;
        case 7:
            return <NavbarAvatar src={AvatarPic7}/>;
        case 8:
            return <NavbarAvatar src={AvatarPic8}/>;
        default:
            return <NavbarAvatar src={AvatarPic}/>;
    }
}

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {user, setUser} = useContext(UserContext);
    console.log(user)
    const dropMenu = () => {
        setShowMenu(!showMenu);
    };

    const getUserLogo = () => {
        if (user) {
            return getAvatar(user.avatar)
        } else {
            return <FaUserCircle/>;
        }
    }


    const history = useHistory();

    function redirect() {
        const timer = setTimeout(() => {
            history.push("/");
        }, 1000);
        return () => {
            clearTimeout(timer)
        };

    }

    function logout() {
        if (localStorage.getItem('username') && localStorage.getItem('token')) {
            Swal.fire({
                icon: "question",
                title: 'Do you want to log out?',
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "No",
                footer: '<a href="/">Share & Drive!</a>'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Logged out!', '', 'success')
                        .then(() => {
                            localStorage.removeItem('username')
                            localStorage.removeItem('token')
                            setUser();
                            redirect();
                        })
                }
            })

        }
    }

    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <CompanyName>Share&Drive</CompanyName>
            <div/>
            <NavbarUser>{user ? <UserButton to="/user" title="User">{user.username}</UserButton> :
                <UserButton to="/register" title="UserControl">Login / Register</UserButton>}
            </NavbarUser>
            <UserLogo onClick={dropMenu}>
                {showMenu && user !== undefined ? (
                    <DropdownMenu>
                        <DropdownMenuItem to="/user" title="User">Profile</DropdownMenuItem>
                        <DropdownMenuItem to="/add-car" title="User">Add a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Calendar</DropdownMenuItem>
                        <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
                    </DropdownMenu>
                ) : null}
                {getUserLogo()}
            </UserLogo>
        </NavBarContainer>
    );
};

export default NavBar;
