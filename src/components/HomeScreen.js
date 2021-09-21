import React from "react";
import { useHistory } from "react-router-dom";

export const HomeScreen = () => {
    const history = useHistory();

    return (
        <>
            <div onClick={() => history.push("/lessons")}>
                View Your Lessons
            </div>
            <div onClick={() => history.push("/routines")}>
                View Your Routines
            </div>
        </>
    )
}