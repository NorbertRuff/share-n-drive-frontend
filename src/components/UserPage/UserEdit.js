import styled from "styled-components";
import {HeroSubTitle} from "../homepage/HomeStyledElements";

const UserDetails = styled.div`
  display: grid;
  grid-template-columns: 0.5fr auto;
`;
const DetailsSubTitle = styled.div`
  background-color: var(--clr-primary-100);
  color: var(--clr-primary-500);
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const DetailsValue = styled.div`
  background-color: var(--clr-primary-300);
  color: var(--clr-primary-500);
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;
export const ComponentStatic = (props) => {
    return (
        <>
            <HeroSubTitle>User details</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>Name: </DetailsSubTitle><DetailsValue>{props.userDetails.firstName} {props.userDetails.lastName}</DetailsValue>
                <DetailsSubTitle>User name: </DetailsSubTitle><DetailsValue>{props.userDetails.userName}</DetailsValue>
                <DetailsSubTitle>Address: </DetailsSubTitle>
                <DetailsValue>{props.userDetails.address.city}
                    {props.userDetails.address.zipCode} {props.userDetails.address.street} {props.userDetails.address.HouseNumber}
                </DetailsValue>
                <DetailsSubTitle>Phone: </DetailsSubTitle><DetailsValue>{props.userDetails.phone}</DetailsValue>
                <DetailsSubTitle>E-Mail: </DetailsSubTitle><DetailsValue>{props.userDetails.email}</DetailsValue>

            </UserDetails>
        </>
    )
}

export const ComponentBasic = (props) => {
    return (
        <>
            <HeroSubTitle>Basic details</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>First
                    name: </DetailsSubTitle><DetailsValue>{props.userDetails.firstName}</DetailsValue>
                <DetailsSubTitle>Last name: </DetailsSubTitle><DetailsValue>{props.userDetails.lastName}</DetailsValue>
                <DetailsSubTitle>User name: </DetailsSubTitle><DetailsValue>{props.userDetails.userName}</DetailsValue>
            </UserDetails>
        </>
    )
}
export const ComponentAddress = (props) => {
    return (
        <>
            <HeroSubTitle>Address</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>City: </DetailsSubTitle><DetailsValue>{props.userDetails.address.city}</DetailsValue>
                <DetailsSubTitle>Zip: </DetailsSubTitle><DetailsValue>{props.userDetails.address.zipCode}</DetailsValue>
                <DetailsSubTitle>Street: </DetailsSubTitle><DetailsValue>{props.userDetails.address.street}</DetailsValue>
                <DetailsSubTitle>House: </DetailsSubTitle><DetailsValue>{props.userDetails.address.HouseNumber}</DetailsValue>
            </UserDetails>
        </>
    )
}
export const ComponentContact = (props) => {
    return (<>
            <HeroSubTitle>Contact</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>Phone: </DetailsSubTitle><DetailsValue>{props.userDetails.phone}</DetailsValue>
                <DetailsSubTitle>E-Mail: </DetailsSubTitle><DetailsValue>{props.userDetails.email}</DetailsValue>
            </UserDetails>
        </>
    )
}
export const ComponentInterests = (props) => {
    return (
        <>
            <HeroSubTitle>Interests</HeroSubTitle>
            <UserDetails>
                {props.userDetails.interests.map(interest =>
                    <>
                        <DetailsSubTitle>Interests</DetailsSubTitle>
                        <DetailsValue>{interest}</DetailsValue>
                    </>
                )

                }

            </UserDetails>
        </>
    )
}
