import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

const Routes = () => (
  <Switch>
    <Route path="/" component={MainPage} exact />
    <Route path="/login" component={LoginPage} />
  </Switch>
);

export default Routes;
