import React, { useContext, useEffect } from "react";
import { LessonContext } from "./LessonsProvider";
import "./Lessons.css"
import { useHistory } from "react-router-dom";

//A single component that creates the JSX for all the users Lessons

export const Lessons = () => {
    const { lessons, getLessons } = useContext(LessonContext);
    const history = useHistory()

    useEffect(() => {
        console.log("Getting Users Lessons...");
        getLessons()
    }, []);

    return (
        <section className="lesson-viewer">
            Lessons
        </section>
    )
}