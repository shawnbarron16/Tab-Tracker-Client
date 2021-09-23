import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoutineContext } from "./RoutinesProvider"
import "../../index.css"

export const RoutineForum = () => {
    const { routines, getRoutineById, addRoutine, updateRoutine, deleteRoutine } = useContext(RoutineContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState([]);
    const { routineId } = useParams();

    const handleTitle = () => {
        if(routineId) {
          return(
            <h2>Edit This Routine</h2>
          )
        } else {
          return (
            <h2>Create a Routine</h2>
          )
        }
      }

    const handleIfDelete = () => {
        if(routineId) {
            return(
                <button className="button" onClick={handleCLickDeleteRoutine}>Delete Routine</button>
            )
        }
    }


    const [routine, setRoutine] = useState({
        id: 0,
        routine_name: "",
        description: "",
    });

    useEffect(() => {
        if (routineId)
          getRoutineById(routineId).then((data) => setRoutine(data))
    }, [])

    const handleControlledInputChange = (evt) => {
        const newRoutine = {...routine};
        newRoutine[evt.target.id] = evt.target.value;
        setRoutine(newRoutine)
    }

    const handleClickSaveRoutine = (evt) => {
        evt.preventDefault();

        const newRoutine_Name = routine.routine_name
        const newRoutine_description = routine.description

        if (newRoutine_Name === "" || newRoutine_description === "") {
            window.alert("Please Make Sure you Have a Routine Name and Description")
        } else {
            if (routineId) {
                const newRoutine = {
                    id: routineId,
                    routine_name: newRoutine_Name,
                    description: newRoutine_description,
                };
                updateRoutine(newRoutine).then(() => history.push("/routines/" + parseInt(routineId)));
            } else {
                const newRoutine = {
                    routine_name: newRoutine_Name,
                    description: newRoutine_description,
                };
                addRoutine(newRoutine).then(() => history.push("/routines/"));
            }
        }
    };

    const handleCLickDeleteRoutine = (evt) => {
        evt.preventDefault();
        deleteRoutine(routineId);
        history.push(`/routines`)
    }

    return (
        <>
        <form className="routine-forum">
            <section style={{textAlign: "center", marginTop: "20px", marginBottom: "50px"}} className="routine-forum__title">
                {handleTitle()}
            </section>
            <section className="routine-forum__inputs">
                <fieldset className="inputs__name">
                    <label style={{textAlign: "center"}} className="name__field">
                        Give the routine a name
                    </label>
                    <input className="name__field" type="text" id="routine_name" required placeholder="routine name" 
                    value={routine.routine_name} onChange={handleControlledInputChange} />
                </fieldset>
                <fieldset className="inputs__description">
                    <label className="description__field">
                        Add a description for the routine
                    </label>
                    <input className="desription__field" type="text" id="description" required placeholder="This is the routine description"
                    value={routine.description} onChange={handleControlledInputChange} />
                </fieldset>
                <button className="button" onClick={handleClickSaveRoutine}>Save Routine</button>
            </section>
        </form>
        <div>
            {handleIfDelete()}
        </div>
        </>
    )
}