import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { LessonProvider } from "./Lessons/LessonsProvider";
import { RoutineProvider } from "./Routines/RoutinesProvider";
import { ExerciseProvider } from "./Exercises/ExercisesProvider";
import { Lessons } from "./Lessons/Lessons";
import { Routines } from "./Routines/Routines";
import { NavBar } from "./Nav/Navbar";
import { FooterBar } from "./Nav/FooterBar";
import { LessonForum } from "./Lessons/LessonsForum";
import { RoutineForum } from "./Routines/RoutinesForum";
import { ExerciseForum } from "./Exercises/ExercisesForum";
import { LessonSideBar } from "./Lessons/LessonSideBar";
import { RoutineSideBar } from "./Routines/RoutineSideBar";

export const ApplicationViews = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <section className="main--container">
        <RoutineProvider>
          <ExerciseProvider>
            <LessonProvider>
              <Route exact path="/lessons/:lessonId(\d+)">
                <Lessons />
              </Route>
              <Route exact path="/routines/:routineId(\d+)">
                <Routines />
              </Route>
              <Route exact path="/lessons/AddALesson">
                <LessonForum />
              </Route>
              <Route exact path="/lessons/EditLesson/:lessonId(\d+)">
                <LessonForum />
              </Route>
              <Route exact path="/AddARoutine">
                <RoutineForum />
              </Route>
              <Route exact path="/EditRoutine/:routineId(\d+)">
                <RoutineForum />
              </Route>
              <Route exact path="/AddAnExercise/:routineId(\d+)">
                <ExerciseForum />
              </Route>
              <Route exact path="/EditExercise/:exerciseId(\d+)/:routineId(\d+)">
                <ExerciseForum />
              </Route>
              <Route exact path="/lessons">
                <LessonSideBar />
              </Route>
              <Route exact path="/routines">
                <RoutineSideBar />
              </Route>
              <div className="landing-link" onClick={() => history.push("/routines")}>
                View Your Routines
              </div>
              <div className="landing-link" onClick={() => history.push("/lessons")}>
                View Your Lessons
              </div>
            </LessonProvider>
          </ExerciseProvider>
        </RoutineProvider>
      </section>
      <FooterBar />
    </>
  );
};
