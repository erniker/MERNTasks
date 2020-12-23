import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";
import AuthContext from "../../context/authentication/authContext";

const Project = () => {
  // Extract authentication information
  const authsContext = useContext(AuthContext);
  const { authenticatedUser } = authsContext;

  useEffect(() => {
    authenticatedUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Project;
