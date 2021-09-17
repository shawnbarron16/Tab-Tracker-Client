import React, { useContext, useState, useEffect } from "react";
import { LessonContext } from "./LessonsProvider";
import { Link } from "react-router-dom";
import "./LessonSideBar.css"


export const LessonSideBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const { lessons, getLessons } = useContext(LessonContext)

    useEffect(() => {
        console.log("Getting lessons...");
        getLessons()
    }, [])

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__lessons">
                    {lessons.map((lesson) => {
                        return (
                            <ul className="sidebar__lesson-link">
                                <Link to={"/lessons/" + lesson.id}>
                                    {lesson.lesson_name}
                                </Link>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </>
    )
}