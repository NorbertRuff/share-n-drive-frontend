import React, {useEffect, useState} from 'react';
import {
    CarCard,
    CardDetails,
    CardThumbnail,
    CardTitle,
    FilterButtons,
    FilterCars,
    FilteredCarsContainer,
    FilteredSingleElementContainer,
    FilterHeroTitle,
    FilterOption
} from "./FilteredStyleElements";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import clio from "../../assets/img/clio.jpg";
import {dataHandler} from "../../services/Data_handler";
import {getPicture} from "./FeaturedContainer";


const animatedComponents = makeAnimated();

const selectStyle = {
    control: styles => ({...styles,
        backgroundColor: 'var(--clr-primary-200)',
        color: 'white',
        fontSize:'1.5rem'
    }),


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
    const [filteredCars, setFilteredCars] = useState([]);
    const baseUrl = "http://localhost:8080/share-n-drive/filter/all";
    const [url, setUrl] = useState(baseUrl);

    useEffect(() => {
        dataHandler._api_get(url, setFilteredCars, setError)
    }, [url]);


    const handleChange = (selector, event) => {
        if (selector === "Color") {
            console.log(selector)
            console.log(event)
            // setUrl(baseUrl + "?filter=" + event)
            // dataHandler._api_get("/",setFilteredCars,setError)
            // }
            // else if (selector === "Manufacturer") {
            //     dataHandler._api_get("/", setFilteredCars, setError)
            // } else if (selector === "BodyType") {
            //     dataHandler._api_get("https:\\", setFilteredCars, setError)
            // } else {

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
                    <h2>Brand</h2>
                    <Select
                        styles={selectStyle}
                        onChange={event => handleChange("Manufacturer", event)}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={CarmakerOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>Body type</h2>
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
                    <FilteredSingleElementContainer key={car.id}>
                        <CarCard>
                            <CardThumbnail img={getPicture(car.id)}/>
                            <CardDetails>
                                <CardTitle>{car.brand} {car.title}</CardTitle>
                                    {car.carType} <br/> {car.fuel} <br/> {car.category}
                            </CardDetails>
                        </CarCard>
                    </FilteredSingleElementContainer>)}

            </FilteredCarsContainer>

        </FilterCars>
    );
}

export default FilteredContainer;