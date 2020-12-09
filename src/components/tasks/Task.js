import React from "react";

const Task = ({ task }) => {
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button className="completo" type="button">
            {" "}
            Completa{" "}
          </button>
        ) : (
          <button className="incompleto" type="button">
            {" "}
            Incompleta{" "}
          </button>
        )}
      </div>
      <div className="acciones">
        <button className="btn btn-primario" type="button">
          Editar
        </button>
        <button className="btn btn-secundario" type="button">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
