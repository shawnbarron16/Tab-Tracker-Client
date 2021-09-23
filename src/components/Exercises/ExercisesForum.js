import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ExerciseContext } from "./ExercisesProvider";

export const ExerciseForum = () => {
    const { exercises, getExerciseById, addExercise, updateExercise, deleteExercise } = useContext(ExerciseContext);
    const history = useHistory()
    const [isLoading, setIsLoading] = useState([]);
    const { exerciseId, routineId } = useParams();

    const handleTitle = () => {
        if(exerciseId) {
          return(
            <h2>Edit This Exercise</h2>
          )
        } else {
          return (
            <h2>Create an Exercise</h2>
          )
        }
      }

      const handleIfDelete = () => {
          if(exerciseId) {
              return(
                <button className="button" onClick={handleClickDeleteExercise}>Delete Exercise</button>
              )
          }
      }

    const [exercise, setExercise] = useState({
        id: 0, 
        description: "",
    });

    useEffect(() => {
        if (exerciseId)
          getExerciseById(exerciseId).then((data) => setExercise(data))
    }, [])
    
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
            if (exerciseId) {
                const newExercise = {
                    id: exerciseId,
                    description: newDescription
                };
                updateExercise(newExercise, parseInt(routineId)).then(() => history.push("/routines/" + parseInt(routineId)));
            } else {
                const newExercise = {
                    description: newDescription
                };
                addExercise(newExercise, parseInt(routineId)).then(() => history.push("/routines/" + parseInt(routineId)));
            }
        }
    };

    const handleClickDeleteExercise = (evt) => {
        evt.preventDefault();
        deleteExercise(exerciseId);
        history.push(`/routines/${routineId}`)
    }

    return (
        <>
        <form className="routine-forum">
            <section className="routine-forum__title">
                {handleTitle()}
            </section>
            <section className="routine-forum__inputs">
                <fieldset className="inputs__description">
                    <label className="description__field">
                        Add a description for the routine
                    </label>
                    <input className="desription__field" type="text" id="description" required placeholder="This is the routine description"
                    value={exercise.description} onChange={handleControlledInputChange} style={{border: "1px solid", borderRadius: "7px", boxShadow: "0 0 5px ", width: "200px"}}/>
                </fieldset>
                <button className="button" onClick={handleClickSaveExercise}>Save Exercise</button>
            </section>
        </form>
        <section style={{textAlign: "center"}}>
            {handleIfDelete()}
        </section>
        </>
    )

}