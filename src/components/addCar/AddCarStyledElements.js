import styled from "styled-components";


export const AddCarContainer = styled.div`
  grid-area: MainContent;
  display: flex;
  flex-direction: column;
`;

export const AddCarWrapper = styled.div`
  position: relative;
  background-color: var(--clr-light);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
`;

export const AddCarForm = styled.form`
  background-color: #eee;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  width: 40vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;

  input {
    background-color: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px 15px;
    margin: 1rem;
    width: 100%;
    max-width: 30vw;
  }

  select {
    
  }

  label {

  }

  h1 {
    font-size: 3rem;
    color: var(--clr-primary-500);
  }

  * {
    padding: 10px;
  }

  button {
    border-radius: 20px;
    border: 1px solid var(--clr-primary-500);
    background-color: var(--clr-primary-300);
    color: var(--clr-light);
    font-size: 1rem;
    font-family: var(--ff-body-bold);
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

`;

export const InputElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const FormContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  transition: all 0.6s ease-in-out;
`;

export const FormSubmitButton = styled.button`
`;
