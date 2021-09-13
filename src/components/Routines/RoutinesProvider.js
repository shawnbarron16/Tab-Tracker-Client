import React, { useState, createContext} from "react";

export const RoutineContext = createContext()

export const RoutineProvider = (props) => {
    const [routines, setRoutine] = useState([])

    const getRoutines = () => {
        return fetch("http://localhost:8000/routines", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(res => res.json())
        .then(setRoutine)
    }

    const addRoutine = routineObj => {
        return fetch("http://localhost:8000/routines", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Content-type":"application/json"
            },
            body: JSON.stringify(routineObj)
        })
        .then(getRoutines)
    }

    const deleteRoutine = routineId => {
        return fetch(`http://localhost:8000/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(getRoutines)
    }

    const getRoutineById = routineId => {
        return fetch(`http://localhost:8000/routines/${routineId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(res => res.json)
    }

    const updateRoutine = routineObj => {
        return fetch(`http://localhost:8000/routines/${routineObj.id}`,{
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Conent-type":"application/json"
            },
            body:JSON.stringify(routineObj)
        })
        .then(getRoutines)
    }
    return (
        <RoutineContext.Provider value={{
            routines, getRoutines, getRoutineById, addRoutine, updateRoutine, deleteRoutine
        }}>
            {props.children}
        </RoutineContext.Provider>
    )
}