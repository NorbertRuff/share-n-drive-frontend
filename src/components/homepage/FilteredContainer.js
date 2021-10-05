import React, {useEffect, useState} from 'react';
import {
    AddBookingButton,
    CarCard,
    CardDetails,
    CardSubTitle,
    CardThumbnail,
    CardTitle,
    FilterButtonsContainer,
    FilterCarsMainContainer,
    FilterCloseButton,
    FilteredCarsContainer,
    FilterHeroTitle,
    FilterOption,
    FilterOptionLabel,
    FilterOptions
} from "./FilteredStyleElements";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import {dataHandler} from "../../services/Data_handler";
import {getPicture} from "./FeaturedContainer";
import {customColorStyle, selectStyle} from "../../contexts/SelectStyles";
import {Error} from "../PageSyledElements/MainContainer";
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import Swal from "sweetalert2";


const animatedComponents = makeAnimated();

function initBookCarModal(bookingData) {
    Swal.fire({
        icon: "question",
        title: 'Do you want to book this car?',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
        footer: '<a href="/">Share & Drive!</a>'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Car booked!', '', 'success')
                .then(() => {
                    dataHandler._api_post("http://localhost:8080/share-n-drive/book-car",
                        bookingData, console.log, console.error);
                })
        }
    })
}

const bookCar = (carId) => {
    console.log("in book car")
    let bookingData = {
        "customer": {"id": 11},
        "car": {"id": `${carId}`},
        "rentFrom": "2021-09-23",
        "rentTo": "2021-09-24"
    }
    initBookCarModal(bookingData);
}
let queryData = {}
const FilteredContainer = (props) => {

    const [ColorOptions, setColorOptions] = useState();
    const [FuelTypeOptions, setFuelTypeOptions] = useState();
    const [CarmakerOptions, setCarmakerOptions] = useState();
    const [BodyTypeOptions, setBodyTypeOptions] = useState();
    const [CarTypeOptions, setCarTypeOptions] = useState();
    const [DoorsOptions, setCarDoorsOptions] = useState();
    const [TransmissionOptions, setTransmissionOptions] = useState([]);

    const makeSelectOptions = (items, callback) => {
        const SelectOptions = []
        items.map((item) => SelectOptions.push({"value": item, "label": item}))
        callback(SelectOptions)
    }

    const [filterContainerVisible, setFilterContainerVisible] = useState("block");
    const [error, setError] = useState(false);
    const [closeIcon, setCloseIcon] = useState(IoMdArrowDropleft);
    const [loading, setLoading] = useState(false);
    const [filteredCars, setFilteredCars] = useState([]);
    const baseUrl = "http://localhost:8080/share-n-drive/filter";
    const allCarsUrl = `${baseUrl}/all`;
    const [url, setUrl] = useState(allCarsUrl);

    useEffect(() => {
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/colors', makeSelectOptions, setColorOptions, setError, setLoading);
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/fuelTypes', makeSelectOptions, setFuelTypeOptions, setError, setLoading)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/brands', makeSelectOptions, setCarmakerOptions, setError, setLoading)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/bodyTypes', makeSelectOptions, setBodyTypeOptions, setError, setLoading)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/carTypes', makeSelectOptions, setCarTypeOptions, setError, setLoading)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/transmissionTypes', makeSelectOptions, setTransmissionOptions, setError, setLoading)
        dataHandler._api_get_selectOptions('http://localhost:8080/share-n-drive/DoorTypes', makeSelectOptions, setCarDoorsOptions, setError, setLoading)
        dataHandler._api_get(url, setFilteredCars, setError, setLoading)
    }, [url]);


    const handleChange = (selector, event) => {
        queryData[selector] = event.map(selector => selector.value);
        fetchFilteredData(queryData)
    }

    const handleRadioButtonChange = (selector, event) => {
        queryData[selector] = event.target.value;
        fetchFilteredData(queryData);
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

    const closeFilterContainer = () => {
        if (filterContainerVisible === "block") {
            setFilterContainerVisible("none");
            setCloseIcon(IoMdArrowDropright);
        } else {
            setFilterContainerVisible("block");
            setCloseIcon(IoMdArrowDropleft);
        }
    }

    if (loading) {
        return <p>Data is loading...</p>;
    }

    if (error) {
        return <Error>An error occurred while fetching information. Please try again later!</Error>;
    }

    return (
        <React.Fragment>
            <FilterHeroTitle>Filter Cars</FilterHeroTitle>
            <FilterCarsMainContainer>
                <FilterButtonsContainer>
                    <FilterOptions display={filterContainerVisible}>
                        <FilterOption>
                            <FilterOptionLabel>Brand</FilterOptionLabel>
                            <Select
                                styles={selectStyle}
                                onChange={event => handleChange("brand", event)}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={CarmakerOptions}/>

                        </FilterOption>
                        <FilterOption>
                            <FilterOptionLabel>Color</FilterOptionLabel>
                            <Select closeMenuOnSelect={false}
                                    onChange={event => handleChange("color", event)}
                                    styles={customColorStyle}
                                    components={animatedComponents}
                                    isMulti
                                    options={ColorOptions}/>
                        </FilterOption>

                        <FilterOption>
                            <FilterOptionLabel>Body type</FilterOptionLabel>
                            <Select
                                onChange={event => handleChange("bodyType", event)}
                                closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={BodyTypeOptions}/>
                        </FilterOption>
                        <FilterOption>
                            <FilterOptionLabel>Fuel type</FilterOptionLabel>
                            <Select
                                onChange={event => handleChange("fuelType", event)}
                                closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={FuelTypeOptions}/>
                        </FilterOption>
                        <FilterOption>
                            <FilterOptionLabel>Transmission</FilterOptionLabel>
                            {TransmissionOptions.map((transmission) =>
                                <div key={transmission.value}>
                                    <input type="radio" value={transmission.value}
                                           onChange={event => handleRadioButtonChange("transmission", event)}
                                           name="transmission"/> {transmission.label}
                                </div>
                            )}
                        </FilterOption>
                        <FilterOption>
                            <FilterOptionLabel>Doors</FilterOptionLabel>
                            <Select
                                onChange={event => handleChange("doors", event)}
                                closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={DoorsOptions}/>
                        </FilterOption>

                        <FilterOption>
                            <FilterOptionLabel>Car type</FilterOptionLabel>
                            <Select
                                onChange={event => handleChange("carType", event)}
                                closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={CarTypeOptions}/>
                        </FilterOption>
                    </FilterOptions>
                    <FilterCloseButton onClick={closeFilterContainer}>
                        {closeIcon} </FilterCloseButton>
                </FilterButtonsContainer>

                <FilteredCarsContainer>
                    {filteredCars.map((car) =>
                        <CarCard key={car.id}>
                            <CardThumbnail img={getPicture(car.title)}/>
                            <CardDetails>
                                <CardTitle>{car.brand} {car.title}</CardTitle>
                                <CardSubTitle>{car.bodyType} </CardSubTitle>
                                <CardSubTitle>{car.fuelType} </CardSubTitle>
                            </CardDetails>
                            <AddBookingButton onClick={() => bookCar(car.id)}>Book this car</AddBookingButton>
                        </CarCard>
                    )}
                </FilteredCarsContainer>
            </FilterCarsMainContainer>
        </React.Fragment>
    );
}

export default FilteredContainer;