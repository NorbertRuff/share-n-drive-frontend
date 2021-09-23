import React, {useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import Scirocco from '../../assets/img/scirocco.jpg';
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
                        <Thumbnail src={Scirocco}/>
                        <CarType><GridTitle>Type</GridTitle>{item.carType}</CarType>
                        <Title>{item.brand} {item.title}</Title>
                        <FuelType><GridTitle>Fuel type</GridTitle>{item.fuel}</FuelType>
                        <BodyType><GridTitle>Body Type</GridTitle>{item.bodyType}</BodyType>
                        <Category><GridTitleStrong>Category</GridTitleStrong> {item.category}</Category>

                        <SeatNumber><GridTitle>Seats</GridTitle> {item.seat}</SeatNumber>

                        <Price><GridTitleStrong/>{item.price} / day</Price>
                    </FeaturedSingleElementContainer>)}
            </Carousel>
        </FeaturedCarsContainer>
    );
}
export default FeaturedContainer;