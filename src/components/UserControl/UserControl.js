import React, {useState} from 'react';
import {
    Container,
    FormWrap,
    Ghost, LoginOverlayPanel,
    LoginWrapper,
    Overlay,
    OverlayContainer,
    Panel, RegisterOverlayPanel,
    SocialContainer,
    UserControlContainer
} from "./UserControlStyledElements";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";


const UserControl = () => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const [leftPanelActive, setLeftPanelActive] = useState(false)
    const [rightPanelActive, setRightPanelActive] = useState(true)
    const [fields, setFields] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });

    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    function handleSubmit() {
        validateForm();
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setFields(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // if (loading) {
    //     return <p>Data is loading...</p>;
    // }
    //
    // if (error) {
    //     return <ErrorDiv>An error occurred while fetching information. Please try again later!</ErrorDiv>;
    // }

    function handleClick() {
        leftPanelActive ? setLeftPanelActive(false) : setLeftPanelActive(true)
        rightPanelActive ? setRightPanelActive(false) : setRightPanelActive(true)
    }

    return (
        <UserControlContainer>
            <LoginWrapper>
                <Container>
                    <FormWrap onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <SocialContainer>
                            <NavLink to="/user" title="User"><FaFacebook/></NavLink>
                            <NavLink to="/user" title="User"><FaGoogle/></NavLink>
                            <NavLink to="/user" title="User"><FaLinkedin/></NavLink>
                        </SocialContainer>
                        <span>or use your account</span>
                        <input type="email"
                               id="login_email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               value={fields.email}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="login_password"
                               placeholder="Password"
                               value={fields.password}
                               onChange={handleChange}
                        />
                        <NavLink to="/user" title="User">Forgot your password?</NavLink>
                        <button type={"submit"}>Sign In</button>
                    </FormWrap>
                </Container>
                <Container>
                    <FormWrap onSubmit={handleSubmit}>
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
                               value={fields.email}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="register_password"
                               placeholder="Password"
                               value={fields.password}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="confirm_password"
                               placeholder="Confirm Password"
                               value={fields.password}
                               onChange={handleChange}
                        />
                        <button type={"submit"}>Sign Up</button>
                    </FormWrap>
                </Container>

            <OverlayContainer>
                    <LoginOverlayPanel opacity={rightPanelActive ? "flex" : "none"} zindex={rightPanelActive ? "10" : "1"}>
                        <h1>Hello! New here?</h1>
                        <p>Register</p>
                        <Ghost id="signIn" onClick={handleClick}>Sign Up</Ghost>
                    </LoginOverlayPanel>
                    <RegisterOverlayPanel opacity={leftPanelActive ? "flex" : "none"} zindex={leftPanelActive ? "1" : "10"}>
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
