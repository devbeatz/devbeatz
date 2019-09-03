import { Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage/Homepage";
import Browse from "./Browse/Browse";
import Dashboard from "./Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Browse" component={Browse} />
  </Switch>
);
