import React, { useContext, useEffect, useState } from "react";
import { LessonContext } from "./LessonsProvider";
import "./Lessons.css";
import { useHistory, useParams } from "react-router-dom";
import { LessonSideBar } from "./LessonSideBar";

//A single component that creates the JSX for all the users Lessons

export const Lessons = () => {
  const { lessonId } = useParams();
  const { getLessonById } = useContext(LessonContext);
  const history = useHistory();
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    console.log("Getting Users Lessons...");
    getLessonById(lessonId).then((data) => setLesson(data));
  }, [lessonId]);

  return (
    <>
      <section className="lesson-viewer">
        <article className="single-lesson">
          <div className="single-lesson__info">{lesson.lesson_name}</div>
          <div className="single-lesson__info">
            <a href={lesson.link} target="_blank" rel="noreferrer">
              View Lesson
            </a>
          </div>
          <div className="single-lesson__info">{lesson.description}</div>
          <div className="single-lesson__info">
            <button onClick={() => history.push(`EditLesson/${lessonId}`)}>
              Edit/Delete Lesson
            </button>
          </div>
        </article>
      </section>
      <article><LessonSideBar /></article>
    </>
  );
};
