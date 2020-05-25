import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import LoginFormComponent from "./components/LoginFormComponent";

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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
            <LoginFormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
