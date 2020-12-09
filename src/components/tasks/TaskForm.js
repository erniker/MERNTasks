import React from "react";
const TaskForm = () => {
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
