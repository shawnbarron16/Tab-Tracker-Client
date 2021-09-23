import React, { useState, createContext } from "react";

export const ExerciseContext = createContext()

export const ExerciseProvider = (props) => {
    const [exercises, setExercises] = useState([])

    const getExercises = routineId => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/exercises?routine=${routineId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(res => res.json())
    }

    const addExercise = (exerciseObj, routineId) => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/exercises?routine=${routineId}`,{
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Content-type":"application/json"
            },
            body: JSON.stringify(exerciseObj)
        })
        .then(getExercises(routineId))
    }

    const deleteExercise = (exerciseId, routineId) => {
        return fetch (`https://smb-tab-tracker.herokuapp.com/exercises/${exerciseId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(getExercises(routineId))
    }

    const updateExercise = (exerciseObj, routineId) => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/exercises/${exerciseObj.id}?routine=${routineId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Content-type":"application/json"
            },
            body:JSON.stringify(exerciseObj)
        })
        .then(getExercises(routineId))
    }

    const getExerciseById = (exerciseId) => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/exercises/${exerciseId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(res => res.json())
    }

    return (
        <ExerciseContext.Provider value={{
            exercises, getExercises, addExercise, deleteExercise, updateExercise, getExerciseById
        }}>
            {props.children}
        </ExerciseContext.Provider>
    )
}