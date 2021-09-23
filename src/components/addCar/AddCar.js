import React, { useState } from 'react';
import {HomeContainer, HeroTitle, HeroContainer, HeroSubTitle} from "../homepage/HomeStyledElements";
import car_share_img from "../../assets/img/sharecar.jpg";
import { dataHandler } from '../../services/Data_handler';


const AddCar= () => {

    const handleSubmit = event => {
    event.preventDefault();

    const brand = event.target.brand.value;
    const color = event.target.color.value;
    const price = event.target.price.value;
    const fuelType = event.target.fuelType.value;

    const url = 'http://localhost:8080/share-n-drive/add-car';
    const data = { brand, color, price };
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
            <option value="gas">gas</option>
            <option value="gas">gasoline</option>
            <option value="diesel">diesel</option>
            <option value="electric">electric</option>
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