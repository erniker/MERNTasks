import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectList = () => {
  // Get Project from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get Projects when componet load
  useEffect(() => {
    getProjects();
  }, []);

  // check if there is any project
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
