import React, { useReducer } from "react";
import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import axiosClient from "../../config/axios";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALDATE_TASK,
  DELETE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types";

const TaskState = (props) => {
  // define initial state
  const initialState = {
    tasksProject: [],
    taskError: false,
    selectedTask: null,
  };

  // Create dispatch and State
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Functions
  // Get task of a specific projct
  const getTasks = async (projectId) => {
    try {
      const result = await axiosClient.get("/api/tasks", {
        params: { projectId },
      });
      // console.log(result.data.tasks);
      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add Task to selected project
  const addTask = async (task) => {
    try {
      const result = await axiosClient.post("/api/tasks", task);
      //console.log(result.data);
      dispatch({
        type: ADD_TASK,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Validate an show error
  const validateTask = () => {
    dispatch({
      type: VALDATE_TASK,
    });
  };

  // Delete task by Id
  const deleteTask = async (taskId, projectId) => {
    await axiosClient.delete(`/api/tasks/${taskId}`, {
      params: { projectId },
    });
    try {
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update task
  const updateTask = async (task) => {
    try {
      const result = await axiosClient.put(`api/tasks/${task._id}`, task);
      //console.log(result.data.task);
      dispatch({
        type: UPDATE_TASK,
        payload: result.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Extract task for edit
  const getActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
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
        tasksProject: state.tasksProject,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
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
