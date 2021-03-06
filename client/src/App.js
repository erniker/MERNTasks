import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SingUp from "./components/auth/SingUp";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/projectState";
import TasktState from "./context/tasks/taskState";
import AlertState from "./context/alerts/alertState";
import AuthState from "./context/authentication/authState";
import authToken from "./config/authToken";

import PrivateRoute from "./components/routes/PrivateRoute";

// Check if we have token
const token = localStorage.getItem("token");
if (token) {
  authToken(token);
}

function App() {
  return (
    <ProjectState>
      <TasktState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sing-up" component={SingUp} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TasktState>
    </ProjectState>
  );
}

export default App;
