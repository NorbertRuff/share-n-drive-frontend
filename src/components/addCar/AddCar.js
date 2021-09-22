import React, { useState } from 'react';
import {HomeContainer, HeroTitle, HeroContainer, HeroSubTitle} from "../homepage/HomeStyledElements";
import car_share_img from "../../assets/img/sharecar.jpg";
import { dataHandler } from '../../services/Data_handler';


const AddCar= () => {
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState(0);
    const [fuelType, setFuelType] = useState('gas');

    const handleBrandChange = event => {
        setBrand(event.target.value)
      };

    const handleColorChange = event => {
    setColor(event.target.value)
    };

    const handlePriceChange = event => {
    setPrice(event.target.value)
    };

    const handleFuelTypeChange = event => {
        setFuelType(event.target.value)
        };

    const handleSubmit = event => {
    event.preventDefault();

    const url = 'http://localhost:8080/share-n-drive/add-car';
    const data = { brand, color, price, fuelType };
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
        <input
          type="text"
          name="brand"
          required="required"
          onChange={handleBrandChange}
          value={brand}
        />
      </div>
      <div>
        <label>Color</label>
        <input
          type="text"
          name="color"
          required="required"
          onChange={handleColorChange}
          value={color}
        />
      </div>
      <div>
        <label>Price per day</label>
        <input
          type="number"
          name="price"
          required="required"
          onChange={handlePriceChange}
          value={price}
        />
      </div>
      <div>
      <label for="fuelType">Choose fuel type:</label>
        <select name="fuelType" id="fuelType" 
        onChange={handleFuelTypeChange}
        value={fuelType}>
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