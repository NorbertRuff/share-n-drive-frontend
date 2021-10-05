import React, {useState} from 'react';
import {Container, FormWrap, SocialContainer} from "./UserControlStyledElements";
import {NavLink} from "react-router-dom";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {dataHandler} from "../../services/Data_handler";
import {Error} from "../PageSyledElements/MainContainer";

const Register = () => {
    const [error, setError] = useState(false)
    const [userName, setUserName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")


    function validateRegisterForm() {
        return (
            userName.length > 0 &&
            password.length > 0 &&
            confirmPassword === password
        );
    }


    function handleRegisterSubmit() {
        if (validateRegisterForm()) {
            dataHandler._data = {
                username: userName,
                password: password
            }
            dataHandler._api_post("http://localhost:8080/share-n-drive/register",
                dataHandler._data,
                console.log,
                setError);
        }
    }

    if (error) {
        return <Error>An error occurred while fetching information. Please try again later!</Error>;
    }

    return (
        <Container>
            <FormWrap>
                <h1>Create account</h1>
                <SocialContainer>
                    <NavLink to="/user" title="User"><FaFacebook/></NavLink>
                    <NavLink to="/user" title="User"><FaGoogle/></NavLink>
                    <NavLink to="/user" title="User"><FaLinkedin/></NavLink>
                </SocialContainer>
                <span>or use Email</span>
                <input type="register_email"
                       id="register_email"
                       aria-describedby="emailHelp"
                       placeholder="Enter email"
                       onChange={e => setUserName(e.target.value)}

                />
                <input type="password"
                       id="register_password"
                       placeholder="Password"
                       onChange={e => setPassword(e.target.value)}

                />
                <input type="password"
                       id="confirm_password"
                       placeholder="Confirm Password"
                       onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type={"button"} onClick={handleRegisterSubmit}>Sign Up</button>
            </FormWrap>
        </Container>
    );
};

export default Register;
