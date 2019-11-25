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
        <ul class="navbar">
          <li class="left-nav">
            <NavLink to="/add">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/pick">Pick For Me</NavLink>
          </li>
          <li class="right-nav">
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
