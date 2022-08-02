import React from "react";
import { Route, Switch } from "react-router-dom";
import LoadableComponent from "./loadable";

const Routers = () => {
  return (
    <Switch>
      
      <Route exact path="/home" component={LoadableComponent(()=>import("./pages/home"))} />
      <Route exact path="/recharge" component={LoadableComponent(()=>import("./pages/user"))} />
      <Route exact path="/team" component={LoadableComponent(()=>import("./pages/blog"))} />
      <Route exact path="/my" component={LoadableComponent(()=>import("./pages/blog"))} />
      <Route exact path="/login" component={LoadableComponent(()=>import("./pages/login"))} />
    </Switch>
  );
};

export default Routers;
