import React from 'react';
import {
    HeroContainer,
    HeroSubTitle,
    HeroTitle,
    HomeContainer
} from "./HomeStyledElements";
import FeaturedContainer from "./FeaturedContainer";
import FilteredContainer from "./FilteredContainer";

const Home = () => {


    return (
        <HomeContainer>
            <HeroContainer/>
            <HeroTitle>Find your drive</HeroTitle>
            <HeroSubTitle>Explore the world's largest car sharing marketplace</HeroSubTitle>
            <FeaturedContainer/>
                <FilteredContainer/>
            <HeroContainer/>
            <HeroTitle>Share Your Car!</HeroTitle>
            <HeroSubTitle>Start here now!</HeroSubTitle>
        </HomeContainer>
    );
};

export default Home;
