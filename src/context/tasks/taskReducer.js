/* eslint-disable import/no-anonymous-default-export */
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        taskError: false,
      };
    case VALDATE_TASK:
      return {
        ...state,
        taskError: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasksProject.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};
