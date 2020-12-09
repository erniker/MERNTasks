import React from "react";

const Proyect = ({ project }) => {
  return (
    <li>
      <button className="btn btn-blank" type="button">
        {project.name}
      </button>
    </li>
  );
};

export default Proyect;
