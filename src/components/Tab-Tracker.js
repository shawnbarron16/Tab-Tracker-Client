import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./Application-Views";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";

export const TabTracker = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("tt_token")) {
                return <>
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)