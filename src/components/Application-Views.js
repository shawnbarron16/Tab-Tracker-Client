import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { LessonProvider } from "./Lessons/LessonsProvider";
import { RoutineProvider } from "./Routines/RoutinesProvider";
import { ExerciseProvider } from "./Exercises/ExercisesProvider";
import { Lessons } from "./Lessons/Lessons";
import { Routines } from "./Routines/Routines";
import { NavBar } from "./Nav/Navbar";
import { FooterBar } from "./Nav/FooterBar";
import { LessonForum } from "./Lessons/LessonsForum";

export const ApplicationViews = () => {
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
            </LessonProvider>
          </ExerciseProvider>
        </RoutineProvider>
      </section>
      <FooterBar />
    </>
  );
};
