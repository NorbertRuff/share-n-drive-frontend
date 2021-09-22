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
    FilteredSingleElementContainer
} from "../homepage/FilteredStyleElements";
import Scirocco from "../../assets/img/scirocco.jpg";
import Clio from "../../assets/img/clio.jpg";
import {ComponentAddress, ComponentBasic, ComponentContact, ComponentInterests, ComponentStatic} from "./UserEdit";
import {dataHandler} from "../../services/Data_handler";

const UserPage = (props) => {
    const baseUrl = "http://localhost:8080/filter/all";
    const [error, setError] = useState();
    const [menuItem, setMenuItem] = useState("static")
    const [user, setUser] = useState({

        firstName: "John",
        lastName: "Wick",
        userName: "ShArE&DrIvEfAnAtIc",
        email: "wick@codeccol.com",
        phone: "+36-30-111-111",
        address: {
            city: "Budapest",
            zipCode: "1111",
            street: "Nagymező str",
            HouseNumber: "42"
        },
        interests: ["Sportscars", "revenge"],
        userAvatar: "",
        bookings: "",
        cars: [{
            id: 5,
            title: 'Scirocco',
            brand: 'Volkswagen',
            bodyType: 'Coupe',
            image: Scirocco,
            fuel: 'Gasoline',
            category: 'Fun',
            carType: 'Racing',
            seat: '4',
            price: '30000 HUF'
        }, {
            id: 5,
            title: 'Clio',
            brand: 'Renault',
            bodyType: 'HatchBack',
            image: Clio,
            fuel: 'Gasoline',
            category: 'Fun',
            carType: 'Small Car',
            seat: '5',
            price: '30000 HUF'
        }]
    })


    useEffect(() => {
        dataHandler._api_get(baseUrl, setUser, setError)
    }, [baseUrl]);


    const getComponent = () => {
        switch (menuItem) {
            case 'basic':
                return <ComponentBasic userDetails={user}/>;
            case 'address':
                return <ComponentAddress userDetails={user}/>;
            case 'contact':
                return <ComponentContact userDetails={user}/>;
            case 'interests':
                return <ComponentInterests userDetails={user}/>;
            case 'static':
                return <ComponentStatic userDetails={user}/>;
            default:
                return <ComponentStatic userDetails={user}/>;
        }
    }

    return (
        <UserProfileContainer>
            <UserProfileDetails>
                <UserAvatarDiv>
                    <UserAvatar src={AvatarPic}/>
                </UserAvatarDiv>
                <HeroTitle>{user.firstName} {user.lastName}</HeroTitle>
                <UserMenu>
                    <UserMenuItemTitle>Edit details</UserMenuItemTitle>
                    <UserMenuItem onClick={() => setMenuItem("basic")}>Basic</UserMenuItem>
                    <UserMenuItem onClick={() => setMenuItem("address")}>Address</UserMenuItem>
                    <UserMenuItem onClick={() => setMenuItem("contact")}>Contact</UserMenuItem>
                    <UserMenuItem onClick={() => setMenuItem("interests")}>Interests</UserMenuItem>
                </UserMenu>
                <Details>
                    {getComponent()}
                </Details>
            </UserProfileDetails>
            <HeroTitle>{user.firstName} {user.lastName} Cars</HeroTitle>
            <HeroSubTitle>Share your cars now!</HeroSubTitle>
            <UserCars>
                {user.cars.map((car) =>
                    <FilteredSingleElementContainer key={car.id}>
                        <CarCard>
                            <CardThumbnail img={car.image}/>
                            <CardDetails>
                                <CardTitle>{car.brand} {car.title}</CardTitle>
                                {car.carType} <br/> {car.fuel} <br/> {car.category}
                            </CardDetails>
                        </CarCard>
                    </FilteredSingleElementContainer>)}
            </UserCars>
            <HeroTitle>{user.firstName} {user.lastName} Calendar</HeroTitle>
            <UserCalendar/>
        </UserProfileContainer>
    )
}


export default UserPage;