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
  vertical-align: center;
  text-align: center;
  font-size: 1rem;
`;

const DetailsTextarea = styled.input`
  background-color: var(--clr-primary-300);
  color: var(--clr-primary-500);
  padding: 10px;
  text-align: center;
  font-size: 1rem;
`;
export const ComponentStatic = (props) => {
    return (
        <>
            <HeroSubTitle>User details</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>Name: </DetailsSubTitle><DetailsValue>{props.userDetails.firstName} {props.userDetails.lastName}</DetailsValue>
                <DetailsSubTitle>User name: </DetailsSubTitle><DetailsValue>{props.userDetails.userName}</DetailsValue>
                <DetailsSubTitle>Address: </DetailsSubTitle>
                <DetailsValue>{props.userDetails.address.zipCode} {props.userDetails.address.city}
                    {props.userDetails.address.street} {props.userDetails.address.House}
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
                    name: </DetailsSubTitle><DetailsTextarea defaultValue={props.userDetails.firstName}/>
                <DetailsSubTitle>Last name: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.lastName}/>
                <DetailsSubTitle>User name: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.userName}/>


            </UserDetails>
        </>
    )
}
export const ComponentAddress = (props) => {
    return (
        <>
            <HeroSubTitle>Address</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>City: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.address.city}/>
                <DetailsSubTitle>Zip: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.address.zipCode}/>
                <DetailsSubTitle>Street: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.address.street}/>
                <DetailsSubTitle>House: </DetailsSubTitle><DetailsTextarea
                defaultValue={props.userDetails.address.house}/>
            </UserDetails>
        </>
    )
}
export const ComponentContact = (props) => {
    return (<>
            <HeroSubTitle>Contact</HeroSubTitle>
            <UserDetails>
                <DetailsSubTitle>Phone: </DetailsSubTitle><DetailsTextarea defaultValue={props.userDetails.phone}/>
                <DetailsSubTitle>E-Mail: </DetailsSubTitle><DetailsTextarea defaultValue={props.userDetails.email}/>
            </UserDetails>
        </>
    )
}
