import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav";
import Search from "./search";
import Home from "./home";
import Recommend from "./recommend";

const App = () => {
  return (
    <div>
      <h1>Welcome to RxPanda</h1>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/recommend" component={Recommend} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
