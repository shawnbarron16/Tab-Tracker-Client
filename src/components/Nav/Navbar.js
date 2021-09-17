import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <ul className="navBar">
                <ul className="navBar__item">
                    <Link className="navBar__link" to="/">Home</Link>
                </ul>
                <ul className="navBar__item">
                    <Link className="navBar__link" to="/lessons">Lessons</Link>
                </ul>
                <ul className="navBar__item">
                    <Link className="navBar__link" to="/routines">Routines</Link>
                </ul>
            </ul>
        </>
    )
}