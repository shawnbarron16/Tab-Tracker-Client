import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { LessonProvider } from "./Lessons/LessonsProvider";
import { RoutineProvider } from "./Routines/RoutinesProvider";
import { ExerciseProvider } from "./Exercises/ExercisesProvider";
import { Lessons } from "./Lessons/Lessons";
import { Routines } from "./Routines/Routines";

export const ApplicationViews = () => {
  return (
    <>
      <RoutineProvider>
        <ExerciseProvider>
          <LessonProvider>
            <Route exact path="/lessons/:lessonId(\d+)">
              <Lessons />
            </Route>
            <Route exact path="/routines/:routineId(\d+)">
              <Routines />
            </Route>
          </LessonProvider>
        </ExerciseProvider>
      </RoutineProvider>
    </>
  );
};
