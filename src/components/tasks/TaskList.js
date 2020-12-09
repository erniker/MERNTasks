import React from "react";
import Task from "./Task";

const TaskList = () => {
  const projectTasks = [
    { name: "Elegir Plataforma", state: true },
    { name: "Elegir Colores", state: false },
    { name: "Elegir Plataformas de pago", state: false },
    { name: "Elegir Hosting", state: true },
  ];

  return (
    <>
      <h2>Proyrcto: Tienda Virtual</h2>
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
