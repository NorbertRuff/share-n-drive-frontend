import React, { useState, useEffect } from 'react';
import {HomeContainer, HeroTitle, HeroContainer, HeroSubTitle} from "../homepage/HomeStyledElements";
import car_share_img from "../../assets/img/sharecar.jpg";
import { dataHandler } from '../../services/Data_handler';


const AddCar= () => {

  const [fuelTypes, setFuelTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

    useEffect(() => {
      dataHandler._api_get('http://localhost:8080/share-n-drive/fuelTypes', 
      setFuelTypes, console.log);
      dataHandler._api_get('http://localhost:8080/share-n-drive/bodyTypes', 
      setBodyTypes, console.log);
      dataHandler._api_get('http://localhost:8080/share-n-drive/carTypes', 
      setCarTypes, console.log);
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
    const data = { customer: {id: 1}, brand, licencePlate, 
    color, price, fuelType, bodyType, carType };
    dataHandler._api_post(url, data, console.log, console.log)
        };

    return(
    <HomeContainer>
        <HeroContainer image={car_share_img}/>
        <HeroTitle>Share your car</HeroTitle>
        <HeroSubTitle>Fill the form below and join our sharing community!</HeroSubTitle>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Brand</label>
        <input type="text" name="brand" required="required"/>
      </div>
      <div>
      <label>License plate</label>
        <input type="text" name="licencePlate" required="required"/>
      </div>
      <div>
        <label>Color</label>
        <input type="text" name="color" required="required"/>
      </div>
      <div>
        <label>Price per day (Ft)</label>
        <input type="number" name="price" required="required"/>
      </div>
      <div>
      <label for="fuelType">Choose fuel type </label>
      <select name="fuelType" id="fuelType">
      {fuelTypes.map((type) => 
      (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
        </select>
      </div>
      <div>
      <label for="bodyType">Choose category </label>
      <select name="bodyType" id="bodyType">
      {bodyTypes.map((type) => 
      (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
        </select>
      </div>
      <div>
      <label for="carType">Choose car type </label>
      <select name="carType" id="carType">
      {carTypes.map((type) => 
      (<option key={type} value={type}>{type.replace("_", " ")}</option>))}
        </select>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
    </HomeContainer>
    )

}

export default AddCar;