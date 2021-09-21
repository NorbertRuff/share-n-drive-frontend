import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import Scirocco from '../../assets/img/scirocco.jpg';
import {FeaturedCarsContainer} from "./HomeStyledElements";
import {
    BodyType,
    Brand,
    CarType,
    Category,
    FeaturedSingleElementContainer,
    FuelType,
    GridTitle,
    Price,
    SeatNumber,
    Thumbnail,
    Title
} from "./FeaturedElements";


const FeaturedContainer = (props) => {

    const [error, setError] = useState(false);
    const [featuredCars, setFeaturedCars] = useState([
            {
                id: 1,
                title: 'Scirocco',
                brand: 'Volkswagen',
                bodyType: 'Coupe',
                image: "../../assets/img/scirocco.jpg",
                fuel: 'Gasoline',
                category: 'Fun',
                carType: 'Racing',
                seat: '4',
                price: '30000 HUF'
            },
            {
                id: 2,
                title: 'Scirocco',
                brand: 'Volkswagen',
                bodyType: 'Coupe',
                image: "../../assets/img/clio.jpg",
                fuel: 'Gasoline',
                category: 'Fun',
                carType: 'Racing',
                seat: '4',
                price: '30000 HUF'
            },
            {
                id: 3,
                title: 'Scirocco',
                brand: 'Volkswagen',
                bodyType: 'Coupe',
                image: "../../assets/img/clio.jpg",
                fuel: 'Gasoline',
                category: 'Fun',
                carType: 'Racing',
                seat: '4',
                price: '30000 HUF'
            },
            {
                id: 4,
                title: 'Scirocco',
                brand: 'Volkswagen',
                bodyType: 'Coupe',
                image: "../../assets/img/clio.jpg",
                fuel: 'Gasoline',
                category: 'Fun',
                carType: 'Racing',
                seat: '4',
                price: '30000 HUF'
            },
            {
                id: 5,
                title: 'Scirocco',
                brand: 'Volkswagen',
                bodyType: 'Coupe',
                image: "../../assets/img/clio.jpg",
                fuel: 'Gasoline',
                category: 'Fun',
                carType: 'Racing',
                seat: '4',
                price: '30000 HUF'
            },
        ]
    )

    // useEffect(() => {
    //     dataHandler._api_get(url, setFilteredCars, setError)
    // }, [url]);


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
                        <Title>{item.title}</Title>
                        <CarType><GridTitle>Type</GridTitle>{item.carType}</CarType>
                        <Brand>{item.brand}</Brand>
                        <FuelType><GridTitle>Fuel type</GridTitle>{item.fuel}</FuelType>
                        <BodyType><GridTitle>Body Type</GridTitle>{item.bodyType}</BodyType>
                        <Category><GridTitle>Category</GridTitle> {item.category}</Category>

                        <SeatNumber><GridTitle>SeatNumber</GridTitle> {item.seat}</SeatNumber>

                        <Price><GridTitle>Price</GridTitle>{item.price}/day</Price>
                    </FeaturedSingleElementContainer>)}
            </Carousel>
        </FeaturedCarsContainer>
    );
}
export default FeaturedContainer;