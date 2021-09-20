import React from 'react';
import {FeaturedCarsContainer, HeroContainer, HeroSubTitle, HeroTitle, HomeContainer} from "./HomeStyledElements";


const Home = () => {
    return (
        <HomeContainer>
            <HeroContainer/>

            <HeroTitle>Find your drive</HeroTitle>
            <HeroSubTitle>Explore the world's largest car sharing marketplace</HeroSubTitle>
            <FeaturedCarsContainer>


            </FeaturedCarsContainer>

        </HomeContainer>
    );
};

export default Home;
