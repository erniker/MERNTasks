import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  // Get projects state
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Get functions fron Task Context
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, updateTask, getActualTask } = tasksContext;

  // Extract project
  const [currentProject] = actualProject;

  // Function to eliminate task when user click on "Eliminar" button
  const onClickDeleteTask = (taskId) => {
    deleteTask(taskId, currentProject._id);
    getTasks(currentProject._id);
  };

  // Function to change state (complete/incomplete) of a task
  const changeStateOfTask = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    updateTask(task);
  };

  // Get a selected task when user want edit it
  const selectTask = (task) => {
    getActualTask(task);
  };

  return (
    <li className="tarea sombra" data-cy="tarea">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            className="completo"
            type="button"
            onClick={() => changeStateOfTask(task)}
            data-cy="tarea-completa"
          >
            {" "}
            Completa{" "}
          </button>
        ) : (
          <button
            className="incompleto"
            type="button"
            onClick={() => changeStateOfTask(task)}
            data-cy="tarea-incompleta"
          >
            {" "}
            Incompleta{" "}
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          className="btn btn-primario"
          type="button"
          onClick={() => selectTask(task)}
          data-cy="btn-editar"
        >
          Editar
        </button>
        <button
          className="btn btn-secundario"
          type="button"
          onClick={() => onClickDeleteTask(task._id)}
          data-cy="btn-eliminar"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
