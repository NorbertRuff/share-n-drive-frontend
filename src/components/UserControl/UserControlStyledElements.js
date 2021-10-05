import styled from "styled-components";

export const UserControlContainer = styled.div`
  grid-area: MainContent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
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
  min-width: 70vw;
  max-height: 650px;
  margin: 3rem;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  transition: all 0.6s ease-in-out;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  > * {
    padding: 1rem;
  }

  padding: 1rem;
`;

export const FormWrap = styled.form`
  background-color: #eee;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  input {
    background-color: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px 15px;
    margin: 1rem;
    width: 100%;
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


export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;

`;

export const RegisterOverlayPanel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--clr-primary-200);
  background-color: var(--clr-primary-300);
  min-height: 600px;
  max-height: 650px;
  width: 35vw;
  display: ${(props) => props.opacity};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    padding: 1rem;
  }
`;
export const LoginOverlayPanel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border: 1px solid var(--clr-primary-100);
  background-color: var(--clr-primary-200);
  width: 35vw;
  min-height: 600px;
  max-height: 650px;
  display: ${(props) => props.opacity};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    padding: 1rem;
  }
`;

export const Ghost = styled.button`
  border-radius: 20px;
  color: var(--clr-dark);
  font-size: 12px;
  font-family: var(--ff-body-bold);
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: transparent;
  border-color: var(--clr-light);
`;