import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  // SingUp State
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // SingUp extract
  const { name, email, password, confirm } = user;

  const onChangeSingUp = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //SingUp Button
  const onSubmit = (e) => {
    e.preventDefault();
    // Empty field validation

    // Minimum of 6 characters for password

    // Check password and confirmPassword are equal

    // Send to action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChangeSingUp}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="email">Enail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangeSingUp}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChangeSingUp}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repite tu Password"
              value={confirm}
              onChange={onChangeSingUp}
            ></input>
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link className="enlace-cuenta" to={"/"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SingUp;
