import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  // Get projects state
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Get functions fron Task Context
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeTaskState } = tasksContext;

  // Extract project
  const [currentProject] = actualProject;

  // Function to eliminate task when user click on "Eliminar" button
  const onClickDeleteTask = (taskId) => {
    deleteTask(taskId);
    getTasks(currentProject.id);
  };

  // Function to change state (complete/incomplete) of a task
  const changeStateOfTask = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    changeTaskState(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            className="completo"
            type="button"
            onClick={() => changeStateOfTask(task)}
          >
            {" "}
            Completa{" "}
          </button>
        ) : (
          <button
            className="incompleto"
            type="button"
            onClick={() => changeStateOfTask(task)}
          >
            {" "}
            Incompleta{" "}
          </button>
        )}
      </div>
      <div className="acciones">
        <button className="btn btn-primario" type="button">
          Editar
        </button>
        <button
          className="btn btn-secundario"
          type="button"
          onClick={() => onClickDeleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
