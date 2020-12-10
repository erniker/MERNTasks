import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const TaskList = () => {
  // Get Project from initial state
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // If ther is not selected project
  if (!actualProject) return <h2>Selecciona un Proyecto</h2>;

  // Array destructuring to extract actual project
  const [posActualProject] = actualProject;

  const projectTasks = [
    { name: "Elegir Plataforma", state: true },
    { name: "Elegir Colores", state: false },
    { name: "Elegir Plataformas de pago", state: false },
    { name: "Elegir Hosting", state: true },
  ];

  return (
    <>
      <h2>Proyecto: {posActualProject.name}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button className="btn btn-eliminar" type="button">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default TaskList;
