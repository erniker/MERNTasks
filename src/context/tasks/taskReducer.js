/* eslint-disable import/no-anonymous-default-export */
import { TASKS_PROJECT, ADD_TASK } from "../../types";

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
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
