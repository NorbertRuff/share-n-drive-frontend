import React from 'react';
import {
    BookedSingleElement, BookingBodyType,
    BookingCarType, BookingColor, BookingDateContainer, BookingDoors, BookingFuelType,
    BookingGridTitleStrong, BookingLicence, BookingPrice, BookingRating, BookingSeatNumber,
    BookingThumbnail,
    BookingTitle, BookingTransmissionType, From, To, UserName
} from "./UserPageStyledElements";
import {getPicture} from "../homepage/FeaturedContainer";
import {FaGasPump, FaStar} from "react-icons/fa";
import {IoCar} from "react-icons/io5";
import {GiCarDoor, GiCarSeat, GiPriceTag} from "react-icons/gi";
import {HiOutlineColorSwatch} from "react-icons/hi";
import {ColorIcon, GridTitle} from "../homepage/FeaturedStyleElements";
import {ImBarcode} from "react-icons/im";
import {BsFillGearFill} from "react-icons/bs";

const BookedCarsContainer = (props) => {
    return (
        <BookedSingleElement key={props.details.id}>
            <BookingThumbnail src={getPicture(props.details.car.title)}/>
            <BookingCarType>
                <BookingGridTitleStrong>Type</BookingGridTitleStrong>{props.details.car.carType}
            </BookingCarType>
            <BookingTitle>{props.details.car.brand} {props.details.car.title}</BookingTitle>
            <BookingFuelType>
                <BookingGridTitleStrong><FaGasPump/></BookingGridTitleStrong>{props.details.car.fuelType}
            </BookingFuelType>
            <BookingBodyType>
                <BookingGridTitleStrong><IoCar/></BookingGridTitleStrong>{props.details.car.bodyType}
            </BookingBodyType>
            <BookingSeatNumber>
                <BookingGridTitleStrong><GiCarSeat/></BookingGridTitleStrong> {props.details.car.seatNumber}
            </BookingSeatNumber>
            <BookingDoors>
                <BookingGridTitleStrong><GiCarDoor/></BookingGridTitleStrong> {props.details.car.doors}
            </BookingDoors>
            <BookingColor>
                <BookingGridTitleStrong><HiOutlineColorSwatch/></BookingGridTitleStrong> <ColorIcon
                color={props.details.car.color}/>{props.details.car.color}
            </BookingColor>
            <BookingLicence>
                <BookingGridTitleStrong><ImBarcode/></BookingGridTitleStrong> {props.details.car.licencePlate}
            </BookingLicence>
            <BookingRating>
                <BookingGridTitleStrong><FaStar/></BookingGridTitleStrong> {props.details.car.rating}
            </BookingRating>
            <BookingTransmissionType>
                <BookingGridTitleStrong><BsFillGearFill/></BookingGridTitleStrong> {props.details.car.transmission}
            </BookingTransmissionType>
            <BookingPrice><BookingGridTitleStrong><GiPriceTag/></BookingGridTitleStrong>
                <BookingGridTitleStrong>{props.details.car.price} HUF / day</BookingGridTitleStrong>
            </BookingPrice>
            <BookingDateContainer>
                <From>Booked from: {props.details.rentFrom}</From>
                <To>Booked to: {props.details.rentTo}</To>
                <UserName>Owner: {props.details.customer.username}</UserName>
            </BookingDateContainer>
        </BookedSingleElement>
    );
};

export default BookedCarsContainer;
