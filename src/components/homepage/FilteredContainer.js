import React, {useState} from 'react';
import {FilterButtons, FilterCars, FilteredCarsContainer, FilterHeroTitle, FilterOption} from "./HomeStyledElements";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import {BodyType, FeaturedSingleElementContainer, Thumbnail, Title} from "./FeaturedElements";
import Scirocco from "../../assets/img/scirocco.jpg";


const animatedComponents = makeAnimated();

const selectStyle = {
    control: styles => ({...styles, backgroundColor: 'var(--clr-primary-200)', color: 'white'}),


}
const ColorOptions = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
    {value: 'silver', label: 'Silver'},
    {value: 'black', label: 'Black'}
]

const BodyTypeOptions = [
    {value: 'station_wagon', label: 'Station Wagon'},
    {value: 'coupe', label: 'Coupe'},
    {value: 'convertible', label: 'Convertible'}
]

const CarmakerOptions = [
    {value: 'audi', label: 'Audi'},
    {value: 'bmw', label: 'Bmw'},
    {value: 'vw', label: 'Volkswagen'}
]

const FilteredContainer = (props) => {

    const [error, setError] = useState(false);
    const [filteredCars, setFilteredCars] = useState([
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
    ]);
    const baseUrl = "http://localhost:8080/filter/all";
    const [url, setUrl] = useState(baseUrl);

    // useEffect(() => {
    //     dataHandler._api_get(url, setFilteredCars, setError)
    // }, [url]);


    const handleChange = (selector, event) => {
        if (selector === "Color") {
            console.log(selector)
            console.log(event)
            // setUrl(baseUrl + "?filter=" + Event.target.value)
            // dataHandler._api_get("/",setFilteredCars,setError)
            // }
            // else if (selector === "Manufacturer") {
            //     dataHandler._api_get("/", setFilteredCars, setError)
            // } else if (selector === "BodyType") {
            //     dataHandler._api_get("https:\\", setFilteredCars, setError)
            // } else {
            //
        }
    }


    return (
        <FilterCars>
            <FilterHeroTitle>Filter Cars</FilterHeroTitle>
            <FilterButtons>
                <FilterOption>
                    <h2>Color</h2>
                    <Select closeMenuOnSelect={false}
                            onChange={event => handleChange("Color", event)}
                            styles={selectStyle}
                            components={animatedComponents}
                            isMulti
                            options={ColorOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>Manufacturer</h2>
                    <Select
                        styles={selectStyle}
                        onChange={event => handleChange("Manufacturer", event)}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={CarmakerOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>BodyType</h2>
                    <Select
                        onChange={event => handleChange("BodyType", event)}
                        closeMenuOnSelect={false}
                        styles={selectStyle}
                        components={animatedComponents}
                        isMulti
                        options={BodyTypeOptions}/>
                </FilterOption>
            </FilterButtons>
            <FilteredCarsContainer>
                {filteredCars.map((car) =>
                    <FeaturedSingleElementContainer key={car.id}>
                        <Thumbnail src={car.image}/>
                        <Title>{car.title}</Title>
                        {/*<CarType><GridTitle>Type</GridTitle>{car.carType}</CarType>*/}
                        {/*<Brand>{car.brand}</Brand>*/}
                        {/*<FuelType><GridTitle>Fuel type</GridTitle>{car.fuel}</FuelType>*/}
                        {/*<BodyType><GridTitle>Body Type</GridTitle>{car.bodyType}</BodyType>*/}
                        {/*<Category><GridTitle>Category</GridTitle> {car.category}</Category>*/}

                        {/*<SeatNumber><GridTitle>SeatNumber</GridTitle> {car.seat}</SeatNumber>*/}

                        {/*<Price><GridTitle>Price</GridTitle>{car.price}/day</Price>*/}
                    </FeaturedSingleElementContainer>)}

            </FilteredCarsContainer>

        </FilterCars>
    );
}

export default FilteredContainer;