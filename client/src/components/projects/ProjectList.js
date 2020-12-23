import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import AlertContext from "../../context/alerts/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectList = () => {
  // Get Project from initial state
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertsContext = useContext(AlertContext);
  const { alert, showAlert } = alertsContext;

  // Get Projects when componet load
  useEffect(() => {
    // If there is an error
    if (message) {
      showAlert(message.msg, message.category);
    }
    getProjects();
    //eslint-disable-next-line
  }, [message]);

  // check if there is any project
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
