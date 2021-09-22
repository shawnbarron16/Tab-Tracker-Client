import React, { useContext, useEffect, useState } from "react";
import { RoutineContext } from "./RoutinesProvider";
import { ExerciseContext } from "../Exercises/ExercisesProvider";
import { useHistory, useParams } from "react-router-dom";
import { RoutineSideBar } from "./RoutineSideBar";

export const Routines = () => {
  const { routineId } = useParams();
  const { getRoutineById } = useContext(RoutineContext);
  const { getExercises } = useContext(ExerciseContext);
  const history = useHistory();
  const [routine, setRoutine] = useState([]);
  const [exercises, setExercises] = useState(["Hi"]);

  useEffect(() => {
    console.log("Getting Routine...Getting Exercises");
    getRoutineById(routineId).then((data) => setRoutine(data));
    getExercises(routineId).then((data) => setExercises(data));
  }, [routineId]);

  return (
    <>
      <div className="columns">
        {" "}
        <div className="column is-one-fifth">
          <article>{RoutineSideBar()}</article>
        </div>
        <div className="column">
          <section className="routine" style={{ marginLeft: "400px" }}>
            <div className="routine__name" style={{ textAlign: "center" }}>
              {routine.routine__name}
            </div>
            <div
              className="routine__description"
              style={{ marginBottom: "50px" }}
            >
              {routine.description}
            </div>
            <div className="routine__exercises">
              Exercises:
              {exercises.map((exercise) => {
                return (
                  <div className="routine__exercises__exercise">
                    {exercise.description}
                    <button
                      className="button is-small"
                      onClick={() =>
                        history.push(
                          `/EditExercise/${exercise.id}/${routineId}`
                        )
                      }
                    >
                      Edit/Delete Exercise
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="button"
                style={{marginTop: "20px"}}
                onClick={() =>
                  history.push("/AddAnExercise/" + parseInt(routineId))
                }
              >
                Add an Exercise
              </button>
            </div>
            <button
              className="button"
              onClick={() => history.push(`/EditRoutine/${routine.id}`)}
              style={{marginTop: "100px"}}
            >
              Edit/Delete Routine
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
