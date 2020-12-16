import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SingUp from "./components/auth/SingUp";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/projectState";
import TasktState from "./context/tasks/taskState";

function App() {
  return (
    <ProjectState>
      <TasktState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/sing-up" component={SingUp} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TasktState>
    </ProjectState>
  );
}

export default App;