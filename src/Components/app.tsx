import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav";
import Search from "./search";
import Home from "./home";
import Recommend from "./recommend";
import Result from "./result";
import Covid from "./covid";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>Welcome to RxPanda</h1>
        <Nav />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/result" component={Result} />
        <Route path="/covid" component={Covid} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
