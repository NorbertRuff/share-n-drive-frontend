import React, {useState} from 'react';
import {
    Ghost,
    LoginOverlayPanel,
    LoginWrapper,
    OverlayContainer,
    RegisterOverlayPanel,
    UserControlContainer
} from "./UserControlStyledElements";
import Login from "./Login";
import Register from "./Register";


const UserControl = () => {

    const [leftPanelActive, setLeftPanelActive] = useState(false)
    const [rightPanelActive, setRightPanelActive] = useState(true)


    function handleClick() {
        leftPanelActive ? setLeftPanelActive(false) : setLeftPanelActive(true)
        rightPanelActive ? setRightPanelActive(false) : setRightPanelActive(true)
    }

    return (
        <UserControlContainer>
            <LoginWrapper>
                <Login/>
                <Register/>
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
