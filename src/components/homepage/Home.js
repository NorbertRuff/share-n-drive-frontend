import React from 'react';
import {
    FeaturedCarsContainer, FilterButtons,
    FilterCars, FilteredCarsContainer, FilteredItems, FilterHeroTitle, FilterOption,
    HeroContainer,
    HeroSubTitle,
    HeroTitle,
    HomeContainer, SelectOption
} from "./HomeStyledElements";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const selectStyle = {
    control: styles => ({ ...styles, backgroundColor: 'black' , color: 'white'}),


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

const Home = () => {

    return (
        <HomeContainer>
            <HeroContainer/>

            <HeroTitle>Find your drive</HeroTitle>
            <HeroSubTitle>Explore the world's largest car sharing marketplace</HeroSubTitle>
            <FeaturedCarsContainer>
                <h2>Featured cars</h2>

            </FeaturedCarsContainer>
            <FilterCars>
                <FilterHeroTitle>Filter Cars</FilterHeroTitle>
                <FilterButtons>
                    <FilterOption>
                        <h2>Color</h2>
                        <Select closeMenuOnSelect={false}
                                styles={selectStyle}
                                components={animatedComponents}
                                isMulti
                                options={ColorOptions}/>
                    </FilterOption>
                    <FilterOption>
                        <h2>Manufacturer</h2>
                        <Select
                            styles={selectStyle}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={CarmakerOptions}/>
                    </FilterOption>
                    <FilterOption>
                        <h2>BodyType</h2>
                        <Select
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
        </HomeContainer>
    );
};

export default Home;
