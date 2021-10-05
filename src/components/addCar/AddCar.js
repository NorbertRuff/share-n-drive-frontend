import React, {useEffect, useState} from 'react';
import {HeroContainer, HeroSubTitle, HeroTitle} from "../homepage/HomeStyledElements";
import car_share_img from "../../assets/img/sharecar.jpg";
import {dataHandler} from '../../services/Data_handler';
import {ErrorDiv} from "../PageSyledElements/MainContainer";
import {
  AddCarContainer,
  AddCarForm, AddCarInput, AddCarSelect,
  FormContainer,
  FormSubmitButton,
  InputElement,
  InputLabel
} from "./AddCarStyledElements";


const AddCar = () => {

  const [fuelTypes, setFuelTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    dataHandler._api_get('http://localhost:8080/share-n-drive/fuelTypes',
        setFuelTypes, setError);
    dataHandler._api_get('http://localhost:8080/share-n-drive/bodyTypes',
        setBodyTypes, setError);
    dataHandler._api_get('http://localhost:8080/share-n-drive/carTypes',
        setCarTypes, setError);
    }, []);

    const handleSubmit = event => {
    event.preventDefault();

    const brand = event.target.brand.value;
    const licencePlate = event.target.licencePlate.value;
    const color = event.target.color.value;
    const price = event.target.price.value;
    const fuelType = event.target.fuelType.value;
    const bodyType = event.target.bodyType.value;
    const carType = event.target.carType.value;


    const url = 'http://localhost:8080/share-n-drive/add-car';
    const data = { brand, licencePlate,
    color, price, fuelType, bodyType, carType };
    dataHandler._api_post(url, data, console.log, console.log)
        };

    return (
        <>
          {!error ? (
              <AddCarContainer>
                <HeroContainer image={car_share_img}/>
                <HeroTitle>Share your car</HeroTitle>
                <HeroSubTitle>Fill the form below and join our sharing community!</HeroSubTitle>
                <FormContainer>
                <AddCarForm onSubmit={handleSubmit}>
                  <InputElement>
                    <InputLabel>Brand</InputLabel>
                    <AddCarInput type="text" name="brand" required="required"/>
                  </InputElement>
                  <InputElement>
                    <InputLabel>License plate</InputLabel>
                    <AddCarInput type="text" name="licencePlate" required="required"/>
                  </InputElement>
                  <InputElement>
                    <InputLabel>Color</InputLabel>
                    <AddCarInput type="text" name="color" required="required"/>
                  </InputElement>
                  <InputElement>
                    <InputLabel>Price per day (Ft)</InputLabel>
                    <AddCarInput type="number" name="price" required="required"/>
                  </InputElement>
                  <InputElement>
                    <InputLabel for="fuelType">Choose fuel type </InputLabel>
                    <AddCarSelect name="fuelType" id="fuelType">
                      {fuelTypes.map((type) =>
                          (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                    </AddCarSelect>
                  </InputElement>
                  <InputElement>
                    <InputLabel for="bodyType">Choose category </InputLabel>
                    <AddCarSelect name="bodyType" id="bodyType">
                      {bodyTypes.map((type) =>
                          (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                    </AddCarSelect>
                  </InputElement>
                  <InputElement>
                    <InputLabel for="carType">Choose car type </InputLabel>
                    <AddCarSelect name="carType" id="carType">
                      {carTypes.map((type) =>
                          (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
                    </AddCarSelect>
                  </InputElement>
                  <FormSubmitButton type="submit">
                    Submit
                  </FormSubmitButton>

                </AddCarForm>
                </FormContainer>
              </AddCarContainer>) : (
              <ErrorDiv>An error occurred while fetching information. Please try again later!</ErrorDiv>)}</>
    )

}

export default AddCar;