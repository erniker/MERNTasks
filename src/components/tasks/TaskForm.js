import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  // Get if a project is active
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // If there is not selected project
  if (!actualProject) return null;

  // Array destructuring to extract actual project
  const [posActualProject] = actualProject;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            className="input-text"
            type="text"
            placeholder="Nombre de la tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            type="submit"
            value="Agregar tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
