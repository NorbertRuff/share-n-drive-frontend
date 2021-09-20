import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {GlobalStyles} from "../contexts/GlobalStyles";
import Home from "./homepage/Home";
import {MainContainer} from "./styled_elements/MainContainer";
import NavBar from "./NavBar";

const Page = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <BrowserRouter>
                <MainContainer data-testid="main-container">
                    <NavBar/>
                    <Switch>
                        <Route
                            path="/"
                            render={(props) => <Home {...props}/>}
                            exact
                        />
                    </Switch>
                </MainContainer>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Page;
