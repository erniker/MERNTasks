import React, { useReducer } from "react";
import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT, ADD_TASK } from "../../types";

const TaskState = (props) => {
  // define initial state
  const initialState = {
    tasks: [
      { name: "Elegir Plataforma", state: true, projectId: 1 },
      { name: "Elegir Colores", state: false, projectId: 2 },
      { name: "Elegir Plataformas de pago", state: false, projectId: 3 },
      { name: "Elegir Hosting", state: true, projectId: 4 },
      { name: "Elegir Plataforma", state: true, projectId: 1 },
      { name: "Elegir Colores", state: false, projectId: 2 },
      { name: "Elegir Plataformas de pago", state: false, projectId: 3 },
      { name: "Elegir Plataforma", state: true, projectId: 4 },
      { name: "Elegir Colores", state: false, projectId: 2 },
      { name: "Elegir Plataformas de pago", state: false, projectId: 2 },
      { name: "Elegir Plataforma", state: true, projectId: 3 },
      { name: "Elegir Colores", state: false, projectId: 4 },
      { name: "Elegir Plataformas de pago", state: false, projectId: 3 },
    ],
    tasksProject: null,
  };

  // Create dispatch and State
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Functions
  // Get task of a specific projct
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  // Add Task to selected project
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        getTasks,
        addTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
