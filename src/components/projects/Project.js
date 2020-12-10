import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Proyect = ({ project }) => {
  // Get projects state
  const projectsContext = useContext(projectContext);
  const { getActualProject } = projectsContext;

  return (
    <li>
      <button
        className="btn btn-blank"
        type="button"
        onClick={() => getActualProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Proyect;
