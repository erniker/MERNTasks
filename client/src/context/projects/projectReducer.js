/* eslint-disable import/no-anonymous-default-export */
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false,
      };
    case VALDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case ACTUAL_PROJECT: {
      return {
        ...state,
        actualProject: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };
    }
    case DELETE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        actualProject: null,
      };
    }
    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
