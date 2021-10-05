import React, {useState} from 'react';
import {Container, FormWrap, SocialContainer} from "./UserControlStyledElements";
import {NavLink} from "react-router-dom";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {dataHandler} from "../../services/Data_handler";
import {Error} from "../PageSyledElements/MainContainer";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError] = useState(false)
    const [state, setState] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    })

    function validateRegisterForm() {
        return (
            state.userName.length > 0 &&
            state.password.length > 0 &&
            state.password === state.confirmPassword
        );
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (validateRegisterForm()) {
            dataHandler._data = {
                username: state.userName,
                email: state.email,
                password: state.password
            }
            dataHandler._api_post("http://localhost:8080/share-n-drive/register",
                dataHandler._data,
                console.log,
                setError);
            Swal.fire({
                icon: "success",
                title: 'Successfully registered!',
                footer: '<a href="/">Share & Drive!</a>'
            })
        } else {
            Swal.fire({
                icon: "error",
                title: 'Passwords not matched',
                footer: '<a href="/">Share & Drive!</a>'
            })
        }
    }

    if (error) {
        return <Error>An error occurred while fetching information. Please try again later!</Error>;
    }
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
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
                <input type="text"
                       id="userName"
                       aria-describedby="usernameHelp"
                       placeholder="Username"
                       onChange={handleChange}
                    // onChange={e => setUserName(e.target.value)}

                />
                <input type="email"
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder="example@example.com"
                       value={state.email}
                       onChange={handleChange}

                />
                <input type="password"
                       id="password"
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange}

                />
                <input type="password"
                       id="confirmPassword"
                       placeholder="Confirm Password"
                       value={state.confirmPassword}
                       onChange={handleChange}
                />
                <button type={"button"} onClick={handleRegisterSubmit}>Sign Up</button>
            </FormWrap>
        </Container>
    );
};

export default Register;
