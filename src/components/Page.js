import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./homepage/Home";
import {MainContainer} from "./PageSyledElements/MainContainer";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Cars from "./Cars/Cars";
import UserPage from "./UserPage/UserPage";
import AddCar from './addCar/AddCar';
import UserControl from "./UserControl/UserControl";

const Page = () => {

    const [userName, setUserName] = useState("")


    return (
        <React.Fragment>
            <BrowserRouter>
                <MainContainer data-testid="main-container">
                    <NavBar user={userName}/>
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
                            path="/user"
                            render={(props) => <UserPage {...props}/>}
                            exact
                        />
                        <Route
                            path="/add-car"
                            render={(props) => <AddCar {...props}/>}
                            exact
                        />
                        <Route
                            path="/register"
                            render={(props) => <UserControl {...props} setter={setUserName} user={userName}/>}
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
