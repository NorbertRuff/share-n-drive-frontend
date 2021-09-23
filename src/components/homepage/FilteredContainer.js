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

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const yyyy = today.getFullYear();
const todayDate = `${yyyy}-${mm}-${dd}`
let inputDate = todayDate

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
const FuelTypeOptions = [
    {value: 'petrol', label: 'Petrol'},
    {value: 'electric', label: 'Electric'},
    {value: 'diesel', label: 'Diesel'}
]

let queryData = {}

const FilteredContainer = (props) => {

    const [error, setError] = useState(false);
    const [filteredCars, setFilteredCars] = useState([]);
    const baseUrl = "http://localhost:8080/share-n-drive/filter";
    const allCarsUrl = `${baseUrl}/all`;
    const [url, setUrl] = useState(allCarsUrl);

    useEffect(() => {
        console.log(queryData)
        dataHandler._api_get(url, setFilteredCars, setError)
    }, [url]);


    const handleChange = (selector, event) => {
        queryData[selector] = event.map(selector => selector.value);
        fetchFilteredData(queryData)
    }

    const handleDateChange = (selector, event) => {
        inputDate = event.target.value;
        queryData[selector] = [event.target.value];
    }

   const createQueryString = (obj) => {
        return Object.keys(obj)
            .filter(k =>obj[k].length>0)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
            .join('&');
    }
    
   const fetchFilteredData = (data)  =>{
        let queryStr = createQueryString(data);
        setUrl(queryStr === "" ? allCarsUrl : `${baseUrl}?${queryStr}`);
    }

    const bookCar = (carId) => {
        let bookingData = {
            customer: {"id": 1},
            car: {"id": `${carId}`},
            rentFrom: "2021-09-23",
            rentTo: "2021-09-24"
        }
        dataHandler._api_post("http://localhost:8080/share-n-drive/book-car", 
        bookingData, console.log, console.log);
    }

    return (
        <FilterCars>
            <FilterHeroTitle>Filter Cars</FilterHeroTitle>
            <FilterButtons>
                <FilterOption>
                <label for="start">Start date:</label>

                <input type="date" id="start" name="trip-start"
                    value={inputDate}
                    min={todayDate} max="2022-01-01"
                    onChange={event => handleDateChange("from", event)}>
                    </input>
                </FilterOption>
                <FilterOption>
                    <h2>Color</h2>
                    <Select closeMenuOnSelect={false}
                            onChange={event => handleChange("color", event)}
                            styles={selectStyle}
                            components={animatedComponents}
                            isMulti
                            options={ColorOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>Brand</h2>
                    <Select
                        styles={selectStyle}
                        onChange={event => handleChange("brand", event)}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={CarmakerOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>Body type</h2>
                    <Select
                        onChange={event => handleChange("bodyType", event)}
                        closeMenuOnSelect={false}
                        styles={selectStyle}
                        components={animatedComponents}
                        isMulti
                        options={BodyTypeOptions}/>
                </FilterOption>
                <FilterOption>
                    <h2>Fuel type</h2>
                    <Select
                        onChange={event => handleChange("fuelType", event)}
                        closeMenuOnSelect={false}
                        styles={selectStyle}
                        components={animatedComponents}
                        isMulti
                        options={FuelTypeOptions}/>
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
                            <button onClick={bookCar(car.id)}>Boook this car</button>
                        </CarCard>
                    </FilteredSingleElementContainer>)}
            </FilteredCarsContainer>
        </FilterCars>
    );
}

export default FilteredContainer;