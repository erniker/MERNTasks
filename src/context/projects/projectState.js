import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORM, GET_PROJECTS } from "../../types";

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

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        getProjects,
        form: state.form,
        showForm,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
