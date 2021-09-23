import React, { useContext, useEffect, useState } from "react";
import { LessonContext } from "./LessonsProvider";
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

  const handleIfYoutube = () => {
    if(lesson.link) {
    if(lesson.link.includes("youtu")) {
      const linkId = lesson.link.split(".be")[1]
      const newLessonLink = `https://www.youtube.com/embed${linkId}`
      return (
      <iframe width="560" height="315" src={newLessonLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )
    } 
  }
  }

  return (
    <>
    <div className="columns">
      <div className="column is-one-fifth">
      <article>{LessonSideBar()}</article>
      </div>
      <div className="column">
      <section className="lesson-viewer" style={{ marginLeft: "400px" }}>
        <article className="single-lesson">
          <div className="single-lesson__info" style={{marginBottom: "50px"}}>{lesson.lesson_name}</div>
          <div className="single-lesson__info">
          <div>
            {handleIfYoutube()}
          </div>
            <a href={lesson.link} target="_blank" rel="noreferrer" style={{marginBottom: "50px"}}>
              Click Here To View Lesson
            </a>
          </div>
          <div className="single-lesson__info" style={{marginTop: "50px", marginBottom: "25px"}}>{lesson.description}</div>
          <div className="single-lesson__info">
            <button className="button" onClick={() => history.push(`EditLesson/${lessonId}`)}>
              Edit/Delete Lesson
            </button>
          </div>
        </article>
      </section>
      </div>
      </div>
    </>
  );
};
