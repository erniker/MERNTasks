import React from "react";

const Alert = ({ alert }) => {
  if (!alert) return null;
  return (
    <div className={`alerta ${alert.category}`} data-cy="alerta">
      {alert.msg}
    </div>
  );
};

export default Alert;
