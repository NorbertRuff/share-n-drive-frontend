import React, {useEffect, useState} from 'react';
import {HeroContainer, HeroSubTitle, HeroTitle} from "../homepage/HomeStyledElements";
import car_share_img from "../../assets/img/sharecar.jpg";
import {dataHandler} from '../../services/Data_handler';
import {Error} from "../PageSyledElements/MainContainer";
import {
    AddCarContainer,
    AddCarForm,
    AddCarWrapper,
    FormContainer,
    FormSubmitButton,
    InputElement
} from "./AddCarStyledElements";


const AddCar = () => {

    const [fuelTypes, setFuelTypes] = useState([]);
    const [bodyTypes, setBodyTypes] = useState([]);
    const [carTypes, setCarTypes] = useState([]);
    const [doorTypes, setDoorTypes] = useState([]);
    const [transMissionTypes, setTransmissionTypes] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        dataHandler._api_get('http://localhost:8080/share-n-drive/fuelTypes',
            setFuelTypes, undefined, undefined);
        dataHandler._api_get('http://localhost:8080/share-n-drive/bodyTypes',
            setBodyTypes, undefined, undefined);
        dataHandler._api_get('http://localhost:8080/share-n-drive/carTypes',
            setCarTypes, undefined, undefined);
        dataHandler._api_get('http://localhost:8080/share-n-drive/DoorTypes',
            setDoorTypes, undefined, undefined);
        dataHandler._api_get('http://localhost:8080/share-n-drive/transmissionTypes',
            setTransmissionTypes, undefined, undefined);
    }, []);
    const handleSubmit = event => {
        event.preventDefault();

        const brand = event.target.brand.value;
        const title = event.target.carMake.value;
        const licencePlate = event.target.licencePlate.value;
        const color = event.target.color.value;
        const price = event.target.price.value;
        const fuelType = event.target.fuelType.value;
        const bodyType = event.target.bodyType.value;
        const carType = event.target.carType.value;
        const transmission = event.target.transmission.value;
        const doors = event.target.doors.value;

        const url = 'http://localhost:8080/share-n-drive/add-car';
        const data = {
            brand, title, licencePlate,
            color, price, fuelType, bodyType, carType, transmission, doors
        };
        dataHandler._api_post(url, data, undefined, setError)
    };

    if (error) {
        return <Error>An error occurred while fetching information. Please try again later!</Error>;
    }
    return (
        <AddCarContainer>
            <HeroContainer image={car_share_img}/>
            <HeroTitle>Share your car</HeroTitle>
            <HeroSubTitle>Fill the form below and join our sharing community!</HeroSubTitle>
            <AddCarWrapper>
                <FormContainer>
                    <AddCarForm onSubmit={handleSubmit}>
                        <InputElement>
                            <label>Brand</label>
                            <input type="text" name="brand" required="required"/>
                        </InputElement>
                        <InputElement>
                            <label>Make</label>
                            <input type="text" name="carMake" required="required"/>
                        </InputElement>
                        <InputElement>
                            <label>License plate</label>
                            <input type="text" name="licencePlate" required="required"/>
                        </InputElement>
                        <InputElement>
                            <label>Color</label>
                            <input type="text" name="color" required="required"/>
                        </InputElement>
                        <InputElement>
                            <label>Price per day (Ft)</label>
                            <input type="number" name="price" required="required"/>
                        </InputElement>
                        <InputElement>
                            <label for="fuelType">Choose fuel type </label>
                            <select name="fuelType" id="fuelType">
                                {fuelTypes.map((type) =>
                                    (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                            </select>
                        </InputElement>
                        <InputElement>
                            <label for="bodyType">Choose category </label>
                            <select name="bodyType" id="bodyType">
                                {bodyTypes.map((type) =>
                                    (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                            </select>
                        </InputElement>
                        <InputElement>
                            <label for="carType">Choose car type </label>
                            <select name="carType" id="carType">
                                {carTypes.map((type) =>
                                    (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                            </select>
                        </InputElement>
                        <InputElement>
                            <label for="doors">Doors </label>
                            <select name="doors" id="doors">
                                {doorTypes.map((type) =>
                                    (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                            </select>
                        </InputElement>
                        <InputElement>
                            <label for="transmission">Choose transmission type </label>
                            <select name="transmission" id="transmission">
                                {transMissionTypes.map((type) =>
                                    (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                            </select>
                        </InputElement>
                        <FormSubmitButton type="submit">
                            Submit
                        </FormSubmitButton>
                    </AddCarForm>
                </FormContainer>
            </AddCarWrapper>
        </AddCarContainer>
    )

}

export default AddCar;