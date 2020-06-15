import React from "react";
import "./Drawer.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Selectors from "../Selector/selectors";

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
				<Switch>
					<Route exact path="/selectors">
						<Selectors />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default drawer;
