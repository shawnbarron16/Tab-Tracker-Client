import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoutineContext } from "./RoutinesProvider"

export const RoutineForum = () => {
    const { routines, getRoutines, addRoutine, updateRoutine } = useContext(RoutineContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState([]);
    const { routineId } = useParams();

    const [routine, setRoutine] = useState({
        id: 0,
        routine_name: "",
        description: "",
    });

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
                updateRoutine(newRoutine).then(() => history.push("/routines/" + parseInt(newRoutine.id)));
            } else {
                const newRoutine = {
                    routine_name: newRoutine_Name,
                    description: newRoutine_description,
                };
                addRoutine(newRoutine).then(() => history.push("/routines/" + parseInt(newRoutine.id)));
            }
        }
    };
}