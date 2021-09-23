import React, { useContext, useState, useEffect } from "react";
import { LessonContext } from "./LessonsProvider";
import { Link, useHistory } from "react-router-dom";


export const LessonSideBar = () => {
    const { getLessons } = useContext(LessonContext)
    const [lessons, setLessons] = useState([])
    const history = useHistory()

    useEffect(() => {
        console.log("Getting lessons...",);
        getLessons().then((data) => setLessons(data))
    }, [])

    return (
        <>
            <div className="sidebar" style={{marginLeft: "15px"}}>
            <h1 style={{fontSize: 50, marginBottom: "20px", textDecoration: "underline"}}>Your Lessons</h1>
                <button className="button" onClick={() => history.push("/lessons/AddALesson")}>
                    Add A Lesson
                </button>
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