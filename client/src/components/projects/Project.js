import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Proyect = ({ project }) => {
  // Get projects state
  const projectsContext = useContext(projectContext);
  const { getActualProject } = projectsContext;

  // Get function fron Task Context
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Select an specific project and its task
  const selectProject = (projectId) => {
    getActualProject(projectId);
    getTasks(projectId);
  };

  return (
    <li>
      <button
        className="btn btn-blank"
        type="button"
        onClick={() => selectProject(project._id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Proyect;
