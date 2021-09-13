import React, { useState, createContext } from "react";

export const ExerciseContext = createContext()

export const ExerciseProvider = (props) => {
    const [exercises, setExercises] = useState([])

    const getExercises = routineId => {
        return fetch(`http://localhost:8000/exercises?routine=${routineId}`)
        .then(res => res.json())
        .then(setExercises)
    }

    const addExercise = (exerciseObj, routineId) => {
        return fetch(`http://localhost:8000/exercises?routine=${routineId}`,{
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(exerciseObj)
        })
        .then(getExercises(routineId))
    }

    const deleteExercise = (exerciseId, routineId) => {
        return fetch (`http://localhost:8000/exercises/${exerciseId}`, {
            method: "DELETE",
        })
        .then(getExercises(routineId))
    }

    const updateExercise = (exerciseObj, routineId) => {
        return fetch(`http://localhost:8000/exercises/${exerciseObj.id}`, {
            method: "PUT",
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(exerciseObj)
        })
        .then(getExercises(routineId))
    }

    return (
        <ExerciseContext.Provider value={{
            exercises, getExercises, addExercise, deleteExercise, updateExercise
        }}>
            {props.children}
        </ExerciseContext.Provider>
    )
}