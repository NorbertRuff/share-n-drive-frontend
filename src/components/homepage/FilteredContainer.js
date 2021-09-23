import React, {useEffect, useState} from 'react';
import {
    CarCard,
    CardDetails,
    CardSubTitle,
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
import {Error} from "../PageSyledElements/MainContainer";


const animatedComponents = makeAnimated();

const selectStyle = {
    control: styles => ({
        ...styles,
        backgroundColor: 'var(--clr-primary-200)',
        color: 'white',
        fontSize: '1.3rem'
    }),
}

let queryData = {}

const FilteredContainer = (props) => {

    const [ColorOptions, setColorOptions] = useState();
    const [FuelTypeOptions, setFuelTypeOptions] = useState();
    const [CarmakerOptions, setCarmakerOptions] = useState();
    const [BodyTypeOptions, setBodyTypeOptions] = useState();
    const [CarTypeOptions, setCarTypeOptions] = useState();

    const makeSelectOptions = (items, callback) => {
        const SelectOptions = []
        items.map((item) => SelectOptions.push({"value": item, "label": item}))
        callback(SelectOptions)
    }

    const [error, setError] = useState(false);
    const [filteredCars, setFilteredCars] = useState([]);
    const baseUrl = "http://localhost:8080/share-n-drive/filter";
    const allCarsUrl = `${baseUrl}/all`;
    const [url, setUrl] = useState(allCarsUrl);

    useEffect(() => {
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/colors', makeSelectOptions, setColorOptions, console.error)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/fuelTypes', makeSelectOptions, setFuelTypeOptions, console.error)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/brands', makeSelectOptions, setCarmakerOptions, console.error)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/bodyTypes', makeSelectOptions, setBodyTypeOptions, console.error)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/carTypes', makeSelectOptions, setCarTypeOptions, console.error)
        dataHandler._api_get(url, setFilteredCars, setError)
    }, [url]);


    const handleChange = (selector, event) => {
        queryData[selector] = event.map(selector => selector.value);
        fetchFilteredData(queryData)
    }

    const createQueryString = (obj) => {
        return Object.keys(obj)
            .filter(k => obj[k].length > 0)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
            .join('&');
    }

    const fetchFilteredData = (data) => {
        let queryStr = createQueryString(data);
        setUrl(queryStr === "" ? allCarsUrl : `${baseUrl}?${queryStr}`);
    }

    return (
        <>
            {!error ? (
                <FilterCars>

                    <FilterHeroTitle>Filter Cars</FilterHeroTitle>
                    <FilterButtons>
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
                            <h2>Color</h2>
                            <Select closeMenuOnSelect={false}
                                    onChange={event => handleChange("color", event)}
                                    styles={selectStyle}
                                    components={animatedComponents}
                                    isMulti
                                    options={ColorOptions}/>
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
                        <FilterOption>
                            <h2>Car type</h2>
                            <Select
                                onChange={event => handleChange("fuelType", event)}
                                closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={CarTypeOptions}/>
                        </FilterOption>
                    </FilterButtons>
                    <FilteredCarsContainer>
                        {filteredCars.map((car) =>
                            <FilteredSingleElementContainer key={car.id}>
                                <CarCard>
                                    <CardThumbnail img={getPicture(car.title)}/>
                                    <CardDetails>
                                        <CardTitle>{car.brand} {car.title}</CardTitle>
                                        <CardSubTitle>{car.bodyType} </CardSubTitle>
                                        <CardSubTitle>{car.fuelType} </CardSubTitle>
                                    </CardDetails>
                                </CarCard>
                            </FilteredSingleElementContainer>)}
                    </FilteredCarsContainer>
                </FilterCars>) : (
                <Error>An error occurred while fetching information. Please try again later!</Error>)}</>
    );
}

export default FilteredContainer;