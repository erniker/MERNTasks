import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectList = () => {
  // Get Project from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get Projects when componet load
  useEffect(() => {
    getProjects();
    //eslint-disable-next-line
  }, []);

  // check if there is any project
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
