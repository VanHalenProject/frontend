
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home'
import Contact from './Components/Contact'*/

import React, {Component} from 'react';
import './App.css';
import Sidebar from './Components/Toolbar/Toolbar';
import Drawer from './Components/Drawer/Drawer';
import Backdrop from './Components/Backdrop/Backdrop';


class App extends Component {
  state = {
    drawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({drawerOpen:false});
  };

  render(){

    let backdrop;

    if (this.state.drawerOpen){
      backdrop =  <Backdrop click = {this.backdropClickHandler}/>
    }
    return (
        <div style={{height: '100%'}}>
          <Sidebar drawerClickHandler = {this.drawerToggleClickHandler} />
          <Drawer show = {this.state.drawerOpen}/>
          {backdrop}
          <main style={{marginTop: '64px'}}>
            <p>This is the page content</p></main>

        </div>
    );
  }
}

export default App;


/*
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
*/
