import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  //Dispatch for executr acctions
  const [state, dispach] = useReducer(projectReducer, initialState);

  // CRUD fuctions

  return (
    <projectContext.Provider
      value={{
        form: state.form,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
