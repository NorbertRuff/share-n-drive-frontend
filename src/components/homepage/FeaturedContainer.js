import React, {useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import pic1 from '../../assets/img/mercedesamg.jpg';
import pic2 from '../../assets/img/mercedess65.jpg';
import pic3 from '../../assets/img/bmw.jpg';
import pic4 from '../../assets/img/audi.jpg';
import pic5 from '../../assets/img/teslas.jpg';
import pic6 from '../../assets/img/teslax.jpg';
import pic7 from '../../assets/img/clio.jpg';
import pic8 from '../../assets/img/fiesta.jpg';
import pic9 from '../../assets/img/leaf.jpg';
import pic10 from '../../assets/img/skoda.jpg';
import pic11 from '../../assets/img/dacia.jpg';
import pic12 from '../../assets/img/teepee.jpg';
import pic13 from '../../assets/img/swift.jpg';

import {FeaturedCarsContainer} from "./HomeStyledElements";
import {
    BodyType,
    CarType,
    Category,
    FeaturedSingleElementContainer,
    FuelType,
    GridTitle,
    GridTitleStrong,
    Price,
    SeatNumber,
    Thumbnail,
    Title
} from "./FeaturedStyleElements";
import {dataHandler} from "../../services/Data_handler";
import {Error} from "../PageSyledElements/MainContainer";

export const getPicture = (title) => {
    switch (title) {
        case 'AMG GT':
            return pic1
        case 'S65 AMG':
            return pic2
        case '760Li':
            return pic3
        case 'RS6':
            return pic4
        case 'Model S':
            return pic5
        case 'Model X':
            return pic6
        case 'Clio':
            return pic7
        case 'Leaf':
            return pic9
        case 'Fiesta':
            return pic8
        case 'Octavia':
            return pic10
        case 'Swift':
            return pic13
        case 'Duster':
            return pic11
        case 'Teepee':
            return pic12
        default:
            return pic2
    }
}


const FeaturedContainer = (props) => {

    const [error, setError] = useState(false);
    const url = "http://localhost:8080/share-n-drive/filter/all";
    const [featuredCars, setFeaturedCars] = useState([]);

    useEffect(() => {
        dataHandler._api_get(url, setFeaturedCars, setError)
    }, []);


    return (
        <FeaturedCarsContainer>
            {!error ? (
                <Carousel
                    itemsToShow={1}
                    focusOnSelect={true}
                    enableAutoPlay autoPlaySpeed={4000}
                    onChange={(pageIndex) => {
                        if (pageIndex === 2) {
                        }
                    }
                    }
                >
                    {featuredCars.map(item =>
                        <FeaturedSingleElementContainer key={item.id}>
                            <Thumbnail src={getPicture(item.title)}/>
                            <CarType><GridTitle>Type</GridTitle>{item.carType}</CarType>
                            <Title>{item.brand} {item.title}</Title>
                            <FuelType><GridTitle>Fuel type</GridTitle>{item.fuelType}</FuelType>
                            <BodyType><GridTitle>Body Type</GridTitle>{item.bodyType}</BodyType>
                            <Category><GridTitleStrong>Licence plate</GridTitleStrong> {item.licencePlate}</Category>

                            <SeatNumber><GridTitle>Seats</GridTitle> {item.seatNumber}</SeatNumber>

                            <Price><GridTitleStrong/>{item.price} HUF / day</Price>
                        </FeaturedSingleElementContainer>)}


                </Carousel>
            ) : (<Error>An error occurred while fetching information. Please try again later!</Error>)}
        </FeaturedCarsContainer>
    );
}
export default FeaturedContainer;