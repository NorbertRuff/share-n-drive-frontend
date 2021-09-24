import styled from "styled-components";


export const AddCarContainer = styled.div`
  grid-area: MainContent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AddCarForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 50vw;
`;

export const InputElement = styled.div`
  display: flex;
  justify-content: space-between;
    font-size: 1.2rem;
  padding:0  1rem;
  margin: 0.3rem;
    
`;

export const InputLabel = styled.label`
  font-size: 2rem;
  padding: 0 1rem;
`;

export const FormContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 1rem;
`;

export const FormSubmitButton = styled.button`
    padding: 0.4rem;
  background-color: var(--clr-primary-300);
  font-size: 1.4rem;
`;

export const AddCarSelect = styled.select`
    padding: 0.4rem;
  background-color: var(--clr-primary-300);
  font-size: 1.4rem;
  max-width: 20vw;
  min-width: 15vw;
  text-align: center;
  
`;

export const AddCarInput = styled.input`
    padding: 0.4rem;
  background-color: var(--clr-primary-200);
  font-size: 1.2rem;
  max-width: 40vw;
  min-width: 30vw;
`;

