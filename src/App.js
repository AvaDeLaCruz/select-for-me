import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}></Route>
          <Route path="/add"></Route>
          <Route path="/pick"></Route>
          <Route path="/generate"></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
