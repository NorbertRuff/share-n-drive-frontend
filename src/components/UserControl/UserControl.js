import React, {useState} from 'react';
import {
    Container,
    FormWrap,
    Ghost,
    LoginWrapper,
    Overlay,
    OverlayContainer,
    Panel,
    SocialContainer,
    UserControlContainer
} from "./UserControlStyledElements";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";


const UserControl = () => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
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
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               value={fields.email}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="password"
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
                        <input type="email"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               value={fields.email}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="password"
                               placeholder="Password"
                               value={fields.password}
                               onChange={handleChange}
                        />
                        <input type="password"
                               id="password"
                               placeholder="Confirm Password"
                               value={fields.password}
                               onChange={handleChange}
                        />
                        <button type={"submit"}>Sign Up</button>
                    </FormWrap>
                </Container>
            </LoginWrapper>
            <OverlayContainer>
                <Overlay>
                    <Panel>
                        <h1>Welcome Back!</h1>
                        <p></p>
                        <Ghost id="signIn">Sign In</Ghost>
                    </Panel>
                    <Panel>
                        <h1>Hello</h1>
                        <p></p>
                        <Ghost id="signUp">Sign Up</Ghost>
                    </Panel>
                </Overlay>
            </OverlayContainer>
        </UserControlContainer>)
};

export default UserControl;
