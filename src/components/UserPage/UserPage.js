import React, {useContext, useEffect, useState} from 'react';
import {
    Details,
    UserAvatar,
    UserAvatarDiv,
    UserCalendar,
    UserCars,
    UserMenu,
    UserMenuItem,
    UserMenuItemTitle,
    UserProfileContainer,
    UserProfileDetails
} from "./UserPageStyledElements";

import AvatarPic from "../../assets/img/avatar.png"
import AvatarPic1 from "../../assets/img/avatars/avatar1.png"
import AvatarPic2 from "../../assets/img/avatars/avatar2.png"
import AvatarPic3 from "../../assets/img/avatars/avatar3.png"
import AvatarPic4 from "../../assets/img/avatars/avatar4.png"
import AvatarPic5 from "../../assets/img/avatars/avatar5.png"
import AvatarPic6 from "../../assets/img/avatars/avatar6.png"
import AvatarPic7 from "../../assets/img/avatars/avatar7.png"
import AvatarPic8 from "../../assets/img/avatars/avatar8.png"

import {HeroSubTitle, HeroTitle} from "../homepage/HomeStyledElements";
import {CarCard, CardDetails, CardThumbnail, CardTitle, DeleteCarBtn} from "../homepage/FilteredStyleElements";
import {ComponentAddress, ComponentBasic, ComponentContact, ComponentStatic} from "./UserEdit";
import {dataHandler} from "../../services/Data_handler";
import {getPicture} from "../homepage/FeaturedContainer";
import {ErrorDiv} from "../PageSyledElements/MainContainer";
import Swal from "sweetalert2";
import {UserContext} from "../../contexts/UserContext";
import BookedCarsContainer from "./BookedCars";


export const getAvatar = userAvatar => {
    switch (userAvatar) {
        case 1:
            return <UserAvatar src={AvatarPic1}/>;
        case 2:
            return <UserAvatar src={AvatarPic2}/>;
        case 3:
            return <UserAvatar src={AvatarPic3}/>;
        case 4:
            return <UserAvatar src={AvatarPic4}/>;
        case 5:
            return <UserAvatar src={AvatarPic5}/>;
        case 6:
            return <UserAvatar src={AvatarPic6}/>;
        case 7:
            return <UserAvatar src={AvatarPic7}/>;
        case 8:
            return <UserAvatar src={AvatarPic8}/>;
        default:
            return <UserAvatar src={AvatarPic}/>;
    }
}
const UserPage = (props) => {
    const [error, setError] = useState(false);
    const [menuItem, setMenuItem] = useState("static")
    const [userBookings, setUserBookings] = useState([])
    // const [userBookings, setUserBookings] = useState()
    const {user, setUser} = useContext(UserContext);
    const baseUrl = "http://localhost:8080/share-n-drive/customer-details";
    const userBookingsUrl = "http://localhost:8080/share-n-drive/bookings";
    const calendarUrl = "http://localhost:8080/share-n-drive/bookings";
    const getComponent = () => {
        switch (menuItem) {
            case 'basic':
                return <ComponentBasic userDetails={user}/>;
            case 'address':
                return <ComponentAddress userDetails={user}/>;
            case 'contact':
                return <ComponentContact userDetails={user}/>;
            case 'static':
                return <ComponentStatic userDetails={user}/>;
            default:
                return <ComponentStatic userDetails={user}/>;
        }
    }

    useEffect(() => {
        dataHandler._api_get(userBookingsUrl, setUserBookings, setError, undefined)
        // dataHandler._api_get(calendarUrl, setBookedCars, setError, undefined)
    }, []);

    console.log(userBookings)

    function sendDeleteRequest(id) {
        const deleteUrl = `http://localhost:8080/share-n-drive/remove-car/${id}`;
        Swal.fire({
            icon: "question",
            title: 'Do you want to delete this car?',
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
            footer: '<a href="/">Share & Drive!</a>'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Car deleted!', '', 'success')
                    .then(() => {
                        dataHandler._api_delete(deleteUrl, setError);
                        dataHandler._api_get(baseUrl, setUser, setError, undefined);
                    })
            }
        })
    }

    if (error) {
        return <ErrorDiv>An error occurred while fetching information. Please try again later!</ErrorDiv>;
    }
    if (user === undefined) {
        return <ErrorDiv>Please log in!</ErrorDiv>;
    }

    return (
        <UserProfileContainer>
            <UserProfileDetails>
                <UserAvatarDiv onClick={() => setMenuItem("static")}>
                    {getAvatar(user.avatar)}
                </UserAvatarDiv>
                <HeroTitle>{user.firstName} {user.lastName}</HeroTitle>
                <UserMenu>
                    <UserMenuItemTitle>Edit details</UserMenuItemTitle>
                    <UserMenuItem onClick={() => setMenuItem("basic")}>Basic</UserMenuItem>
                    <UserMenuItem onClick={() => setMenuItem("address")}>Address</UserMenuItem>
                    <UserMenuItem onClick={() => setMenuItem("contact")}>Contact</UserMenuItem>
                </UserMenu>
                <Details>
                    {getComponent()}
                </Details>
            </UserProfileDetails>
            <HeroSubTitle> {user.username}'s registered Cars</HeroSubTitle>
            <UserCars>
                {user.cars.map((car) =>

                    <CarCard key={car.id}>
                        <CardThumbnail img={getPicture(car.title)}/>
                        <CardDetails>
                            <CardTitle>{car.brand} {car.title}</CardTitle>
                            {car.carType} <br/> {car.fuel} <br/> {car.category}
                        </CardDetails>
                        <DeleteCarBtn onClick={() => sendDeleteRequest(car.id)}>
                            Remove car
                        </DeleteCarBtn>
                    </CarCard>
                )}
            </UserCars>
            <HeroSubTitle>Booked cars by{user.username}</HeroSubTitle>
            {userBookings.map((booking) =>
                <BookedCarsContainer key={booking.id} details={booking}/>
            )}
            <HeroSubTitle>{user.username}'s Car booked by others</HeroSubTitle>


            <UserCalendar/>
        </UserProfileContainer>

    )
};


export default UserPage;