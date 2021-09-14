import React, { useContext, useEffect, useState } from "react";
import { LessonContext } from "./LessonsProvider";
import "./Lessons.css";
import { useHistory, useParams } from "react-router-dom";

//A single component that creates the JSX for all the users Lessons

export const Lessons = () => {
  const { lessonId } = useParams();
  const { getLessonById } = useContext(LessonContext);
  const history = useHistory();
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    console.log("Getting Users Lessons...");
    getLessonById(lessonId).then((data) => setLesson(data));
  }, []);

  return (
    <section className="lesson-viewer">
      <article className="single-lesson">
        <div className="single-lesson_info">
          <a href={lesson.link} target="_blank" rel="noreferrer">
            {lesson.lesson_name}
          </a>
        </div>
        <div>{lesson.description}</div>
        <div>
        </div>
      </article>
    </section>
  );
};
