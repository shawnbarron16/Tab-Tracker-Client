import React, {useState, createContext } from "react"

export const LessonContext = createContext()

export const LessonProvider = (props) => {
    const [lessons, setLessons] = useState([])
    const [lesson, setLesson] = useState([])

    const getLessons = () => {
        return fetch("https://smb-tab-tracker.herokuapp.com/lessons", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(res => res.json())
    } 

    const addLesson =  lessonObj => {
        return fetch("https://smb-tab-tracker.herokuapp.com/lessons", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Content-type":"application/json"
            },
            body: JSON.stringify(lessonObj)
        })
        .then(getLessons)
    }

    const deleteLesson = lessonId => {
        return fetch (`https://smb-tab-tracker.herokuapp.com/lessons/${lessonId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
        .then(getLessons)

    }

    const getLessonById = lessonId => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/lessons/${lessonId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`
            }
        })
            .then(res => res.json())
    }

    const updateLesson = lesson => {
        return fetch(`https://smb-tab-tracker.herokuapp.com/lessons/${lesson.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tt_token")}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(lesson)
        })
        .then(getLessons)
    }
    return (
        <LessonContext.Provider value = {{
            lessons, lesson, getLessons, getLessonById, addLesson, deleteLesson, updateLesson
        }}>
            {props.children}
        </LessonContext.Provider>
    )
}