import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  // Get if a project is active
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Get addTask function fron Task Context
  const tasksContext = useContext(taskContext);
  const { taskError, addTask, validateTask, getTasks } = tasksContext;

  // Form State
  const [task, saveTask] = useState({
    name: "",
  });

  // Destructuring to stract project name
  const { name } = task;

  // If there is not selected project
  if (!actualProject) return null;

  // Array destructuring to extract actual project
  const [posActualProject] = actualProject;

  // Read form values (input by user)
  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (name.trim() === "") {
      validateTask();
      return;
    }

    // Add new task to Task state
    task.projectId = posActualProject.id;
    task.state = false;
    addTask(task);

    // Get and filter current project Tasks
    getTasks(posActualProject.id);

    // Restart form
    saveTask({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            className="input-text"
            type="text"
            placeholder="Nombre de la tarea..."
            name="name"
            value={name}
            onChange={handleChange}
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
      {taskError ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
