import React, {useEffect, useMemo, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./homepage/Home";
import {MainContainer} from "./PageSyledElements/MainContainer";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Cars from "./Cars/Cars";
import UserPage from "./UserPage/UserPage";
import AddCar from './addCar/AddCar';
import UserControl from "./UserControl/UserControl";
import {UserContext} from "../contexts/UserContext";
import {dataHandler} from "../services/Data_handler";

const Page = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const value = useMemo(() => ({user, setUser}), [user]);
    const baseUrl = "http://localhost:8080/share-n-drive/customer-details";

    useEffect(() => {
        if (localStorage.getItem('username')) {
            dataHandler._api_get(baseUrl, setUser, setError, undefined);
        }
    }, [])
    return (
        <React.Fragment>
            <BrowserRouter>
                <UserContext.Provider value={value}>
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
                                render={(props) => <UserControl {...props}/>}
                                exact
                            />
                        </Switch>
                        <Footer/>
                    </MainContainer>
                </UserContext.Provider>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Page;
