import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";
import axiosClient from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    actualProject: null,
    message: null,
  };

  //Dispatch for executr acctions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // CRUD fuctions

  const showForm = () => {
    dispatch({ type: PROJECT_FORM });
  };

  // Get Projects
  const getProjects = async () => {
    try {
      const result = await axiosClient.get("/api/projects");
      //console.log(result.data);
      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects,
      });
    } catch (error) {
      // console.log(error);
      const alert = {
        msg: "There was an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Add new Project
  const addProject = async (project) => {
    try {
      const result = await axiosClient.post("/api/projects", project);
      //console.log(result.data);
      // Insert project in state
      dispatch({
        type: ADD_PROJECT,
        payload: result.data,
      });
    } catch (error) {
      // console.log(error);
      const alert = {
        msg: "There was an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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
  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      // console.log(error);
      const alert = {
        msg: "There was an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        actualProject: state.actualProject,
        message: state.message,
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
