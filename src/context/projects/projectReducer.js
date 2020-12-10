/* eslint-disable import/no-anonymous-default-export */
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALDATE_FORM,
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
    default:
      return state;
  }
};
