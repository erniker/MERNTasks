import React, { useReducer } from "react";
import * as uuid from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Tienda Virtual" },
    { id: 4, name: "MERN" },
  ];

  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    actualProject: null,
  };

  //Dispatch for executr acctions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // CRUD fuctions

  const showForm = () => {
    dispatch({ type: PROJECT_FORM });
  };

  // Get Projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Add new Project
  const addProject = (project) => {
    project.id = uuid.v4();

    // Insert project in staate
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validate form by errors
  const showError = () => {
    dispatch({ type: VALDATE_FORM });
  };

  // When user select a project from Project List
  const getActualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  // Delete project
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        actualProject: state.actualProject,
        showForm,
        getProjects,
        addProject,
        showError,
        getActualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
