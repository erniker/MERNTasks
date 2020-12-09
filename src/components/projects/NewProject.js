import React, { useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Get form state
  const projectsContext = useContext(projectContext);
  const { form } = projectContext;

  // Project State
  const [project, saveProject] = useState({
    name: "",
  });

  // Extract porject name
  const { name } = project;

  // Read input content
  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Sunmit new Project
  const onSubmitProject = (e) => {
    e.preventDefault();
    // Project validate

    // add state

    // Clean Form
  };
  return (
    <>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>
      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            className="btn btn-primario btn-block"
            type="submit"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </>
  );
};

export default NewProject;
