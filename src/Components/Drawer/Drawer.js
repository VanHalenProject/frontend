import React from "react";
import "./Drawer.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
					</ul>
				</div>
			</nav>
			<hr />
			<div>
				<switch>
					<Route exact path="/selectors">
						<Selectors />
					</Route>
				</switch>
			</div>
		</Router>
	); 
};

export default drawer;
