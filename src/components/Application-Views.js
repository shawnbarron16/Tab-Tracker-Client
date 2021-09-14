import React, { useContext, useEffect} from "react";
import { Route } from "react-router-dom";
import { LessonProvider } from "./Lessons/LessonsProvider";
import { Lessons } from "./Lessons/Lessons";

export const ApplicationViews = () => {
    return (
        <>
            <LessonProvider>
                <Route exact path="/lessons/:lessonId(\d+)">
                    <Lessons />
                </Route>
            </LessonProvider>
        </>
    )
}