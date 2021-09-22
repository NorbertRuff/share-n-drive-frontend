import React, {useState} from 'react';
import {
    UserAddress,
    UserAvatar,
    UserAvatarDiv,
    UserName,
    UserProfileContainer,
    UserProfileDetails
} from "./UserPageStyledElements";
import AvatarPic from "../../assets/img/userAvatar.png"
const UserPage = (props) => {

    const [user, setUser] = useState({

        firstName: "Béla",
        lastName: "UUUZer",
        address: {
            city : "Budapest",
            zipCode: "1111",
            street: "Nagymező str 42"
        },
        userAvatar: "",
        bookings:"",
        cars : [{}]
    })



    return (
        <UserProfileContainer>
            <UserProfileDetails>
                <UserAvatarDiv >
                    <UserAvatar src={AvatarPic}/>
                </UserAvatarDiv>
                <UserName>{user.firstName} {user.lastName}</UserName>
                <UserAddress>
                    {user.address.city}

                </UserAddress>
            </UserProfileDetails>


        </UserProfileContainer>

    )
        ;
}

export default UserPage;