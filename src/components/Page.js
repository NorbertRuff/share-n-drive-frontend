import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./homepage/Home";
import {MainContainer} from "./PageSyledElements/MainContainer";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Cars from "./Cars/Cars";
import AddCar from './addCar/AddCar';

const Page = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <MainContainer data-testid="main-container">
                    <NavBar/>
                    <Switch>
                        <Route
                            path="/"
                            render={(props) => <Home {...props}/>}
                            exact
                        />
                        <Route
                            path="/cars"
                            render={(props) => <Cars {...props}/>}
                            exact
                        />
                        <Route
                            path="/add-car"
                            render={(props) => <AddCar {...props}/>}
                            exact
                        />
                    </Switch>
                    <Footer/>
                </MainContainer>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Page;
