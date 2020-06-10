import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Drawer.css";
import Selectors from "../Selector/selectors";
import Login from "../Login/Login.js";
import CreateAccount from "../CreateAccount/CreateAccount.js";

const drawer = (props) => {
  let drawerClasses = "drawer";
  if (props.show) {
    drawerClasses = "drawer open";
  }

  return (
    <Router>
      <nav className={drawerClasses}>
        <div>
          <ul>
            <li>
              <Link className="link" to="/selectors">
                SkittleSelector
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
        </div>
      </nav>

      <hr />
      <div>
        <switch>
          <Route exact path="/selectors">
            <Selectors />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/createAccount">
            <CreateAccount />
          </Route>
        </switch>
      </div>
    </Router>
  );
};

export default drawer;

// <ul>
// 				<li>
// 					<a href="/"> History</a>
// 				</li>
// 				<li>
// 					<a href="/"> Profile</a>
// 				</li>
// 				<li>
// 					<a href="/"> SkittleSelector</a>
//                     <link to ="/Selectors"> SkittleSelectors</link>
// 				</li>
// 			</ul>
