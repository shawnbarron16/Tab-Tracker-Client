import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../index.css";

export const NavBar = () => {

    return (
        <>
            <ul className="navbar">
                <ul className="navbar-item" style={{left: "4em"}}>
                    <Link className="navBar__link" to="/">Home</Link>
                </ul>
                <ul className="navbar-item" style={{left: "16em"}}>
                    <Link className="navBar__link" to="/lessons">Lessons</Link>
                </ul>
                <ul className="navbar-item" style={{left: "18em"}}>
                    <Link className="navBar__link" to="/routines">Routines</Link>
                </ul>
                <ul className="navbar-item" style={{left: "31em"}}>
                    <Link className="navBar__link" to="/login" onClick={
                        () => {
                            localStorage.removeItem("tt_token")
                        }
                    }>Log Out</Link>
                </ul>
            </ul>
        </>
    )
}