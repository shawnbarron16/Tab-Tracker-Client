import React, { useContext, useEffect, useState} from "react";
import { RoutineContext } from "./RoutinesProvider";
import { ExerciseContext } from "../Exercises/ExercisesProvider" 
import { useHistory, useParams } from "react-router-dom";
import { RoutineSideBar } from "./RoutineSideBar";

export const Routines = () => {
    const {routineId} = useParams();
    const {getRoutineById} = useContext(RoutineContext);
    const {getExercises} = useContext(ExerciseContext);
    const history = useHistory();
    const [routine, setRoutine] = useState([]);
    const [exercises, setExercises] = useState(["Hi"])

    useEffect(() => {
        console.log("Getting Routine...Getting Exercises");
        getRoutineById(routineId).then((data) => setRoutine(data));
        getExercises(routineId).then((data) => setExercises(data));
    }, [routineId]);

    return (
        <>
            <section className="routine">
                    <div className="routine__name">
                        {routine.routine__name}
                    </div>
                    <div className="routine__description">
                        {routine.description}
                    </div>
                    <div className="routine__exercises">
                        Exercises:
                        {exercises.map((exercise) => { 
                            return (
                                <div className="routine__exercises__exercise">
                                    {exercise.description}
                                    <button onClick={() => history.push(`/EditExercise/${exercise.id}/${routineId}`)}>Edit Exercise</button>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => history.push(`/EditRoutine/${routine.id}`)}>Edit/Delete Routine</button>
            </section>
            <div>
                <button onClick={() => history.push("/AddAnExercise/" + parseInt(routineId))}>Add an Exercise</button>
            </div>
            <article>{RoutineSideBar()}</article>
        </>
    )
}