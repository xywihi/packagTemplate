import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadableComponent from "./loadable";

const Routers = () => {
  return (
    <Switch>
      
      <Route exact path="/" component={LoadableComponent(()=>import("./pages/home"))} />
      <Route exact path="/recharge" component={LoadableComponent(()=>import("./pages/recharge"))} />
      <Route exact path="/team" component={LoadableComponent(()=>import("./pages/team"))} />
      <Route exact path="/my" component={LoadableComponent(()=>import("./pages/my"))} />
      <Route exact path="/login" component={LoadableComponent(()=>import("./pages/login"))} />
      <Route exact path="/level" component={LoadableComponent(()=>import("./pages/level"))} />
      <Route exact path="/about" component={LoadableComponent(()=>import("./pages/about"))} />
      <Route exact path="/team/list" component={LoadableComponent(()=>import("./pages/team/successors"))} />
      <Route exact path="/my/set" component={LoadableComponent(()=>import("./pages/my/infoSets"))} />
      <Redirect path="*" to="/"></Redirect>

    </Switch>
  );
};

export default Routers;
