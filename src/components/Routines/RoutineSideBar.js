import React, { useContext, useState, useEffext, useEffect} from "react";
import { RoutineContext } from "./RoutinesProvider";
import { Link, useHistory } from "react-router-dom";

export const RoutineSideBar = () => {
    const { routines, getRoutines } = useContext(RoutineContext)

    const history = useHistory()

    useEffect(() => {
        console.log("Getting Routines for side bar...");
        getRoutines()
    }, [])

    return (
        <>
            <div className="sidebar">
            <button onClick={() => history.push("/AddARoutine")}>
                    Add A Routine
                </button>
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