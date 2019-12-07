import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/HomePage";
import AddPage from "./components/AddPage";
import PageNotFound from "./components/PageNotFound";

export default function App() {
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
        <Route path="/add" component={AddPage}></Route>
        <Route path="/pick"></Route>
        <Route path="/book"></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}
