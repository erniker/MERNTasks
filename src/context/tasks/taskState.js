import React, { useReducer } from "react";
import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import * as uuid from "uuid";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types";

const TaskState = (props) => {
  // define initial state
  const initialState = {
    tasks: [
      { id: 1, name: "Elegir Plataforma", state: true, projectId: 1 },
      { id: 2, name: "Elegir Colores", state: false, projectId: 2 },
      {
        id: 3,
        name: "Elegir Plataformas de pago",
        state: false,
        projectId: 3,
      },
      { id: 4, name: "Elegir Hosting", state: true, projectId: 4 },
      { id: 5, name: "Elegir Plataforma", state: true, projectId: 1 },
      { id: 6, name: "Elegir Colores", state: false, projectId: 2 },
      {
        id: 7,
        name: "Elegir Plataformas de pago",
        state: false,
        projectId: 3,
      },
      { id: 8, name: "Elegir Plataforma", state: true, projectId: 4 },
      { id: 9, name: "Elegir Colores", state: false, projectId: 2 },
      {
        id: 10,
        name: "Elegir Plataformas de pago",
        state: false,
        projectId: 2,
      },
      { id: 11, name: "Elegir Plataforma", state: true, projectId: 3 },
      { id: 12, name: "Elegir Colores", state: false, projectId: 4 },
      {
        id: 13,
        name: "Elegir Plataformas de pago",
        state: false,
        projectId: 3,
      },
    ],
    tasksProject: null,
    taskError: false,
    selectedTask: null,
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
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // Validate an show error
  const validateTask = () => {
    dispatch({
      type: VALDATE_TASK,
    });
  };

  // Delete task by Id
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  // Change state task (complete/incomplete)
  const changeTaskState = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task,
    });
  };
  // Extract task for edit
  const getActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  // Update task
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  // Clean selected task from state
  const cleanTask = () => {
    dispatch({ type: CLEAN_TASK });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskState,
        getActualTask,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
