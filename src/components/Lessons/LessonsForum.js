import React, { useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { LessonContext } from "./LessonsProvider"

export const LessonForum = () => {
    const { lessons, getLessons, addLesson, updateLesson } = useContext(LessonContext);
    const hisory = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const { lessonId } = useParams();

    const handleTitle = () => {
        if(lessonId) {
          return(
            <h2>Edit This Lesson</h2>
          )
        } else {
          return (
            <h2>Create a Lesson</h2>
          )
        }
      }

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

    return (
        <form className="lesson-forum">
            <section className="lesson-forum__title">
                {handleTitle()}
            </section>
            <section className="lesson-forum__inputs">
                <fieldset className="inputs__name">
                    <label className="name__field">
                        Give the lesson a name
                    </label>
                    <input className="name__field" type="text" id="lesson_name" required placeholder="Lesson name" 
                    value={lesson.lesson_name} onChange={handleControlledInputChange} />
                </fieldset>
                <fieldset className="inputs__link">
                    <label className="link__field">
                        Lesson URL
                    </label>
                    <input className="link__field" type="text" id="link" required placeholder="https://lessonlink.com"
                    value={lesson.link} onChange={handleControlledInputChange} />
                </fieldset>
                <fieldset className="inputs__description">
                    <label className="description__field">
                        Add a description for the lesson
                    </label>
                    <input className="desription__field" type="text" id="description" required placeholder="This is the lesson description"
                    value={lesson.description} onChange={handleControlledInputChange} />
                </fieldset>
            </section>
        </form>
    )
}