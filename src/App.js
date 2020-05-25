import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App2.css";

import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/createAccount">
              Create account
            </Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/createAccount">
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
