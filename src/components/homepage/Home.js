import React from 'react';
import {HeroContainer, HeroSubTitle, HeroTitle, HomeContainer} from "./HomeStyledElements";
import FeaturedContainer from "./FeaturedContainer";
import FilteredContainer from "./FilteredContainer";
import hero from "../../assets/img/new_mainbanner.jpg";
import hero2 from "../../assets/img/hero.jpg";

const Home = () => {


    return (
        <HomeContainer>
            <HeroContainer image={hero}/>
            <HeroTitle>Find your drive</HeroTitle>
            <HeroSubTitle>Explore the world's largest car sharing marketplace</HeroSubTitle>
            <FeaturedContainer/>
            <FilteredContainer/>
            <HeroContainer image={hero2}/>
            <HeroTitle>Share Your Car!</HeroTitle>
            <HeroSubTitle>Start here now!</HeroSubTitle>
        </HomeContainer>
    );
};

export default Home;
