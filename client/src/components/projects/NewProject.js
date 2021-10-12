import React, { useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Get form state
  const projectsContext = useContext(projectContext);
  const { form, errorForm, showForm, addProject, showError } = projectsContext;

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
    if (name === "") {
      showError();
      return;
    }
    // add state
    addProject(project);

    // Clean Form
    saveProject({
      name: "",
    });
    // Show Form
  };
  const onClickForm = () => {
    showForm();
  };

  return (
    <>
      <button
        className="btn btn-block btn-primario"
        type="button"
        onClick={onClickForm}
        data-cy="boton-nuevo-proyecto"
      >
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
            data-cy="input-nuevo-proyecto"
          />
          <input
            className="btn btn-primario btn-block"
            type="submit"
            value="Agregar Proyecto"
            data-cy="submit-nuevo-proyecto"
          />
        </form>
      ) : null}
      {errorForm ? (
        <p className="mensaje error" data-cy="alerta">
          El nombre del Proyecto es obligatorio
        </p>
      ) : null}
    </>
  );
};

export default NewProject;
