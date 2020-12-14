import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  // Get Project from initial state
  const projectsContext = useContext(projectContext);
  const { actualProject, deleteProject } = projectsContext;

  // Get task from an specific project fron Task Context
  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  // If there is not selected project
  if (!actualProject) return <h2>Selecciona un Proyecto</h2>;

  // Array destructuring to extract actual project
  const [posActualProject] = actualProject;

  // Delete Project
  const onClickDeleteProject = () => {
    deleteProject(posActualProject.id);
  };

  return (
    <>
      <h2>Proyecto: {posActualProject.name}</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        className="btn btn-eliminar"
        type="button"
        onClick={onClickDeleteProject}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default TaskList;
