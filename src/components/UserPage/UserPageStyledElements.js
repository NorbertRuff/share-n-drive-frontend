import styled from "styled-components";


export const UserProfileContainer = styled.div`
  grid-area: content;
  
`;

export const UserProfileDetails = styled.div`
  display: grid;
  
  grid-template-areas: 
    "Avatar Name Name"
    "Avatar Address Address";

`;

export const UserAvatarDiv = styled.div`
    grid-area: avatar;
`;
export const UserAvatar = styled.img`
    width: 30vw;
    height: 30vw;
    object-fit: contain;
`;
export const UserName = styled.div`
  grid-area: Name;
`;
export const UserAddress = styled.div`
  grid-area: Address;
`;