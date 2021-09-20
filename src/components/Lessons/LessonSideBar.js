import React, { useContext, useState, useEffect } from "react";
import { LessonContext } from "./LessonsProvider";
import { Link } from "react-router-dom";
import "./LessonSideBar.css"


export const LessonSideBar = () => {
    const { getLessons } = useContext(LessonContext)
    const [lessons, setLessons] = useState([])

    useEffect(() => {
        console.log("Getting lessons...",);
        getLessons().then((data) => setLessons(data))
    }, [])

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__lessons">
                    <ul>
                    {lessons && lessons.map((lesson) => {
                        return (
                            <div className="sidebar__lesson-link">
                                <Link to={"/lessons/" + lesson.id} key={lesson.id}>
                                    {lesson.lesson_name}
                                </Link>
                            </div>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </>
    )
}