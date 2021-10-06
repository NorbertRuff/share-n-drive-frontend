import styled from "styled-components";
import hero from "../../assets/img/new_mainbanner.jpg";

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
  min-width: 650px;
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
  font-size: 40px;

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

  h1 {
    font-size: 3rem;
    color: var(--clr-primary-500);
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

export const OverlayPanel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--clr-primary-200);
  background-color: ${(props) => props.color};
  background-image: url(${hero});
  background-position: ${(props) => props.pos}%;
  color: ${(props) => props.fontColor};
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(${(props) => props.pos}%);
  transition: all 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940);

  > p {
    font-size: 2rem;
    font-family: var(--ff-body-bold);
    background-color: rgba(0, 0, 0, 0.5);
  }

  > h1 {
    outline: 3px solid ${(props) => props.fontColor};
    font-size: 5rem;
    font-family: var(--ff-body-bold);
    background-color: rgba(0, 0, 0, 0.5);
  }

  > h2 {
    -webkit-text-stroke: 1px var(--clr-primary-500);
    font-size: 2rem;
    font-family: var(--ff-body-bold);
    color: ${(props) => props.fontColor};

  }

  > * {

    margin: 10px;
    padding: 10px;
    border-radius: 20px;
  }
`;
export const Ghost = styled.button`
  margin-top: 3rem;
  border-radius: 20px;
  color: var(--clr-primary-300);
  font-size: 1.5rem;
  font-family: var(--ff-body-bold);
  padding: 12px 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
  border-color: var(--clr-light);
`;