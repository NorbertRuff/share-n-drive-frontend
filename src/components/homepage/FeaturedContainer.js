import React, {useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import pic1 from '../../assets/img/mercedesamg.jpg';
import pic2 from '../../assets/img/mercedess65.jpg';
import pic3 from '../../assets/img/bmw.jpg';
import pic4 from '../../assets/img/audi.jpg';
import pic5 from '../../assets/img/teslas.jpg';
import pic6 from '../../assets/img/teslax.jpg';
import pic7 from '../../assets/img/clio.jpg';

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

export const getPicture = (id)=> {
    switch (id) {
        case 1:
            return pic2
        case 2:
            return pic6
        case 3:
            return pic1
        case 4:
            return pic7
        case 5:
            return pic5
        case 6:
            return pic5
        case 7:
            return pic4
        case 8:
            return pic3
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
            <Carousel
                itemsToShow={1}
                focusOnSelect={true}
                enableAutoPlay autoPlaySpeed={2500}
                onChange={(currentItem, pageIndex) => {
                    if (pageIndex === featuredCars.length - 1) {

                    }
                }
                }
            >
                {featuredCars.map(item =>
                    <FeaturedSingleElementContainer key={item.id}>
                        <Thumbnail src={getPicture(item.id)}/>
                        <CarType><GridTitle>Type</GridTitle>{item.carType}</CarType>
                        <Title>{item.brand} {item.title}</Title>
                        <FuelType><GridTitle>Fuel type</GridTitle>{item.fuelType}</FuelType>
                        <BodyType><GridTitle>Body Type</GridTitle>{item.bodyType}</BodyType>
                        <Category><GridTitleStrong>Licence plate</GridTitleStrong> {item.licencePlate}</Category>

                        <SeatNumber><GridTitle>Seats</GridTitle> {item.seatNumber}</SeatNumber>

                        <Price><GridTitleStrong/>{item.price} / day</Price>
                    </FeaturedSingleElementContainer>)}
            </Carousel>
        </FeaturedCarsContainer>
    );
}
export default FeaturedContainer;