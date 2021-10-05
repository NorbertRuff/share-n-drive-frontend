import React, {useEffect, useState} from 'react';
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
import {HeroSubTitle, HeroTitle} from "../homepage/HomeStyledElements";
import {
    CarCard,
    CardDetails,
    CardThumbnail,
    CardTitle,
    FilteredSingleElementContainer,
    DeleteCarBtn,
} from "../homepage/FilteredStyleElements";
import {ComponentAddress, ComponentBasic, ComponentContact, ComponentStatic} from "./UserEdit";
import {dataHandler} from "../../services/Data_handler";
import {getPicture} from "../homepage/FeaturedContainer";
import {ErrorDiv} from "../PageSyledElements/MainContainer";

const UserPage = (props) => {
    const baseUrl = "http://localhost:8080/share-n-drive/getFirstCustomer";
    const [error, setError] = useState();
    const [menuItem, setMenuItem] = useState("static");

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        address: {
            city: "",
            zipCode: "",
            street: "",
            houseNumber: ""
        },
        interests: [],
        userAvatar: "",
        bookings: "",
        cars: [{
            id: '',
            title: '',
            brand: '',
            bodyType: '',
            image: '',
            fuel: '',
            category: '',
            carType: '',
            seat: '',
            price: ''
        }]
    })

    // TODO: 
    // add dependency to refresh after car was deleted
    // and bug fix at CustomerController on backend
    useEffect(() => {
        dataHandler._api_get(baseUrl, setUser, setError);
    }, [baseUrl]);

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

    function sendDeleteRequest(id) {
        const deleteUrl = `http://localhost:8080/share-n-drive/remove-car/${id}`;
        dataHandler._api_delete(deleteUrl, setUser, setError);
    }

    return (
        <>
            {!error ? (
                <UserProfileContainer>
                    <UserProfileDetails>
                        <UserAvatarDiv onClick={() => setMenuItem("static")}>
                            <UserAvatar src={AvatarPic}/>
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
                    <HeroTitle> {user.userName}'s Cars</HeroTitle>
                    <HeroSubTitle>Share your cars now!</HeroSubTitle>
                    <UserCars>
                        {user.cars.map((car) =>
                            <FilteredSingleElementContainer key={car.id}>
                                <CarCard>
                                    <CardThumbnail img={getPicture(car.title)}/>
                                    <CardDetails>
                                        <CardTitle>{car.brand} {car.title}</CardTitle>
                                        {car.carType} <br/> {car.fuel} <br/> {car.category}
                                    </CardDetails>
                                    <DeleteCarBtn onClick={() => sendDeleteRequest(car.id) && car}>
                                        Remove car
                                    </DeleteCarBtn>
                                </CarCard>
                            </FilteredSingleElementContainer>)}
                    </UserCars>
                    <HeroTitle>{user.userName}'s Calendar</HeroTitle>
                    <UserCalendar/>
                </UserProfileContainer>
            ) : (<ErrorDiv>An error occurred while fetching information. Please try again later!</ErrorDiv>)}
        </>
    )
};

export default UserPage;