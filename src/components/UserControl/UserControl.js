import React, {useState} from 'react';
import {Ghost, LoginWrapper, OverlayPanel, UserControlContainer} from "./UserControlStyledElements";
import Login from "./Login";
import Register from "./Register";

const UserControl = (props) => {

    const [leftPanelActive, setLeftPanelActive] = useState(false)
    const [rightPanelActive, setRightPanelActive] = useState(true)


    function handleClick() {
        leftPanelActive ? setLeftPanelActive(false) : setLeftPanelActive(true)
        rightPanelActive ? setRightPanelActive(false) : setRightPanelActive(true)
    }

    return (
        <UserControlContainer>
            <LoginWrapper>
                <Login {...props} setUser={props.setter}/>
                <Register/>
                <OverlayPanel pos={leftPanelActive ? 0 : 100}
                              color={leftPanelActive ? "var(--clr-primary-300)" : "var(--clr-primary-400)"}
                              fontColor={leftPanelActive ? "var(--clr-primary-200)" : "var(--clr-primary-200)"}>
                    <h1>{leftPanelActive ? "Hello!" : "Hello!"}</h1>
                    <h2>{leftPanelActive ? "Welcome Back!" : "New here?"}</h2>
                    <p>{leftPanelActive ? "Login!" : "Register!"}</p>
                    <Ghost id="signIn" onClick={handleClick}>{leftPanelActive ? "Sign in" : "Sign up"}</Ghost>
                </OverlayPanel>
            </LoginWrapper>
        </UserControlContainer>)
};

export default UserControl;
