import React from 'react';
import {FeaturedCarsContainer, FeaturedSingleElementContainer} from "./HomeStyledElements";
import blob from "../../assets/img/blob.png";

const FeaturedContainer = (props) => {


    return (
        <FeaturedCarsContainer>
            <FeaturedSingleElementContainer>
                <img src={blob} alt="blob"/>
            </FeaturedSingleElementContainer>

            <FeaturedSingleElementContainer>
                <h1>Featured Sample car name</h1>
            </FeaturedSingleElementContainer>

            <FeaturedSingleElementContainer>
                <h1>Featured Sample car name</h1>
            </FeaturedSingleElementContainer>

            <FeaturedSingleElementContainer>
                <h1>Featured Sample car name</h1>
            </FeaturedSingleElementContainer>

        </FeaturedCarsContainer>

    );
}
export default FeaturedContainer;