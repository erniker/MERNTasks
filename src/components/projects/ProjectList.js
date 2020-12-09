import React from "react";
import Project from "./Project";

const ProjectList = () => {
  const projects = [
    { name: "Tienda Virtual" },
    { name: "Intranet" },
    { name: "Tienda Virtual" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
