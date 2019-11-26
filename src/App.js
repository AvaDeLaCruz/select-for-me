import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ul className="navbar">
          <li className="left-nav">
            <NavLink to="/add">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/pick">Pick For Me</NavLink>
          </li>
          <li className="right-nav">
            <NavLink to="/book">Recipe Book</NavLink>
          </li>
        </ul>
        <hr></hr>

        <Switch>
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/add"></Route>
          <Route path="/pick"></Route>
          <Route path="/book"></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
