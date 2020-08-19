import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav";
import Search from "./search";
import Home from "./home";
import Recommend from "./recommend";
import Result from "./result";

const App = () => {
  return (
    <div>
      <h1>Welcome to RxPanda</h1>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/result" component={Result} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
