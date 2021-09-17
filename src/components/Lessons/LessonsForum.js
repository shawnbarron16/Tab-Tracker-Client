import React, { useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { LessonContext } from "./LessonsProvider"

export const LessonForum = () => {
    const { lessons, getLessons, addLesson, updateLesson } = useContext(LessonContext);
    const hisory = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const { lessonId } = useParams();

    const [lesson, setLesson] = useState({
        id: 0,
        lesson_name: "",
        link: "",
        description: "",
    });

    const handleControlledInputChange = (evt) => {
        const newLesson = {...lesson};
        newLesson[evt.target.id] = evt.target.value;
        setLesson(newLesson)
    }

    const handleClickSaveLesson = (evt) => {
        evt.preventDefault();

        const newLessonName = lesson.lesson_name;
        const newLessonLink = lesson.link;
        const newLessonDescription = lesson.description;
        
        if (newLessonName === "" || newLessonLink === "" || newLessonDescription === "") {
            window.alert(
                "Please Make Sure You Have a Name, Link, and Description for your Lesson"
            );
        } else {
            if (lessonId) {
                const newLesson = {
                    id: parseInt(lessonId),
                    lesson_name: newLessonLink,
                    link: newLessonLink,
                    description: newLessonDescription,
                };
                updateLesson(newLesson).then(() => hisory.push("/lessons/" + parseInt(newLesson.id)));
            } else {
                const newLesson = {
                    id: parseInt(lessonId),
                    lesson_name: newLessonLink,
                    link: newLessonLink,
                    description: newLessonDescription,
                };
                addLesson(newLesson).then(() => hisory.push("/lessons/" + newLesson.id));
            }
        }
    };
}