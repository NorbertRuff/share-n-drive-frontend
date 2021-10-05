import React, {useState} from 'react';
import {
    Container,
    FormWrap,
    Ghost,
    LoginOverlayPanel,
    LoginWrapper,
    OverlayContainer,
    RegisterOverlayPanel,
    SocialContainer,
    UserControlContainer
} from "./UserControlStyledElements";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {dataHandler} from "../../services/Data_handler";
import {ErrorDiv} from "../PageSyledElements/MainContainer";


const UserControl = () => {
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState({})
    const [userName, setUserName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    const [leftPanelActive, setLeftPanelActive] = useState(false)
    const [rightPanelActive, setRightPanelActive] = useState(true)

    function validateRegisterForm() {
        return (
            userName.length > 0 &&
            password.length > 0 &&
            confirmPassword === password
        );
    }

    function validateLoginForm() {
        return (
            userName.length > 0 &&
            password.length > 0
        );
    }

    function handleRegisterSubmit() {
        if (validateRegisterForm()) {
            dataHandler._data = {
                username: userName,
                password: password
            }
            dataHandler._api_post("http://localhost:8080/auth/signin", dataHandler._data, setUserData, setError)
            localStorage.setItem('token', userData.token);
        }
    }

    let handleData = async result => {
        console.log(result);
        localStorage.setItem('token', result["token"]);
        console.log(localStorage);

    }

    function handleLoginSubmit() {
        if (validateLoginForm()) {
            dataHandler._data = {
                username: userName,
                password: password
            }
            dataHandler._api_post("http://localhost:8080/auth/signin", dataHandler._data, handleData, setError);
        }
    }

    if (error) {
        return <ErrorDiv>An error occurred while fetching information. Please try again later!</ErrorDiv>;
    }

    function handleClick() {
        leftPanelActive ? setLeftPanelActive(false) : setLeftPanelActive(true)
        rightPanelActive ? setRightPanelActive(false) : setRightPanelActive(true)
    }

    return (
        <UserControlContainer>
            <LoginWrapper>
                <Container>
                    <FormWrap>
                        <h1>Sign in</h1>
                        <SocialContainer>
                            <NavLink to="/user" title="User"><FaFacebook/></NavLink>
                            <NavLink to="/user" title="User"><FaGoogle/></NavLink>
                            <NavLink to="/user" title="User"><FaLinkedin/></NavLink>
                        </SocialContainer>
                        <span>or use your account</span>
                        <input type="text"
                               id="login_email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               onChange={e => setUserName(e.target.value)}
                        />
                        <input type="password"
                               id="login_password"
                               placeholder="Password"
                               onChange={e => setPassword(e.target.value)}
                        />
                        <NavLink to="/user" title="User">Forgot your password?</NavLink>
                        <button type={"button"} onClick={handleLoginSubmit}>Sign In</button>
                    </FormWrap>
                </Container>
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

                <OverlayContainer>
                    <LoginOverlayPanel opacity={rightPanelActive ? "flex" : "none"}>
                        <h1>Hello! New here?</h1>
                        <p>Register</p>
                        <Ghost id="signIn" onClick={handleClick}>Sign Up</Ghost>
                    </LoginOverlayPanel>
                    <RegisterOverlayPanel opacity={leftPanelActive ? "flex" : "none"}>
                        <h1>Hello!</h1>
                        <h1>Welcome Back!</h1>
                        <p>Login</p>
                        <Ghost id="signUp" onClick={handleClick}>Sign In</Ghost>
                    </RegisterOverlayPanel>
                </OverlayContainer>
            </LoginWrapper>
        </UserControlContainer>)
};

export default UserControl;
