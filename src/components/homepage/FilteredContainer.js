import React, {useState} from 'react';
import {FilterButtons, FilterCars, FilteredCarsContainer, FilterHeroTitle, FilterOption} from "./HomeStyledElements";
import Select from "react-select";
import {dataHandler} from "../../services/Data_handler";
import makeAnimated from "react-select/animated/dist/react-select.esm";


const animatedComponents = makeAnimated();

const selectStyle = {
    control: styles => ({...styles, backgroundColor: 'black', color: 'white'}),


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
    const [filteredCars, setFilteredCars] = useState({});
    const baseUrl = "http://localhost:8080/filter";
    const [url, setUrl] = useState(baseUrl);

    const handleChange = (selector, event) => {
        if (selector === "Color") {
            console.log(selector)
            console.log(event)
            // setUrl(baseUrl + "?filter=" + Event.target.value)
            // dataHandler._api_get("/",setFilteredCars,setError)
        } else if (selector === "Manufacturer") {
            dataHandler._api_get("/", setFilteredCars, setError)
        } else if (selector === "BodyType") {
            dataHandler._api_get("https:\\", setFilteredCars, setError)
        } else {

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

            </FilteredCarsContainer>

        </FilterCars>
    );
}

export default FilteredContainer;