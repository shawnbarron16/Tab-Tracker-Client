import React, { useContext, useState, useEffext, useEffect} from "react";
import { RoutineContext } from "./RoutinesProvider";
import { Link } from "react-router-dom";

export const RoutineSideBar = () => {
    const { routines, getRoutines } = useContext(RoutineContext)

    useEffect(() => {
        console.log("Getting Routines for side bar...");
        getRoutines()
    }, [])

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__routines">
                    {routines.map((routine) => {
                        return (
                            <ul className="sidebar__routine-link">
                                <Link to={"/routines/" + routine.id}>
                                    {routine.routine_name}
                                </Link>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </>
    )
}