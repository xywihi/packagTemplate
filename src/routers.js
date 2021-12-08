import React from "react";
import { Route, Switch } from "react-router-dom";
import LoadableComponent from "./loadable";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableComponent(()=>import("./pages/home"))} />
      <Route exact path="/user" component={LoadableComponent(()=>import("./pages/user"))} />
      <Route exact path="/blog" component={LoadableComponent(()=>import("./pages/blog"))} />
    </Switch>
  );
};

export default Routers;
