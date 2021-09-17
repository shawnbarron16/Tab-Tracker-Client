import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ExerciseContext } from "./ExercisesProvider";

export const ExerciseForum = () => {
    const { exercises, getExercises, addExercise, updateExercise } = useContext(ExerciseContext);
    const history = useHistory()
    const [isLoading, setIsLoading] = useState([]);
    const { exercisesId, routineId } = useParams();

    const [exercise, setExercise] = useState({
        id: 0, 
        description: "",
    });
    
    const handleControlledInputChange = (evt) => {
        const newExercise = {...exercise};
        newExercise[evt.target.id] = evt.target.value;
        setExercise(newExercise)
    }
    const handleClickSaveExercise = (evt) => {
        evt.preventDefault();

        const newDescription  = exercise.description;

        if (newDescription === "") {
            window.alert("Please enter a description for the exercise");
        } else {
            if (exercisesId) {
                const newExercise = {
                    id: exercisesId,
                    description: newDescription
                };
                updateExercise(newExercise).then(() => history.push("/routines/" + parseInt(routineId)));
            } else {
                const newExercise = {
                    description: newDescription
                };
                addExercise(newExercise).then(() => history.push("/routines/" + parseInt(routineId)));
            }
        }
    };
}