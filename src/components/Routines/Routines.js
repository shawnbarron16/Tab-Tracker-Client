import React, { useContext, useEffect, useState} from "react";
import { RoutineContext } from "./RoutinesProvider";
import { ExerciseContext } from "../Exercises/ExercisesProvider" 
import { useHistory, useParams } from "react-router-dom";

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
                                </div>
                            )
                        })}
                    </div>
            </section>
        </>
    )
}