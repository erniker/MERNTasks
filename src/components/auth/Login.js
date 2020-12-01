import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Login State
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // User extract
  const { email, password } = user;

  const onChangeLogin = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Login Button
  const onSubmit = (e) => {
    e.preventDefault();
    // Empty field validation

    // end to action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Enail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangeLogin}
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
              onChange={onChangeLogin}
            ></input>
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link className="enlace-cuenta" to={"/sing-up"}>
          Crear cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
