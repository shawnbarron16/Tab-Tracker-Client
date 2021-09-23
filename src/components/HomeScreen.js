import React from "react";
import { useHistory } from "react-router-dom";
import "../index.css";

export const HomeScreen = () => {
    const history = useHistory();

    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "20px"}}>WELCOME TO TAB TRACKER</h1>
        <div className="columns">
            <div className="column is-2" style={{margin: "50px", marginLeft: "16em", marginTop: "210px"}} onClick={() => history.push("/lessons")}>
                View Your Lessons
            </div>
            <div className="columns is-4" style={{margin: "50px", marginTop: "220px", marginBottom: "360px"}} onClick={() => history.push("/routines")}>
                View Your Routines
            </div>
        </div>
        </>
    )
}